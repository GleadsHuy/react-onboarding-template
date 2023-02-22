import React, { useState, useEffect, Fragment } from 'react'
import FatfScreen from './FatfScreen'
import RegisterScreen from './RegisterScreen'
import data from './data.json'
import styles from './styles.module.css'

export default function Register({ isTypeChristmas }) {
  const [fatfScreen, setFatfScreen] = useState(true)
  // const [isTypeChristmas, setIsTypeChristmas] = useState(false);

  const onReceiveData = (value) => {
    setFatfScreen(value)
  }
  const receiveData = () => {
    setFatfScreen(false)
    onReceiveData(false)
    localStorage.setItem('setExpirationDateObd', new Date().getTime())
  }

  useEffect(() => {
    let hours = 24
    let now = new Date().getTime()
    let expirationDateObd = localStorage.getItem('setExpirationDateObd')
    if (
      expirationDateObd !== null &&
      now - expirationDateObd < hours * 60 * 60 * 1000
    ) {
      setFatfScreen(false)
      onReceiveData(false)
    } else {
      localStorage.removeItem('setExpirationDateObd')
    }
  }, [])

  return (
    <>
      <div className={styles.Register}>
        {fatfScreen ? (
          <FatfScreen onReceiveData={receiveData} fatfScreen={fatfScreen} />
        ) : (
          <RegisterScreen
            trustpilot={data.trust_pilot}
            isTypeChristmas={isTypeChristmas}
          />
        )}
      </div>
    </>
  )
}
