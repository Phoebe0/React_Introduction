import React from 'react'
// import '../css/index.min.css'
import { Checkbox, Button } from 'antd'

const onClick = () => {
  console.log('sellte')
}
// { prdList }： destructuring assignment
export default function ChyFooter({ prdList, changeSelectAll }) {
  // select_all ： Based on the pState of each item in prdList, decide select_all is checked or not
  // If every pState is 1,isCheckAll must be true
  const isCheckAll = prdList.every((item) => item.pstate === 1)
  // total money & total number
  // 1. If pState is 1，get it
  // 2. accumulate
  const totalNum = prdList
    .filter((item) => item.pstate === 1)
    .reduce((sum, item) => sum + item.pnum, 0)
  const totalPrice = prdList
    .filter((item) => item.pstate === 1)
    .reduce((sum, item) => sum + item.pprice, 0)

  return (
    <div className="footer">
      <div className="select_all">
        <Checkbox
          onChange={() => changeSelectAll(!isCheckAll)}
          checked={isCheckAll}
        >
          ALL
        </Checkbox>
      </div>
      <div className="total">
        TOTAL:
        <span className="pro_price">$ {totalPrice}</span>
      </div>
      <div className="settle">
        <Button type="dashed" ghost onClick={onClick}>
          SELLTE
          <span>({totalNum})</span>
        </Button>
      </div>
    </div>
  )
}
