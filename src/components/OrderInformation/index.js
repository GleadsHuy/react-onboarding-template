import React, { useContext, useEffect, useState, useRef, Fragment } from 'react'
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useOnClickOutside } from '../common/functions'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiLoaderAlt } from 'react-icons/bi'
import { FaTimes, FaUserAlt } from 'react-icons/fa'
import Select from 'react-select'
import logoIcon from 'assets/logo-icon.svg'
import cardStripe from 'assets/card-stripe.png'
import bankTransfer from 'assets/bank-transfer.png'
import refundGuarantee from 'assets/refund-guarantee.svg'
import twitterImg from 'assets/twitter.svg'
import linkedinImg from 'assets/linkedin.svg'
import facebookImg from 'assets/facebook.svg'
import youtubeImg from 'assets/youtube.svg'

import style from './styles.module.css'
import Modal from '../common/Modal'
import Title from '../common/Title'
import BankingInfo from './BankingInfo'
import IncorpInfo from './IncorpInfo'

import Layout, { OnboardingContext } from '../common/Layout'

const stripePromise = loadStripe(`pk_test_1Ye75HNRIDTrZq8obBLVMelv00qSEk2ZGJ`)
const stripePromiseSG = loadStripe(
  `pk_test_51M4EpCEHyFIZX0tcE0baqX0hGdvmR6pdMQEc2E25gLfXkXwA6r9zHOtG7D4g5a6NKBfZhwOPYcqsT4rmzZJjsVYi00IoTbLitl`
)

function parseUScurrency(number) {
  if (number > 0) {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  } else {
    return 0.0
  }
}

const getQueryCode = (queryPromotionCode, queryDate, queryType) => {
  let queryCode = ''
  let promotionCode = queryPromotionCode
  let date = queryDate
  let type = queryType
  if (promotionCode) {
    if (date && type) {
      queryCode =
        'promotion_code=' + promotionCode + '&date=' + date + '&type=' + type
    } else {
      queryCode = 'promotion_code=' + promotionCode
    }
  }
  return queryCode
}

const customStyles = {
  menu: (provided) => ({
    ...provided,
    boxShadow: 'none',
    marginBottom: 0,
    border: 0
  }),
  control: (provided) => ({
    ...provided,
    border: 0,
    boxShadow: 'none'
  }),
  container: (provided) => ({
    ...provided,
    boxShadow: '0 7px 14px 0 rgba(49,49,93,0.10), 0 3px 6px 0 rgba(0,0,0,0.08)',
    borderRadius: '4px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '12px 16px',
    fontSize: '14px'
  })
}

