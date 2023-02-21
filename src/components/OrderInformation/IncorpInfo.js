import React, { Fragment } from 'react'

import style from './styles.module.css'

function IncorpInfo({ orderInfo, suffixList, orderSummary }) {
  function getCompanyName(item, suffixList) {
    let suffix = '',
      prefix = ''
    let companySuffix = suffixList?.find((i) => i.id === item.company_suffix_id)

    if (companySuffix) {
      if (companySuffix.is_prefix == true) {
        prefix = companySuffix.name + ' '
      } else {
        suffix = ' ' + companySuffix.name
      }
    }
    return prefix + item.name + suffix
  }

  return (
    <>
      <div className={`${style.lineDivide} ${style.lineDivideSpace}`}>
        <h4 style={{ marginBottom: '8px' }}>COMPANY INFORMATION</h4>
        <div className={style.InfoContent}>
          <div className={style.infoContentWrapper}>
            <p>Country of Incorporation:</p>
            <p className={`${style.Font500} ${style.textRight}`}>
              {orderInfo && orderInfo?.Company?.Country?.name}
            </p>
          </div>
          <div className={style.infoContentWrapper}>
            <p>Company Type:</p>
            <p className={`${style.Font500} ${style.textRight}`}>
              {orderInfo && orderInfo?.Company?.EntityType?.name}
            </p>
          </div>
          <div className={style.incorpInfoWrapper}>
            {orderInfo?.Company?.ProposedNames.map((item, index) =>
              index == 0 ? (
                <div key={index} className={style.incorpInfo}>
                  <p>Proposed company name:</p>
                  <p
                    key={index}
                    className={`${style.Font500} ${style.textRight}`}
                  >
                    {getCompanyName(item, suffixList)}
                  </p>
                </div>
              ) : (
                <div
                  key={index}
                  className={`${style.Font500} ${style.textRight}`}
                >
                  {getCompanyName(item, suffixList)}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={`${style.lineDivide} ${style.lineDivideSpace}`}>
        <h4 style={{ marginBottom: '8px' }}>COMPANY PACKAGE</h4>
        <div className={style.InfoContent}>
          <div className={style.companyPackageWrapper}>
            <p className={`${style.Font500}`}>
              {orderSummary.companyPackage[0]?.Package?.name}
            </p>
            <p className={style.Font500}>
              <span>$</span>
              {orderSummary.companyPackage?.reduce(
                (accumulator, service) => accumulator + service.amount,
                0
              )}
            </p>
          </div>
          <div>
            <ul style={{ marginLeft: '24px' }}>
              {orderSummary.companyPackage?.map((item, index) => (
                <li key={index} style={{ listStyleType: 'disc' }}>
                  <p className={style.serviceName}>
                    <span>{item?.Service?.name}</span>
                    <span>
                      {item?.amount < 0
                        ? `-$${Math.abs(item?.amount)}`
                        : `$${item?.amount}`}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {orderSummary.additonalServices.length > 0 && (
        <div className={`${style.lineDivide} ${style.lineDivideSpace}`}>
          <h4 style={{ marginBottom: '8px' }}>ADDITIONAL SERVICES</h4>
          <div className={style.InfoContent}>
            {orderSummary.arrOtherServiceCategory.map((category, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                <p
                  className={`${style.Font500}`}
                  style={{ marginBottom: '4px' }}
                >
                  {category.name}
                </p>
                <ul style={{ marginLeft: '24px' }}>
                  {orderSummary.additonalServices.map(
                    (item, index) =>
                      item.Service.ServiceType.id == category.id && (
                        <li key={index} style={{ listStyleType: 'disc' }}>
                          <div className={style.serviceName}>
                            <p>
                              {item?.Service?.name}
                              <span>
                                {' ('}
                                {item?.quantity}{' '}
                                {item?.quantity > 1
                                  ? item?.Service?.ServiceUnit?.plural
                                  : item?.Service?.ServiceUnit?.name}
                                {')'}
                              </span>
                            </p>
                            <p>
                              {item?.amount < 0
                                ? `-$${Math.abs(item?.amount)}`
                                : `$${item?.amount}`}
                            </p>
                          </div>
                        </li>
                      )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {(orderSummary.customServices.length > 0 ||
        orderSummary.customDiscount.length > 0) && (
        <div className={`${style.lineDivide} ${style.lineDivideSpace}`}>
          <h4 className='mb-1'>CUSTOM SERVICES</h4>
          <div className={style.InfoContent}>
            {orderSummary.customServices.map((item, index) => (
              <div
                key={index}
                className={`${style.Font500} ${style.customService}`}
              >
                <p>
                  {item?.description}
                  <span>
                    {' ('}
                    {item?.quantity}
                    {')'}
                  </span>
                </p>
                <p>
                  {item?.amount < 0
                    ? `-$${Math.abs(item?.amount)}`
                    : `$${item?.amount}`}
                </p>
              </div>
            ))}
            {orderSummary.customDiscount.map((item, index) => (
              <div
                key={index}
                className={`${style.Font500} ${style.customService}`}
              >
                <p>
                  {item?.description}
                  <span>
                    {' ('}
                    {item?.quantity}
                    {')'}
                  </span>
                </p>
                <p>
                  {item?.amount < 0
                    ? `-$${Math.abs(item?.amount)}`
                    : `$${item?.amount}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default IncorpInfo
