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
        <span>$114514</span>
      </div>
      <div className={style.settle}>
        <Button type="dashed" ghost onClick={onClick}>
          SELLTE
          <span>(5)</span>
        </Button>
      </div>
    </div>
  )
}
