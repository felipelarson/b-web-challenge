import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export const Button = ({ children, color, path }) => {
  return (
    <Link to={path} className='btn' style={{ background: `var(--${color})` }}>
      {children}
    </Link >
  )
}
