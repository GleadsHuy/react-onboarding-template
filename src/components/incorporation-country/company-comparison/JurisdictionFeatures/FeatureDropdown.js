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

export default function FeatureDropdown({
  isOpen,
  target,
  onClose,
  options,
  value,
  onChange
}) {
  return (
    <div className={styles.multiSelectCustom}>
      {target}
      {isOpen ? (
        <Menu>
          <ul className={`list-unstyled ${styles.features_Menu}`}>
            {options.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(item.id)
                  onClose()
                }}
                className={`position-relative${
                  item.id === value ? ' ' + styles.feature_ItemActive : ''
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </Menu>
      ) : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  )
}
