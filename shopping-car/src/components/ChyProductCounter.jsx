import React, { useContext } from 'react'
import { InputNumber, Button } from 'antd'
import context from '../context/context'

export default function ChyProductCounter(props) {
  const { changeCount } = useContext(context)

  const increasePrd = () => {
    changeCount(props.id, 1)
  }
  const decreasePrd = () => {
    if (props.value <= 1) return
    changeCount(props.id, -1)
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
