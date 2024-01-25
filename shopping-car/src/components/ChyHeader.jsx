import React from 'react'
// import '../css/index.min.css'
export default function ChyHeader(props) {
  console.log(props)
  return (
    <div>
      <div className="header">{props.title}</div>
    </div>
  )
}
