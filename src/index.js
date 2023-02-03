import React from 'react'
import styles from './styles.module.css'
import Register from './components/register'

export const ExampleComponent = ({ isTypeChristmas }) => {
  return (
    <div className={styles.Register}>
      <Register isTypeChristmas={isTypeChristmas} />
    </div>
  )
}
