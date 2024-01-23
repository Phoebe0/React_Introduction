import React from 'react'
import Father from './Father'

export default function GrandPa() {
  return (
    <div style={{ border: '2px solid #333', margin: '10px' }}>
      GrandPa
      <Father></Father>
    </div>
  )
}
