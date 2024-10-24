import React, { useEffect } from 'react'

export default function Happy() {
  useEffect(() => {
    const typeWriter = (text: string, i: number) => {
      if (i < text.length) {
        document.body.innerHTML += text.charAt(i)
        setTimeout(() => typeWriter(text, i + 1), 500)
      }
    }
    typeWriter('程序员节日快乐🌹!', 0)
  }, [])
  return <div></div>
}
