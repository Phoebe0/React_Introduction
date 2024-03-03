import React, { useState } from 'react'
import { InputNumber, Button } from 'antd'

export default function ChyProductCounter() {
  const [value, setValue] = useState(0)
  // add product number
  const increase = () => {
    setValue(value + 1)
  }
  // decrease product number
  const decrease = () => {
    setValue(value === 0 ? 0 : value - 1)
  }
  return (
    <>
      <Button className="prd-input-number2" onClick={increase}>
        +
      </Button>
      <InputNumber
        className="prd-input-number1"
        value={value}
        onChange={setValue}
        min={0}
      ></InputNumber>
      <Button className="prd-input-number2" onClick={decrease}>
        -
      </Button>
    </>
  )
}
