import { FaCheck } from 'react-icons/fa'
import Blanket from 'react-multiselect-checkboxes/lib/Blanket'
import React from 'react'
import styles from './styles.module.css'

const Menu = (props) => {
  const style = {
    backgroundColor: 'white',
    boxShadow: '12px 14px 15px rgb(131 131 131 / 20%)',
    marginTop: 38,
    position: 'absolute',
    width: '100%',
    zIndex: 2
  }
  if (props.rightAligned) {
    style.right = 0
  }
  return <div style={style} {...props} />
}

export default function CommonDropdown({
  isOpen,
  target,
  onClose,
  options,
  value,
  onChange
}) {
  const updateData = (item) => {
    if (value && Array.isArray(value) && item.clickable) {
      if (item.id === 0) {
        if (value.every((temp) => temp.id !== 0)) {
          onChange([...options])
        } else {
          onChange([])
        }
      } else {
        if (
          value.some((temp) => temp.id === item.id) &&
          value.length < options.length
        ) {
          onChange(value.filter((temp) => temp.id !== item.id))
        } else if (
          value.every((temp) => temp.id !== item.id) &&
          value.length === options.length - 2
        ) {
          onChange([...options])
        } else if (
          value.some((temp) => temp.id === item.id) &&
          value.length === options.length
        ) {
          onChange(value.filter((temp) => temp.id !== item.id && temp.id !== 0))
        } else {
          onChange([...value, item])
        }
      }
    }
  }
  const isActive = (item) => {
    if (value && Array.isArray(value)) {
      return value.some((temp) => temp.id === item.id && item.clickable)
    }
    return false
  }
  return (
    <div className={styles.multiSelectCustom}>
      {target}
      {isOpen ? (
        <Menu>
          <ul className={`list-unstyled ${styles.common_FilterMenu}`}>
            {options.map((item, index) => (
              <li
                key={index}
                onClick={() => updateData(item)}
                className={`position-relative ${
                  item.clickable
                    ? styles.common_Clickable
                    : styles.common_UnClickable
                }${item.level === 0 ? ' ' + styles.common_LevelTop : ''}`}
              >
                {item.label}
                {isActive(item) ? (
                  <span>
                    <FaCheck size={12} color='#10C400' />
                  </span>
                ) : (
                  <div></div>
                )}
              </li>
            ))}
          </ul>
        </Menu>
      ) : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  )
}
