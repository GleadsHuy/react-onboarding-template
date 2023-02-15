import React, { useState, useEffect, useRef } from 'react'
import { IconContext } from 'react-icons'
import { IoMdCloseCircle } from 'react-icons/io'
import axios from 'axios'
import { useOnClickOutside } from '../common/functions'
/**
 * vendor
 */
import { BiLoaderAlt } from 'react-icons/bi'

/**
 * components
 */
// import Layout from 'components/onboarding/common/Layout'
import Title from '../common/Title'
import Description from '../common/Description'
import buildingImg from 'assets/building.png'
import comparisonTableImg from 'assets/comparison-table.png'
import Modal from '../common/Modal'
// import ModalNoti from "./ModalNoti";

/**
 * styles
 */
import styles from './styles.module.css'

function TablePopup(country_id) {
  let content = ''
  switch (country_id) {
    case 250: //delaware
      content = (
        <div className={styles.bodyModal}>
          <div className={styles.rowItem}>
            <span className={styles.block_on_md} />
            <span style={{ textAlign: 'center' }}>LLC</span>
            <span style={{ textAlign: 'center' }}>Corporation</span>
          </div>
          <div className={styles.tableBody}>
            <div>
              <div className={styles.grouptitle}>Initial requirement</div>
              <div style={{ paddingBottom: '8px' }} className='group'>
                <div className={styles.item}>
                  <span>Director</span>
                  <span>None</span>
                  <span>At least one</span>
                </div>
                <div className={styles.item}>
                  <span>Shareholders</span>
                  <span>At least one member</span>
                  <span>At least one shareholder</span>
                </div>
                <div className={styles.item}>
                  <span>Tax treatment</span>
                  <span>Individual level</span>
                  <span>Company level</span>
                </div>
                <div className={styles.item}>
                  <span>Legal status</span>
                  <span>Separate legal entity</span>
                  <span>Separate legal entity</span>
                </div>
                <div className={styles.item}>
                  <span>Owner’s limited liability</span>
                  <span>Bounded to interests owned</span>
                  <span>Bounded to shares owned</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.grouptitle}>Corporate compliance</div>
              <div className='group'>
                <div className={styles.item}>
                  <span>Annual return</span>
                  <span>
                    <div className={styles.block_on_md}>No</div>
                    <i className={styles.checkX} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Tax filing</span>
                  <span className={styles.flex_on_md}>
                    <div className={styles.block_on_md}>Yes&nbsp;</div>
                    <i className={styles.check} />
                    <br className={styles.none_on_md} />
                    (Only nominal)
                  </span>
                  <span className={styles.flex_on_md}>
                    <div className={styles.block_on_md}>Yes&nbsp;</div>
                    <i className={styles.check} />
                    <br className={styles.none_on_md} />
                    (Only nominal)
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Books and records maintenance</span>
                  <span>
                    <div className={styles.block_on_md}>No</div>
                    <i className={styles.checkX} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      break
    case 237: //uk
      content = (
        <div className={styles.bodyModal}>
          <div className={styles.rowItem}>
            <span className={styles.block_on_md} />
            <span>Limited Liability Partnership</span>
            <span>Limited Company</span>
          </div>
          <div className={styles.tableBody}>
            <div>
              <div className={styles.grouptitle}>Initial requirement</div>
              <div className='group' style={{ paddingBottom: '8px' }}>
                <div className={styles.item}>
                  <span>Legal status</span>
                  <span>Separate legal entity</span>
                  <span>Separate legal entity</span>
                </div>
                <div className={styles.item}>
                  <span>Owner’s liability</span>
                  <span>Limited to capital contribution</span>
                  <span>Limited to shares owned</span>
                </div>
                <div className={styles.item}>
                  <span>Tax treatment</span>
                  <span>Individual level</span>
                  <span>Corporate level</span>
                </div>
                <div className={styles.item}>
                  <span>Director</span>
                  <span>None</span>
                  <span>At least one</span>
                </div>
                <div className={styles.item}>
                  <span>Other members</span>
                  <span>At least two designated members</span>
                  <span>At least one shareholder</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.grouptitle}>Corporate compliance</div>
              <div className='group'>
                <div className={styles.item}>
                  <span>Annual return</span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Tax filing</span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Books and records maintenance</span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Annual general meeting</span>
                  <span>Not required</span>
                  <span>Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      break
    case 244: //vietnam
      content = (
        <div className={`${styles.modalVietnam}`}>
          <div className={styles.rowItem}>
            <span className={styles.block_on_lg} />
            <span>LLC</span>
            <span>JSC</span>
            <span>Branch</span>
            <span>Rep. Office</span>
          </div>
          <div className={styles.tableBody}>
            <div>
              <div className={styles.grouptitle}>Initial requirement</div>
              <div className='group' style={{ paddingBottom: '8px' }}>
                <div className={styles.item}>
                  <span>Legal status</span>
                  <span>Separate legal entity</span>
                  <span>Separate legal entity</span>
                  <span>An extension of its parent company</span>
                  <span>An extension of its parent company</span>
                </div>
                <div className={styles.item}>
                  <span>Owner’s liability</span>
                  <span>Limited to capital contribution</span>
                  <span>Limited to shares owned</span>
                  <span>Extended to parent company</span>
                  <span>Extended to parent company</span>
                </div>
                <div className={styles.item}>
                  <span>Tax treatment</span>
                  <span>Corporate level</span>
                  <span>Corporate level</span>
                  <span>Corporate level</span>
                  <span>Not permitted to trade or conduct business</span>
                </div>
                <div className={styles.item}>
                  <span>Director</span>
                  <span>At least one</span>
                  <span>At least one</span>
                  <span>N/A</span>
                  <span>N/A</span>
                </div>
                <div className={styles.item}>
                  <span>Other members</span>
                  <span>At least one member</span>
                  <span>At least three founding shareholders</span>
                  <span>One head of branch</span>
                  <span>One head of Rep. Office</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.grouptitle}>Corporate compliance</div>
              <div className='group'>
                <div className={styles.item}>
                  <span>Annual return</span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Tax filing</span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Books and records maintenance</span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_lg}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Annual general meeting</span>
                  <span>Required for multi-member LLC</span>
                  <span>Yes</span>
                  <span>Not required</span>
                  <span>Not required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      break
    case 23:
    case 205:
    case 209: // belize || St. Kitts & Nevis || St. Vincent & Grenadines
      content = (
        <div className={styles.bodyModal}>
          <div className={styles.rowItem}>
            <span className={styles.block_on_md} />
            <span style={{ textAlign: 'center' }}>LLC</span>
            <span style={{ textAlign: 'center' }}>IBC/BC</span>
          </div>
          <div className={styles.tableBody}>
            <div>
              <div className={styles.grouptitle}>Initial requirement</div>
              <div className='group'>
                <div className={styles.item}>
                  <span>Director</span>
                  <span>None</span>
                  <span>At least one</span>
                </div>
                <div className={styles.item}>
                  <span>Shareholders</span>
                  <span>At least one member</span>
                  <span>At least one shareholder</span>
                </div>
                <div className={styles.item}>
                  <span>Tax treatment</span>
                  <span>Individual level</span>
                  <span>Company level</span>
                </div>
                <div className={styles.item}>
                  <span>Legal status</span>
                  <span>Separate legal entity</span>
                  <span>Separate legal entity</span>
                </div>
                <div className={styles.item}>
                  <span>Owner’s limited liability</span>
                  <span>Bounded to interests owned</span>
                  <span>Bounded to shares owned</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.grouptitle}>Corporate compliance</div>
              <div className='group'>
                <div className={styles.item}>
                  <span>Annual return</span>
                  <span>
                    <div className={styles.block_on_md}>No</div>
                    <i className={styles.checkX} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>No</div>
                    <i className={styles.checkX} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Tax filing</span>
                  <span>
                    <div className={styles.block_on_md}>No</div>
                    <i className={styles.checkX} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>No</div>
                    <i className={styles.checkX} />
                  </span>
                </div>
                <div className={styles.item}>
                  <span>Books and records maintenance</span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                  <span>
                    <div className={styles.block_on_md}>Yes</div>
                    <i className={styles.check} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      break
  }
  return content
}

