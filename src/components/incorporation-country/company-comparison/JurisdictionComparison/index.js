import React, { useState } from 'react'
import {
  FaCheck,
  FaTimes,
  FaAngleDoubleDown,
  FaChevronLeft,
  FaChevronRight,
  FaInfoCircle
} from 'react-icons/fa'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'
import CountriesDropdown from './CountriesDropdown'
import annualCompliance from 'assets/annual-compliance.png'
import localTax from 'assets/local-tax-profile.png'
import businessStructure from 'assets/business-structure.png'
import initialRequirement from 'assets/initial-requirement.png'
import legalStructure from 'assets/legal-structure.png'
import internationalCompliance from 'assets/international-compliance.png'
import parser from 'html-react-parser'
import styles from './styles.module.css'

const CountryElement = ({ country, onPress }) => {
  return (
    <div className='d-flex'>
      <div
        onClick={onPress}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        className={` ${styles.offshoreComCompare_CountryElement}`}
      >
        <div
          style={{
            marginRight: '8px',
            overflow: 'hidden'
          }}
          className={`mr-2 overflow-hidden embed-responsive embed-responsive-16by9 ${styles.offshoreComCompare_CountryFlag}`}
        >
          <img
            loading='eager'
            width={20}
            height={20}
            src={`https://test-site.bbcincorp.com/onboarding/custom-public/flags/4x3/${country.flag}.svg`}
            alt={`${country.label.toLowerCase()} flag`}
            className='embed-responsive-item'
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </div>
        <span>{country.label}</span>
        <FaAngleDoubleDown
          size={14}
          color='#FFF'
          style={{
            display: 'inline',
            marginBottom: 1,
            marginLeft: 1,
            display: 'inline'
          }}
        />
      </div>
    </div>
  )
}

const EuElement = ({ eu_id }) => {
  switch (eu_id) {
    case 1:
      return (
        <div className={styles.offshoreComCompare_EuValue}>
          <span style={{ backgroundColor: '#333' }} />
          <span>Blacklist</span>
        </div>
      )
    case 2:
      return (
        <div className={styles.offshoreComCompare_EuValue}>
          <span style={{ backgroundColor: '#333' }} />
          <span>Greylist</span>
        </div>
      )
    case 3:
      return (
        <div className={styles.offshoreComCompare_EuValue}>
          <span style={{ backgroundColor: '#10C400' }} />
          <span>Cleared</span>
        </div>
      )
    default:
      return <div>N/A</div>
  }
}

const OECD = ({ array }) => {
  let result = ''
  if (array && Array.isArray(array)) {
    array.forEach((item, index) => {
      result += index > 0 ? ', ' + item : item
    })
  }
  return <div>{result}</div>
}

const CellItem = ({ data, showMore }) => {
  if (showMore) {
    return (
      <div style={{ width: '100%' }}>
        <div
          className='tooltip-bottom justify-content-center'
          style={{ color: '#BDBDBD' }}
        >
          <FaInfoCircle />
          <div className='tooltip-content'>{parser(showMore)}</div>
        </div>
        <span
          style={{
            flex: 1,
            marginLeft: '8px',
            marginRight: '16px',
            textAlign: 'center'
          }}
        >
          {parser(data)}
        </span>
      </div>
    )
  } else {
    if (typeof data === 'string') {
      return <div style={{ textAlign: 'center' }}>{parser(data)}</div>
    }
    if (data) {
      return <FaCheck size={14} color='#10C300' />
    }
    return <FaTimes size={14} color='#FF0000' />
  }
}

const getVisibleColClass = (visibleCol) => {
  switch (visibleCol) {
    case 1:
      return (
        ' ' +
        styles.offshoreComCompare_ResponsiveColum2 +
        ' ' +
        styles.offshoreComCompare_ResponsiveColum3
      )
    case 2:
      return (
        ' ' +
        styles.offshoreComCompare_ResponsiveColum1 +
        ' ' +
        styles.offshoreComCompare_ResponsiveColum3
      )
    case 3:
      return (
        ' ' +
        styles.offshoreComCompare_ResponsiveColum1 +
        ' ' +
        styles.offshoreComCompare_ResponsiveColum2
      )
    default:
      return ''
  }
}

