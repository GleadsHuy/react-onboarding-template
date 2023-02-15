import React from 'react'
import styles from './styles.module.css'
import parser from 'html-react-parser'
import { IconContext } from 'react-icons'
import { IoMdCloseCircle } from 'react-icons/io'

const Sidebar = ({ sidebar, onClickClose, title, description, wrapperRef }) => {
  return (
    <div>
      {sidebar ? (
        <div>
          <div className={styles.modal_backdrop}></div>
          <div className={styles.modal_container}>
            <div ref={wrapperRef} className={styles.sidebar}>
              <button
                type='button'
                style={{ textAlign: 'center' }}
                onClick={onClickClose}
              >
                &times;
              </button>
              <div className={styles.content}>
                <h3>{title}</h3>
                <div className={styles.description}>{parser(description)}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
export default Sidebar
