import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import JurisdictionFeatures from './company-comparison/JurisdictionFeatures'
import JurisdictionComparison from './company-comparison/JurisdictionComparison'
import dataComparison from './data.json'
import { useOnClickOutside } from '../common/functions'
/**
 * vendor
 */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IconContext } from 'react-icons'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { IoMdCloseCircle } from 'react-icons/io'
import { BiLoaderAlt } from 'react-icons/bi'
import comparisonTable from 'assets/comparison-table.png'
import axios from 'axios'
import _ from 'lodash'

/**
 * components
 */
// import Layout from 'components/onboarding/common/Layout'
import Title from '../common/Title'
import SelectSearch from '../common/Selects/SelectSearchInside'
import Modal from '../common/Modal'
import Layout from '../common/Layout'
/**
 * styles
 */
import styles from './styles.module.css'
/**
 * Slider
 */

// function importAll(r) {
//   let images = {}
//   r.keys().map((item) => {
//     images[item.replace('./', '')] = r(item)
//   })
//   return images
// }

// const images = importAll(require.context('./flag1x1', false, /\.svg/))

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      className={`${styles.sliderNext} ${styles.slide_btn}`}
      onClick={onClick}
    >
      <IconContext.Provider value={{ color: '#c4c4c4' }}>
        <GrNext />
      </IconContext.Provider>
    </button>
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      className={`${styles.sliderPrev} ${styles.slide_btn}`}
      onClick={onClick}
    >
      <IconContext.Provider value={{ color: '#c4c4c4' }}>
        <GrPrevious />
      </IconContext.Provider>
    </button>
  )
}

