import style from './styles.module.css'
import React, { useState, useEffect, Fragment } from 'react'
import Layout from '../Layout'
import axios from 'axios'

// onClick button Move to Banking
const moveToBanking = (queryOrderCode) => {
  let data = JSON.parse(window.localStorage.getItem('layout'))
  if (data) {
    data.type = 'banking'
    data.incorp_to_bank = true
    window.localStorage.layout = JSON.stringify(data)
  } else {
    let myData = {
      type: 'banking',
      incorp_to_bank: true
    }
    window.localStorage.setItem('layout', JSON.stringify(myData))
  }
  window.location.href = `/banking-choice?order_code=${queryOrderCode}`
}

// Notification body content
const Success1 = ({ queryOrderCode, buttonMoveToBank }) => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Thank you for entrusting our service at{' '}
        <a
          href='https://test-site.bbcincorp.com/hk'
          rel='nofollow'
          target='_blank'
        >
          bbcincorp.com
        </a>
      </h3>
      <div className={style.Content}>
        <p>
          We have received your order, and a dedicated manager will contact you
          soon to proceed further. An email has been sent to you detailing order
          and payment information for your reference. It also includes login
          account information to access our Company Management Portal.
        </p>
        <p>
          In the meantime, you can log into the account provided to prepare
          necessary documents and complete the KYC procedure in advance.
        </p>
        <p>
          Nevertheless, you can also move to the next step to fill out the
          questionnaire for helping you select your relevant banking partners.
        </p>
      </div>
      <div className={style.Footer}>
        {buttonMoveToBank ? (
          <>
            <button
              className={style.highlightBtn}
              onClick={() => moveToBanking(queryOrderCode)}
            >
              See your banking options
            </button>
            <a href={process.env.NEXT_PUBLIC_DASHBOARD_URL} target='_blank'>
              Move to Portal
            </a>
          </>
        ) : (
          <a
            href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
            target='_blank'
            className={style.highlightBtn}
            style={{ padding: '0' }}
          >
            <button>Move to Portal</button>
          </a>
        )}
      </div>
    </>
  )
}

const Success2 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Congratulation!!! Your payment was successful.
      </h3>
      <div className={style.Content}>
        <p>
          Thank you for entrusting our service at{' '}
          <a
            href='https://test-site.bbcincorp.com/hk'
            rel='nofollow'
            target='_blank'
          >
            bbcincorp.com
          </a>
        </p>
        <p>
          We have received your order, and a dedicated manager will contact you
          soon to proceed further. An email has been sent to you detailing order
          and payment information for your reference. It also includes login
          account information to access our Company Management Portal.
        </p>
        <p>
          In the meantime, you can log into the account provided to prepare
          necessary documents and complete the KYC procedure in advance.
        </p>
      </div>
      <div className={style.Footer}>
        <a
          href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
          target='_blank'
          className={style.highlightBtn}
          style={{ padding: '0' }}
        >
          <button>Move to Portal</button>
        </a>
      </div>
    </>
  )
}

const Success3 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        We’ve recorded your banking selection.
      </h3>
      <div className={style.Content}>
        <p>
          An account manager will contact you shortly to get you onboard and
          give you advice about other banking alternatives should you need one.
        </p>
        <p>
          To follow up the process and complete the KYC, you can now log into
          company management portal with account information already sent to
          your email.
        </p>
      </div>
      <div className={style.Footer}>
        <a
          href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
          target='_blank'
          className={style.highlightBtn}
          style={{ padding: '0' }}
        >
          <button>Move to Portal</button>
        </a>
      </div>
    </>
  )
}

const Success4 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Congratulation!!! Your payment was successful.
      </h3>
      <div className={style.Content}>
        <p>
          Thank you for entrusting our service at{' '}
          <a
            href='https://test-site.bbcincorp.com/hk'
            rel='nofollow'
            target='_blank'
          >
            bbcincorp.com
          </a>
        </p>
        <p>
          An account manager will contact you shortly to get you onboard and
          give you advice about other banking alternatives should you need one.
        </p>
        <p>
          You can now log into <b>Company Management Portal</b> to follow up the
          process and complete the KYC.
        </p>
      </div>
      <div className={style.Footer}>
        <a
          href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
          target='_blank'
          className={style.highlightBtn}
          style={{ padding: '0' }}
        >
          <button>Move to Portal</button>
        </a>
      </div>
    </>
  )
}

