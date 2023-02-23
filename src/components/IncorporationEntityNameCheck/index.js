import React, { useState, useEffect, useRef } from 'react'

/**
 * vendor
 */
import { IconContext } from 'react-icons'
import { MdAddCircle } from 'react-icons/md'
import { HiMinusCircle } from 'react-icons/hi'
import { BiLoaderAlt } from 'react-icons/bi'
import { Form } from 'react-bootstrap'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState
} from 'react-hook-form'
const startupNameGenerator = require('@rstacruz/startup-name-generator')
import axios from 'axios'

/**
 * components
 */
import { BsQuestionCircle } from 'react-icons/bs'
// import Layout from 'components/onboarding/common/Layout'
import Title from '../common/Title'
import Description from '../common/Description'
// import Button from 'components/onboarding/atoms/Button'
import SelectSearch from '../common/Selects/SelectSearchInside'
import { useOnClickOutside } from '../common/functions'
import Sidebar from '../common/SideBar'
import Layout from '../common/Layout'
/**
 * styles
 */
import styles from './styles.module.css'
const nameHint = [
  {
    id: 8,
    EntityTypes: [
      {
        id: '5',
        title: 'Anguilla',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>A company name shall not:</p><p>Be the same as, or similar to, the name or business name of any other person or of any association, partnership or firm, if the use of that name would be likely to confuse or mislead unless the person, association, partnership or firm consents in writing to the use of that name in whole or in part.</p><p>Be identical to the name of a body corporate incorporated under the laws of Anguilla before 1st January, 1995</p><p>Suggest or imply:</p><ul class='list-disc pl-3'><li>The patronage of Her Majesty or any member of the Royal Family or connection with Her Majesty’s Government or any department thereof in the United Kingdom or elsewhere;</li><li>A connection with a political party or a leader of a political party;</li><li>A connection with a university or a professional association recognized by the laws of Anguilla unless the university or professional association concerned consents in writing to the use of the proposed name;</li></ul><p>Use of names of dissolved companies in following cases:</p><p class='consist'>NAMING RESTRICTIONS:</p><p>The company has been struck off the Register for a continuous period of more than 3 years; and</p><p>No application for the company to be restored to the Register has been filed and remains undetermined by the Registrar; and</p><p>No appeal against a refusal of the Registrar to restore the company to the Register pending.</p></div>"
      }
    ]
  },
  {
    id: 17,
    EntityTypes: [
      {
        id: '5',
        title: 'Bahamas',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>A company name shall not:</p><ul class='list-disc pl-3'><li>Be identical to existing companies incorporated under Bahamas IBC Act or the Companies act, or nearly resembles the name of another company as to be calculated to deceive, except where the company in existence gives its consent;</li><li>Contain, without express prior permission of the Registrar which permission may be withheld without assigning a reason, prohibited words by the regulations, or</li><li>Contain any other word that, in the opinion of the Registrar, suggests or is calculated to suggest the patronage of or any connection with Her Majesty or any member of the Royal Family or the Government of The Bahamas, a department thereof, a statutory corporation or board or a local or municipal authority;</li><li>Be indecent, offensive or, in the opinion of the Registrar is otherwise objectionable.</li></ul></div>"
      }
    ]
  },
  {
    id: 32,
    EntityTypes: [
      {
        id: '2',
        title: 'BVI',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>No company shall be registered under the name:</p><ul class='list-disc pl-3'><li>That the use of which would contravene the Regulations;</li><li>That is identical or so similar to the name of an existing company that the use of the name would, in the opinion of the Registrar, be likely to confuse or mislead;</li><li>That is identical or so similar to a name that has been reserved that the use of both names by different companies would, in the opinion of the Registrar, be likely to confuse or mislead;</li><li>That contains a restricted word or phrase, unless the Commission has given its prior written consent to the use of the word or phrase; or</li><li>That, in the opinion of the Registrar, is offensive or, for any other reason, objectionable.</li></ul><p>The name of a company may comprise the expression “BVI Company Number” followed by its company number in figures and the required ending that is appropriate for the company.</p><p class='consist'>Language of a company name:</p><p>A company may be registered with an additional foreign character name approved by the Registrar.</p><p class='consist'>Reuse of names previously used by companies that:</p><p> Have changed their name; or</p><p> Have been struck off the Register, but not dissolved; or</p><p> Have been  dissolved ; or</p><p> Have been registered but, in respect of which, the Registrar has issued a certificate of discontinuance.</p></div>"
      }
    ]
  },
  {
    id: 23,
    EntityTypes: [
      {
        id: '5',
        title: 'Belize',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>A company name shall not:</p><ul class='list-disc pl-3'><li>Be identical with that under which a company in existence is already incorporated or so nearly resembles the name as to be calculated to deceive;</li><li>Contain the words “Building Society”, “Chamber of  Commerce”,  “Chartered”,  “Cooperative”,  “Imperial”,  “Monarchy”, “Municipal”,  “Royal”,  or  a  word  conveying a similar meaning, or any other word that, in the opinion of the Registrar, suggests or is calculated to suggest the patronage of Her Majesty or that of a member of the Royal Family; or a  connection  with  the  Government  of  Belize or a department thereof;</li><li>Be indecent, offensive or, in the opinion of the Registrar, objectionable;</li><li>Contain any one or more of the words  “Academy”, “Asset Management”, “Assurance”, “Bank”, “Brokerage”, “Credit Union”, “Education”, “Fiduciary”, “Financial”, “Foreign Exchange”, “Forex”, “Fund”, “Investment Management”, “Insurance”, “Lending”, “Securities”, “Trust”, or  “University”  or any of their derivatives or cognate expressions, unless  it is licensed under the enactment or enactments that authorize it to carry on the business or activities associated with the word or words, so contained;</li><li>Contain the top level domain such as “.com”, “.org”, “.net” or “.bz”of a domain name.</li></ul><p class='consist'>Language of a company name:</p><p>The name of a company shall be registered in Roman script, but a company may elect to register as an alternative name an accurate translation of the name registered in Roman script, and which name may be expressed in any script.</p></div>"
      }
    ]
  },
  {
    id: 41,
    EntityTypes: [
      {
        id: '4',
        title: 'Cayman Islands',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>No company shall be registered by a name which</p><ul class='list-disc pl-3'><li>Is identical with a name by which a company in existence is already registered or any translated name entered on the register of companies, or so nearly resembles such name or translated name so as to be calculated to deceive, except where the company in existence is in the course of being dissolved and signified its consent in such manner as the Registrar requires;</li><li>Contains the words “Chamber of Commerce” unless the company is a company which is to be registered under a licence granted by the Governor without the addition of the word “Limited” or the abbreviation “Ltd.” to its name;</li><li>Contains the words “building society”;</li><li>Includes at its end “Limited Duration Company” or “LDC” unless it was an exempted limited duration company.</li><li>Includes the words “Special Economic Zone Company” or the letters “SEZC” unless it was a special economic zone company.</li></ul><p>Except with the consent of the Registrar, no company shall be registered by a name which</p><ul class='list-disc pl-3'><li>Contains the words “royal”, “imperial” or “empire” or in the opinion of the Registrar suggests, or is calculated to suggest the patronage of Her Majesty or of any member of the Royal Family or connection with Her Majesty’s Government or any department thereof in the United Kingdom or elsewhere;</li><li>Contains the words “municipal” or “chartered” or any words which in the opinion of the Registrar suggest, or are calculated to suggest, connection with any public board or other local authority or with any society or body incorporated by Royal Charter;</li><li>Contains the words “co-operative”, “assurance”, “bank”, “insurance”, or any similar word which in the opinion of the Registrar connotes any of such activities or any derivative of any of such four words or of such similar words, whether in English or in any other language, or in the opinion of the Registrar suggests or is calculated to suggest any of such activities; or</li><li>Contains the word “gaming” or “lottery” or any similar word which in the opinion of the Registrar connotes any such activity or any derivative of such words or of such similar word, whether in English or in any other language, or in the opinion of the Registrar suggests or is calculated to suggest any such activity.</li></ul></div>"
      }
    ]
  },
  {
    id: 139,
    EntityTypes: [
      {
        id: '1',
        title: 'Mauritius',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>No company shall be registered under a name which is identical with that of an existing company, or statutory corporation, except where the existing company or statutory corporation is in the course of being dissolved and signifies its consent in such manner as the Registrar requires.</p> <p>Except with  the Registrar’s written consent, no  company shall be registered under a name which includes:</p><ul class='list-disc pl-3'><li>The word “Authority”, “Corporation”, “Government”, “Mauritius”,“National”,“President”,“Presidential”,“Regional”, ''Republic'',“State”, or any other word which in the Registrar’s opinion suggests, or is likely to suggest, that it enjoys the patronage of the Government or of a statutory  corporation, or of the Government of any other State;</li> <li>The word “Municipal” or “Chartered” or any other word which inthe Registrar’s opinion suggests, or is likely to suggest, connection with a local authority in Mauritius or elsewhere;</li> <li>The word “co-operative”;</li> <li>The words “Chamber of Commerce”.</li></ul> <p>Except with the consent of the Court no company shall be registered by a name, which in the opinion of the Registrar is undesirable or misleading.</p></div>"
      }
    ]
  },
  {
    id: 183,
    EntityTypes: [
      {
        id: '6',
        title: 'Samoa',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>Except with the consent of the Authority, an international company shall not be registered by a name that, in the opinion of the Registrar, is undesirable or is a name, or includes a name, of a kind that the Registrar is not otherwise willing to accept for registration.</p></div>"
      }
    ]
  },
  {
    id: 205,
    EntityTypes: [
      {
        id: '5',
        title: 'Saint Kitts (BC)',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p> <p>The name of a corporation:</p><ul class='list-disc pl-3'><li>Shall not be the same as the name of a corporation of any type or kind, as such name appears on the register of corporations or on the reserved namelist of corporations maintained by the Registrar of Corporations or a name so similar to any such name as to tend to confuse or deceive.</li><li>Shall not be the same as the name of a corporation of any type or kind, as such name appears on the register of corporations or on the reserved namelist of corporations maintained by the Registrar of Corporations or a name so similar to any such name as to tend to confuse or deceive.</li></ul> <p class='consist'>Language of a company name:</p><p>The name of the corporation on the Articles of Incorporation may be written in characters using the Latin alphabet or any other alphabet.</p><p>If the name of the corporation is not written in the Latin alphabet, then the name on the Articles of Incorporation must also include an authenticated translation.</p></div>"
      },
      {
        id: '11',
        title: 'Saint Kitts (LLC)',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>NAMING RESTRICTIONS:</p><p>The name of a limited liability company shall not be the same as the name of a limited liability company or of any other company of any type or kind, as such name appears on the register of companies or on the reserved name list of companies maintained by the Registrar of Companies or a name so similar to any such name as to tend to confuse or deceive.</p><p class='consist'>Language of a company name:</p><p>The name of the limited liability company on the articles of organisation may bewritten in characters using the Latin alphabet or any other alphabet.</p><p>If the name of the limited liability company is not written in the Latin alphabet, thename on the articles of organisation must also include an authenticated translatio</p></div>"
      }
    ]
  },
  {
    id: 189,
    EntityTypes: [
      {
        id: '5',
        title: 'Seychelles',
        content:
          "<div class='scroll-content__sidebar'><p class='consist'>Restrictions on company names</p><p>A company name shall not:</p><ul class='list-disc pl-3'><li>be identical or so similar to the name under which another company is registered that the use of the name would, in the opinion of the Registrar, be likely to confuse or mislead;</li><li>include a prohibited or restricted word, phrase or abbreviation , unless the prior written consent to the use of the word, phrase or abbreviation has been given by the Registrar and any other regulatory body whose consent  thereto is required under Seychelles law; or</li><li>in the opinion of the Registrar<ul><li>suggest or is calculated to suggest the patronage or any connection with the Government of Seychelles or the government of any other country; or</li><li>is in any way offensive, misleading, objectionable or contrary to public policy or to the public interest.</li></ul></li></ul><p>Language of company name:</p><p>A company name may be expressed in any language.</p><p>Where the name is not in the English or French language a translation of the name in the English or French language shall be given to the Registrar certified as true and accurate by an acceptable translator.</p><p>Where the name of a company is in the English or French language, it may have an additional foreign character name.</p><p class='consist'>Reuse of a company name in following cases:</p><p>A company that has</p><ul class='list-disc pl-3'><li>changed its name; or</li><li>been  dissolved; or</li></ul><p>A discontinued company</p></div>"
      }
    ]
  }
]

