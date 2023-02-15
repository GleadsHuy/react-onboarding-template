import React from 'react'
import styles from './styles.module.css'

const Modal = ({ show, children }) => {
  return (
    <div>
      {show && (
        <div>
          <div className={styles.modal_backdrop}></div>
          <div className={styles.modal_container}>{children}</div>
        </div>
      )}
    </div>
  )
}

export default Modal
