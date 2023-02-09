import React from 'react'
import Blanket from 'react-multiselect-checkboxes/lib/Blanket'
import styles from './styles.module.css'

const Menu = (props) => {
  const style = {
    backgroundColor: 'white',
    boxShadow: '12px 14px 15px rgb(131 131 131 / 20%)',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    borderRadius: 4,
    width: '100%',
    zIndex: 2,
    color: '#333'
  }
  if (props.rightAligned) {
    style.right = 0
  }
  return <div style={style} {...props} />
}

export default function CountriesDropdown({
  isOpen,
  target,
  onClose,
  options,
  value,
  onChange
}) {
  return (
    <div className={`${styles.offshoreComCompare_MenuFilter}`}>
      {target}
      {isOpen ? (
        <Menu>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {options.map(
              (item, index) =>
                index > 0 && (
                  <li
                    key={index}
                    onClick={() => {
                      onChange(item.id)
                      onClose()
                    }}
                    style={{ position: 'relative' }}
                    className={`${
                      value.id === item.id
                        ? ' ' + styles.offshoreComCompare_ActiveOption
                        : ''
                    }`}
                  >
                    {item.label}
                  </li>
                )
            )}
          </ul>
        </Menu>
      ) : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  )
}