/**
 * Data Json
 */
import dataJson from './data.json'

export default function IncorporationEntityNameCheck({ data }) {
  useEffect(() => {
    // window.onpopstate = function () {
    //   handleBack();
    // };
    // history.pushState({}, "");
    if (window.history && window.history.pushState) {
      window.history.pushState(
        'forward',
        null,
        './incorporation-entity-name-check'
      )
      window.onpopstate = function () {
        handleBack()
      }
      // history.pushState({}, "");
    }
  }, [])

  /**
   * Form
   */
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    setError,
    setValue,
    getValues
  } = useForm()
  const { errors, isValid } = useFormState({ control })
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: 'companyName'
    })

  /**
   * Company Name
   */
  const addCompanyName = (entityType, name = '') => {
    if (fields.length < 3) {
      append({
        name: name,
        suffix: {
          value:
            entityType?.CompanySuffixes && entityType?.CompanySuffixes[0]?.id,
          label:
            entityType?.CompanySuffixes && entityType?.CompanySuffixes[0]?.name
        }
      })
    }
  }

  /**
   * Data
   */
  const [dataOnboarding, setDataOnboarding] = useState({})
  const [dataCountry, setDataCountry] = useState({})
  const [dataEntityType, setDataEntityType] = useState({})
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    const dataOnboardingLocalStorage =
      window.localStorage.getItem('data_onboarding')
    if (dataOnboardingLocalStorage) {
      const data = JSON.parse(dataOnboardingLocalStorage)
      setDataOnboarding(data)
      setDataCountry(data?.incorporation?.country)
      const entityType = data?.incorporation?.country?.EntityTypes.find(
        (item) => item && item.id == data?.incorporation?.entity_type_id
      )
      setDataEntityType(entityType)
      if (fields.length == 0) {
        /**
         * Landing to onboarding
         */
        const customer = JSON.parse(window.localStorage.getItem('customer'))
        if (customer?.company_name) {
          addCompanyName(entityType, customer?.company_name)
        } else {
          addCompanyName(entityType)
        }
      }

      /**
       * fill data when back
       */
      if (
        data?.incorporation?.company_name &&
        data?.incorporation?.company_name.length > 0
      ) {
        data?.incorporation?.company_name.map((item, index) => {
          if (index > 0) addCompanyName(entityType)
          setValue(`companyName.${index}.name`, item.name)
          if (item?.suffix) {
            setValue(`companyName.${index}.suffix`, item.suffix)
          }
        })
      }
    }
  }, [])

  /**
   * Handle
   */
  const [suggestNamePosition, setSuggestNamePosition] = useState(null)
  const [suggestName, setSuggestName] = useState([])
  const [loadingSuggest, setLoadingSuggest] = useState(false)
  const [dataSideBar, setDataSideBar] = useState({ title: '', content: '' })

  const handleSuggestName = (name, position = 0) => {
    setSuggestNamePosition(position)
    setSuggestName(
      name && position !== null
        ? startupNameGenerator(name).filter((item, index) => item && index < 3)
        : []
    )
  }

  const handleClickSuggestName = (name, suggestNamePosition) => {
    const fieldName = `companyName.${suggestNamePosition}.name`
    setValue(fieldName, name)
    handleRestricted(name, fieldName)
  }

  const handleCheckName = (name) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setSubmitting(true)
        axios
          .get(
            `https://core.test-lp.bbcincorp.com/api/onboarding/check_name/find_company`,
            { params: { key: name } }
          )
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      }, 500)
    })

  const handleRestricted = (name, fieldName) => {
    const hasRestricted = dataJson.name_restricted.find(
      (item) => item.id === dataCountry.id
    )
    // let isNameRestricted = false;
    if (hasRestricted) {
      const dataRestricted = hasRestricted.restricted.map((item) =>
        item.toLowerCase()
      )
      const inputName = name.trim().toLowerCase()

      const isNameRestricted = dataRestricted.some(
        (item) =>
          item === inputName ||
          inputName.search(` ${item}`) > -1 ||
          inputName.search(`${item} `) > -1
      )

      if (isNameRestricted) {
        setError(fieldName, {
          type: 'manual',
          message: 'Your company name contains restricted words or phrases'
        })
      } else {
        clearErrors(fieldName)
      }
    }
  }

  const handleNext = (dataOnboarding, dataCompanyName) => {
    if (
      errors &&
      Object.keys(errors).length === 0 &&
      Object.getPrototypeOf(errors) === Object.prototype
    ) {
      let propsed_name = dataCompanyName[0]?.name
      let entity_type = dataEntityType.CompanySuffixes.find(
        (item) => item.id === dataCompanyName[0].suffix.value
      )
      if (entity_type.is_prefix) {
        propsed_name = entity_type.name + ' ' + propsed_name
      } else {
        propsed_name = propsed_name + ' ' + entity_type.name
      }
      window.localStorage.setItem('form_name', JSON.stringify(propsed_name))
      window.localStorage.setItem(
        'data_onboarding',
        JSON.stringify({
          ...dataOnboarding,
          incorporation: {
            ...dataOnboarding.incorporation,
            company_name: dataCompanyName
          }
        })
      )

      /**
       * Send order client
       */
      let customer = JSON.parse(window.localStorage.getItem('customer'))
      if (customer?.signature?.signature) {
        axios.put(
          `https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer?.signature?.signature}`,
          {
            company_name: dataCompanyName[0].name,
            company_suffix_id: dataCompanyName[0].suffix.value
          }
        )
      }

      window.location.href = '/incorporation-package'
    } else {
      setSubmitting(false)
    }
  }

  const handleBack = () => {
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    delete customer.company_country_id
    delete customer.company_name
    delete customer.entity_type_id
    delete customer.package_id
    window.localStorage.setItem('customer', JSON.stringify(customer))

    window.location.href = `/incorporation-${
      dataCountry?.EntityTypes && dataCountry?.EntityTypes.length > 1
        ? 'company-type'
        : 'country'
    }`
  }

  const onSubmit = (data, e) => {
    setSubmitting(true)
    const dataCompanyName = data.companyName
      .map((item, index) => ({
        ...item,
        fieldName: `companyName.${index}.name`
      }))
      .filter((item) => item && item.name)

    dataCompanyName.map((item) => {
      handleRestricted(item.name, item.fieldName)
    })

    if (dataCountry.id == 237) {
      let waiting = []
      dataCompanyName.map((item, index) =>
        waiting.push(handleCheckName(item.name))
      )
      Promise.all(waiting)
        .then((allRes) => {
          let check = true
          allRes.forEach((item, index) => {
            if (!item.data.data.useable) {
              check = false
              setError(dataCompanyName[index].fieldName, {
                type: 'manual',
                message: 'This company name already exists'
              })
            }
          })
          if (check) {
            handleNext(dataOnboarding, dataCompanyName)
          } else {
            setSubmitting(false)
          }
        })
        .catch(() => {
          setSubmitting(false)
        })
    } else {
      handleNext(dataOnboarding, dataCompanyName)
    }
  }
  useEffect(() => {
    if (dataCountry?.id && dataEntityType?.id) {
      setDataSideBar(
        nameHint
          .find((el) => el.id === dataCountry?.id)
          ?.EntityTypes?.find((el1) => el1.id == dataEntityType?.id)
      )
    }
  }, [dataCountry, dataEntityType])

  const wrapperRef = useRef(null)

  useOnClickOutside(wrapperRef, () => {
    setSidebar(false)
  })

  return (
    <Layout>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Form noValidate>
          <div className={`${styles.form_header} ${styles.Header}`}>
            <div className={styles.top_wrapper}>
              <div style={{ flex: '0 0 auto' }}>
                <a
                  className={`${styles.back} ${styles.btn}`}
                  onClick={handleBack}
                >
                  Back
                </a>
              </div>
              {dataSideBar && (
                <div style={{ flex: '0 0 auto' }}>
                  <p className={styles.guideText}>
                    Need a guide for naming?{' '}
                    <button
                      type='button'
                      className={`${styles.btn} `}
                      style={{
                        fontWeight: 500,
                        fontSize: 'inherit',
                        color: '#007eff',
                        textTransform: 'uppercase',
                        border: 'none',
                        background: 'transparent'
                      }}
                      onClick={() => setSidebar(true)}
                    >
                      Click here
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
          {dataSideBar && (
            <Sidebar
              description={dataSideBar.content}
              title={dataSideBar.title}
              wrapperRef={wrapperRef}
              sidebar={sidebar}
              onClickClose={() => setSidebar(false)}
            />
          )}
          <Title text='Entity Name Check' className={styles.title_page} />
          <div
            className={
              dataEntityType?.CompanySuffixes &&
              dataEntityType?.CompanySuffixes[0].is_prefix
                ? ''
                : styles.Body
            }
          >
            <div className={styles.description_wrapper}>
              <div style={{ flex: '1' }}>
                <Description>
                  Country:{' '}
                  <span style={{ fontWeight: 500 }}>{dataCountry?.name}</span>
                </Description>
                <Description>
                  Company type:{' '}
                  <span style={{ fontWeight: 500 }}>
                    {dataEntityType?.name}
                  </span>
                </Description>
              </div>
              <a
                onClick={() => setSidebar(true)}
                className={styles.iconQuestionCircle}
              >
                {dataSideBar && <BsQuestionCircle />}
              </a>
            </div>
            <div className={styles.checkname_wrapper}>
              <div className={`${styles.title}`}>Proposed company name</div>
              <div
                style={{
                  maxWidth: '992px'
                }}
              >
                {fields.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <div className={`${styles.fields}`}>
                        <div
                          style={{
                            flexGrow: '1',
                            flexBasis: '0',
                            maxWidth: '100%',
                            padding: '0 8px'
                          }}
                        >
                          <div
                            className={`${styles.field_name} ${
                              dataEntityType?.CompanySuffixes &&
                              dataEntityType?.CompanySuffixes[0].is_prefix
                                ? styles.row_reverse
                                : ''
                            }`}
                          >
                            <div
                              style={{
                                flexGrow: '1',
                                flexBasis: '0',
                                maxWidth: '100%',
                                padding: '0 8px'
                              }}
                            >
                              <input
                                type='text'
                                {...register(`companyName.${index}.name`, {
                                  required: {
                                    value: index === 0,
                                    message: 'Your company name is required'
                                  }
                                })}
                                onChange={(e) => {
                                  handleRestricted(
                                    e.target.value,
                                    `companyName.${index}.name`
                                  )
                                  handleSuggestName(e.target.value, index)
                                }}
                                onBlur={(e) => {
                                  handleRestricted(
                                    e.target.value,
                                    `companyName.${index}.name`
                                  )
                                  setTimeout(() => {
                                    handleSuggestName('')
                                    setLoadingSuggest(false)
                                  }, 400)
                                }}
                                className={`${styles.company_name_input} ${
                                  errors?.companyName &&
                                  errors?.companyName[`${index}`]?.name?.message
                                    ? 'is-invalid'
                                    : ''
                                } ${styles.input}`}
                                placeholder={
                                  dataEntityType?.CompanySuffixes &&
                                  dataEntityType?.CompanySuffixes[0].is_prefix
                                    ? 'Parent company name'
                                    : 'Company name'
                                }
                                disabled={submitting}
                              />
                            </div>
                            <div className={styles.entity_name}>
                              <Controller
                                render={({ field }) => {
                                  const { ref, onChange, ...fieldTemp } = field
                                  return (
                                    <SelectSearch
                                      instanceId={item.id}
                                      selectBorder={true}
                                      options={
                                        dataEntityType?.CompanySuffixes &&
                                        dataEntityType?.CompanySuffixes.map(
                                          (item) => {
                                            return {
                                              value: item.id,
                                              label: item.name
                                            }
                                          }
                                        )
                                      }
                                      onChange={(newValue) => {
                                        if (
                                          !(
                                            Array.isArray(newValue) &&
                                            newValue.length === 0
                                          )
                                        ) {
                                          setValue(field.name, newValue)
                                        }
                                      }}
                                      placeholder='Search suffix'
                                      toggleClass={`${styles.search}`}
                                      isDisabled={submitting}
                                      {...fieldTemp}
                                    />
                                  )
                                }}
                                name={`companyName.${index}.suffix`}
                                control={control}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles.field_name} ${
                              dataEntityType?.CompanySuffixes &&
                              dataEntityType?.CompanySuffixes[0].is_prefix
                                ? styles.row_reverse
                                : ''
                            }`}
                          >
                            <div
                              style={{
                                flexGrow: '1',
                                flexBasis: '0',
                                maxWidth: '100%',
                                padding: '0 8px',
                                marginTop: '4px'
                              }}
                            >
                              <Form.Control.Feedback
                                type='invalid'
                                className={`${
                                  errors?.companyName
                                    ? styles.d_block
                                    : styles.d_none
                                }`}
                              >
                                <span
                                  style={{
                                    textAlign: 'left',
                                    color: '#ff0000',
                                    fontSize: '14px'
                                  }}
                                >
                                  {errors?.companyName &&
                                    errors?.companyName[`${index}`]?.name
                                      ?.message}
                                </span>
                              </Form.Control.Feedback>
                            </div>
                            <div
                              style={{
                                flex: '0 0 33.3333333333%',
                                maxWidth: '33.3333333333%',
                                padding: '0 8px'
                              }}
                            ></div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: '42px',
                            flex: '0 0 auto',
                            padding: '0 8px'
                          }}
                        >
                          {index !== 0 && (
                            <button
                              type='button'
                              style={{
                                padding: '0',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer'
                              }}
                              onClick={() => {
                                remove(index)
                              }}
                            >
                              <IconContext.Provider
                                value={{ color: '#007eff' }}
                              >
                                <HiMinusCircle size={`1.5rem`} />
                              </IconContext.Provider>
                            </button>
                          )}
                        </div>
                      </div>
                      {dataEntityType?.CompanySuffixes &&
                        !dataEntityType?.CompanySuffixes[0].is_prefix &&
                        suggestNamePosition == index &&
                        suggestName.length > 0 && (
                          <div className={styles.nameHints}>
                            <div style={{ position: 'relative' }}>
                              <div style={{ position: 'relative' }}>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    margin: '0 -4px'
                                  }}
                                >
                                  <div
                                    style={{
                                      flex: '0 0 auto',
                                      marginTop: '8px',
                                      padding: '0 4px'
                                    }}
                                  >
                                    Name hints:
                                  </div>
                                  {suggestName &&
                                    suggestName.map((item, index) => (
                                      <div
                                        style={{
                                          flex: '0 0 auto',
                                          marginTop: '8px',
                                          padding: '0 4px'
                                        }}
                                        key={index}
                                      >
                                        <div
                                          type='button'
                                          className={styles.nameHintsBadge}
                                          onClick={(e) =>
                                            handleClickSuggestName(
                                              e.target.innerText,
                                              suggestNamePosition
                                            )
                                          }
                                        >
                                          {item}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                              {loadingSuggest && (
                                <div className={styles.spinnerWrapper}>
                                  <BiLoaderAlt
                                    className='animate_spin'
                                    size={20}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  )
                })}
                {dataEntityType?.CompanySuffixes &&
                  !dataEntityType?.CompanySuffixes[0].is_prefix && (
                    <button
                      type='button'
                      style={{
                        padding: '0',
                        marginTop: '16px',
                        cursor: 'pointer',
                        border: 'none',
                        background: 'transparent'
                      }}
                      onClick={() => {
                        addCompanyName(dataEntityType)
                      }}
                      disabled={fields.length >= 3 || submitting}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconContext.Provider
                          value={{
                            color: fields.length >= 3 ? '#677294' : '#007eff'
                          }}
                        >
                          <MdAddCircle size={`1.5rem`} />
                        </IconContext.Provider>
                        <span
                          style={{
                            fontWeight: 500,
                            color: fields.length >= 3 ? '#677294' : '#007eff',
                            marginLeft: '8px',
                            marginRight: '4px',
                            fontSize: '16px',
                            lineHeight: '24px'
                          }}
                        >
                          Add more company name
                        </span>
                      </div>
                    </button>
                  )}
              </div>
              {dataEntityType?.CompanySuffixes &&
                !dataEntityType?.CompanySuffixes[0].is_prefix && (
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className={styles.note_wrapper}>
                      <p className={styles.note}>
                        **The fact that a proposed name is available does NOT
                        mean that name will be approved. The name approval
                        solely depends on the government’s decision.
                      </p>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </Form>
        <section style={{ margintop: '32px' }}>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <div className={styles.bottom_wrapper}>
              <a
                className={styles.backMobile}
                style={{
                  paddingRight: ' 15px',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'transparent'
                }}
                onClick={handleBack}
              >
                Back
              </a>
            </div>
            <div style={{ flex: ' 0 0 auto', padding: '0 15px' }}>
              <button
                type='submit'
                onClick={handleSubmit(onSubmit)}
                disabled={submitting}
                className={styles.nextButton}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Next
                  {submitting && (
                    <BiLoaderAlt
                      style={{ marginLeft: '8px' }}
                      className='animate_spin'
                      size={20}
                    />
                  )}
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
