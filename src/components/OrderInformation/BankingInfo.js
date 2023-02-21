import React, { Fragment } from 'react'

import style from './styles.module.css'

function BankingInfo({ orderInfo }) {
  return (
    <>
      <div className={`${style.lineDivide} ${style.lineDivideSpace}`}>
        <h4 className='mb-1'>BANKING SUPPORT SERVICE</h4>
        <div className={style.InfoContent}>
          <div className={style.content}>
            <p className={style.Font500}>
              {orderInfo && orderInfo?.OtherItems[0]?.Service?.name}
            </p>
            <p className={style.Font500}>
              <span>$</span>
              {orderInfo &&
                orderInfo?.OtherItems.reduce(
                  (accumulator, service) => accumulator + service.amount,
                  0
                )}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BankingInfo
