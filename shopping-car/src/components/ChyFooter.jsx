import React from 'react'
import style from './index.module.scss'
import { Checkbox, Button } from 'antd'

const onClick = () => {
  console.log('sellte')
}
// { prdList }： destructuring assignment
export default function ChyFooter({ prdList, changeSelectAll }) {
  // select_all ： Based on the pState of each item in prdList, decide select_all is checked or not
  // If every pState is 1,isCheckAll must be true
  const isCheckAll = prdList.every((item) => item.pState === 1)
  // total money & total number
  // 1. If pState is 1，get it
  // 2. accumulate
  const totalNum = prdList
    .filter((item) => item.pState === 1)
    .reduce((sum, item) => sum + item.pNum, 0)
  const totalPrice = prdList
    .filter((item) => item.pState === 1)
    .reduce((sum, item) => sum + item.pPrice, 0)

  return (
    <div className={style.footer}>
      <div className={style.select_all}>
        <Checkbox
          onChange={() => changeSelectAll(!isCheckAll)}
          checked={isCheckAll}
        >
          ALL
        </Checkbox>
      </div>
      <div className={style.total}>
        TOTAL:
        <span className={style.pro_price}>$ {totalPrice}</span>
      </div>
      <div className={style.settle}>
        <Button type="dashed" ghost onClick={onClick}>
          SELLTE
          <span>({totalNum})</span>
        </Button>
      </div>
    </div>
  )
}
