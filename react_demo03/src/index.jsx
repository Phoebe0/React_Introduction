import React from 'react'
import ReactDOM from 'react-dom/client'
function App() {
  return (
    <>
      <button>+1</button>
      <button>+10</button>
      <button>+5</button>
      <button>-3</button>
      <button>清空</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
