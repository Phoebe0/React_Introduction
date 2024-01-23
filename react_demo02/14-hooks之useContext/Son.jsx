import React, { useContext } from 'react'
import Context from './Context/context'
/*
const { Consumer } = Context

export default function Son() {
  return (
    <Consumer>
      {(obj) => (
        <div style={{ border: '2px solid #333', margin: '10px' }}>
          Son -- {obj.age}岁
          <button onClick={() => obj.editAge(5)}>增加➕</button>
        </div>
      )}
    </Consumer>
  )
}
*/

export default function Son() {
  const obj = useContext(Context)
  return (
    <div style={{ border: '2px solid #333', margin: '10px' }}>
      Son -- {obj.age}岁<button onClick={() => obj.editAge(5)}>增加➕</button>
    </div>
  )
}
