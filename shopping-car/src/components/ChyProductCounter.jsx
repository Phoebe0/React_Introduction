import React from 'react'
import { InputNumber, Button } from 'antd'

export default function ChyProductCounter(props) {
  const increasePrd = () => {
    props.changeCount(props.id, 1)
  }
  const decreasePrd = () => {
    if (props.value <= 1) return
    props.changeCount(props.id, -1)
  }
  return (
    <>
      <Button className="prd-input-number2" onClick={increasePrd}>
        +
      </Button>
      <InputNumber
        className="prd-input-number1"
        value={props.value}
        readOnly
        min={1}
        controls={false}
      ></InputNumber>
      <Button className="prd-input-number2" onClick={decreasePrd}>
        -
      </Button>
    </>
  )
}
