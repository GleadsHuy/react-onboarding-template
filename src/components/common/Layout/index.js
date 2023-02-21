import React, { useState, useEffect, createContext, Fragment } from 'react'

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
import Title from '../Title'
import Cookies from './Cookies'
import logoImg from 'assets/logo.svg'
import logotextImg from 'assets/logo-text.svg'
import obdIncorpImg from 'assets/obd-incorporation.svg'
import onboardingIncorpImg from 'assets/onboarding-incorp.png'
import leftObdImg from 'assets/bg-left-obd.png'
import menuNavImg from 'assets/menu-nav.png'

/**
 * styles
 */
import styles from './styles.module.css'

/**
 * dataJson
 */
import dataJson from './data.json'

/** ========== */

export const OnboardingContext = React.createContext({})

export default function Layout({ head, fatf, pattern, children }) {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

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

  const queryPromotionCode = getUrlVars()['promotion_code']
  const queryDate = getUrlVars()['date']
  const queryType = getUrlVars()['type']
  const queryOrderCode = getUrlVars()['order_code']

  const slug = window.location.pathname.split('/').join('')

  const getQueryCode = () => {
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
  }, [isIncorpToBank])
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
          // router.push(pathName)
          location.href = pathName
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
        <ul>
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
              <li key={index} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex' }}>
                  <div
                    className={`${styles.dot} ${
                      activeParent
                        ? styles.dotPrimary
                        : successStep
                        ? styles.dotSuccess
                        : ''
                    } ${styles.dotStyles}`}
                  >
                    {successStep && (
                      <IconContext.Provider
                        value={{ color: 'white' }}
                        style={{ position: 'absolute' }}
                      >
                        <BsCheckLg size={`10px`} />
                      </IconContext.Provider>
                    )}
                  </div>
                  <span
                    style={{ marginLeft: '16px' }}
                    className={` ${
                      activeParent
                        ? styles.textPrimary
                        : successStep
                        ? styles.textSuccess
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
                    <ul style={{ paddingLeft: '32px', marginBottom: '0' }}>
                      {item.sub_step.map((item, index) => (
                        <li key={index} className={`${styles.child}`}>
                          <div style={{ display: 'flex' }}>
                            <span
                              className={`${
                                item.slug && item.slug.includes(slug)
                                  ? styles.textPrimary
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
    <>
      {/* <Head>
        {head?.title && <title>{head?.title}</title>}
        {head?.description && (
          <meta name='description' content={head?.description} />
        )}
      </Head> */}
      <OnboardingContext.Provider value={{ dataOrder: dataOrder }}>
        <div className={`${styles.onboarding} ${styles.onboardingContainer}`}>
          <div className={`${styles.sidebar}`}>
            <div className={`${styles.sidebarContainer}`}>
              <div
                style={{
                  zIndex: 50,
                  position: 'relative'
                }}
              >
                <a
                  href='https://bbcincorp.com/hk'
                  className={`${styles.linkToHomepage}`}
                  target='_blank'
                >
                  <img
                    src={logoImg}
                    alt='logo'
                    className={`${styles.logo}`}
                    style={{
                      filter: `${!isStep ? 'brightness(0) invert(1)' : ''}`
                    }}
                  />
                  <img
                    src={logotextImg}
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
                      <Title
                        text={`${
                          isPay
                            ? 'Thank you for choosing our service'
                            : 'A fast and better way to kickstart your business ventures globally'
                        }`}
                        as='h1'
                        className={`${styles.sidebarTitle}`}
                      />
                      <p className={`${styles.sidebarDescription}`}>
                        {isPay
                          ? 'If you couldn’t pay the package or item, please contact us for help. Our team are always ready to support.'
                          : 'Simple, frictionless and easy-to-use platform to help you start your company in minutes.'}
                      </p>
                    </div>
                    {location && queryPromotionCode ? (
                      <div className={styles.promotionCodeWrapper}>
                        <div className={styles.percent}>5%</div>
                        <div style={{ color: '#007eff' }}>
                          Discount Is Here.
                        </div>
                        <div>Start Your Company With Us!</div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
                <Progress />
              </div>
              <div
                className={styles.backgroundWrapper}
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
                      : isFirstScreen || isPay
                      ? obdIncorpImg
                      : onboardingIncorpImg
                    // : `/onboarding/custom-public/onboarding/images/items/${
                    //     isFirstScreen || isPay
                    //       ? 'obd-incorporation.svg'
                    //       : 'onboarding-incorp.png'
                    // }`
                  }
                  className={styles.backgroundImg}
                  alt='pattern'
                />
              </div>
              {!isStep && (
                <div className={styles.stepImg}>
                  <img
                    src={leftObdImg}
                    alt='bg-left-obd'
                    className={styles.leftObdImg}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.mainBg}>
              <div
                className={`${styles.mainContainer}`}
                // className={`${styles.mainContainer} position-relative`}
                style={{
                  zIndex: 50
                }}
              >
                {/** Navbar */}
                <div
                  className={`${styles.navBar} ${
                    show ? styles.bgWhite : isFirstScreen ? '' : styles.bgWhite
                  }`}
                  style={{
                    boxShadow: show
                      ? 'initial'
                      : isFirstScreen
                      ? 'initial'
                      : '0 0 8px rgb(65 65 65 / 25%)'
                  }}
                >
                  <div className={`${styles.navBarContainer}`}>
                    <div className={styles.navBarWrapper}>
                      <div style={{ flex: '0 0 auto' }}>
                        <div style={{ display: 'flex' }}>
                          <a
                            href='https://bbcincorp.com/hk'
                            className={styles.linkToHomepage}
                            target='_blank'
                          >
                            <img
                              src={logoImg}
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
                              src={logotextImg}
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
                      <div style={{ flex: '0 0 auto' }}>
                        {show ? (
                          <button
                            className={styles.expandMenuBtn}
                            onClick={handleShow}
                          >
                            <VscChromeClose size={`1.75rem`} />
                          </button>
                        ) : (
                          <button
                            className={styles.expandMenuBtn}
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
                  className={`${styles.navBarPannel} ${
                    show ? styles.navBarPannelOpen : ''
                  }`}
                >
                  <div className={`${styles.navBarPannelContainer}`}>
                    {!isStep ? (
                      <div className={styles.navBarImageWrapper}>
                        <div style={{ flex: '0 0 auto' }}>
                          <div className={styles.menuNavImg}>
                            <img src={menuNavImg} alt='menu nav' />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.navBarWrapper}>
                        <div className={styles.navBarPannelTitleWrapper}>
                          <div className={`${styles.navBarPannelTitle}`}>
                            Progress
                          </div>
                          <Progress style={{ marginTop: '16px' }} />
                        </div>
                      </div>
                    )}
                    <div className={styles.navBarPannelWrapper}>
                      <div className={styles.navBarPannelTitleWrapper}>
                        <div className={`${styles.navBarPannelTitle}`}>
                          Contact us
                        </div>
                        <div className={`${styles.navBarPannelTextContact}`}>
                          <div className={styles.linkWrapper}>
                            <div
                              className={styles.colItem}
                              style={{ flex: '0 0 auto' }}
                            >
                              Skype:
                            </div>
                            <div
                              className={styles.colItem}
                              style={{ flex: '0 0 auto', textAlign: 'right' }}
                            >
                              <a
                                href='skype:live:bbcincorp?chat'
                                rel='nofollow'
                              >
                                live:bbcincorp
                              </a>
                            </div>
                          </div>
                          <div
                            className={styles.linkWrapper}
                            style={{
                              marginTop: '4px'
                            }}
                          >
                            <div
                              className={styles.colItem}
                              style={{ flex: '0 0 auto' }}
                            >
                              Email:
                            </div>
                            <div
                              className={styles.colItem}
                              style={{ flex: '0 0 auto', textAlign: 'right' }}
                            >
                              <a
                                href='mailto:service@bbcincorp.com'
                                rel='nofollow'
                                target='_blank'
                              >
                                service@bbcincorp.com
                              </a>
                            </div>
                          </div>
                          <div
                            className={styles.linkWrapper}
                            style={{
                              marginTop: '4px'
                            }}
                          >
                            <div
                              className={styles.colItem}
                              style={{ flex: '0 0 auto' }}
                            >
                              Phone number:
                            </div>
                            <div
                              className={styles.colItem}
                              style={{ flex: '0 0 auto', textAlign: 'right' }}
                            >
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
                    <div style={{ marginTop: '32px' }}>
                      <p
                        className={`${styles.navBarPannelTextSmall}`}
                        style={{ marginBottom: '8px' }}
                      >
                        Ver 1.0
                      </p>
                      <p
                        className={`${styles.navBarPannelTextSmall}`}
                        style={{ marginBottom: '0' }}
                      >
                        Copyright of BBCIncorp
                      </p>
                    </div>
                  </div>
                </div>
                {/** Children */}
                {children}
              </div>
              <div
                className={styles.firstScreenMb1}
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
                      : isFirstScreen || isPay
                      ? obdIncorpImg
                      : onboardingIncorpImg
                  }
                  style={{ width: '100%', height: 'auto' }}
                  alt='pattern'
                />
              </div>
              {isFirstScreen && (
                <div className={styles.firstScreenMb}>
                  <img
                    src={leftObdImg}
                    alt='bg-left-obd'
                    style={{
                      width: '100%',
                      height: '100%',
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
      <Cookies />
    </>
  )
}
