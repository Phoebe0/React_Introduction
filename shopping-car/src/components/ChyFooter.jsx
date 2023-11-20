import React from 'react'
import style from './index.module.scss'
import { Checkbox, Button } from 'antd'

const onChange = (e) => {
  console.log(e.target.checked)
}
const onClick = () => {
  console.log('sellte')
}
export default function ChyFooter(props) {
  return (
    <div className={style.footer}>
      <div className={style.select_all}>
        <Checkbox onChange={onChange}>ALL</Checkbox>
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