// payment card form
const CheckoutForm = ({
  dataForm,
  orderCode,
  queryPromotionCode,
  queryDate,
  queryType,
  countryList
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState()

  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card == null) {
      return
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      setIsLoading(false)
      setError(error)
    } else {
      let dataStripe = {
        name: data.cardholder_name,
        address_country: selectedCountry,
        address_line1: data.address_line1,
        address_state: data.address_state,
        address_zip: data.address_zip,
        address_city: data.address_city
      }
      if (data.address_line2) {
        dataStripe['address_line2'] = data.address_line2
      }
      const token = await stripe.createToken(card, dataStripe)
      let body = {
        email: dataForm?.Customer?.email,
        id: token?.token?.id,
        order_code: orderCode,
        cardholder_name: data.cardholder_name
      }
      if (token) {
        let queryPromCode = ''
        let queryPromCodeFp = ''
        const typeChristmas = localStorage.getItem('type-christmas')
        if (queryPromotionCode != '' && queryType != '' && queryDate != '') {
          queryPromCode =
            '?' + getQueryCode(queryPromotionCode, queryDate, queryType)
          queryPromCodeFp =
            '&' + getQueryCode(queryPromotionCode, queryDate, queryType)
        }
        if (typeChristmas) {
          if (queryPromCode.length > 0) {
            queryPromCode += typeChristmas.replace('?', '&')
          } else {
            queryPromCode = typeChristmas
          }
        }
        axios
          .post(
            `https://core.test-lp.bbcincorp.com/api/onboarding/order/payment/stripe${queryPromCode}`,
            JSON.stringify(body),
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then((response) => {
            if (response.data.state) {
              if (
                window.localStorage.getItem('layout') &&
                JSON.parse(window.localStorage.getItem('layout'))
                  ?.incorp_to_bank
              ) {
                let data = JSON.parse(window.localStorage.getItem('layout'))
                delete data.incorp_to_bank
                window.localStorage.layout = JSON.stringify(data)
              }
              window.localStorage.removeItem('data_onboarding')
              window.localStorage.removeItem('type-christmas')
              location.href = `/payment-success?type_payment=card&order_code=${orderCode}`
            } else {
              // location.href(
              //   `/onboarding/payment-failure?order_code=${router.query.order_code}`
              // );
            }
          })
          .catch((error) => {
            location.href = `/payment-failure?order_code=${
              orderCode + queryPromCodeFp
            }`
          })
      }
    }
  }
  const handleChangeSelect = (data) => {
    setSelectedCountry(data.name)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ marginLeft: '20px', marginRight: '20px' }}
    >
      <div className={style.StripeForm}>
        <div className={style.CardHolderName}>
          <p>Name on card</p>
          <div>
            <FaUserAlt color='#cfd1d6' />
            <input
              type={'text'}
              {...register('cardholder_name', {
                required: {
                  value: true,
                  message: 'Card holder name is required'
                }
              })}
              placeholder='Card holder name'
              autoComplete='off'
            />
          </div>
          {errors && errors.cardholder_name && (
            <p className={style.ErrorMessage}>
              {errors.cardholder_name.message}
            </p>
          )}
        </div>
        <div className={style.CardDetails}>
          <p>Card details</p>
          <div>
            <CardElement
              onChange={(e) => {
                setError(e.error)
              }}
              options={{ hidePostalCode: true }}
            />
          </div>
          {error && <p className={style.ErrorMessage}>{error.message}</p>}
        </div>
        <div className={style.BillingInformation}>
          <p style={{ flex: '0 0 100%', maxWidth: '100%' }}>
            Billing information
          </p>
          <div style={{ flex: '0 0 100%', maxWidth: '100%' }}>
            <Select
              options={countryList}
              styles={customStyles}
              onChange={handleChangeSelect}
            />
            {!selectedCountry && isSubmitted && (
              <p className={style.ErrorMessage}>Country is required</p>
            )}
          </div>
          <div style={{ flex: '0 0 100%', maxWidth: '100%' }}>
            <input
              type={'text'}
              {...register('address_line1', {
                required: {
                  value: true,
                  message: 'Address line 1 is required'
                }
              })}
              placeholder='Address line 1'
              autoComplete='off'
            />
            {errors && errors.address_line1 && (
              <p className={style.ErrorMessage}>
                {errors.address_line1.message}
              </p>
            )}
          </div>
          <div style={{ flex: '0 0 100%', maxWidth: '100%' }}>
            <input
              type={'text'}
              {...register('address_line2')}
              placeholder='Address line 2 (optional)'
              autoComplete='off'
            />
          </div>
          <div
            style={{ flex: '0 0 50%', maxWidth: '50%', paddingRight: '15px' }}
          >
            <input
              type={'text'}
              {...register('address_city', {
                required: {
                  value: true,
                  message: 'City is required'
                }
              })}
              placeholder='City'
              autoComplete='off'
            />
            {errors && errors.address_city && (
              <p className={style.ErrorMessage}>
                {errors.address_city.message}
              </p>
            )}
          </div>
          <div
            style={{ flex: '0 0 50%', maxWidth: '50%', paddingLeft: '15px' }}
          >
            <input
              type={'text'}
              {...register('address_state', {
                required: {
                  value: true,
                  message: 'State is required'
                }
              })}
              placeholder='State'
              autoComplete='off'
            />
            {errors && errors.address_state && (
              <p className={style.ErrorMessage}>
                {errors.address_state.message}
              </p>
            )}
          </div>
          <div
            style={{ flex: '0 0 50%', maxWidth: '50%', paddingRight: '15px' }}
          >
            <input
              type={'text'}
              {...register('address_zip', {
                required: {
                  value: true,
                  message: 'Zip is required'
                }
              })}
              placeholder='Zip'
              autoComplete='off'
            />
            {errors && errors.address_zip && (
              <p className={style.ErrorMessage}>{errors.address_zip.message}</p>
            )}
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        {isLoading ? (
          <span style={{ display: 'inline-block' }}>
            <BiLoaderAlt className='animate_spin' size={20} />
          </span>
        ) : (
          <button type='submit' disabled={!stripe} className={style.PayButton}>
            PAY ${dataForm?.amount}
          </button>
        )}
      </div>
    </Form>
  )
}