export default function IncorporationCountry({ data }) {
  useEffect(() => {
    // window.onpopstate = function() {
    //   handleBack();
    // };
    // history.pushState({}, "");
    if (window.history && window.history.pushState) {
      window.history.pushState('forward', null, './incorporation-country')
      window.onpopstate = function () {
        handleBack()
      }
      // history.pushState({}, "");
    }
  }, [])

  /**
   * Data
   */
  const [dataOnboarding, setDataOnboarding] = useState({})
  useEffect(() => {
    const dataOnboardingLocalStorage =
      window.localStorage.getItem('data_onboarding')
    if (dataOnboardingLocalStorage) {
      const data = JSON.parse(dataOnboardingLocalStorage)
      setDataOnboarding(data)
    }
  }, [])

  const [dataCountries, setDataCountries] = useState([])
  const [dataSlider, setDataSlider] = useState([])
  const [optionSelected, setOptionSelected] = useState({
    value: 'all',
    label: 'All'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        `https://core.test-lp.bbcincorp.com/api/onboarding/country/entity_suffix`
      )
      .then((res) => {
        let data = _.sortBy(res.data.data, (item) => item.name).filter(
          (item) => item.id !== 111
        ) // loại Jersey
        setDataCountries(data)
        setDataSlider(data)
      })
  }, [])

  /**
   * Handle Back
   */

  const clearCustomer = () => {
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    delete customer.company_country_id
    delete customer.company_name
    delete customer.entity_type_id
    delete customer.package_id
    window.localStorage.setItem('customer', JSON.stringify(customer))
  }

  const handleBack = () => {
    clearCustomer()
    window.location.href = '/select-service'
    // location.href = "/onboarding/select-service";
  }

  /**
   * Handle click
   */
  const handleClick = (id, name) => {
    // dataLayer.push({ event: 'choose_country', country_name: name })
    let data = _.filter(dataCountries, (item) => item.id == id)[0]
    let isCompanyType = data?.EntityTypes && data?.EntityTypes.length > 1
    let entity_type_id = isCompanyType ? null : data?.EntityTypes[0]?.id
    let pathname = isCompanyType
      ? '/incorporation-company-type'
      : '/incorporation-entity-name-check'
    window.localStorage.setItem('country', JSON.stringify(name))
    window.localStorage.setItem(
      'data_onboarding',
      JSON.stringify({
        ...dataOnboarding,
        incorporation: {
          country: data,
          entity_type_id: entity_type_id
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
          company_country_id: id,
          entity_type_id: entity_type_id
        }
      )
    }

    window.location.href = pathname
  }

  /**
   * Landing to onboarding
   */
  useEffect(() => {
    const customer = JSON.parse(window.localStorage.getItem('customer'))
    if (Array.isArray(dataSlider) && dataSlider.length > 0) {
      if (customer?.company_country_id) {
        let countryId = parseInt(customer?.company_country_id)
        if (dataSlider.find((item) => item.id === countryId)) {
          let name = dataSlider.find((item) => item.id === countryId)?.name
          handleClick(countryId, name)
        } else {
          clearCustomer()
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }
  }, [dataSlider])

  /**
   * Select
   */
  const setSelectedOption = (e) => {
    setOptionSelected(e)
    if (e.value && e.value !== 'all') {
      setDataSlider(_.filter(dataCountries, (item) => item.id == e.value))
    } else {
      setDataSlider(dataCountries)
    }
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesPerRow: 3,
    rows: 2,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <span>{i + 1}</span>,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesPerRow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 575,
        settings: 'unslick'
      }
    ]
  }

  /**
   * Modal
   */

  const wrapperRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [tab, setTab] = useState(1)

  useOnClickOutside(wrapperRef, () => {
    setShow(false)
  })

  return (
    // <Layout
    //   head={{
    //     title: 'Select your desired incorporation country - BBCIncorp',
    //     description:
    //       'Select the country that you want to incorporate in. BBCIncorp provides incorporation service for more than 18 countries worldwide.'
    //   }}
    // >
    <Layout>
      <section>
        <div className={`${styles.btn_back_top}  ${styles.Header}`}>
          <div className={styles.btn_back_container}>
            <div className={styles.btn_wrapper}>
              <button className={styles.back} onClick={handleBack}>
                Back
              </button>
            </div>
          </div>
        </div>
        <div className={styles.select_country}>
          <div className={styles.select_wrapper}>
            <Title
              text='Country and Company Type'
              className={styles.select_title}
            />
            <div className={styles.searchContainer}>
              <SelectSearch
                instanceId='incorporation-country-search'
                value={optionSelected}
                options={[
                  { value: 'all', label: 'All' },
                  ...dataCountries.map((item) => {
                    return {
                      value: item.id,
                      label: item.name
                    }
                  })
                ]}
                selectBorder={true}
                placeholder='Search country here'
                toggleClass={`${styles.search}`}
                onChange={setSelectedOption}
              />
            </div>
          </div>
          <div className={styles.comparison_table_btn}>
            <button
              className={`${styles.button} ${styles.btn_show}`}
              onClick={handleShow}
            >
              <img src={comparisonTable} alt='bg-left-obd' />
              <div className='mt-1'>Comparison table</div>
            </button>
          </div>
        </div>
        <div className={styles.Body}>
          {loading ? (
            <div className={`${styles.loader_wrapper}`}>
              <BiLoaderAlt className='animate_spin' size={20} />
            </div>
          ) : dataSlider.length > 0 ? (
            <Slider
              className={`${styles.slider} ${styles.slider_container}`}
              {...sliderSettings}
            >
              {dataSlider.map((item, index) => (
                <div className={`${styles.slider_item}`} key={index}>
                  <div
                    className={`${styles.card} ${styles.card_wrapper}`}
                    onClick={() => handleClick(item.id, item.name)}
                  >
                    <div className={`${styles.card_inside}`}>
                      <div className={styles.img_wrapper}>
                        <img
                          // src={`/flags/1x1/${item.country_code.toLowerCase()}.svg`}
                          src={`https://test.bbcincorp.com/flags/1x1/${item.country_code.toLowerCase()}.svg`}
                          className={styles.cardImg}
                          alt={`${item.name}`}
                        />
                      </div>
                      <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                          <div className={`${styles.cardTitle}`}>
                            {item.name}
                          </div>
                          {item.EntityTypes.length > 0 && (
                            <ul className={styles.company_type}>
                              {item.EntityTypes.map((item, index) => (
                                <li key={index}>{item.name}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.cardIconNext}`}>
                      <span style={{ marginBottom: '4px' }}>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.comparison_container_mb}>
          <div className={styles.comparison_wrapper_mb}>
            <div className={styles.col_auto}>
              <button
                className={`${styles.button} ${styles.btn_show_mb}`}
                onClick={handleShow}
              >
                <div className={styles.comparisonTable_mb}>
                  <div className={styles.col_auto}>
                    <img
                      src={comparisonTable}
                      alt='bg-left-obd'
                      style={{
                        width: '20px'
                      }}
                    />
                  </div>
                  <div className={styles.comparison_text_mb}>
                    Comparison table
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.backMobile_wrapper}>
          <div className={styles.col_auto}>
            <button
              className={`${styles.backMobile} ${styles.btn_back_bottom}`}
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </div>
      </section>
      {/** Modal */}
      <Modal show={show}>
        <div ref={wrapperRef} className={styles.modal_wrapper}>
          <div
            className={styles.closeModal}
            style={{
              position: 'absolute',
              top: '0.25rem',
              right: '0.25rem',
              zIndex: 1
            }}
          >
            <button className='btn' onClick={handleClose}>
              <IconContext.Provider value={{ style: { color: 'c4c4c4' } }}>
                <IoMdCloseCircle size={`2rem`} />
              </IconContext.Provider>
            </button>
          </div>
          <div className={styles.tab_container}>
            <div className={styles.tab_wrapper}>
              <button
                onClick={() => setTab(1)}
                className={`${tab === 1 ? styles.active_tab : ''} ${
                  styles.tab_item
                }`}
              >
                Jurisdiction's Features
              </button>
              <button
                onClick={() => setTab(2)}
                className={`${tab === 2 ? styles.active_tab : ''} ${
                  styles.tab_item
                }`}
              >
                Jurisdiction Comparison
              </button>
            </div>
          </div>
          {tab === 1 ? (
            <JurisdictionFeatures
              data={dataComparison.DataFeatures}
              countries={dataComparison.countries}
              publicRegister={dataComparison.public_register}
              euList={dataComparison.eu_list}
              selectDefault={dataComparison.select_default}
              auditList={dataComparison.audited_accounts}
              exemptionList={dataComparison.offshore_exemptions}
              commonUsedList={dataComparison.common_used}
            />
          ) : (
            <div style={{ color: '#333' }}>
              <p style={{ marginBottom: '16px' }}>
                The following table compares different jurisdictions (maximum 3
                at one time) in regard to crucial aspects that you need to know
                when incorporating.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <b>How to use: </b>Please select the jurisdiction you want to
                compare in the header <b>[Country Name]</b> in the table to see
                the information
              </p>
              <JurisdictionComparison
                data={dataComparison.DataComparison}
                countries={dataComparison.countries}
              />
            </div>
          )}
        </div>
      </Modal>
    </Layout>
  )
}
