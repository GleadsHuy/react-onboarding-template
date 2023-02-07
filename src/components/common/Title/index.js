import React from 'react'
import { sanitizeTitle } from '../functions'

/**
 * vendors
 */
import mergeProps from 'merge-props'

/** ========== */

const Title = (props) => {
  const { text, as, hasid } = props
  const As = as ? as : 'h2'
  return (
    <As id={text && hasid ? sanitizeTitle(text) : ''} {...mergeProps(props)}>
      {text}
    </As>
  )
}

export default Title

/** ========== */
