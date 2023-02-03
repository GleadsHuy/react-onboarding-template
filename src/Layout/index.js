import React, { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

/**
 * vendor
 */
import { IconContext } from 'react-icons'
import { BsCheckLg } from 'react-icons/bs'
import { VscMenu, VscChromeClose } from 'react-icons/vsc'
import axios from 'axios'

/**
 * components
 */
import Title from 'components/onboarding/atoms/Title'
/**
 * styles
 */
import styles from './Styles.module.scss'

/**
 * dataJson
 */
import dataJson from './data.json'

/** ========== */

export const OnboardingContext = createContext()

const Component = ({ head, fatf, pattern, children }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  const router = useRouter()
  const slug = router.pathname.split('/onboarding').join('').split('/').join('')

  const getQueryCode = (router) => {
    let queryCode = ''
    let promotionCode = router.query.promotion_code
    let date = router.query.date
    let type = router.query.type
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

  const getQueryCodeChristmas = () => {
    const queryChristmas = localStorage.getItem('type-christmas')
    if (queryChristmas) {
      return queryChristmas
    } else {
      return ''
    }
  }
  /**
   * Data
   */
  const [dataOnboarding, setDataOnboarding] = useState({})
  const [dataOrder, setDataOrder] = useState({})
  const [type, setType] = useState()
  const isFirstScreen = slug == 'register' ? (!fatf ? true : false) : false
  const [isStep, setIsStep] = useState(
    slug !== 'register' && slug !== 'select-service'
  )
  const [isPay, setIsPay] = useState(false)
  const [isIncorpToBank, setIsIncorpToBank] = useState(false)

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('data_onboarding'))
    setDataOnboarding(data)

    const layout = JSON.parse(window.localStorage.getItem('layout'))
    setType(layout?.type ? layout?.type : null)
    setIsIncorpToBank(layout?.incorp_to_bank)

    if (router.isReady && router.query.order_code) {
      let orderCode = router.query.order_code
      let urlApi = ''
      let queryCode = getQueryCode(router)
      let queryCodeChristmas = getQueryCodeChristmas()
      if (queryCode.length > 0) {
        urlApi = `${process.env.NEXT_PUBLIC_ORDER_API_ENDPOINT}/api/onboarding/order/${orderCode}?${queryCode}`
      } else if (queryCodeChristmas.length > 0) {
        urlApi = `${
          process.env.NEXT_PUBLIC_ORDER_API_ENDPOINT
        }/api/onboarding/order/${orderCode + queryCodeChristmas}`
      } else {
        urlApi = `${process.env.NEXT_PUBLIC_ORDER_API_ENDPOINT}/api/onboarding/order/${orderCode}`
      }
      axios.get(urlApi).then((res) => {
        let data = res.data.data
        setDataOrder(data)
        let pay =
          slug == 'order-information' &&
          (data.order_status_id || data.payment_gateway_id)
        setIsPay(pay)
        setIsStep(!pay)

        /**
         * Set type layout
         */
        if (
          [
            'order-information',
            'payment-success',
            'payment-pending',
            'payment-failure'
          ].includes(slug)
        ) {
          setType(
            data?.OrderItems[0]?.service_id === 1670 &&
              data?.OrderItems[0]?.Package === null
              ? 'banking'
              : isIncorpToBank
              ? 'banking'
              : 'incorporation'
          )
        }
      })
    }
  }, [router, isIncorpToBank])

  useEffect(() => {
    const detech = () => {
      const mediaQuery = window.matchMedia('(min-width: 992px)')
      let body = document.querySelector('body')
      body.style.overflowY = mediaQuery.matches
        ? 'auto'
        : show
        ? 'hidden'
        : 'auto'
    }
    detech()
    window.addEventListener('resize', () => {
      detech()
    })
  }, [show])

  /**
   * List Menu
   */
  var listMenu = []
  if (type) {
    let countryId = dataOrder?.Company?.Country?.id
    let listMenuType = isIncorpToBank
      ? dataJson.listMenu[type].filter((item, index) =>
          item && (countryId === 191 || countryId === 237 || countryId === 250)
            ? index !== 0 && index !== 2
            : index !== 0
        )
      : dataJson.listMenu[type]
    let listMenuPayment = isIncorpToBank
      ? dataJson.listMenu.payment.filter((item, index) => item && index !== 0)
      : dataJson.listMenu.payment
    listMenu = [...listMenuType, ...listMenuPayment]
  }

  /**
   * Redirect
   */
  useEffect(() => {
    if (!dataOnboarding) {
      if (
        ![
          'order-information',
          'payment-success',
          'payment-pending',
          'payment-failure'
        ].includes(slug)
      ) {
        let pathName = '/register'
        // if (!type) router.push(pathName);
        // if (
        //   type === "incorporation" ||
        //   (type === "banking" && slug === "banking-package")
        // ) {

        // }
        if (
          [
            'incorporation-country',
            'incorporation-company-type',
            'incorporation-entity-name-check',
            'incorporation-package',
            'incorporation-additional-service',
            'banking-package'
          ].includes(slug)
        ) {
          router.push(pathName)
        }
      }
    }
  }, [dataOnboarding])

  /**
   * Progress
   */
  const Progress = ({ ...props }) => {
    let activeParent = false
    let successStep = true
    return isStep ? (
      <div {...props} className={`${styles.progress} ${props.className}`}>
        <ul className='mb-0'>
          {listMenu.map((item, index) => {
            if (
              (item.slug && item.slug.includes(slug)) ||
              (item.sub_step &&
                _.find(item.sub_step, function (i) {
                  return i.slug.includes(slug)
                }))
            ) {
              activeParent = true
              successStep = false
            } else {
              activeParent = false
            }
            return (
              <li key={index} className='mb-3'>
                <div className='d-flex'>
                  <div
                    className={`${styles.dot} ${
                      activeParent
                        ? 'bg-primary'
                        : successStep
                        ? 'bg-success'
                        : ''
                    } position-relative d-inline-flex align-items-center justify-content-center rounded-circle`}
                  >
                    {successStep && (
                      <IconContext.Provider
                        value={{ color: 'white' }}
                        className='position-absolute'
                      >
                        <BsCheckLg size={`10px`} />
                      </IconContext.Provider>
                    )}
                  </div>
                  <span
                    className={`ml-3 ${
                      activeParent
                        ? 'text-primary'
                        : successStep
                        ? 'text-success'
                        : ''
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                {item.sub_step &&
                  _.find(item.sub_step, function (i) {
                    return i.slug.includes(slug)
                  }) && (
                    <ul className='pl-5 mb-0'>
                      {item.sub_step.map((item, index) => (
                        <li key={index} className={`${styles.child}`}>
                          <div className='d-flex'>
                            <span
                              className={`${
                                item.slug && item.slug.includes(slug)
                                  ? 'text-primary'
                                  : ''
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            )
          })}
        </ul>
      </div>
    ) : (
      <></>
    )
  }

  return (
    <div>
      <OnboardingContext.Provider value={{ dataOrder: dataOrder }}>
        <div
          className={`${styles.onboarding} position-relative row justify-content-end w-100 no-gutters`}
        >
          <div className={`${styles.sidebar} col-auto position-fixed`}>
            <div className={`${styles.sidebarContainer} position-relative`}>
              <div
                className='position-relative'
                style={{
                  zIndex: 50
                }}
              >
                <a
                  href='/hk'
                  className='d-inline-flex align-items-center'
                  target='_blank'
                >
                  <img
                    src='/onboarding/custom-public/onboarding/images/logo.svg'
                    alt='logo'
                    className={`${styles.logo}`}
                    style={{
                      filter: `${!isStep ? 'brightness(0) invert(1)' : ''}`
                    }}
                  />
                  <img
                    src='/onboarding/custom-public/onboarding/images/logo-text.svg'
                    alt='logo text'
                    className={`${styles.logoText}`}
                    style={{
                      filter: `${!isStep ? 'brightness(0) invert(1)' : ''}`
                    }}
                  />
                </a>
                {!isStep && (
                  <div
                    style={{
                      maxWidth: '28rem'
                    }}
                  >
                    <div>
                      <h1 className={`${styles.sidebarTitle} text-white`}>
                        {isPay
                          ? 'Thank you for choosing our service'
                          : 'A fast and better way to kickstart your business ventures globally'}
                      </h1>
                      <p
                        className={`${styles.sidebarDescription} mb-0 text-white`}
                      >
                        {isPay
                          ? 'If you couldn’t pay the package or item, please contact us for help. Our team are always ready to support.'
                          : 'Simple, frictionless and easy-to-use platform to help you start your company in minutes.'}
                      </p>
                    </div>
                    {router.isReady && router.query.promotion_code ? (
                      <div
                        className='bg-white p-3 p-lg-4 mt-5'
                        style={{
                          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
                          borderRadius: '16px',
                          fontWeight: 500,
                          fontSize: '24px',
                          lineHeight: '32px',
                          color: '#39374E'
                        }}
                      >
                        <div
                          className='d-inline-block text-white bg-primary py-2 px-4 mb-3'
                          style={{
                            fontWeight: 500,
                            fontSize: '30px',
                            lineHeight: '38px',
                            borderRadius: '8px'
                          }}
                        >
                          5%
                        </div>
                        <div className='text-primary'>Discount Is Here.</div>
                        <div>Start Your Company With Us!</div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
                <Progress />
              </div>
              <div
                className='position-absolute w-100 h-auto'
                style={{
                  bottom: 0,
                  left: 0,
                  zIndex: 10,
                  mixBlendMode:
                    isFirstScreen || isPay ? 'initial' : 'luminosity'
                }}
              >
                <img
                  src={
                    pattern?.desktop
                      ? pattern?.desktop
                      : `/onboarding/custom-public/onboarding/images/items/${
                          isFirstScreen || isPay
                            ? 'obd-incorporation.svg'
                            : 'onboarding-incorp.png'
                        }`
                  }
                  className='w-100 h-auto'
                  alt='pattern'
                />
              </div>
              {!isStep && (
                <div
                  className='position-absolute w-100 h-100'
                  style={{
                    top: 0,
                    left: 0,
                    zIndex: 0
                  }}
                >
                  <img
                    src='/onboarding/custom-public/onboarding/images/items/bg-left-obd.png'
                    className='w-100 h-100'
                    alt='bg-left-obd'
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'right top'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={`${styles.main} col-auto`}>
            <div
              className='position-relative'
              style={{
                backgroundColor: '#fcfcfc'
              }}
            >
              <div
                className={`${styles.mainContainer} d-flex flex-column justify-content-between position-relative`}
                // className={`${styles.mainContainer} position-relative`}
                style={{
                  zIndex: 50
                }}
              >
                {/** Navbar */}
                <div
                  className={`${
                    styles.navBar
                  } d-flex d-lg-none align-items-center position-fixed ${
                    show ? 'bg-white' : isFirstScreen ? '' : 'bg-white'
                  }`}
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1040,
                    boxShadow: show
                      ? 'initial'
                      : isFirstScreen
                      ? 'initial'
                      : '0 0 8px rgb(65 65 65 / 25%)'
                  }}
                >
                  <div className={`${styles.navBarContainer} w-100`}>
                    <div className='row justify-content-between'>
                      <div className='col-auto'>
                        <div className='d-flex'>
                          <a
                            href='/hk'
                            className='d-inline-flex align-items-center'
                            target='_blank'
                          >
                            <img
                              src='/onboarding/custom-public/onboarding/images/logo.svg'
                              alt='logo'
                              className={`${styles.logo}`}
                              style={{
                                filter: `${
                                  show
                                    ? ''
                                    : isFirstScreen
                                    ? 'brightness(0) invert(1)'
                                    : ''
                                }`
                              }}
                            />
                            <img
                              src='/onboarding/custom-public/onboarding/images/logo-text.svg'
                              alt='logo text'
                              className={`${styles.logoText}`}
                              style={{
                                filter: `${
                                  show
                                    ? ''
                                    : isFirstScreen
                                    ? 'brightness(0) invert(1)'
                                    : ''
                                }`
                              }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className='col-auto'>
                        {show ? (
                          <button
                            className='btn p-0'
                            style={{
                              outline: 'none',
                              boxShadow: 'none'
                            }}
                            onClick={handleShow}
                          >
                            <VscChromeClose size={`1.75rem`} />
                          </button>
                        ) : (
                          <button
                            className='btn p-0'
                            style={{
                              outline: 'none',
                              boxShadow: 'none'
                            }}
                            onClick={handleShow}
                          >
                            <IconContext.Provider
                              value={{
                                color: isFirstScreen ? 'white' : ''
                              }}
                            >
                              <VscMenu size={`1.75rem`} />
                            </IconContext.Provider>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    styles.navBarPannel
                  } position-fixed bg-white w-100 ${
                    show ? styles.navBarPannelOpen : ''
                  }`}
                  style={{
                    top: 0,
                    left: 0,
                    zIndex: 1030,
                    height: '100vh'
                  }}
                >
                  <div
                    className={`${styles.navBarPannelContainer} d-flex flex-column justify-content-between h-100`}
                  >
                    {!isStep ? (
                      <div className='row justify-content-center'>
                        <div className='col-auto'>
                          <div
                            className='mx-auto'
                            style={{
                              maxWidth: '280px'
                            }}
                          >
                            <img
                              src='/onboarding/custom-public/onboarding/images/items/menu-nav.png'
                              alt='menu nav'
                              className='w-100'
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='row justify-content-center'>
                        <div className='col-auto col-sm-8 col-md-6'>
                          <div
                            className={`${styles.navBarPannelTitle} text-center`}
                          >
                            Progress
                          </div>
                          <Progress className='mt-3' />
                        </div>
                      </div>
                    )}
                    <div className='row justify-content-center mt-5'>
                      <div className='col-auto col-sm-8 col-md-6'>
                        <div
                          className={`${styles.navBarPannelTitle} text-center`}
                        >
                          Contact us
                        </div>
                        <div
                          className={`${styles.navBarPannelTextContact} mt-3`}
                        >
                          <div className='row justify-content-between'>
                            <div className='col-auto'>Skype:</div>
                            <div className='col-auto text-right'>
                              <a
                                href='skype:live:bbcincorp?chat'
                                rel='nofollow'
                              >
                                live:bbcincorp
                              </a>
                            </div>
                          </div>
                          <div className='row justify-content-between mt-1'>
                            <div className='col-auto'>Email:</div>
                            <div className='col-auto text-right'>
                              <a
                                href='mailto:service@bbcincorp.com'
                                rel='nofollow'
                                target='_blank'
                              >
                                service@bbcincorp.com
                              </a>
                            </div>
                          </div>
                          <div className='row justify-content-between mt-1'>
                            <div className='col-auto'>Phone number:</div>
                            <div className='col-auto text-right'>
                              <div>
                                <a href='tel:+85281928666' rel='nofollow'>
                                  (+852) 8192 8666
                                </a>
                              </div>
                              <div>
                                <a href='tel:+6531381666' rel='nofollow'>
                                  (+65) 3138 1666
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <p className={`${styles.navBarPannelTextSmall} mb-2`}>
                        Ver 1.0
                      </p>
                      <p className={`${styles.navBarPannelTextSmall} mb-0`}>
                        Copyright of BBCIncorp
                      </p>
                    </div>
                  </div>
                </div>
                {/** Children */}
                {children}
              </div>
              <div
                className='position-fixed w-100 h-auto d-block d-lg-none'
                style={{
                  bottom: 0,
                  left: 0,
                  zIndex: 10,
                  transform:
                    isFirstScreen || isPay ? 'translateY(25%)' : 'initial',
                  opacity: pattern?.mobile ? 1 : 0.4
                }}
              >
                <img
                  src={
                    pattern?.mobile
                      ? pattern?.mobile
                      : `/onboarding/custom-public/onboarding/images/items/${
                          isFirstScreen || isPay
                            ? 'obd-incorporation.svg'
                            : 'onboarding-incorp.png'
                        }`
                  }
                  className='w-100 h-auto'
                  alt='pattern'
                />
              </div>
              {isFirstScreen && (
                <div
                  className='position-fixed w-100 h-100 d-block d-lg-none'
                  style={{
                    top: 0,
                    left: 0,
                    zIndex: 0
                  }}
                >
                  <img
                    src='/onboarding/custom-public/onboarding/images/items/bg-left-obd.png'
                    className='w-100 h-100'
                    alt='bg-left-obd'
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'right top'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </OnboardingContext.Provider>
    </div>
  )
}

export default Component

Component.propTypes = {
  head: PropTypes.object,
  fatf: PropTypes.bool,
  pattern: PropTypes.object
}

Component.defaultProps = {
  head: {},
  fatf: false,
  pattern: {}
}

/** ========== */
