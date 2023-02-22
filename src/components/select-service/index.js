import styles from './styles.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bankingImg from 'assets/banking.png'
import incorpImg from 'assets/incorporation.png'
import Layout from '../common/Layout'
import obdIncorp2Img from 'assets/obd-incorporation-2.png'
import tabletBuildImg from 'assets/bg-tablet-build.svg'

export default function SelectService(params) {
  const [promotion, setPromotion] = useState(false)
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

  const querySignature = getUrlVars()['signature']
  const queryPromotionCode = getUrlVars()['promotion_code']

  const handleClick = (type) => {
    window.localStorage.setItem('layout', JSON.stringify({ type: type }))
    if (type === 'incorporation') {
      let data = JSON.parse(window.localStorage.getItem('customer'))
      window.localStorage.setItem(
        'customer',
        JSON.stringify({ ...data, promotion_code: queryPromotionCode })
      )
    } else {
      let customer = JSON.parse(window.localStorage.getItem('customer'))
      if (customer?.signature?.signature) {
        axios.put(
          `https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer?.signature?.signature}`,
          {
            contact_from_id: 48
          }
        )
      }
    }
  }

  useEffect(() => {
    let data_onboarding = JSON.parse(
      window.localStorage.getItem('data_onboarding')
    )
    if (window.location) {
      let data_customer = JSON.parse(window.localStorage.getItem('customer'))
      if (data_customer && data_customer.promotion_code) {
        delete data_customer.promotion_code
        window.localStorage.setItem('customer', JSON.stringify(data_customer))
      }
      if (querySignature && queryPromotionCode) {
        axios
          .get(
            `https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${window.location.search.signature}`
          )
          .then((response) => {
            let myData = {
              first_name: response?.data?.data?.first_name || '',
              email: response?.data?.data?.email || '',
              signature: {
                signature: response?.data?.data?.signature
              }
            }
            window.localStorage.setItem('customer', JSON.stringify(myData))
            window.localStorage.setItem(
              'data_onboarding',
              JSON.stringify({ incorporation: null, banking: null })
            )
            setPromotion(true)
          })
          .catch((error) => console.log(error))
      } else {
        if (!data_onboarding) {
          window.location.href = '/register'
        }
      }
    }
  }, [querySignature, queryPromotionCode])

  return (
    <Layout pattern={{ desktop: obdIncorp2Img, mobile: tabletBuildImg }}>
      <section className={styles.SelectServiceScreen}>
        <a
          href='/register'
          className={`${styles.Link} ${styles.Header} ${styles.btn_back_top}`}
        >
          Back
        </a>
        <h2 className={styles.selectTitle}>
          Select service you want to proceed
        </h2>
        <div className={styles.Body}>
          <p className={styles.descriptionText}>
            Incorporation packages already entail banking option. Should you
            need banking support only, kindly select Banking.
          </p>
          <div
            className={styles.selecttype_container}
            style={{ marginLeft: '-23px', marginRight: '-23px' }}
          >
            <div className={styles.select_type}>
              <a
                style={{ border: `none`, textDecoration: `none` }}
                href='/incorporation-country'
              >
                <button
                  className={styles.Package}
                  style={{
                    cursor: `pointer`,
                    boxShadow: '0 2px 8px rgb(201 201 201 / 25%)',
                    width: `100%`
                  }}
                  onClick={() => handleClick('incorporation')}
                >
                  {promotion && <div className={styles.promotion}>-5%</div>}
                  <img src={incorpImg} alt='incorporation' />
                  <h3>INCORPORATION</h3>
                  <p className={styles.arrowCircle}>{'\u2192'}</p>
                </button>
              </a>
            </div>
            <div className={styles.select_type}>
              <a
                style={{ position: `relative`, textDecoration: `none` }}
                href='/banking-package'
              >
                <button
                  className={styles.Package}
                  style={{
                    cursor: `pointer`,
                    boxShadow: '0 2px 8px rgb(201 201 201 / 25%)',
                    width: `100%`
                  }}
                  onClick={() => handleClick('banking')}
                >
                  <img src={bankingImg} alt='banking' />
                  <h3>BANKING</h3>
                  <p className={styles.arrowCircle}>{'\u2192'}</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <a
        href='/register'
        className={`${styles.Link} ${styles.btn_back_bottom}`}
      >
        Back
      </a>
    </Layout>
  )
}