export default function JurisdictionComparison({ data, countries }) {
  const [dataColumn1, setDataColumn1] = useState(data[0] || {})
  const [dataColumn2, setDataColumn2] = useState(data[1] || {})
  const [dataColumn3, setDataColumn3] = useState(data[2] || {})
  const [mobileColVisible, setMobileColVisible] = useState(1)

  const handleNext = () => {
    if (mobileColVisible < 3) {
      setMobileColVisible(mobileColVisible + 1)
    }
  }

  const handlePrev = () => {
    if (mobileColVisible > 1) {
      setMobileColVisible(mobileColVisible - 1)
    }
  }

  const getCountry = (country_id) => {
    return countries.find((country) => country.id === country_id)
  }

  const getColumn1ByCountry = (country_id) => {
    if (dataColumn1.country_id !== country_id) {
      const result = data.find((item) => item.country_id === country_id)
      if (result) {
        setDataColumn1(result)
      }
    }
  }

  const getColumn2ByCountry = (country_id) => {
    if (dataColumn2.country_id !== country_id) {
      const result = data.find((item) => item.country_id === country_id)
      if (result) {
        setDataColumn2(result)
      }
    }
  }

  const getColumn3ByCountry = (country_id) => {
    if (dataColumn3.country_id !== country_id) {
      const result = data.find((item) => item.country_id === country_id)
      if (result) {
        setDataColumn3(result)
      }
    }
  }

  return (
    <div className={styles.offshoreComCompare_CompareTableContainer}>
      <table
        className={
          styles.offshoreComCompare_CompareTable +
          getVisibleColClass(mobileColVisible)
        }
      >
        <thead>
          <tr>
            <th>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_HeaderFeature}>
                Features
              </div>
            </th>
            <th>
              <div
                style={{ position: 'relative' }}
                className={`${styles.offshoreComCompare_HeaderColumn}`}
              >
                <ReactMultiSelectCheckboxes
                  hideSearch={true}
                  options={[]}
                  components={{
                    DropdownButton: (props) => (
                      <CountryElement
                        {...props}
                        country={getCountry(dataColumn1.country_id)}
                      />
                    ),
                    Dropdown: (props) => (
                      <CountriesDropdown
                        {...props}
                        options={countries}
                        value={getCountry(dataColumn1.country_id)}
                        onChange={getColumn1ByCountry}
                      />
                    )
                  }}
                />
                <button
                  style={{ border: 'none' }}
                  className={`btn ${styles.offshoreComCompare_ArrowButton} ${styles.offshoreComCompare_NextButton}`}
                  onClick={handleNext}
                >
                  <FaChevronRight size={20} color='#fff' />
                </button>
              </div>
            </th>
            <th>
              <div
                style={{ position: 'relative' }}
                className={`${styles.offshoreComCompare_HeaderColumn}`}
              >
                <button
                  style={{ border: 'none', background: 'transparent' }}
                  className={`btn ${styles.offshoreComCompare_ArrowButton} ${styles.offshoreComCompare_PrevButton}`}
                  onClick={handlePrev}
                >
                  <FaChevronLeft size={20} color='#fff' />
                </button>
                <ReactMultiSelectCheckboxes
                  hideSearch={true}
                  options={[]}
                  components={{
                    DropdownButton: (props) => (
                      <CountryElement
                        {...props}
                        country={getCountry(dataColumn2.country_id)}
                      />
                    ),
                    Dropdown: (props) => (
                      <CountriesDropdown
                        {...props}
                        options={countries}
                        value={getCountry(dataColumn2.country_id)}
                        onChange={getColumn2ByCountry}
                      />
                    )
                  }}
                />
                <button
                  style={{ border: 'none' }}
                  className={`btn ${styles.offshoreComCompare_ArrowButton} ${styles.offshoreComCompare_NextButton}`}
                  onClick={handleNext}
                >
                  <FaChevronRight size={20} color='#fff' />
                </button>
              </div>
            </th>
            <th>
              <div
                className={`${styles.offshoreComCompare_HeaderColumn}`}
                style={{ borderTopRightRadius: 15, position: 'relative' }}
              >
                <button
                  style={{ border: 'none', background: 'transparent' }}
                  className={`btn ${styles.offshoreComCompare_ArrowButton} ${styles.offshoreComCompare_PrevButton}`}
                  onClick={handlePrev}
                >
                  <FaChevronLeft size={20} color='#fff' />
                </button>
                <ReactMultiSelectCheckboxes
                  hideSearch={true}
                  options={[]}
                  components={{
                    DropdownButton: (props) => (
                      <CountryElement
                        {...props}
                        country={getCountry(dataColumn3.country_id)}
                      />
                    ),
                    Dropdown: (props) => (
                      <CountriesDropdown
                        {...props}
                        options={countries}
                        value={getCountry(dataColumn3.country_id)}
                        onChange={getColumn3ByCountry}
                      />
                    )
                  }}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_TitleCell
                }
              >
                <img
                  src={internationalCompliance}
                  style={{ marginBottom: '4px' }}
                  loading='lazy'
                  width={22}
                  height={22}
                  alt='INTERNATIONAL COMPLIANCE'
                />
                <span style={{ marginLeft: '4px' }}>
                  INTERNATIONAL COMPLIANCE
                </span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                EU list
              </div>
            </td>
            <td>
              <EuElement eu_id={dataColumn1.international_compliance.eu_id} />
            </td>
            <td>
              <div>
                <EuElement eu_id={dataColumn2.international_compliance.eu_id} />
              </div>
            </td>
            <td>
              <div>
                <EuElement eu_id={dataColumn3.international_compliance.eu_id} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>OECD</div>
            </td>
            <td>
              <OECD array={dataColumn1.international_compliance.oecd} />
            </td>
            <td>
              <div>
                <OECD array={dataColumn2.international_compliance.oecd} />
              </div>
            </td>
            <td>
              <div>
                <OECD array={dataColumn3.international_compliance.oecd} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_TitleCell
                }
              >
                <img
                  src={legalStructure}
                  style={{ marginBottom: '4px' }}
                  loading='lazy'
                  width={22}
                  height={22}
                  alt='INTERNATIONAL COMPLIANCE'
                />
                <span style={{ marginLeft: '4px' }}>LEGAL STRUCTURE</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Legal basis
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn1.legal_structure.legal_basic} />
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn2.legal_structure.legal_basic} />
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn3.legal_structure.legal_basic} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Foreign exchange control
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.legal_structure.foreign_exchange_control}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.legal_structure.foreign_exchange_control}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.legal_structure.foreign_exchange_control}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Foreign ownership allowed
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.legal_structure.foreign_ownership_control}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.legal_structure.foreign_ownership_control}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.legal_structure.foreign_ownership_control}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_TitleCell
                }
              >
                <img
                  src={businessStructure}
                  style={{ marginBottom: '4px' }}
                  loading='lazy'
                  width={22}
                  height={22}
                  alt='INTERNATIONAL COMPLIANCE'
                />
                <span style={{ marginLeft: '4px' }}>BUSINESS STRUCTURE</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_SubTitleCell
                }
              >
                Company type
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn1.business_structure.company_type} />
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn2.business_structure.company_type} />
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn3.business_structure.company_type} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_SubTitleCell
                }
              >
                Director
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Minimum number
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.business_structure.director.minimum_number}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.business_structure.director.minimum_number}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.business_structure.director.minimum_number}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Local resident required
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.director
                      .local_resident_required
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.director
                      .local_resident_required
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.director
                      .local_resident_required
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Public register of director
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.business_structure.director.public_register}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.business_structure.director.public_register}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.business_structure.director.public_register}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Nominee director
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.business_structure.director.nominee}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.business_structure.director.nominee}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.business_structure.director.nominee}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Corporate director
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.business_structure.director.corporate}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.business_structure.director.corporate}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.business_structure.director.corporate}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_SubTitleCell
                }
              >
                Shareholder
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Minimum number
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.shareholder.minimum_number
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.shareholder.minimum_number
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.shareholder.minimum_number
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Local resident required
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.shareholder
                      .local_resident_required
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.shareholder
                      .local_resident_required
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.shareholder
                      .local_resident_required
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Public register of shareholder
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.shareholder.public_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.shareholder.public_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.shareholder.public_register
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Nominee shareholder
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.business_structure.shareholder.nominee}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.business_structure.shareholder.nominee}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.business_structure.shareholder.nominee}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Corporate shareholder
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.business_structure.shareholder.corporate}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.business_structure.shareholder.corporate}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.business_structure.shareholder.corporate}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_SubTitleCell
                }
              >
                Beneficial owner
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Public register of beneficial owner
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.beneficial_owner
                      .public_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.beneficial_owner
                      .public_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.beneficial_owner
                      .public_register
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Central register of beneficial owner
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.beneficial_owner
                      .central_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.beneficial_owner
                      .central_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.beneficial_owner
                      .central_register
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_SubTitleCell
                }
              >
                Share capital
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Standard registered capital
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.share_capital
                      .standard_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.share_capital
                      .standard_register
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.share_capital
                      .standard_register
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Min paid-up capital
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.share_capital.min_paid_up
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.share_capital.min_paid_up
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.share_capital.min_paid_up
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Capital currency
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.share_capital
                      .capital_currency
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.share_capital
                      .capital_currency
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.share_capital
                      .capital_currency
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_StructureCell
                }
              >
                Bearer shares
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.business_structure.share_capital.bearer_shares
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.business_structure.share_capital.bearer_shares
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.business_structure.share_capital.bearer_shares
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_TitleCell
                }
              >
                <img
                  src={initialRequirement}
                  style={{ marginBottom: '4px' }}
                  loading='lazy'
                  width={22}
                  height={22}
                  alt='INTERNATIONAL COMPLIANCE'
                />
                <span style={{ marginLeft: '4px' }}>INITIAL REQUIREMENT</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Local registered address
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn1.initial_requirement.local_registered_address
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn2.initial_requirement.local_registered_address
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={
                    dataColumn3.initial_requirement.local_registered_address
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Company secretary
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.initial_requirement.company_secretary}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.initial_requirement.company_secretary}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.initial_requirement.company_secretary}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Local registered agent
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.initial_requirement.local_registered_agent}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.initial_requirement.local_registered_agent}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.initial_requirement.local_registered_agent}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_TitleCell
                }
              >
                <img
                  src={annualCompliance}
                  style={{ marginBottom: '4px' }}
                  loading='lazy'
                  width={22}
                  height={22}
                  alt='INTERNATIONAL COMPLIANCE'
                />
                <span style={{ marginLeft: '4px' }}>ANNUAL COMPLIANCE</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Annual return
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn1.annual_compliance.annual_return} />
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn2.annual_compliance.annual_return} />
              </div>
            </td>
            <td>
              <div>
                <CellItem data={dataColumn3.annual_compliance.annual_return} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Annual tax return
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.annual_compliance.annual_tax_return}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.annual_compliance.annual_tax_return}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.annual_compliance.annual_tax_return}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Records keeping
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.annual_compliance.records_keeping}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.annual_compliance.records_keeping}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.annual_compliance.records_keeping}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Audited accounts
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.annual_compliance.audited_accounts}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.annual_compliance.audited_accounts}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.annual_compliance.audited_accounts}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Annual general meeting
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.annual_compliance.annual_general_meeting}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.annual_compliance.annual_general_meeting}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.annual_compliance.annual_general_meeting}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Location of annual general meeting
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.annual_compliance.location_of_meeting}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.annual_compliance.location_of_meeting}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.annual_compliance.location_of_meeting}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Economic substance
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.annual_compliance.economic_substance}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.annual_compliance.economic_substance}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.annual_compliance.economic_substance}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div
                className={
                  styles.offshoreComCompare_FeatureCell +
                  ' ' +
                  styles.offshoreComCompare_TitleCell
                }
              >
                <img
                  src={localTax}
                  style={{ marginBottom: '4px' }}
                  loading='lazy'
                  width={22}
                  height={22}
                  alt='INTERNATIONAL COMPLIANCE'
                />
                <span style={{ marginLeft: '4px' }}>LOCAL TAX PROFILE</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Offshore tax exemption
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.offshore_tax_exemption}
                  showMore={
                    dataColumn1.local_tax_profile
                      .offshore_tax_exemption_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.offshore_tax_exemption}
                  showMore={
                    dataColumn2.local_tax_profile
                      .offshore_tax_exemption_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.offshore_tax_exemption}
                  showMore={
                    dataColumn3.local_tax_profile
                      .offshore_tax_exemption_show_more
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Corporate income tax
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.corporate_income_tax}
                  showMore={
                    dataColumn1.local_tax_profile.corporate_income_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.corporate_income_tax}
                  showMore={
                    dataColumn2.local_tax_profile.corporate_income_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.corporate_income_tax}
                  showMore={
                    dataColumn3.local_tax_profile.corporate_income_tax_show_more
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Sales tax (VAT/Business tax/GST)
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.sales_tax}
                  showMore={dataColumn1.local_tax_profile.sales_tax_show_more}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.sales_tax}
                  showMore={dataColumn2.local_tax_profile.sales_tax_show_more}
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.sales_tax}
                  showMore={dataColumn3.local_tax_profile.sales_tax_show_more}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Capital gain tax
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.capital_gain_tax}
                  showMore={
                    dataColumn1.local_tax_profile.capital_gain_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.capital_gain_tax}
                  showMore={
                    dataColumn2.local_tax_profile.capital_gain_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.capital_gain_tax}
                  showMore={
                    dataColumn3.local_tax_profile.capital_gain_tax_show_more
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Dividend tax
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.dividend_tax}
                  showMore={
                    dataColumn1.local_tax_profile.dividend_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.dividend_tax}
                  showMore={
                    dataColumn2.local_tax_profile.dividend_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.dividend_tax}
                  showMore={
                    dataColumn3.local_tax_profile.dividend_tax_show_more
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Property tax
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.property_tax}
                  showMore={
                    dataColumn1.local_tax_profile.property_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.property_tax}
                  showMore={
                    dataColumn2.local_tax_profile.property_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.property_tax}
                  showMore={
                    dataColumn3.local_tax_profile.property_tax_show_more
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Withholding tax
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.withholding_tax}
                  showMore={
                    dataColumn1.local_tax_profile.withholding_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.withholding_tax}
                  showMore={
                    dataColumn2.local_tax_profile.withholding_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.withholding_tax}
                  showMore={
                    dataColumn3.local_tax_profile.withholding_tax_show_more
                  }
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.offshoreComCompare_FeatureHidden} />
              <div className={styles.offshoreComCompare_FeatureCell}>
                Transfer tax
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn1.local_tax_profile.transfer_tax}
                  showMore={
                    dataColumn1.local_tax_profile.transfer_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn2.local_tax_profile.transfer_tax}
                  showMore={
                    dataColumn2.local_tax_profile.transfer_tax_show_more
                  }
                />
              </div>
            </td>
            <td>
              <div>
                <CellItem
                  data={dataColumn3.local_tax_profile.transfer_tax}
                  showMore={
                    dataColumn3.local_tax_profile.transfer_tax_show_more
                  }
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
