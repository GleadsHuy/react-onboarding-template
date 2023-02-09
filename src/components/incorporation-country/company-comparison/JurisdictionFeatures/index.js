import React, { useState, useEffect } from 'react'
import style from './styles.module.css'
import {
  FaCheck,
  FaTimes,
  FaCircle,
  FaInfoCircle,
  FaAngleDoubleDown
} from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'
import DropdownButton from 'react-multiselect-checkboxes/lib/DropdownButton'
import MultiSelectDropdown from './MultiSelectDropdown'
import CommonDropdown from './CommonDropdown'
import FeatureDropdown from './FeatureDropdown'
import parser from 'html-react-parser'
import RangeSlider from '../RangeSlider'
import Dropdown from 'react-bootstrap/Dropdown'

const generalFilter = (values, arrFilter, arrData) => {
  let temp = [...values]
  if (values.length > 0) {
    if (
      (values.some((temp) => temp.id === 0) &&
        arrFilter.every((temp) => temp.id !== 0)) ||
      (values.every((temp) => temp.id !== 0) &&
        values.length === arrData.length - 1 &&
        arrFilter.length < arrData.length)
    ) {
      temp = [...arrData]
    } else {
      if (
        values.every((temp) => temp.id !== 0) &&
        values.length === arrData.length - 1 &&
        arrFilter.length === arrData.length
      ) {
        temp = []
      } else {
        temp = values.filter((item) => item.id !== 0)
      }
    }
  }
  return temp
}

const features = [
  { id: 1, label: 'Public Register' },
  { id: 2, label: 'Corporate Income Tax' },
  { id: 3, label: 'Tax Exemption' },
  { id: 4, label: 'EU List' },
  { id: 5, label: 'Audited Accounts' }
]

