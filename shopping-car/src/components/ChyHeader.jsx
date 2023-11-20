import React from 'react'
import style from './index.module.scss'
export default function ChyHeader(props) {
  console.log(props)
  return (
    <div>
      <div className={style.header}>{props.title}</div>
    </div>
  )
}
