import React, { useState, useEffect, Fragment } from 'react'
import { FaCookieBite } from 'react-icons/fa'
import styles from './styles.module.css'

export default function Cookies() {
  const [show, setShow] = useState(false)

  const handleCookiesClick = () => {
    localStorage.setItem('statusPopup', 1)
    localStorage.setItem('expirationCookies', new Date().getTime())
    setShow(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const statusPopup = localStorage.getItem('statusPopup')
      const expirationCookies = localStorage.getItem('expirationCookies')
      if (
        !statusPopup ||
        Number.parseInt(statusPopup) !== 1 ||
        !expirationCookies ||
        new Date().getTime() - expirationCookies > 7 * 86400000
      ) {
        setShow(true)
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return show ? (
    <div className={styles.cookies}>
      <div>
        <p>
          By using our website you consent to all cookies in accordance with our{' '}
          <a href='/hk/privacy-policy' target='_blank' rel='nofollow'>
            Privacy Policy
          </a>
        </p>
        <button onClick={handleCookiesClick} className={styles.cookiesBtn}>
          <FaCookieBite
            size={16}
            style={{ marginRight: '8px', display: 'inline-block' }}
          />
          Accept
        </button>
      </div>
    </div>
  ) : (
    <></>
  )
}