export default function JurisdictionFeatures(props) {
  const {
    data,
    countries,
    publicRegister,
    euList,
    commonUsedList,
    auditList,
    exemptionList
  } = props
  const [dataFiltered, setDataFiltered] = useState(data || [])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredPublicRegisters, setFilteredPublicRegisters] = useState([])
  const [filteredEUs, setFilteredEUs] = useState([])
  const [filteredAuditedAccounts, setFilteredAuditedAccounts] = useState([])
  const [filteredExemptions, setFilteredExemptions] = useState([])
  const [corporateIncomeTax, setCorporateIncomeTax] = useState([0, 33])
  const [filteredCommonUsed, setFilteredCommonUsed] = useState([])
  const [currentFeatureId, setCurrentFeatureId] = useState(1)

  const getCommonTagItem = (item) => {
    return commonUsedList.find((temp) => temp.id === item) || {}
  }

  const getCountry = (id) => {
    return countries.find((temp) => temp.id === id) || {}
  }

  const filterByCountries = (values) => {
    const countriesTemp = generalFilter(values, filteredCountries, countries)
    setFilteredCountries(countriesTemp)
  }

  const filterByPublicRegister = (values) => {
    const prTemp = generalFilter(
      values,
      filteredPublicRegisters,
      publicRegister
    )
    setFilteredPublicRegisters(prTemp)
  }

  const filterByExemptions = (values) => {
    const exemptionTemp = generalFilter(
      values,
      filteredExemptions,
      exemptionList
    )
    setFilteredExemptions(exemptionTemp)
  }

  const filterByEUs = (values) => {
    const euTemp = generalFilter(values, filteredEUs, euList)
    setFilteredEUs(euTemp)
  }

  const filterByAuditedAccounts = (values) => {
    const auditTemp = generalFilter(values, filteredAuditedAccounts, auditList)
    setFilteredAuditedAccounts(auditTemp)
  }

  const clearAllFilter = () => {
    setFilteredCountries([])
    setFilteredPublicRegisters([])
    setFilteredExemptions([])
    setFilteredEUs([])
    setFilteredAuditedAccounts([])
    setCorporateIncomeTax([0, 33])
    setFilteredCommonUsed([])
  }

  useEffect(() => {
    let newData = [...data]
    if (filteredCommonUsed.length > 0) {
      newData = newData.filter((item) =>
        item.commonly_used_ids.some((temp) =>
          filteredCommonUsed.some((temp2) => temp2.id === temp)
        )
      )
    }
    if (filteredCountries.length > 0) {
      newData = newData.filter((item) =>
        filteredCountries.some((temp) => temp.id === item.id)
      )
    }
    if (filteredPublicRegisters.length > 0) {
      newData = newData.filter((item) =>
        filteredPublicRegisters.some(
          (temp) => temp.id === item.public_register_id
        )
      )
    }
    if (filteredExemptions.length > 0) {
      newData = newData.filter((item) =>
        filteredExemptions.some(
          (temp) => temp.id === item.offshore_exemption_id
        )
      )
    }
    if (filteredEUs.length > 0) {
      newData = newData.filter((item) =>
        filteredEUs.some((temp) => temp.id === item.eu_id)
      )
    }
    if (filteredAuditedAccounts.length > 0) {
      newData = newData.filter((item) =>
        filteredAuditedAccounts.some(
          (temp) => temp.id === item.audited_account_id
        )
      )
    }
    newData = newData.filter((item) => {
      const condition1 =
        item.corporate_tax_value[0] >= corporateIncomeTax[0] &&
        item.corporate_tax_value[0] <= corporateIncomeTax[1]
      const condition2 =
        item.corporate_tax_value[1] >= corporateIncomeTax[0] &&
        item.corporate_tax_value[1] <= corporateIncomeTax[1]
      return condition1 && condition2
    })
    setDataFiltered(newData)
  }, [
    filteredCountries,
    filteredPublicRegisters,
    filteredEUs,
    filteredAuditedAccounts,
    filteredExemptions,
    corporateIncomeTax,
    filteredCommonUsed
  ])

  const CommonTag = (value) => {
    switch (value) {
      case 'International trading':
        return { color: '#00468E', backgroundColor: '#E6F7FF' }
      case 'Consulting business':
        return { color: '#94001B', backgroundColor: '#FEE2E2' }
      case 'Personal trading':
        return { color: '#FD6E06', backgroundColor: '#FFEADB' }
      case 'Holding company':
        return { color: '#0C2799', backgroundColor: '#DFEEF4' }
      case 'Investment company':
        return { color: '#075E00', backgroundColor: '#E7FEE9' }
      case 'Wealth management':
        return { color: '#4F00B5', backgroundColor: '#EBE1FF' }
      case 'Private trust company':
        return { color: '#951771', backgroundColor: '#F4E6FE' }
      case 'Brokerage company':
        return { color: '#00555A', backgroundColor: '#D0DFCE' }
      case 'Startups':
        return { color: '#00A9CE', backgroundColor: '#D6F9FE' }
      case 'Tax treaties':
        return { color: '#000000', backgroundColor: '#EFEFEF' }
      case 'IP holding company':
        return { color: '#000000', backgroundColor: '#E0E0E0' }
      case 'China/Asian market entry':
        return { color: '#8E0768', backgroundColor: '#F9EEFF' }
      case 'Ecommerce':
        return { color: '#E8B400', backgroundColor: '#FEFAE2' }
      case 'Merchant account':
        return { color: '#FF0000', backgroundColor: '#FFD7D7' }
      case 'Financial service company':
        return { color: '#2900CE', backgroundColor: '#EAEBFF' }
      case 'Yacht ownership':
        return { color: '#0587B0', backgroundColor: '#F2FEFF' }
      case 'EU market entry':
        return { color: '#8E0768', backgroundColor: '#F6E1FD' }
      case 'Asset protection':
        return { color: '#C39700', backgroundColor: '#FDF5CA' }
      default:
        return { color: '#000', backgroundColor: '#fff' }
    }
  }

  const renderCommonUsedFilter = () => (
    <div className={style.commonUsed_Filter}>
      <div className={style.common_Container}>
        <div className={style.common_Button}>
          <ReactMultiSelectCheckboxes
            hideSearch={true}
            options={commonUsedList}
            placeholderButtonLabel='Commonly used for'
            getDropdownButtonLabel={({ placeholderButtonLabel, value }) =>
              placeholderButtonLabel
            }
            components={{
              DropdownButton: (props) => (
                <DropdownButton
                  {...props}
                  iconAfter={<FiFilter size={13} color='#333' />}
                />
              ),
              Dropdown: (props) => (
                <CommonDropdown
                  {...props}
                  options={commonUsedList}
                  value={filteredCommonUsed}
                  onChange={setFilteredCommonUsed}
                />
              )
            }}

            // onChange={filterByCountries}
          />
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <p style={{ marginBottom: '4px', marginTop: '24px' }}>
        The following tables demonstrate 20 jurisdictions with key elements to
        take into account when establishing your overseas business
      </p>
      <button onClick={clearAllFilter} className={`${style.btnClearAll}`}>
        Clear all filter
      </button>
      <div className={style.common_FilterContainer}>
        <div className={style.common_Column}>{renderCommonUsedFilter()}</div>
        <div
          className={`${style.common_Column} ${
            filteredCommonUsed.length > 0
              ? ' ' + style.common_ColumnSpacing
              : ''
          }`}
        >
          {filteredCommonUsed
            .filter((item) => item.id !== 0)
            .map((item, index) => {
              const tag = CommonTag(item.label)
              return (
                <div
                  key={index}
                  className={`${style.common_Tag}`}
                  style={{
                    backgroundColor: tag.backgroundColor,
                    color: tag.color
                  }}
                >
                  <span>{item.label}</span>
                  <FaTimes
                    style={{
                      color: '#ff756e',
                      cursor: 'pointer',
                      marginLeft: '8px',
                      marginRight: '4px'
                    }}
                    size={15}
                    onClick={() => {
                      setFilteredCommonUsed(
                        filteredCommonUsed.filter(
                          (common) => common.id !== item.id
                        )
                      )
                    }}
                  />
                </div>
              )
            })}
        </div>
      </div>
      <div className={style.chooseFeatures_FilterContainerMobile}>
        {/* {renderCommonUsedFilter()} */}
        <div style={{ display: 'flex' }}>
          <div style={{ width: '100%' }}>
            <div className={style.common_Button}>
              <ReactMultiSelectCheckboxes
                classNamePrefix='filter'
                hideSearch={true}
                options={commonUsedList}
                placeholderButtonLabel="Choose Jurisdiction's Features"
                getDropdownButtonLabel={({ placeholderButtonLabel, value }) =>
                  placeholderButtonLabel
                }
                components={{
                  DropdownButton: (props) => (
                    <DropdownButton
                      {...props}
                      iconAfter={<FaAngleDoubleDown size={16} color='#333' />}
                    />
                  ),
                  Dropdown: (props) => (
                    <FeatureDropdown
                      {...props}
                      options={features}
                      value={currentFeatureId}
                      onChange={setCurrentFeatureId}
                    />
                  )
                }}

                // onChange={filterByCountries}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginBottom: '40px' }}
        className={`${style.featuresTable}`}
      >
        <div className={`${style.tableColumn} ${style.tableColumnCountry}`}>
          {/* <div className={style.common_FilterContainerDefault}>
            {renderCommonUsedFilter()}
          </div> */}
          <div
            style={{ fontWeight: 'bold' }}
            className={`${style.tableColumnTitle}`}
          >
            <div className={`${style.selectFilter} table-select`}>
              <ReactMultiSelectCheckboxes
                classNamePrefix='filter'
                hideSearch={true}
                options={countries}
                placeholderButtonLabel='Countries'
                getDropdownButtonLabel={({ placeholderButtonLabel, value }) =>
                  placeholderButtonLabel
                }
                components={{
                  DropdownButton: (props) => (
                    <DropdownButton
                      {...props}
                      iconAfter={<FiFilter size={14} color='#FFF' />}
                    />
                  ),
                  Dropdown: MultiSelectDropdown
                }}
                value={filteredCountries}
                onChange={filterByCountries}
              />
            </div>
          </div>
          {dataFiltered.map((item, index) => (
            <div
              key={index}
              style={{
                justifyContent: 'space-between'
              }}
              className={`${style.tableColumnItem}`}
            >
              <div style={{ display: 'flex' }}>
                <div
                  className='mr-2 rounded-circle overflow-hidden embed-responsive embed-responsive-16by9'
                  style={{ width: 20, height: 20, marginRight: '8px' }}
                >
                  <img
                    loading='eager'
                    width={20}
                    height={20}
                    src={`https://test-site.bbcincorp.com/onboarding/custom-public/flags/4x3/${
                      getCountry(item.id).flag
                    }.svg`}
                    alt='flag'
                    className='embed-responsive-item'
                    style={{
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                {parser(item.name)}
              </div>
              <div className='tooltip-bottom' style={{ color: '#BDBDBD' }}>
                <FaInfoCircle className='svg-inline--fa fa-w-16' />
                <div className='tooltip-content'>
                  {item.commonly_used_ids.map((i, index) => {
                    const tagObject = getCommonTagItem(i)
                    return (
                      <span
                        key={index}
                        className={`${style.tag} ${style.commonTag}`}
                        style={CommonTag(tagObject.label)}
                      >
                        {tagObject.label}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${style.tableColumn} ${
            currentFeatureId === 1 ? '' : style.tableColumn_cur
          } d-lg-block`}
        >
          <div className={`${style.tableColumnTitle}`}>
            <div className={`${style.selectFilter} table-select`}>
              <ReactMultiSelectCheckboxes
                classNamePrefix='filter'
                hideSearch={true}
                options={publicRegister}
                placeholderButtonLabel='Public register'
                getDropdownButtonLabel={({ placeholderButtonLabel, value }) =>
                  placeholderButtonLabel
                }
                components={{
                  DropdownButton: (props) => (
                    <DropdownButton
                      {...props}
                      iconAfter={<FiFilter size={14} color='#FFF' />}
                    />
                  ),
                  Dropdown: MultiSelectDropdown
                }}
                value={filteredPublicRegisters}
                onChange={filterByPublicRegister}
              />
            </div>
          </div>
          {dataFiltered.map((item, index) => (
            <div key={index} className={style.tableColumnItem}>
              {item.public_register === true ? (
                <FaCheck style={{ color: '#10C400' }} />
              ) : item.public_register === false ? (
                <FaTimes style={{ color: '#FF0000' }} />
              ) : (
                parser(item.public_register)
              )}
            </div>
          ))}
        </div>
        <div
          className={`${style.tableColumn} ${style.tableColumnTax} ${
            currentFeatureId === 2 ? '' : style.tableColumn_cur
          } d-lg-block`}
        >
          <div className={style.tableColumnTitle}>
            <Dropdown style={{ width: `100%`, position: 'relative' }}>
              <Dropdown.Toggle
                id='dropdown-basic'
                className={`${style.dropdown_rangeSlider} ${style.dropdownBtn}`}
              >
                <span className={style.titleDefault}>Corporate income Tax</span>
                <span className={style.titleMobile}>CIA</span>
                <FiFilter
                  size={14}
                  color='#FFF'
                  style={{ marginLeft: '8px' }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className={style.dropdown_menu}>
                <Dropdown.ItemText>
                  <RangeSlider
                    values={corporateIncomeTax}
                    setValues={setCorporateIncomeTax}
                  />
                </Dropdown.ItemText>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {dataFiltered.map((item, index) => (
            <div key={index} className={style.tableColumnItem}>
              {item.corporate_income_tax === true ? (
                <FaCheck style={{ color: '#10C400' }} />
              ) : item.corporate_income_tax === false ? (
                <FaTimes style={{ color: '#FF0000' }} />
              ) : (
                parser(item.corporate_income_tax)
              )}
            </div>
          ))}
        </div>
        <div
          className={`${style.tableColumn} ${
            currentFeatureId === 3 ? '' : style.tableColumn_cur
          } d-lg-block`}
        >
          <div className={`${style.tableColumnTitle}`}>
            <div className={`${style.selectFilter} table-select`}>
              <ReactMultiSelectCheckboxes
                classNamePrefix='filter'
                hideSearch={true}
                options={exemptionList}
                placeholderButtonLabel='Tax exemption'
                getDropdownButtonLabel={({ placeholderButtonLabel, value }) =>
                  placeholderButtonLabel
                }
                components={{
                  DropdownButton: (props) => (
                    <DropdownButton
                      {...props}
                      iconAfter={<FiFilter size={14} color='#FFF' />}
                    />
                  ),
                  Dropdown: MultiSelectDropdown
                }}
                value={filteredExemptions}
                onChange={filterByExemptions}
              />
            </div>
          </div>
          {dataFiltered.map((item, index) => (
            <div key={index} className={style.tableColumnItem}>
              {item.offshore_exemption === true ? (
                <FaCheck style={{ color: '#10C400' }} />
              ) : item.offshore_exemption === false ? (
                <FaTimes style={{ color: '#FF0000' }} />
              ) : (
                parser(item.offshore_exemption)
              )}
            </div>
          ))}
        </div>
        <div
          className={`${style.tableColumn} ${
            currentFeatureId === 4 ? '' : style.tableColumn_cur
          } d-lg-block`}
        >
          <div className={`${style.tableColumnTitle}`}>
            <div className={`${style.selectFilter} table-select`}>
              <ReactMultiSelectCheckboxes
                classNamePrefix='filter'
                hideSearch={true}
                options={euList}
                placeholderButtonLabel='EU list'
                getDropdownButtonLabel={({ placeholderButtonLabel, value }) =>
                  placeholderButtonLabel
                }
                components={{
                  DropdownButton: (props) => (
                    <DropdownButton
                      {...props}
                      iconAfter={<FiFilter size={14} color='#FFF' />}
                    />
                  ),
                  Dropdown: MultiSelectDropdown
                }}
                value={filteredEUs}
                onChange={filterByEUs}
              />
            </div>
          </div>
          {dataFiltered.map((item, index) => (
            <div key={index} className={style.tableColumnItem}>
              {item.eu_list !== 'N/A' && (
                <FaCircle
                  className='svg-inline--fa fa-w-8'
                  style={{
                    marginRight: '8px',
                    color:
                      item.eu_list === 'Cleared'
                        ? '#10C300'
                        : item.eu_list === 'Greylist'
                        ? '#706F6F'
                        : '#000'
                  }}
                  size={8}
                />
              )}
              {item.eu_list}
            </div>
          ))}
        </div>
        <div
          className={`${style.tableColumn} ${
            currentFeatureId === 5 ? '' : style.tableColumn_cur
          } d-lg-block`}
        >
          <div className={`${style.tableColumnTitle}`}>
            <div className={`${style.selectFilter} table-select`}>
              <ReactMultiSelectCheckboxes
                classNamePrefix='filter'
                hideSearch={true}
                options={auditList}
                placeholderButtonLabel='Audited accounts'
                getDropdownButtonLabel={({ placeholderButtonLabel, value }) => {
                  return (
                    <span>
                      <span className={style.titleDefault}>
                        {placeholderButtonLabel}
                      </span>
                      <span className={style.titleMobile}>AA</span>
                    </span>
                  )
                }}
                components={{
                  DropdownButton: (props) => (
                    <DropdownButton
                      {...props}
                      iconAfter={<FiFilter size={14} color='#FFF' />}
                    />
                  ),
                  Dropdown: MultiSelectDropdown
                }}
                value={filteredAuditedAccounts}
                onChange={filterByAuditedAccounts}
              />
            </div>
          </div>
          {dataFiltered.map((item, index) => (
            <div key={index} className={style.tableColumnItem}>
              {item.audited_accounts === true ? (
                <FaCheck style={{ color: '#10C400' }} />
              ) : item.audited_accounts === false ? (
                <FaTimes style={{ color: '#FF0000' }} />
              ) : (
                parser(item.audited_accounts)
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
