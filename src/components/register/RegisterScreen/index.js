import React, { useRef, useState, useEffect } from 'react'
import styles from '../styles.module.css'
import { Form, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Selects from '../../common/Selects/SelectSearchInside'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReCAPTCHA from 'react-google-recaptcha'
import { getGAUserID } from '../../common/functions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import _, { set } from 'lodash'
import trust_pilot from 'assets/trust-pilot.svg'

const FormSwal = withReactContent(Swal)

const Trustpilot = ({ data }) => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true
  }
  return (
    <Slider
      {...settings}
      className={styles.Slider}
      style={{ padding: `16px 20px 30px 20px` }}
    >
      {data.map((item, index) => (
        <div
          className={`${styles.sliderItem}`}
          style={{ height: `100%` }}
          key={index}
        >
          <img
            src={trust_pilot}
            className='w-auto h-auto object-center object-cover'
            style={{ width: `auto`, height: `auto` }}
            alt='trustpilot'
          />
          <p
            style={{
              marginBottom: `0`,
              marginTop: '0.625rem',
              color: '#717171'
            }}
          >
            {item.content}
          </p>
          <p
            style={{
              textAlign: `right`,
              marginBottom: `0`,
              marginTop: '0.625rem',
              color: '#717171'
            }}
          >
            Feedback from{' '}
            <span style={{ fontWeight: `bold` }}>{item.name}</span>
          </p>
        </div>
      ))}
    </Slider>
  )
}

