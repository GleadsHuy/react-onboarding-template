import React, { useState, useEffect, useRef, Fragment } from 'react'
import styles from './styles.module.css'
import Title from '../common/Title'
import { FaChevronDown, FaCaretRight } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'
import { RiSubtractFill } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'
import { BiLoaderAlt } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import Sidebar from '../common/SideBar'
import axios from 'axios'

import Description from '../common/Description'
import Select, { components } from 'react-select'
import _ from 'lodash'
import Label from '../common/Label'

const customStyles = {
  menu: (provider, state) => ({
    ...provider,
    width: 'fit-content'
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: `16px`,
    cursor: 'pointer',
    border: 'none'
  }),
  singleValue: (base) => ({
    ...base,
    color: '#677294',
    border: 'none',
    display: 'block',
    overflow: 'initial',
    position: 'initial',
    transform: 'initial'
  })
}
const customStyles1 = {
  menu: (provider, state) => ({
    ...provider,
    borderColor: 0
    // width: "fit-content",
  }),
  menuList: (base) => ({
    ...base,
    whiteSpace: 'normal',
    wordWrap: 'break-word'
    // width: "fit-content",
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: `16px`,
    cursor: 'pointer',
    border: 'none'
  }),
  singleValue: (base) => ({
    ...base,
    color: '#677294',
    border: 'none',
    display: 'block',
    overflow: 'initial',
    position: 'initial',
    transform: 'initial'
  })
}
const DropdownIndicator = (props) => (
  <components.IndicatorsContainer {...props} style={{ padding: 0 }}>
    <FaChevronDown style={{ color: '#cfcfcf', fontSize: '12px' }} />
  </components.IndicatorsContainer>
)

const EXCEPTIONS = ['/incorporation-package']

const questions = [
  {
    id: 1,
    text: 'The accounting fee for basic package with yearly turnover of less than S$70,000 is US$84 per month or US$1,008 yearly.',
    answers: [
      {
        id: 1,
        text: 'Yes, please add basic package of accounting and filling tax',
        value: 1
      },
      { id: 2, text: "I'd like to add Company Review service", value: 2 }
    ]
  },
  {
    id: 2,
    text: 'The accounting fee for basic package with yearly turnover of less than S$70,000 is US$39/month (billed yearly) for yearly package, and US$84/month (billed yearly) for monthly package.',
    answers: [
      {
        id: 1,
        text: 'Yes, please add basic package of accounting and filing tax (yearly)',
        value: 1
      },
      {
        id: 2,
        text: 'Yes, please add basic package of accounting and filing tax (monthly)',
        value: 2
      },
      {
        id: 3,
        text: 'No, I can do it ourselves',
        value: 3
      }
    ]
  }
]

const Group = (props) => {
  return (
    <div className={styles.CustomGroup}>
      <components.Group {...props} />
    </div>
  )
}

const CustomOption = (props) => {
  return <components.Option {...props} className={styles.CustomOption} />
}

