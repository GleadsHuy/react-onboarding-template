import Select, { components } from 'react-select'
import Dropdown from 'react-bootstrap/Dropdown'
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../functions'
import { FaChevronDown } from 'react-icons/fa'
import styles from './styles.module.css'

const customStyles = {
  menu: (provided) => ({
    ...provided,
    position: 'relative',
    boxShadow: 'none',
    marginBottom: 0
  }),
  control: (provided) => ({
    ...provided,
    margin: '0px 8px'
  })
}

const Option = ({ data, result, children, ...props }) => {
  return (
    <components.Option
      style={{ padding: `0` }}
      className={`${
        data && result && data.value === result.value
          ? `${styles.selected_option}`
          : ''
      }`}
      {...props}
    >
      <div style={{ cursor: 'pointer' }}>{children}</div>
    </components.Option>
  )
}

export default function SelectSearchInside({
  value,
  onChange,
  toggleClass,
  menuClass,
  placeholder,
  selectBorder,
  dropdown_container,
  ...props
}) {
  const wrapperRef = useRef(null)
  const [show, setShow] = useState(false)
  const [temp, setTemp] = useState(value)
  const openMenu = () => {
    setShow(!show)
  }

  useOnClickOutside(wrapperRef, () => {
    setShow(false)
  })

  const getLabel = () => {
    if (value) {
      if (value.value && value.label && value.value !== '') {
        return <div style={{ whiteSpace: 'break-spaces' }}>{value.label}</div>
      } else {
      }
    }
    if (temp) {
      if (temp.value && temp.label && temp.value !== '') {
        return <div style={{ whiteSpace: 'break-spaces' }}>{temp.label}</div>
      }
    }
    return (
      <div className='text-muted' style={{ whiteSpace: 'break-spaces' }}>
        {placeholder ? placeholder : ''}
      </div>
    )
  }

  return (
    <div style={{ width: `100%` }}>
      {/* <style jsx global>
        {`
          .select-with-search-inside::after {
            display: none;
          }
        `}
      </style> */}
      <Dropdown
        className={dropdown_container ? dropdown_container : ''}
        ref={wrapperRef}
        style={{
          width: `100%`,
          height: `100%`
        }}
        show={show}
      >
        <Dropdown.Toggle
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            borderWidth: 1,
            // borderColor: show ? '#9c9c9c' : '#ccc',
            border: `${selectBorder ? '1px solid rgb(204, 204, 204)' : ''}`,
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
          className={`select-with-search-inside text-dark ${
            styles.dropdown_toggle
          } ${toggleClass ? ' ' + toggleClass : ''}`}
          onClick={openMenu}
        >
          {getLabel()}
          <div style={{ minWidth: 13, marginTop: `4px` }}>
            <FaChevronDown size={13} color={show ? '#6e6e6e' : '#ccc'} />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu
          className={`${styles.dropdown_menu} ${
            menuClass ? ' ' + menuClass : ''
          }`}
          show={show}
        >
          <div id='select-panel' className={styles.select_panel}>
            {show ? (
              <Select
                {...props}
                styles={customStyles}
                autoFocus
                menuIsOpen
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                  Option: (props) => (
                    <Option result={value ? value : temp} {...props} />
                  )
                }}
                onChange={(value) => {
                  if (onChange) {
                    onChange(value)
                  }
                  setTemp(value)
                  setShow(false)
                }}
              />
            ) : (
              <div></div>
            )}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
