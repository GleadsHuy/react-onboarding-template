import React, { useState } from 'react'
import styles from '../styles.module.css'
import { FaAngleDoubleUp } from 'react-icons/fa'
import _ from 'lodash'

var restricted_countries = [
  'Cambodia',
  'Jordan',
  'Myanmar',
  'Pakistan',
  'Philippines',
  'Syria',
  'Turkey',
  'Yemen',
  'Iran',
  'The Democratic People’s Republic of Korea',
  'Iraq',
  'Afghanistan',
  'Turkmenistan',
  'Albania',
  'Gibraltar',
  'Barbados',
  'Haiti',
  'Jamaica',
  'US Virgin Islands',
  'Trinidad and Tobago',
  'Venezuela',
  'Burkina Faso',
  'Mali',
  'Morocco',
  'Senegal',
  'South Sudan',
  'Uganda',
  'Somalia',
  'Democratic Republic of the Congo',
  'Sudan',
  'Libya',
  'Central African Republic',
  'Nigeria',
  'Burundi',
  'Equatorial Guinea',
  'Guinea-Bissau',
  'Samoa',
  'Fiji',
  'Palau',
  'American Samoa',
  'Vanuatu',
  'Guam',
  'Niger',
  'Crimea Region',
  'Donetsk Region',
  'Luhansk Region',
  'Cuba',
  'Tanzania',
  'Mozambique'
]

const FatfScreen = ({ onReceiveData }) => {
  const [isCollapse, setIsCollapse] = useState(true)

  const handleCollapseToggle = () => {
    if (isCollapse) {
      setIsCollapse(false)
    } else {
      setIsCollapse(true)
    }
  }

  return (
    <section className={styles.FatfScreen}>
      <div className={styles.space_top} style={{ height: '95px' }}></div>
      <h2 className={styles.title}>Restricted Industries</h2>
      <div className={styles.descriptionText}>
        <p>
          Pursuant to the anti-money laundering and countering terrorism
          regulations, BBCIncorp will not provide our services for customers,
          who are involved in restricted industries including but not limited
          to:
        </p>
        <p>
          Weapons dealing; Pornography/adult entertainment; Marijuana-related
          business; Money service business; Gambling-related business; Money
          remittance and payment services; Tobacco business; Alcohol business;
          Debt loan collection business; Precious metal trading business;
          sensitive virtual asset businesses.
        </p>
      </div>
      <h2 className={styles.title} style={{ marginTop: `16px` }}>
        Restricted Territories List
      </h2>
      <div className={styles.descriptionText}>
        <p>
          Before proceeding to the incorporation process, kindly note that
          BBCIncorp DOES NOT provide services for nationalities under the below
          list.
        </p>
        <p>
          The list is made based on recommendations by credible sources such as
          FATF as part of our effort to comply with AML/CTF regulations and is
          reviewed and updated from time to time.
        </p>
      </div>
      <div className={`px-3 p-lg-4 ${styles.restricted_countries_wrapper}`}>
        <div className={`${styles.restricted_countries_container}`}>
          <div
            className={`${styles.listCollapse} ${!isCollapse && styles.active}`}
          >
            {/* <ul className="row ml-2 ml-lg-40 mb-0">
              {_.sortBy(restricted_countries).map((item, index) => (
                <li key={index} className="col-6 col-md-4 mb-1">{item}</li>
              ))}
            </ul> */}
            <div className={`${styles.restricted_countries_cols}`}>
              {new Array(3).fill(3).map((item, idx) => {
                let count = restricted_countries.length / 3
                return (
                  <div key={idx} style={{ flex: `1` }}>
                    {_.sortBy(restricted_countries)
                      .filter(
                        (item, index) =>
                          index < (idx + 1) * count && index >= idx * count
                      )
                      .map((item, index) => {
                        return (
                          <div key={index} className={`${styles.item} mb-1`}>
                            {item}
                          </div>
                        )
                      })}
                  </div>
                )
              })}
            </div>
            <div className={`${styles.restricted_countries_cols_md}`}>
              {new Array(2).fill(2).map((item, idx) => {
                let count = restricted_countries.length / 2
                return (
                  <div key={idx} style={{ flex: `1` }}>
                    {_.sortBy(restricted_countries)
                      .filter(
                        (item, index) =>
                          index < (idx + 1) * count && index >= idx * count
                      )
                      .map((item, index) => {
                        return (
                          <div key={index} className={`${styles.item} mb-1`}>
                            {item}
                          </div>
                        )
                      })}
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className={`${styles.buttonCollapse} ${
              isCollapse && styles.isCollapse
            }`}
          >
            <button onClick={handleCollapseToggle}>
              {isCollapse ? 'Expand' : 'Collapse'}
              <FaAngleDoubleUp className={isCollapse && styles.iconCollapse} />
            </button>
          </div>
        </div>
      </div>
      <p className={`mb-0 mt-2 mt-lg-0 ${styles.noteText}`}>
        <b>Note:</b> Nationalities under consideration are applicable to all
        members of your company, including directors, shareholders and
        beneficial owners.
      </p>
      <div className={styles.button_wrapper}>
        <button
          className={`${styles.Button} btn py-2 px-4 rounded border-0 m-0`}
          onClick={onReceiveData}
        >
          I understand
        </button>
      </div>
    </section>
  )
}

export default FatfScreen
