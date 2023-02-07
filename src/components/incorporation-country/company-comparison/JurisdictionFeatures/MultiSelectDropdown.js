import { colors } from 'react-select/lib/theme'
import Blanket from 'react-multiselect-checkboxes/lib/Blanket'
import React from 'react'
import styles from './styles.module.css'

const Menu = (props) => {
  const shadow = colors.neutral10a
  const style = {
    backgroundColor: 'white',
    borderRadius: 4,
    boxShadow: `rgba(131, 131, 131, 0.2) 12px 14px 15px`,
    marginTop: 35,
    position: 'absolute',
    width: '100%',
    minWidth: 180,
    zIndex: 2
  }
  if (props.rightAligned) {
    style.right = 0
  }
  return <div style={style} {...props} />
}

export default function MultiSelectDropdown({
  children,
  isOpen,
  target,
  onClose,
  rightAligned
}) {
  return (
    <div className={styles.multiSelectCustom}>
      {target}
      {isOpen ? <Menu>{children}</Menu> : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  )
}