const Failure1 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Thank you for entrusting our service at{' '}
        <a
          href='https://test-site.bbcincorp.com/hk'
          rel='nofollow'
          target='_blank'
        >
          bbcincorp.com
        </a>
      </h3>
      <div className={style.Content}>
        <p>
          We are sorry that your payment was not successful yet. It could be
          rejected by some reasons:
        </p>
        <ul>
          <li>• You cancelled the payment;</li>
          <li>• You have entered incorrect card expiration or CVV;</li>
          <li>• Your credit has reached the limit;</li>
          <li>• Computer or network error;</li>
          <li>• Your card has insufficient balance to charge;</li>
        </ul>
        <p>
          An email has been sent to you detailing order summary and payment
          information to help you make payment again.
        </p>
        <p>
          Still, you can make payment directly through this{' '}
          <a href={`/order-information${window.location.search}`}>LINK</a>
        </p>
        <p style={{ marginBottom: '0' }}>
          Please feel free to contact us via{' '}
          <a href='mailto:service@bbcincorp.com'>service@bbcincorp.com</a> if
          you have any further questions or concerns.
        </p>
      </div>
    </>
  )
}

const Failure2 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Thank you for entrusting our service at{' '}
        <a
          href='https://test-site.bbcincorp.com/hk'
          rel='nofollow'
          target='_blank'
        >
          bbcincorp.com
        </a>
      </h3>
      <div className={style.Content}>
        <p>
          We are sorry that your payment was not successful yet. It could be
          rejected by some reasons:
        </p>
        <ul>
          <li>• You cancelled the payment;</li>
          <li>• You have entered incorrect card expiration or CVV;</li>
          <li>• Your credit has reached the limit;</li>
          <li>• Computer or network error;</li>
          <li>• Your card has insufficient balance to charge;</li>
        </ul>
        <p>
          An email has been sent to you detailing order summary and payment
          information to help you make payment again.
        </p>
        <p style={{ marginBottom: '0' }}>
          Still, you can make payment directly through this{' '}
          <a href={`/order-information${window.location.search}`}>LINK</a>
        </p>
      </div>
    </>
  )
}

const Pending1 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Thank you for entrusting our service at{' '}
        <a
          href='https://test-site.bbcincorp.com/hk'
          rel='nofollow'
          target='_blank'
        >
          bbcincorp.com
        </a>
      </h3>
      <div className={style.Content}>
        <p>
          We have received your order, and a dedicated manager will contact you
          soon to proceed further.An email has been sent to you detailing order
          and payment information for your reference.Please arrange your payment
          for the service charge according to one of the methods listed in the
          email.
        </p>
        <p style={{ marginBottom: '0' }}>
          Still, you can make payment directly through this{' '}
          <a href={`/order-information${window.location.search}`}>LINK</a>
        </p>
      </div>
    </>
  )
}

const Pending2 = ({ queryOrderCode, buttonMoveToBank }) => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Thank you for entrusting our service at{' '}
        <a
          href='https://test-site.bbcincorp.com/hk'
          rel='nofollow'
          target='_blank'
        >
          bbcincorp.com
        </a>
      </h3>
      <div className={style.Content}>
        <p>
          We have received your order, and a dedicated manager will contact you
          soon to proceed further. An email has been sent to you detailing order
          and payment information for your reference. Please arrange your
          payment for the service charge according to one of the methods listed
          in the email.
        </p>
        <p>
          Still, you can make payment directly through this{' '}
          <a href={`/order-information${window.location.search}`}>LINK</a>
        </p>
        <p>
          Nevertheless, you can also move to the next step to fill out the
          questionnaire for helping you select your relevant banking partners.
        </p>
      </div>
      {buttonMoveToBank && (
        <div className={style.Footer}>
          <button
            className={style.highlightBtn}
            onClick={() => moveToBanking(queryOrderCode)}
          >
            See your banking options
          </button>
        </div>
      )}
    </>
  )
}

const Pending3 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        Thank you for entrusting our service at{' '}
        <a
          href='https://test-site.bbcincorp.com/hk'
          rel='nofollow'
          target='_blank'
        >
          bbcincorp.com
        </a>
      </h3>
      <div className={style.Content}>
        <p>
          An email has been sent to you detailing order information for your
          reference.Please arrange your payment for the service charge according
          to one of the methods listed in the email. Or you can also make
          payment directly through this{' '}
          <a href={`/order-information${window.location.search}`}>LINK</a>
        </p>
        <p style={{ marginBottom: '0' }}>
          An account manager will contact you shortly to get you onboard and
          give you advice about other banking alternatives should you need one.
        </p>
      </div>
    </>
  )
}