const CustomField = ({
  idx,
  categories,
  additionalServices,
  fieldValue,
  onFieldChange,
  handleRemove
}) => {
  const [services, setServices] = useState([])
  useEffect(() => {
    if (fieldValue && fieldValue.category && !fieldValue.readOnly) {
      const newServices = _.uniqBy(
        additionalServices.map((item) => ({
          ...item,
          value: item.id,
          label: item.name
        })),
        'value'
      ).filter((item) => item.service_type_id == fieldValue.category.id)
      setServices(newServices)
      if (newServices.length > 0 && !fieldValue.isLocalLoad) {
        onFieldChange('service', idx, newServices[0])
      }
    }
  }, [fieldValue.category])

  return (
    <div className={`${styles.servicesGroup}`}>
      <div className={`${styles.tableCellGroup1} ${styles.tableGroup1}`}>
        {idx + 1}
      </div>
      <div className={`${styles.tableCellGroup1} ${styles.selectWrapper}`}>
        <Select
          menuPlacement='auto'
          menuPosition='fixed'
          menuShouldBlockScroll
          className={styles.select}
          options={categories.filter((item) =>
            item.options
              ? item.options.some((i) =>
                  additionalServices.some((el) => el.service_type_id === i.id)
                )
              : additionalServices.some((el) => el.service_type_id === item.id)
          )}
          isSearchable={false}
          styles={customStyles}
          value={fieldValue['category'] || ''}
          onChange={(value) => onFieldChange('category', idx, value)}
          isDisabled={fieldValue['readOnly']}
          components={{
            IndicatorSeparator: () => null,
            IndicatorsContainer: (props) =>
              fieldValue['readOnly'] ? null : <DropdownIndicator {...props} />,
            Group,
            Option: CustomOption
          }}
        />
      </div>
      <div className={`${styles.tableCellGroup1} ${styles.selectWrapper}`}>
        <Select
          menuPlacement='auto'
          menuPosition='fixed'
          menuShouldBlockScroll
          className={styles.select}
          isSearchable={false}
          options={services}
          styles={customStyles1}
          value={fieldValue['service'] || ''}
          onChange={(value) => onFieldChange('service', idx, value)}
          isDisabled={fieldValue['readOnly']}
          components={{
            IndicatorSeparator: () => null,
            IndicatorsContainer: (props) =>
              fieldValue['readOnly'] ? null : <DropdownIndicator {...props} />
          }}
        />
      </div>
      <div className={`${styles.tableCellGroup1} ${styles.fieldBtn}`}>
        {fieldValue['readOnly'] ? (
          <div className={`${styles.quantity}`}>
            {fieldValue['quantity'] > 9
              ? fieldValue['quantity']
              : '0' + fieldValue['quantity']}
          </div>
        ) : (
          <div className={`${styles.quantity}`}>
            {fieldValue && fieldValue['quantity'] <= 1 ? (
              <button
                onClick={() => handleRemove(fieldValue)}
                style={{ background: 'transparent' }}
              >
                <IoMdTrash size={25} color='#adadad' />
              </button>
            ) : (
              <button
                onClick={() =>
                  onFieldChange('quantity', idx, fieldValue['quantity'] - 1)
                }
              >
                <RiSubtractFill size={22} color='#fff' />
              </button>
            )}

            {fieldValue['quantity'] > 9
              ? fieldValue['quantity']
              : '0' + fieldValue['quantity']}
            <button
              onClick={() =>
                onFieldChange('quantity', idx, fieldValue['quantity'] + 1)
              }
            >
              <BiPlus size={22} color='#fff' />
            </button>
          </div>
        )}
      </div>
      <div className={`${styles.tableCellGroup1} ${styles.tableGroupLast}`}>
        <sub>$US</sub>
        <div className='price'>{fieldValue['price']}</div>
      </div>
    </div>
  )
}

const clearSelectedPackages = () => {
  if (localStorage.getItem('data_onboarding')) {
    const dataOnboarding = JSON.parse(localStorage.getItem('data_onboarding'))
    if (dataOnboarding?.incorporation?.selected_packages) {
      dataOnboarding.incorporation.selected_packages = []
      localStorage.setItem('data_onboarding', JSON.stringify(dataOnboarding))
    }
  }
  if (window.localStorage.getItem('customer')) {
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    delete customer.company_country_id
    delete customer.company_name
    delete customer.entity_type_id
    delete customer.package_id
    window.localStorage.setItem('customer', JSON.stringify(customer))
  }
}