export default function IncorporationCompanyType({ data }) {
  //   const router = useRouter()

  /**
   * Data
   */

  const [dataOnboarding, setDataOnboarding] = useState({})
  const [dataCountry, setDataCountry] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // window.onpopstate = function() {
    //   handleBack();
    // };
    // history.pushState({}, "");
    if (window.history && window.history.pushState) {
      window.history.pushState('forward', null, './incorporation-company-type')
      window.onpopstate = function () {
        handleBack()
      }
      // history.pushState({}, "");
    }
  }, [])

  useEffect(() => {
    const dataOnboardingLocalStorage =
      window.localStorage.getItem('data_onboarding')
    if (dataOnboardingLocalStorage) {
      const data = JSON.parse(dataOnboardingLocalStorage)
      if (
        data?.incorporation?.company_name &&
        data?.incorporation?.company_name.length > 0
      ) {
        data?.incorporation?.company_name.map((item) => delete item.suffix)
      }
      setDataOnboarding(data)
      setDataCountry(data?.incorporation?.country)
    }
  }, [])

  /**
   * Handle click
   */
  const handleClick = (id) => {
    window.localStorage.setItem(
      'data_onboarding',
      JSON.stringify({
        ...dataOnboarding,
        incorporation: {
          ...dataOnboarding.incorporation,
          entity_type_id: id
        }
      })
    )

    /**
     * Send order client
     */
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    if (customer?.signature?.signature) {
      axios.put(
        `https://core.test-lp.bbcincorp.com/api/onboarding/order/client/${customer?.signature?.signature}`,
        {
          entity_type_id: id
        }
      )
    }

    // router.push({
    //   pathname: '/incorporation-entity-name-check',
    //   query: router.query
    // })
    window.location.href = '/incorporation-entity-name-check'
  }

  const handleBack = () => {
    let customer = JSON.parse(window.localStorage.getItem('customer'))
    delete customer.company_country_id
    delete customer.company_name
    delete customer.entity_type_id
    delete customer.package_id
    window.localStorage.setItem('customer', JSON.stringify(customer))

    window.location.href = '/incorporation-country'
    // location.href = "/onboarding/incorporation-country";
  }

  /**
   * Landing to onboarding
   */
  useEffect(() => {
    const customer = JSON.parse(window.localStorage.getItem('customer'))
    if (
      customer?.company_country_id &&
      customer?.entity_type_id &&
      customer?.package_id
    ) {
      handleClick(parseInt(customer?.entity_type_id))
    } else {
      setLoading(false)
    }
  }, [dataOnboarding])

  /**
   * Modal
   */

  const wrapperRef = useRef(null)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useOnClickOutside(wrapperRef, () => {
    setShow(false)
  })

  return (
    // <Layout
    //   head={{
    //     title: 'Select your desired company type - BBCIncorp',
    //     description:
    //       "With each company type comes different perks and drawbacks. Pick your company type wisely or after you've done your research."
    //   }}
    // >
    <div>
      <section>
        <div className={`${styles.btn_back_top} ${styles.Header}`}>
          <div className={`${styles.btn_back_wrapper}`}>
            <div style={{ flex: '0 0 auto' }}>
              <a
                className={styles.btn_primary}
                style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: 500
                }}
                onClick={handleBack}
              >
                Back
              </a>
            </div>
          </div>
        </div>
        <Title text='Country and Company Type' className={styles.title} />
        <div className={styles.Body}>
          <div className={styles.description_wrapper}>
            <div style={{ flex: '1' }}>
              <Description>
                Country:{' '}
                <span style={{ fontWeight: 500 }}>{dataCountry?.name}</span>
              </Description>
              <Description>Company type: </Description>
            </div>
            <div className={styles.comparison_wrapper}>
              <button
                className={styles.button}
                style={{
                  padding: '16px 8px 8px 8px',
                  border: '1px solid transparent',
                  marginTop: '16px',
                  cursor: 'pointer'
                }}
                onClick={handleShow}
              >
                <img src={comparisonTableImg} alt='bg-left-obd' />
                <div style={{ marginTop: '4px' }}>Comparison table</div>
              </button>
            </div>
          </div>
          {dataCountry?.EntityTypes && (
            <div
              style={{
                margin: '0 auto',
                maxWidth: '992px'
              }}
            >
              {loading ? (
                <div
                  className={`${styles.spinner_wrapper} embed-responsive embed-responsive-21by9`}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    className='embed-responsive-item'
                  >
                    <BiLoaderAlt className='animate_spin' size={20} />
                  </div>
                </div>
              ) : (
                <div className={styles.card_wrapper}>
                  {dataCountry?.EntityTypes.map((item, index) => (
                    <div className={styles.card_responsive} key={index}>
                      <div
                        style={{ display: 'flex', width: '100%' }}
                        className={styles.card}
                        onClick={() => handleClick(item.id)}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                          }}
                        >
                          <div style={{ flex: '0 0 auto' }}>
                            <img
                              src={buildingImg}
                              className={styles.cardImg}
                              alt={`${item.name}`}
                            />
                          </div>
                          <div style={{ flex: '1' }}>
                            <div style={{ paddingLeft: '24px' }}>
                              <div className={`${styles.cardTitle}`}>
                                {item.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className={`${styles.comparison_bottom}`}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <div style={{ flex: '0 0 auto' }}>
              <button
                style={{ width: '100%', padding: '8px' }}
                className={styles.button}
                onClick={handleShow}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ flex: '0 0 auto' }}>
                    <img
                      src={comparisonTableImg}
                      alt='bg-left-obd'
                      style={{
                        width: '20px'
                      }}
                    />
                  </div>
                  <div style={{ flex: '1', paddingLeft: '8px' }}>
                    Comparison table
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.btn_back_bottom_wrapper}>
          <div className={styles.btn_back_bottom}>
            <a
              style={{
                color: '#2c2c51',
                fontWeight: 500,
                padding: '0',
                cursor: 'pointer'
              }}
              onClick={handleBack}
            >
              Back
            </a>
          </div>
        </div>
      </section>
      {/** Modal */}
      <Modal show={show}>
        <div className={`${styles.modal_wrapper}`}>
          <div ref={wrapperRef} className={` ${styles.dialog}`}>
            <div
              className={styles.closeModal}
              style={{
                position: 'absolute',
                top: '0.25rem',
                right: '0.5rem',
                zIndex: 1
              }}
            >
              <button className='btn' onClick={handleClose}>
                <IconContext.Provider value={{ style: { color: 'c4c4c4' } }}>
                  <IoMdCloseCircle size={`1.5rem`} />
                </IconContext.Provider>
              </button>
            </div>
            {TablePopup(dataCountry.id)}
          </div>
        </div>
      </Modal>
    </div>
  )
}