const Pending4 = () => {
  return (
    <>
      <h3 className={`${style.Title}`}>
        We’ve recorded your banking selection.
      </h3>
      <div className={style.Content}>
        <p style={{ marginBottom: '0' }}>
          An account manager will contact you shortly to get you onboard and
          give you advice about other banking alternatives should you need one.
        </p>
      </div>
    </>
  )
}

// get body content from url
const getBody = (pathname, data, queryOrderCode) => {
  let isCheckIncorp = JSON.parse(window.localStorage.getItem('layout'))
  if (isCheckIncorp && isCheckIncorp?.incorp_to_bank === true) {
    if (pathname === '/payment-success' && data.order_status_id == 1) {
      return <Success3 />
    }
    if (pathname === '/payment-pending' && data.order_status_id == 0) {
      return <Pending4 />
    }
  } else {
    if (pathname === '/payment-success' && data.order_status_id == 1) {
      if (
        data.OrderItems[0].service_id == 1670 &&
        data.OrderItems[0].Package == null
      ) {
        return <Success4 />
      } else {
        let country_id = data.Company.Country.id
        let package_type_id = data.PackageItems[0].Package.package_type_id
        if (country_id != 191) {
          if (
            package_type_id == 1 ||
            package_type_id == 4 ||
            package_type_id == 5 ||
            package_type_id == 6 ||
            package_type_id == 7 ||
            package_type_id == 8
          ) {
            return <Success2 />
          } else if (package_type_id == 2 || package_type_id == 3) {
            return (
              <Success1
                queryOrderCode={queryOrderCode}
                buttonMoveToBank={data?.Banks.length > 0 ? false : true}
              />
            )
          }
        } else {
          if (package_type_id == 14 || package_type_id == 15) {
            return (
              <Success1
                queryOrderCode={queryOrderCode}
                buttonMoveToBank={data?.Banks.length > 0 ? false : true}
              />
            )
          } else if (package_type_id == 12 || package_type_id == 13) {
            return <Success2 />
          }
        }
      }
    } else if (pathname === '/payment-failure') {
      if (
        data.OrderItems[0].service_id == 1670 &&
        data.OrderItems[0].Package == null
      ) {
        return <Failure2 />
      } else {
        return <Failure1 />
      }
    } else if (pathname === '/payment-pending' && data.order_status_id == 0) {
      if (
        data.OrderItems[0].service_id == 1670 &&
        data.OrderItems[0].Package == null
      ) {
        return <Pending3 />
      } else {
        let country_id = data.Company.Country.id
        let package_type_id = data.PackageItems[0].Package.package_type_id
        if (country_id != 191) {
          if (
            package_type_id == 1 ||
            package_type_id == 4 ||
            package_type_id == 5 ||
            package_type_id == 6 ||
            package_type_id == 7 ||
            package_type_id == 8
          ) {
            return <Pending1 />
          } else if (package_type_id == 2 || package_type_id == 3) {
            return (
              <Pending2
                queryOrderCode={queryOrderCode}
                buttonMoveToBank={data?.Banks.length > 0 ? false : true}
              />
            )
          }
        } else {
          if (package_type_id == 14 || package_type_id == 15) {
            return (
              <Pending2
                queryOrderCode={queryOrderCode}
                buttonMoveToBank={data?.Banks.length > 0 ? false : true}
              />
            )
          } else if (package_type_id == 12 || package_type_id == 13) {
            return <Pending1 />
          }
        }
      }
    }
  }
  window.location.href = '/register'
}

export default function OnboardingNotification() {
  const [data, setData] = useState()

  const pathname = location.pathname
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
  const queryOrderCode = getUrlVars()['order_code']
  useEffect(() => {
    if (window.location) {
      if (queryOrderCode) {
        axios
          .get(
            `https://core.test-lp.bbcincorp.com/api/onboarding/order/${queryOrderCode}`
          )
          .then((result) => setData(result?.data?.data))
          .catch((error) => (window.location.href = '/register'))
      } else {
        window.location.href = '/register'
      }
    }
  }, [queryOrderCode])
  return (
    <Layout>
      <div>
        <div className='d-none d-lg-block' style={{ height: '50px' }}></div>
        {pathname && data && getBody(pathname, data, queryOrderCode)}
      </div>
      <div style={{ color: '#717171' }}>
        Rate us on{' '}
        <a
          href='https://www.trustpilot.com/review/bbcincorp.com'
          target='_blank'
          style={{ fontWeight: '500', fontSize: '1.25rem' }}
        >
          TRUSTPILOT
        </a>
      </div>
    </Layout>
  )
}