export default function IncorporationAdditionalService(params) {
  const [fields, setFields] = useState([])
  const [categories, setCategories] = useState([])
  const [signature, setSignature] = useState('')
  const [packageId, setPackageId] = useState('')
  const [companyInfo, setCompanyInfo] = useState({})
  const [additionalServices, setAdditionalServices] = useState([])
  const [servicesAccounting, setServicesAccounting] = useState([])
  const [country, setCountry] = useState()
  const [question, setQuestion] = useState()
  const [sidebar, setSidebar] = useState(false)
  const [loading, setLoading] = useState('')
  const [emptyField, setEmtyField] = useState(false)
  const [note, setNote] = useState(true)
  const promotionCode = useRef(null)

  useEffect(() => {
    if (localStorage.getItem('data_onboarding')) {
      const dataOnboarding = JSON.parse(localStorage.getItem('data_onboarding'))
      const newAdditionalServices =
        dataOnboarding?.incorporation?.package?.AdditionalServices || []
      const newServicesAccounting =
        dataOnboarding?.incorporation?.package?.ServicesAccounting || []
      const newCompanyInfo = {
        name: dataOnboarding.incorporation.company_name[0]?.name || '',
        company_suffix_id:
          dataOnboarding?.incorporation?.company_name[0]?.suffix?.value || '',
        entity_type_id: dataOnboarding?.incorporation?.entity_type_id || '',
        country_id: dataOnboarding?.incorporation?.country?.id || '',
        preventive_name:
          dataOnboarding?.incorporation?.company_name
            ?.filter((item, index) => index !== 0)
            .map((item) => ({
              name: item.name,
              company_suffix_id: item.suffix.value
            })) || []
      }
      const children = _.sortBy(
        _.uniqBy(
          newAdditionalServices.concat(newServicesAccounting).map((item) => ({
            ...item.ServiceType,
            value: item.ServiceType.id,
            label: item.ServiceType.name
          })),
          'value'
        ),
        ['order']
      ).filter((e) => e.id !== 42)
      const parent = _.unionBy(
        children
          .map((item) => {
            if (item?.parent_id !== null) {
              return {
                ...item.ServiceType
              }
            }
          })
          .filter((item) => item !== undefined),
        'name'
      )

      const group = _.groupBy(children, 'ServiceType.name')

      const newCategories = _.sortBy(
        [
          ...parent.map((item) => ({
            ...item,
            label: item.name,
            options: group[item.name].map((i) => ({
              ...i,
              value: i.id,
              label: i.name
            }))
          })),
          ...group[undefined].map((i) => ({
            ...i,
            value: i.id,
            label: i.name
          }))
        ],
        ['order']
      )

      // const newCategories = _.uniqBy(
      //   newAdditionalServices.map((item) => ({
      //     ...item.ServiceType,
      //     value: item.ServiceType.id,
      //     label: item.ServiceType.name,
      //   })),
      //   "value"
      // );
      setPackageId(dataOnboarding?.incorporation?.package?.id || '')
      setCountry(dataOnboarding?.incorporation?.country || null)
      setCompanyInfo(newCompanyInfo)
      setCategories(newCategories)
      setAdditionalServices(newAdditionalServices)
      setServicesAccounting(newServicesAccounting)
      const selectedPackages =
        dataOnboarding?.incorporation?.selected_packages || []
      if (Array.isArray(selectedPackages) && selectedPackages.length > 0) {
        setFields(
          selectedPackages.map((item) => ({ ...item, isLocalLoad: true }))
        )
      }
      if (
        Array.isArray(selectedPackages) &&
        selectedPackages.length === 0 &&
        dataOnboarding?.incorporation?.country?.id === 191 &&
        (dataOnboarding?.incorporation?.package?.id === 85 ||
          dataOnboarding?.incorporation?.package?.id === 86)
      ) {
        setQuestion(questions[1])
      } else if (
        Array.isArray(selectedPackages) &&
        selectedPackages.length === 0 &&
        dataOnboarding?.incorporation?.country?.id === 191 &&
        (dataOnboarding?.incorporation?.package?.id === 87 ||
          dataOnboarding?.incorporation?.package?.id === 88)
      ) {
        setQuestion(questions[0])
      } else {
        setQuestion('none')
      }
    }
    if (localStorage.getItem('customer')) {
      const customer = JSON.parse(localStorage.getItem('customer'))
      setSignature(customer?.signature?.signature || '')
      promotionCode.current = customer.promotion_code || null
    } else {
      location.href = '/register'
    }
    const handleBeforeHistoryChange = (url) => {
      const [nextUrl] = url?.split('?') || []
      if (EXCEPTIONS.includes(nextUrl)) {
        clearSelectedPackages()
      }
    }
    // router.events.on('beforeHistoryChange', handleBeforeHistoryChange)

    return () => {
      //   router.events.off('beforeHistoryChange', handleBeforeHistoryChange)
    }
  }, [])
  // useEffect(() => {
  //   // window.onpopstate = function() {
  //   //   handleBack();
  //   // };
  //   // history.pushState({}, "");
  //   if (window.history && window.history.pushState) {
  //     // window.history.pushState("forward", null, "./incorporation-additional-service");
  //     window.onpopstate = function () {
  //       location.href = "/incorporation-package";
  //     };
  //     // history.pushState({}, "");
  //   }
  // }, []);
  useEffect(() => {
    if (fields.length > 0 && fields.find((el) => el.service.id === 1950)) {
      setNote(false)
    }

    if (
      (fields.length > 0 && fields.find((el) => el.service.id === 1950)) ||
      (companyInfo &&
        companyInfo.country_id === 23 &&
        companyInfo.entity_type_id !== 2)
    ) {
      setNote(false)
    }

    if (
      companyInfo &&
      companyInfo.country_id === 23 &&
      companyInfo.entity_type_id === 2
    ) {
      let fixedAdditionalService
      fixedAdditionalService = additionalServices.find(
        (item) => item.id == 1851
      )
      if (fixedAdditionalService) {
        if (fields.length === 0) {
          setFields([
            ...fields,
            {
              id: fields.length + 1,
              category: {
                ...fixedAdditionalService.ServiceType,
                label: fixedAdditionalService.ServiceType.name,
                value: fixedAdditionalService.ServiceType.id
              },
              service: {
                ...fixedAdditionalService,
                label: fixedAdditionalService.name,
                value: fixedAdditionalService.id
              },
              readOnly: true,
              price: fixedAdditionalService.Fee.value,
              quantity: 1
            }
          ])
        }
        setAdditionalServices(
          additionalServices.filter((item) => item.id !== 1851)
        )
      }
    }
  }, [companyInfo, additionalServices, fields, categories])
  const onFieldChange = (fieldName, index, value) => {
    const fieldTemps = [...fields]
    fieldTemps[index][fieldName] = value
    fieldTemps[index]['isLocalLoad'] = false
    if (fieldName === 'service') {
      fieldTemps[index]['quantity'] = 1
    }
    if (fieldName === 'service' || fieldName === 'quantity') {
      fieldTemps[index]['price'] =
        fieldTemps[index]['service'].Fee.value * fieldTemps[index]['quantity']
    }
    setFields(fieldTemps)
  }
  const handleRemove = (field) => {
    setFields(fields.filter((item) => item.id !== field.id))
    if (emptyField && fields.length == 1) {
      setNote(false)
    }
  }

  const removeAll = () => {
    if (
      (country &&
        country.id === 191 &&
        (packageId === 85 ||
          packageId === 86 ||
          packageId === 87 ||
          packageId === 88) &&
        !emptyField) ||
      (companyInfo &&
        companyInfo.country_id === 23 &&
        companyInfo.entity_type_id === 2)
    ) {
      setFields(fields.filter((item, index) => index === 0))
    } else {
      setFields([])
      if (!fields.find((el) => el.service.id === 1950)) {
        setNote(false)
      }
    }
  }

  const handleAPIAdditional = async (orderItems) => {
    try {
      const response = await axios.post(
        `https://core.test-lp.bbcincorp.com/api/onboarding/order/incorp`,
        {
          package_id: packageId,
          OrderItems: orderItems,
          signature: signature,
          company_info: companyInfo
        }
      )
      if (response.data.data) {
        if (localStorage.getItem('data_onboarding')) {
          const dataOnboarding = JSON.parse(
            localStorage.getItem('data_onboarding')
          )
          if (!dataOnboarding.incorporation) {
            dataOnboarding.incorporation = {}
          }
          dataOnboarding.incorporation.selected_packages = fields.filter(
            (item) =>
              orderItems.some((temp) => temp.service_id === item.service.id)
          )
          localStorage.setItem(
            'data_onboarding',
            JSON.stringify(dataOnboarding)
          )
        }

        const promotion_code = promotionCode.current
          ? '&promotion_code=' + promotionCode.current
          : ''
        location.href =
          '/order-information?order_code=' + response.data.data + promotion_code
      }
    } catch (error) {
      setLoading('')
    }
  }
  const handleSubmit = (type) => {
    if (type === 'skip') {
      setLoading('skip')
      if (
        (country &&
          country.id === 191 &&
          (packageId === 85 ||
            packageId === 86 ||
            packageId === 87 ||
            packageId === 88) &&
          !emptyField) ||
        (companyInfo &&
          companyInfo.country_id === 23 &&
          companyInfo.entity_type_id === 2)
      ) {
        handleAPIAdditional([
          { service_id: fields[0].service.id, quantity: fields[0].quantity }
        ])
      } else {
        handleAPIAdditional([])
      }
    } else {
      setLoading('next')
      const orderItemTemps = _.uniqBy(
        fields.map((item) => ({
          service_id: item.service.id,
          quantity: item.quantity
        })),
        'service_id'
      )
      const orderItems = []
      orderItemTemps.forEach((item) => {
        let quantity = 0
        fields.forEach((field) => {
          if (field.service.id === item.service_id) {
            quantity += field.quantity
          }
        })
        orderItems.push({ ...item, quantity: quantity })
      })
      handleAPIAdditional(orderItems)
    }
  }
  const handleClickAdd = () => {
    if (Array.isArray(categories) && categories.length > 0) {
      setFields([
        ...fields,
        {
          id: fields.length + 1,
          category:
            'options' in categories[0]
              ? categories[0].options[0]
              : categories[0],
          quantity: 1
        }
      ])
      if (!fields.find((el) => el.service.id === 1950)) {
        setNote(true)
      }
    }
  }

  const getSum = () => {
    let sum = 0
    fields.forEach((item) => {
      if (item.price) {
        sum += item.price
      }
    })
    return sum
  }

  const handleQuestion = (answer) => {
    switch (answer.value) {
      case 1:
        let newServicesAccounting1 = servicesAccounting[0]
        if (question.id === 1) {
          newServicesAccounting1 = servicesAccounting.find(
            (item) => item.id === 1941
          )
        } else {
          newServicesAccounting1 = servicesAccounting.find(
            (item) => item.id === 1934
          )
        }

        if (newServicesAccounting1) {
          if (fields.length === 0) {
            setFields([
              ...fields,
              {
                id: fields.length + 1,
                category: {
                  ...newServicesAccounting1.ServiceType,
                  label: newServicesAccounting1.ServiceType.name,
                  value: newServicesAccounting1.ServiceType.id
                },
                service: {
                  ...newServicesAccounting1,
                  label: newServicesAccounting1.name,
                  value: newServicesAccounting1.id
                },
                readOnly: true,
                price: newServicesAccounting1.Fee.value,
                quantity: 1
              }
            ])
          }
          setQuestion('none')
        }
        break
      case 2:
        let newServicesAccounting2 = servicesAccounting[0]
        if (question.id === 1) {
          newServicesAccounting2 = servicesAccounting.find(
            (item) => item.id === 1950
          )
        } else {
          newServicesAccounting2 = servicesAccounting.find(
            (item) => item.id === 1941
          )
        }
        if (newServicesAccounting2) {
          if (fields.length === 0) {
            setFields([
              ...fields,
              {
                id: fields.length + 1,
                category: {
                  ...newServicesAccounting2.ServiceType,
                  label: newServicesAccounting2.ServiceType.name,
                  value: newServicesAccounting2.ServiceType.id
                },
                service: {
                  ...newServicesAccounting2,
                  label: newServicesAccounting2.name,
                  value: newServicesAccounting2.id
                },
                readOnly: true,
                price: newServicesAccounting2.Fee.value,
                quantity: 1
              }
            ])
          }
          setQuestion('none')
        }
        break
      case 3:
        setQuestion('none')
        setEmtyField(true)
        if (fields.length === 0) {
          setFields([])
          setNote(false)
        }
        break
      default:
        const newQuestions = questions.filter((item) => item.id !== question.id)
        if (newQuestions[0]) {
          setQuestion(newQuestions[0])
        }
        break
    }
  }
  return question ? (
    <>
      <div className={styles.container}>
        <div className={`${styles.Header} ${styles.topWrapper}`}>
          <a
            disabled={loading && loading !== ''}
            href='/incorporation-package'
            className={styles.btnBackTop}
            onClick={clearSelectedPackages}
          >
            Back
          </a>
          {question &&
          question !== 'none' &&
          packageId != 85 &&
          packageId != 86 ? (
            <>
              <div className={styles.faqWrapper} style={{ fontSize: 20 }}>
                Frequently Asked Questions?{' '}
                <button
                  className={styles.faqBtn}
                  style={{ fontSize: 20 }}
                  onClick={() => setSidebar(true)}
                >
                  CLICK HERE
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {question === 'none' ? (
          <>
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <div className={styles.titleWrapper}>
                  <div className={`${styles.titleDes} ${styles.description}`}>
                    <Title
                      text='Additional Services'
                      className={styles.title}
                    />
                    <Description>
                      Additional services will help you to solve the problem
                      relating to documentation. You can also skip this if you
                      do not find the services suited to you
                    </Description>
                  </div>
                  <div className={`${styles.total} ${styles.totalWrapper}`}>
                    <h3>
                      <span style={{ color: '#333333' }}>Total:</span>
                      <span className={styles.price}>${getSum()}.00</span>
                    </h3>
                    <h1 className={styles.priceWrapper}>US${getSum()}.00</h1>
                  </div>
                </div>
                <div className={styles.tableServices}>
                  <div
                    className={`${styles.servicesRow} ${styles.serviceWrapper}`}
                  >
                    <div className={styles.colMd1} scope='col'>
                      No.
                    </div>
                    <div className={styles.colMd4} scope='col'>
                      Category
                    </div>
                    <div className={styles.colMd4} scope='col'>
                      Service
                    </div>
                    <div className={styles.colMd2} scope='col'>
                      Quantity
                    </div>
                    <div className={styles.colMd1} scope='col'>
                      Price
                    </div>
                  </div>
                  {fields.length === 0 && (
                    <h3 className={styles.fieldNote}>
                      Please add and choose services
                    </h3>
                  )}
                  {fields.map((field, index) => (
                    <div key={index} className={styles.fieldWrapper}>
                      {index !== 0 && (
                        <div className={styles.lineDividerWrapper}>
                          <div className={styles.lineDivider}></div>
                        </div>
                      )}
                      <div className={styles.customFieldWrapper}>
                        <div className={styles.quantityField}>{index + 1}</div>
                        <div className={styles.customField}>
                          <CustomField
                            idx={index}
                            fieldValue={field}
                            additionalServices={additionalServices}
                            categories={categories}
                            onFieldChange={onFieldChange}
                            handleRemove={handleRemove}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.controlWrapper}>
                  <button
                    className={styles.addService}
                    onClick={handleClickAdd}
                    style={{ minWidth: 150 }}
                    disabled={loading && loading !== ''}
                  >
                    Add
                  </button>
                  <button
                    className={styles.clearAll}
                    onClick={removeAll}
                    style={{ minWidth: 150 }}
                    disabled={loading && loading !== ''}
                  >
                    Remove all
                  </button>
                </div>
              </div>
              <div>
                {country.id == 191 && note && (
                  <p
                    style={{
                      marginBottom: `60px`,
                      fontSize: `20px`,
                      lineHeight: `28px`,
                      fontWeight: `400`
                    }}
                  >
                    <strong>Note:</strong> Accounting fee is depended on client
                    company’s yearly revenue. You may take a look at{' '}
                    <a
                      style={{
                        display: `inline-block`,
                        textDecoration: 'none',
                        color: '#007eff'
                      }}
                      target='_blank'
                      rel='noreferrer nofollow'
                      href='https://bbcincorp.com/sg/accounting-and-auditing'
                    >
                      our price range
                    </a>
                    .<br /> If you want to customize this package, please
                    contact our customer service team for assistance.
                  </p>
                )}
                {companyInfo &&
                  companyInfo.country_id === 23 &&
                  companyInfo.entity_type_id === 2 &&
                  note && (
                    <p
                      style={{
                        marginBottom: `60px`,
                        fontSize: `20px`,
                        lineHeight: `28px`,
                        fontWeight: `400`
                      }}
                    >
                      <strong>Note:</strong> Tax Identification Number (TIN) is
                      mandatory for all Belize companies, regardless of whether
                      they are included or non-included entities, to submit the
                      filing of returns and tax payments. If you need further
                      information and assistance, please do not hesitate to
                      contact our customer service team.
                    </p>
                  )}
                <div className={styles.bottomWrapper}>
                  <div className={styles.btnBackBottom}>
                    <a
                      disabled={loading && loading !== ''}
                      href='/incorporation-package'
                      onClick={clearSelectedPackages}
                    >
                      Back
                    </a>
                  </div>
                  <button
                    onClick={() => handleSubmit('next')}
                    className={styles.nextBtn}
                    disabled={loading && loading !== ''}
                  >
                    {loading === 'next' ? (
                      <span>
                        Next
                        <BiLoaderAlt
                          className='animate_spin'
                          size={20}
                          style={{ marginLeft: '8px' }}
                        />
                      </span>
                    ) : (
                      <span>Next</span>
                    )}
                  </button>
                  <button
                    className={styles.skipBtn}
                    onClick={() => handleSubmit('skip')}
                    disabled={loading && loading !== ''}
                  >
                    {loading === 'skip' ? (
                      <span>
                        Skip
                        <BiLoaderAlt
                          className='animate_spin'
                          size={20}
                          style={{ marginLeft: '8px' }}
                        />
                      </span>
                    ) : (
                      <span>Skip</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.questionContainer}>
              <div className={styles.content}>
                <div className={styles.titleQuestionWrapper}>
                  <Title
                    text='Accounting and Tax Filing service'
                    className={styles.title}
                  />
                  <button onClick={() => setSidebar(true)}>
                    <FiHelpCircle color='#007eff' size={30} />
                  </button>
                </div>
                <Description>{question.text}</Description>
                <div className={styles.answerWrapper}>
                  {question.answers.map((item, index) => (
                    <button
                      onClick={() => handleQuestion(item)}
                      className={` ${styles.singButton}`}
                      key={index}
                    >
                      <FaCaretRight size={30} color='#333' />
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Sidebar
        description={`<div><h4>What is the fee if I use your accounting service?</h4><ul><li>Our accounting service starts from US$84/month for less than S$70,000 of revenue per year. You can check <a href='https://bbcincorp.com/sg/accounting-and-auditing' target='_blank' rel='nofollow noreferrer'>HERE</a> for accounting fee details.</li></ul><h4>If there is no transaction in my yearly accounting period, could I get my accounting fee back?</h4><ul><li>When you use nominee director service in Singapore, you are most likely required to deposit an initial amount of no less than S$2,000. However, we don’t require this, you must instead send your monthly accounting report for our local director’s review to discharge their liabilities from possible illicit business activities or practices.</li></ul></div>`}
        title='FAQs'
        sidebar={sidebar}
        onClickClose={() => setSidebar(false)}
      />
    </>
  ) : (
    <></>
  )
}
