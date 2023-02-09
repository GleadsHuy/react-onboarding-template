import React from 'react'
import Blanket from 'react-multiselect-checkboxes/lib/Blanket'
import styles from './styles.module.css'

const Menu = (props) => {
  const style = {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: `rgba(131, 131, 131, 0.2) 12px 14px 15px`,
    marginTop: '35px',
    position: 'absolute',
    width: '100%',
    minWidth: '180px',
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
