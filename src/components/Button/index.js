import React from 'react'
import "./style.css"

export const Button = ({ children, color }) => {
  return (
    <button className='btn' style={{ background: `var(--${color})` }}>
      {children}
    </button >
  )
}