const PaymentModal = ({
  websiteId,
  data,
  show,
  onReceiveData,
  orderCode,
  countryList,
  wrapperRef
}) => {
  return (
    <Modal show={show}>
      <div ref={wrapperRef} className={style.modalWrapper}>
        <div className={style.modal}>
          <FaTimes
            onClick={onReceiveData}
            className={style.CloseButton}
            color='#333333'
          />
          <div className={style.topModalContent}>
            <div className={style.logo}>
              <img
                src={logoIcon}
                loading='eager'
                width={64}
                height={64}
                alt='incorporation'
              />
            </div>
            <h3>BBCIncorp Limited</h3>
            <a href='mailto:service@bbcincorp.com' style={{ color: '#333' }}>
              service@bbcincorp.com
            </a>
          </div>
          {/* <Modal.Body style={{ padding: '0' }}>
       
      </Modal.Body> */}
          <Elements stripe={websiteId === 2 ? stripePromiseSG : stripePromise}>
            <CheckoutForm
              dataForm={data}
              orderCode={orderCode}
              countryList={countryList}
            />
          </Elements>
        </div>
      </div>
    </Modal>
  )
}

export default function OrderInformation(params) {
  // const { dataOrder } = useContext(OnboardingContext)
  const [dataOrder, setDataOrder] = useState({})
  const [payment, setPayment] = useState('card')
  const [allow, setAllow] = useState(false)
  const [orderInfo, setOrderInfo] = useState()
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [suffixList, setSuffixList] = useState([])
  const [countryList, setCountryList] = useState([])
  const [websiteId, setWebsiteId] = useState()
  const [backLink, setBackLink] = useState('')
  const [orderSummary, setOrderSummary] = useState({
    customDiscount: [],
    customServices: [],
    promoDiscount: [],
    companyPackage: [],
    additonalServices: [],
    arrOtherServiceCategory: []
  })
  const [loading, setLoading] = useState(true)
  const wrapperRef = useRef(null)
  useOnClickOutside(wrapperRef, () => {
    setShow(false)
    setAllow(true)
    setIsLoading(false)
  })

  const getUrlVars = () => {
    let vars = {}
    let parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value
      }
    )
    return vars
  }

  //Query data
  const queryPromotionCode = getUrlVars()['promotion_code']
  const queryDate = getUrlVars()['date']
  const queryType = getUrlVars()['type']
  const queryOrderCode = getUrlVars()['order_code']

  const getQueryCodeChristmas = () => {
    const queryChristmas = localStorage.getItem('type-christmas')
    if (queryChristmas) {
      return queryChristmas
    } else {
      return ''
    }
  }

  useEffect(() => {
    if (window.location && queryOrderCode) {
      let orderCode = queryOrderCode
      let urlApi = ''
      let queryCode = getQueryCode()
      let queryCodeChristmas = getQueryCodeChristmas()
      if (queryCode.length > 0) {
        urlApi = `https://core.test-lp.bbcincorp.com/api/onboarding/order/${orderCode}?${queryCode}`
      } else if (queryCodeChristmas.length > 0) {
        urlApi = `https://core.test-lp.bbcincorp.com/api/onboarding/order/${
          orderCode + queryCodeChristmas
        }`
      } else {
        urlApi = `https://core.test-lp.bbcincorp.com/api/onboarding/order/${orderCode}`
      }
      axios.get(urlApi).then((res) => {
        let data = res.data.data
        setDataOrder(data)
      })
    }
  }, [])

  useEffect(() => {
    setWebsiteId(
      dataOrder && dataOrder.OrderItems && dataOrder.OrderItems[0].Service
        ? dataOrder.OrderItems[0].Service?.website_id
        : 1
    )
    let data = JSON.parse(window.localStorage.getItem('data_onboarding'))
    let layout = JSON.parse(window.localStorage.getItem('layout'))
    if (window.location) {
      if (queryOrderCode) {
        if (Object.keys(dataOrder).length > 0) {
          let orderCode = queryOrderCode
          setOrderInfo(dataOrder)
          filterOrderSumary(dataOrder)
          let lastest_order_code = JSON.parse(
            window.localStorage.getItem('lastest_order_code')
          )
          if (lastest_order_code) {
            lastest_order_code.order_code = orderCode
            lastest_order_code.ordered_already = dataOrder?.ordered_already
            window.localStorage.setItem(
              'lastest_order_code',
              JSON.stringify(lastest_order_code)
            )
          } else {
            window.localStorage.setItem(
              'lastest_order_code',
              JSON.stringify({
                order_code: orderCode,
                ordered_already: dataOrder?.ordered_already
              })
            )
          }
          setLoading(false)
        }
      } else {
        location.href = '/register'
      }
    }
    if (layout && data) {
      if (layout?.type == 'banking') {
        if (data?.banking?.banking_scores) {
          setBackLink('/banking-result')
        } else {
          setBackLink('/banking-choice')
        }
      } else {
        setBackLink('/incorporation-additional-service')
      }
    }
  }, [dataOrder])
  useEffect(() => {
    axios
      .get(
        `https://core.test-lp.bbcincorp.com/api/onboarding/country/entity_suffix`
      )
      .then((response) => setSuffixList(response?.data?.data))
    axios
      .get(`https://core.test-lp.bbcincorp.com/api/onboarding/country`)
      .then((response) =>
        setCountryList(
          response.data.data.map((item) => ({
            ...item,
            label: item.name,
            value: item.id
          }))
        )
      )
  }, [])
  useEffect(() => {
    if (!window.localStorage.getItem('timestamp')) {
      window.localStorage.setItem(
        'timestamp',
        JSON.stringify(new Date().toLocaleString())
      )
    }
  }, [])

  const filterOrderSumary = (orderInfoRes) => {
    let promotionArray = [],
      additionalArray = [],
      customArray = []
    let orderSummaryTemp = {
      customDiscount: [],
      customServices: [],
      promoDiscount: [],
      companyPackage: [],
      additonalServices: [],
      arrOtherServiceCategory: []
    }
    if (orderInfoRes) {
      orderInfoRes?.OrderItems.map((item) => {
        if (item?.package_id) {
          item?.service_id
            ? orderSummaryTemp.companyPackage.push(item)
            : promotionArray.push(item)
        } else {
          item?.service_id ? additionalArray.push(item) : customArray.push(item)
        }
      })
      orderSummaryTemp.additonalServices = additionalArray
      customArray.map((item) => {
        if (item.promotion_id) {
          orderSummaryTemp.promoDiscount.push(item)
        } else {
          if (parseFloat(item.amount) >= 0) {
            orderSummaryTemp.customServices.push(item)
          } else {
            orderSummaryTemp.customDiscount.push(item)
          }
        }
      })
      let arr = additionalArray.reduce((accumulator, service) => {
        let object = accumulator.find(
          (category) =>
            category && category.id === service.Service.ServiceType.id
        )
        if (object) {
          return [...accumulator]
        } else {
          return [...accumulator, { ...service.Service.ServiceType }]
        }
      }, [])
      orderSummaryTemp.arrOtherServiceCategory = arr
      setOrderSummary(orderSummaryTemp)
    }
  }

  const handleChange = (value) => {
    setPayment(value)
  }

  const handleChangePolicy = (value) => {
    setAllow(value)
  }

  const getSuffixList = () => {
    return suffixList
      .find((item) => item.id === orderInfo?.Company?.Country?.id)
      ?.EntityTypes?.find(
        (item) => item.id === orderInfo?.Company?.EntityType?.id
      )?.CompanySuffixes
  }
  const getSubtotal = (amount, promoDiscount) => {
    if (promoDiscount.length > 0) {
      const tatalPromoDiscount = promoDiscount.reduce(
        (prev, cur) => prev + Math.abs(cur.amount),
        0
      )
      return parseFloat(amount) + tatalPromoDiscount
    }
    return amount
  }
  const handleClick = () => {
    setIsLoading(true)
    setAllow(false)
    if (payment === 'card') {
      setShow(true)
    } else {
      let promotionCode = queryPromotionCode
      let date = queryDate
      let type = queryType
      let body = {
        customer_id: orderInfo.Customer.id,
        order_code: queryOrderCode,
        website_id: websiteId,
        promotion_code: promotionCode || undefined,
        date: date || undefined,
        type: type || undefined
      }
      axios
        .post(
          `https://core.test-lp.bbcincorp.com/api/onboarding/order/send-email-pending`,
          JSON.stringify(body),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          if (response.data.state) {
            if (
              window.localStorage.getItem('layout') &&
              JSON.parse(window.localStorage.getItem('layout'))?.incorp_to_bank
            ) {
              let data = JSON.parse(window.localStorage.getItem('layout'))
              delete data.incorp_to_bank
              window.localStorage.layout = JSON.stringify(data)
            }
            window.localStorage.removeItem('data_onboarding')
            location.href = `/payment-pending${window.location.search}`
          } else {
          }
        })
        .catch((error) => {
          // location.href(`/onboarding/payment-failure?order_code=${router.query.order_code}`);
          // test
          console.error(error)
        })
    }
  }
  const receiveData = () => {
    setShow(false)
    setAllow(true)
    setIsLoading(false)
  }
  return (
    <Layout>
      {loading ? (
        <div className={style.loaderWrapper}>
          <BiLoaderAlt className={style.loading} size={20} />
        </div>
      ) : (
        <>
          <section className={style.OrderInformation}>
            <div className={style.Header}>
              {orderInfo?.payment_gateway_id == null &&
              orderInfo?.order_status_id == 0 ? (
                <a className={style.backBtnTop} href={backLink || '/404'}>
                  Back
                </a>
              ) : null}
            </div>
            <div>
              <div className={style.main}>
                <div className={style.informationWrapper}>
                  <Title
                    as='h2'
                    text='Order summary'
                    className={style.TitleH2}
                  />
                  <div className={`${style.Body}`}>
                    <div className={style.wrapperOrder}>
                      <div className={style.OrderSummary}>
                        <div style={{ marginBottom: '8px' }}>
                          <h4 style={{ marginBottom: '8px' }}>
                            CONTACT PERSON
                          </h4>
                          <div className={`${style.InfoContent}`}>
                            <div
                              className={`${style.infoContentRow} ${style.informationWrapperMb}`}
                            >
                              <p>Name:</p>
                              <p
                                className={`${style.Font500} ${style.textRight}`}
                              >
                                {orderInfo && orderInfo?.Customer?.first_name}
                              </p>
                            </div>
                            <div
                              className={`${style.infoContentRow} ${style.informationWrapperMb}`}
                            >
                              <p>Email:</p>
                              <p
                                className={`${style.Font500} ${style.textRight}`}
                              >
                                {orderInfo && orderInfo?.Customer?.email}
                              </p>
                            </div>
                            <div className={style.infoContentRow}>
                              <p>Phone number:</p>
                              <p
                                className={`${style.Font500} ${style.textRight}`}
                              >
                                {orderInfo && orderInfo?.Customer?.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                        {orderInfo &&
                          (orderInfo?.OrderItems[0].service_id == 1670 &&
                          orderInfo?.PackageItems.length == 0 ? (
                            <BankingInfo orderInfo={orderInfo} />
                          ) : (
                            <IncorpInfo
                              orderInfo={orderInfo}
                              suffixList={getSuffixList()}
                              orderSummary={orderSummary}
                            />
                          ))}
                        {orderSummary.promoDiscount.length > 0 && (
                          <div
                            className={`${style.promoBlock} ${style.lineDivide}`}
                          >
                            <div className={style.divideRow}>
                              <h4 style={{ marginBottom: '0' }}>SUBTOTAL</h4>
                              <p className={style.Font500}>
                                $
                                {getSubtotal(
                                  orderInfo?.amount,
                                  orderSummary.promoDiscount
                                )}
                              </p>
                            </div>
                            {orderSummary.promoDiscount.map((item, index) => (
                              <div key={index} className={style.divideRow}>
                                <div className='wrapper-title'>
                                  <h4 className='title-discount'>
                                    PROMO DISCOUNT
                                  </h4>
                                  <span className='tag-discount'>
                                    5% OFF TODAY
                                  </span>
                                </div>
                                <p className='amount-discount'>
                                  {item?.amount < 0
                                    ? `-$${Math.abs(item?.amount)}`
                                    : `$${item?.amount}`}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className={style.totalOrder}>
                        <p style={{ fontSize: '32px', fontWeight: '500' }}>
                          TOTAL
                        </p>
                        <div className={style.amountWrapper}>
                          <p className='amount'>
                            $
                            <span>
                              {orderInfo && parseUScurrency(orderInfo?.amount)}
                            </span>
                          </p>
                          <p className='additional_charge'>
                            No additional charge
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style.paymentBox} box-payment-method`}>
                  <div className={style.paymentBoxContainer}>
                    {orderSummary.promoDiscount.length > 0 && (
                      <div className={style.promoDiscountWrapper}>
                        <div className={style.promoDiscountContent}>
                          <p className={style.SubTitle}>SUBTOTAL</p>
                          <p className={style.Font500}>
                            $
                            {getSubtotal(
                              orderInfo?.amount,
                              orderSummary.promoDiscount
                            )}
                          </p>
                        </div>
                        {orderSummary.promoDiscount.map((item, index) => (
                          <div
                            key={index}
                            className={`discount ${style.promoDiscountContent}`}
                          >
                            <div className='wrapper-title'>
                              <h4 className='title-discount'>PROMO DISCOUNT</h4>
                              <span className='tag-discount'>5% OFF TODAY</span>
                            </div>
                            <p className={`amount-discount`}>
                              {item?.amount < 0
                                ? `-$${Math.abs(item?.amount)}`
                                : `$${item?.amount}`}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className={style.totalWrapper}>
                      <p className={style.SubTitle}>TOTAL</p>
                      <p
                        className={style.SubTitle}
                        style={{ color: '#007EFF', marginLeft: '8px' }}
                      >
                        $
                        <span>
                          {orderInfo && parseUScurrency(orderInfo?.amount)}
                        </span>
                      </p>
                    </div>
                  </div>
                  {orderInfo?.order_status_id == 0 && (
                    <div className={style.Payment}>
                      <p className={`title-method`}>Payment Method</p>
                      <div
                        className={`${
                          payment == 'card' ? `${style.PaymentActive}` : null
                        } ${style.checkboxWrapper}`}
                        style={{ lineHeight: '0' }}
                      >
                        <Form.Check
                          type='radio'
                          id='card'
                          value='card'
                          name='payment'
                          defaultChecked={true}
                          className={style.formCheck}
                          onChange={(e) => handleChange(e.target.value)}
                        />
                        <Form.Label htmlFor='card'>
                          <img
                            src={cardStripe}
                            loading='eager'
                            alt='incorporation'
                            className={style.formCheckImg}
                          />
                          <p
                            className={style.formCheckLabel}
                            style={{ color: '#2C2C51' }}
                          >
                            Card payment
                          </p>
                        </Form.Label>
                      </div>
                      {orderInfo?.payment_gateway_id == null && (
                        <div
                          className={`${
                            payment == 'bank' ? `${style.PaymentActive}` : null
                          } ${style.checkboxWrapper}`}
                          style={{ lineHeight: '0' }}
                        >
                          <Form.Check
                            type='radio'
                            id='bank'
                            value='bank'
                            name='payment'
                            className={style.formCheck}
                            onChange={(e) => handleChange(e.target.value)}
                          />
                          <Form.Label htmlFor='bank'>
                            <img
                              src={bankTransfer}
                              loading='eager'
                              alt='incorporation'
                              className={style.formCheckImg}
                            />
                            <p
                              className={style.formCheckLabel}
                              style={{ color: '#2C2C51' }}
                            >
                              Bank transfer
                            </p>
                          </Form.Label>
                        </div>
                      )}
                      <div className={`${style.refundGuarantee}`}>
                        <img
                          src={refundGuarantee}
                          loading='eager'
                          alt='refund-guarantee'
                        />
                        <div>
                          <p className='title'>Refund Guarantee</p>
                          <p className='des'>
                            We refund your money in full for services that we
                            cannot deliver.
                          </p>
                        </div>
                      </div>
                      {orderInfo?.order_status_id == 0 && (
                        <div className={style.paymentBottomWrapper}>
                          <div className={style.policyWrapper}>
                            <input
                              type='checkbox'
                              id='checkboxPolicy'
                              name='checkboxPolicy'
                              onChange={(e) =>
                                handleChangePolicy(e.target.checked)
                              }
                            />
                            <label htmlFor='checkboxPolicy'>
                              <p className={style.policyText}>
                                I confirm that I have read, understood and
                                agreed to all terms and conditions in{' '}
                                <a
                                  href='/hk/terms-of-services'
                                  target='_blank'
                                  style={{ textDecoration: 'underline' }}
                                >
                                  Terms
                                </a>
                                {` & `}
                                <a
                                  href='/hk/legal-of-agreement'
                                  target='_blank'
                                  style={{ textDecoration: 'underline' }}
                                >
                                  Policy
                                </a>{' '}
                                and{' '}
                                <a
                                  href='/hk/refund-policy'
                                  target='_blank'
                                  style={{ textDecoration: 'underline' }}
                                >
                                  Refund Policy
                                </a>{' '}
                                at BBCIncorp.com
                              </p>
                            </label>
                          </div>
                          <div className={style.submitWrapper}>
                            <a className={style.backLinkBottom} href={backLink}>
                              Back
                            </a>
                            <button
                              disabled={!allow}
                              onClick={handleClick}
                              className={style.ButtonMakePayment}
                              style={{ cursor: !allow ? 'not-allowed' : '' }}
                            >
                              Continue to secure payment
                              {isLoading && (
                                <span className={style.loaderWrapperBottom}>
                                  <BiLoaderAlt
                                    className={style.loading}
                                    size={20}
                                  />
                                </span>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                      <div className={style.submitWrapperDesk}>
                        <button
                          disabled={!allow}
                          onClick={handleClick}
                          className={style.ButtonMakePayment}
                          style={{ cursor: !allow ? 'not-allowed' : '' }}
                        >
                          Continue to secure payment
                          {isLoading && (
                            <span
                              style={{
                                display: 'inline-block',
                                marginLeft: '8px'
                              }}
                            >
                              <BiLoaderAlt
                                className={style.loading}
                                size={14}
                              />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                  {orderInfo?.order_status_id == 1 && (
                    <div className={`${style.contact}`}>
                      <h4>Keep in touch with us</h4>
                      <p
                        className='name-company'
                        style={{ marginBottom: '8px' }}
                      >
                        BBCIncorp Limited
                      </p>
                      <div style={{ marginBottom: '16px' }}>
                        <p className='info-company'>
                          <span>Tel: </span>
                          <span>(+65) 3138 1666</span>
                        </p>
                        <p className='info-company'>
                          <span>Email: </span>
                          <span>service@bbcincorp.com</span>
                        </p>
                        <p className='info-company'>
                          <span>Address: </span>
                          <span>
                            68 Circular road, #02-01 Singapore (049422),
                            Singapore
                          </span>
                        </p>
                      </div>
                      <div className={`${style.social}`}>
                        <ul>
                          <li>
                            <a
                              href='https://twitter.com/bbcincorp'
                              target='_blank'
                              rel='nofollow noreferrer'
                            >
                              <img src={twitterImg} alt='twitter' />
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.facebook.com/bbcincorp'
                              target='_blank'
                              rel='nofollow noreferrer'
                            >
                              <img src={facebookImg} alt='facebook' />
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.linkedin.com/company/bbcincorp'
                              target='_blank'
                              rel='nofollow noreferrer'
                            >
                              <img src={linkedinImg} alt='linkedin' />
                            </a>
                          </li>
                          <li>
                            <a
                              href='https://www.youtube.com/channel/UCm9z045jcWyhncuHoyYNbMw'
                              target='_blank'
                              rel='nofollow noreferrer'
                            >
                              <img src={youtubeImg} alt='youtube' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <PaymentModal
            onReceiveData={receiveData}
            websiteId={websiteId}
            data={orderInfo}
            countryList={countryList}
            orderCode={queryOrderCode}
            show={show}
            wrapperRef={wrapperRef}
          />
        </>
      )}
    </Layout>
  )
}
