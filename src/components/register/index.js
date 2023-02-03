import React, { useState, useEffect } from 'react'
import FatfScreen from './FatfScreen'
import RegisterScreen from './RegisterScreen'
import data from './data.json'

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
    <div>
      {fatfScreen ? (
        <FatfScreen onReceiveData={receiveData} />
      ) : (
        <RegisterScreen
          trustpilot={data.trust_pilot}
          isTypeChristmas={isTypeChristmas}
        />
      )}
    </div>
  )
}
