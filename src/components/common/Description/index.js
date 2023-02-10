import React from 'react'
import PropTypes from 'prop-types'

/**
 * vendor
 */

/**
 * styles
 */
import styles from './styles.module.css'

/** ========== */

const Component = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`${styles.description} mt-2 mt-lg-3 mb-0 ${
        props.className ? `${props.className}` : ''
      }`}
      style={{
        ...props.style
      }}
    >
      {props.children}
    </div>
  )
}

export default Component

Component.propTypes = {}

Component.defaultProps = {}

/** ========== */
