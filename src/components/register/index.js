import React, { useState, useEffect } from 'react'
import FatfScreen from './FatfScreen'
import RegisterScreen from './RegisterScreen'
import data from './data.json'
import styles from './styles.module.css'
import Layout from '../common/Layout'
import tabletBuildImg from 'assets/bg-tablet-build.svg'
import obdIncorp2Img from 'assets/obd-incorporation-2.png'

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
    <Layout
      // head={{
      //   title:
      //     'Kick off your business with our fast & simple service - BBCIncorp',
      //   description:
      //     "Simplify your incorporation process by registering to BBCIncorp's formation service. Get your registration ready in minutes!"
      // }}
      fatf={fatfScreen}
      pattern={
        FatfScreen
          ? {
              desktop: obdIncorp2Img,
              mobile: tabletBuildImg
            }
          : {}
      }
    >
      <div className={styles.Register}>
        {fatfScreen ? (
          <FatfScreen onReceiveData={receiveData} />
        ) : (
          <RegisterScreen
            trustpilot={data.trust_pilot}
            isTypeChristmas={isTypeChristmas}
          />
        )}
      </div>
    </Layout>
  )
}
