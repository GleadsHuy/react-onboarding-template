import React from 'react'
import PropTypes from 'prop-types'

/**
 * vendor
 */

/** ========== */

const Component = ({ style, children, ...props }) => {
  return (
    <p
      {...props}
      style={{
        color: '#677294',
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        ...style
      }}
    >
      {children}
    </p>
  )
}

export default Component

Component.propTypes = {}

Component.defaultProps = {}

/** ========== */