const RegisterScreen = ({ trustpilot, isTypeChristmas }) => {
  const [customerCountry, setCustomerCountry] = useState()
  const [countryList, setCountryList] = useState()
  const [phoneCountry, setPhoneCountry] = useState()
  const [phoneCodeList, setPhoneCodeList] = useState()
  const [queryCountryId, setQueryCountryId] = useState()
  const [queryCompanyName, setQueryCompanyName] = useState()
  const [queryEntityTypeId, setQueryEntityTypeId] = useState()
  const [queryPackageId, setQueryPackageId] = useState()
  const recaptchaRef = useRef()

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
  useEffect(() => {
    setQueryCountryId(getUrlVars()['country_id'])
    setQueryCompanyName(getUrlVars()['company_name'])
    setQueryEntityTypeId(getUrlVars()['entity_type_id'])
    setQueryPackageId(getUrlVars()['package_id'])
  }, [])
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm()

  const handleChangeCountry = (value) => {
    setCustomerCountry(value.value)
  }
  const handleChangePhoneCountry = (value) => {
    setPhoneCountry(value.value)
  }

  const onSubmit = async (data) => {
    data.country_id = customerCountry
    data.phone_country_id = phoneCountry
    if (data.register_checkbox) {
      data.contact_from_id = 15
    } else {
      data.contact_from_id = 32
    }
    delete data.register_checkbox
    const token = await recaptchaRef.current.executeAsync()
    if (token) {
      let GAUserID = getGAUserID()
      data.client_id = GAUserID ? GAUserID : ''
      data.website_id = 1
      axios
        .post(
          `https://core.test-lp.bbcincorp.com/api/onboarding/customer`,
          data,
          {
            headers: {
              'captcha-response': token
            }
          }
        )
        .then((response) => {
          reset()
          clearErrors()
          if (response.data.state) {
            let myData = {
              first_name: data.first_name,
              email: data.email,
              country_id: data.country_id,
              phone_number: data.phone_number,
              phone_country_id: data.phone_country_id,
              signature: response?.data?.data
            }
            let lastest_order_code = {}
            if (queryCountryId) {
              myData = {
                ...myData,
                company_country_id: queryCountryId
              }
            }
            if (queryCompanyName) {
              myData = {
                ...myData,
                company_name: queryCompanyName
              }
            }
            if (queryEntityTypeId && queryPackageId) {
              myData = {
                ...myData,
                entity_type_id: queryEntityTypeId,
                package_id: queryPackageId
              }
            }
            if (response.data.data.promotion_code) {
              lastest_order_code.promotion_code =
                response.data.data.promotion_code
              window.localStorage.setItem(
                'promotion_code',
                JSON.stringify(response.data.data.promotion_code)
              )
            }
            if ('ordered_already' in response.data.data) {
              lastest_order_code.ordered_already =
                response.data.data.ordered_already
            }
            if (lastest_order_code) {
              window.localStorage.setItem(
                'lastest_order_code',
                JSON.stringify(lastest_order_code)
              )
            }
            window.localStorage.setItem(
              'form_first_name',
              JSON.stringify(myData.first_name)
            )
            window.localStorage.setItem('customer', JSON.stringify(myData))
            window.localStorage.setItem(
              'data_onboarding',
              JSON.stringify({ incorporation: null, banking: null })
            )
            if (queryCountryId) {
              // redirect to Incorporation-country
              window.localStorage.setItem(
                'layout',
                JSON.stringify({ type: 'incorporation' })
              )
              window.location.href = '/incorporation-country'
            } else {
              // redirect to Select service
              window.location.href = '/select-service'
            }
          } else {
            FormSwal.fire({
              icon: 'error',
              title: 'Send error'
            })
          }
        })
        .catch((error) => {
          clearErrors()
          FormSwal.fire({
            icon: 'error',
            title: 'Send error',
            text: error
          })
        })
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://core.test-lp.bbcincorp.com/api/onboarding/country/cooperative`
      )
      .then((result) => {
        let phoneList = result?.data?.data.map((item) => ({
          ...item,
          label: item.country_code + ' +' + item.phone_code,
          value: item.id
        }))
        setPhoneCodeList(phoneList)
        let countryList = result?.data?.data.map((item) => ({
          ...item,
          label: item.name,
          value: item.id
        }))
        setCountryList(countryList)
      })
  }, [])

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('customer'))
    if (data && data?.country_id && data?.phone_country_id) {
      setValue('first_name', data.first_name)
      setValue('email', data.email)
      setValue('phone_number', data.phone_number)
      setCustomerCountry(data.country_id)
      setPhoneCountry(data.phone_country_id)
    } else {
      axios
        .get(`https://core.test-lp.bbcincorp.com/api/helper/geoLooking`)
        .then((result) => {
          setPhoneCountry(result?.data?.data?.id)
          setCustomerCountry(result?.data?.data?.id)
        })
    }
  }, [])

  useEffect(() => {
    if (window.location && !_.isEmpty(window.location.search)) {
      window.localStorage.removeItem('data_onboarding')
    }
  }, [])

  useEffect(() => {
    let promotion_code = JSON.parse(
      window.localStorage.getItem('promotion_code')
    )
    if (promotion_code) {
      window.localStorage.removeItem('promotion_code')
    }
  }, [])

  return (
    <div>
      <section className={styles.RegisterScreen}>
        <div
          className={styles.space_top}
          style={{ height: '50px', marginBottom: `40px` }}
        ></div>
        <h2 className={styles.title}>
          Ready to start your company in just a few steps
        </h2>
        <div className={styles.Body}>
          <div className={styles.RegisterText}>
            Please share a bit about yourself to stay connected. All information
            will be kept confidential and subject to our Privacy Policy.
          </div>
          {isTypeChristmas && (
            <div className={styles.discountChristmas}>
              <div className='box-discount'>
                <div className='number-discount'>
                  <p className='number'>
                    5<span>%</span>
                  </p>
                </div>
                <div className='box-content'>
                  <p className='title-discount'>Discount is here</p>
                  <p className='des-discount'>Start your company with us!</p>
                </div>
              </div>
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.RegisterForm}
          >
            <div className={styles.formControl}>
              <div className={styles.inputWrapper}>
                <input
                  type='text'
                  className={styles.RegisterInput}
                  placeholder='Your name'
                  {...register('first_name', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    },
                    maxLength: { value: 40, message: 'test' }
                  })}
                />
                {errors?.first_name && (
                  <span className={styles.ErrorMessage}>
                    {errors?.first_name?.message}
                  </span>
                )}
              </div>
              <div className={styles.SelectWrapper}>
                <div className={styles.CountrySelectWrapper}>
                  <div className={styles.nationalitySelect}>
                    <span className={styles.nationalityLabel}>Nationality</span>
                    <Selects
                      value={
                        countryList &&
                        countryList.find(
                          (item) => item.value == customerCountry
                        )
                      }
                      selectBorder={true}
                      dropdown_container={styles.dropdown_container}
                      options={countryList}
                      toggleClass={`${styles.CountrySelect} ${styles.CheckBox}`}
                      onChange={handleChangeCountry}
                      menuClass={styles.Menu}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formControl}>
              <div className={styles.inputWrapper}>
                <input
                  type='email'
                  className={styles.RegisterInput}
                  placeholder='Your email address'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    },
                    pattern: {
                      value:
                        /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]/,
                      message: 'Invalid e-mail'
                    }
                  })}
                />
                {errors?.email && (
                  <span className={styles.ErrorMessage}>
                    {errors?.email?.message}
                  </span>
                )}
              </div>
              <div className={styles.SelectWrapper}>
                <div className={styles.phonenumber_container}>
                  <div className={styles.CustomSelect}>
                    <Selects
                      value={
                        phoneCodeList &&
                        phoneCodeList.find((item) => item.value == phoneCountry)
                      }
                      options={phoneCodeList}
                      toggleClass={styles.PhoneSelect}
                      menuClass={`mt-2 ${styles.Menu}`}
                      onChange={handleChangePhoneCountry}
                    />
                  </div>
                  <input
                    type='text'
                    placeholder='Phone number'
                    {...register('phone_number')}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    className={`${styles.RegisterInput} ${styles.PhoneInput}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.RegisterText}>
              <input
                id='register_checkbox'
                type='checkbox'
                style={{ userSelect: 'none', cursor: `pointer` }}
                className={`rounded ${styles.CheckBox}`}
                {...register('register_checkbox')}
              />
              <label
                htmlFor='register_checkbox'
                style={{ marginLeft: `10px`, cursor: `pointer` }}
              >
                Sign up to BBCIncorp's mailing list for latest news and
                exclusive offers.
              </label>
            </div>
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_G_RECAPTCHA_V3_SITE_KEY}
              badge='bottomright'
              size='invisible'
              className='d-flex justify-content-center justify-content-xl-start'
            /> */}
            <div className={styles.FormFooter}>
              <button
                type='submit'
                className={`${styles.RegisterButton} ${styles.Button}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className='d-flex align-items-center'>
                    <span className='mr-2'>Loading</span>
                    <Spinner
                      as='span'
                      animation='border'
                      role='status'
                      aria-hidden='true'
                      size='sm'
                    />
                  </span>
                ) : (
                  'Start my business'
                )}
              </button>
              <a
                style={{ fontWeight: `600` }}
                className={`${styles.RegisterLink} ${styles.Link}`}
                // href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
                href='https://test-dashboard.bbcincorp.com/auth/login'
              >
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </section>
      <section style={{ width: `100%`, display: `flex`, marginTop: `1.5rem` }}>
        <div className={styles.trustpilot_wrapper}>
          <Trustpilot data={trustpilot} />
        </div>
      </section>
    </div>
  )
}

export default RegisterScreen
