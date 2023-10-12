import React from 'react'
import './style.css'

export interface ButtonProps {
  label: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button style={{ backgroundColor: '#4CAF50', padding: '15px 32px', color: 'red' }}>
      {props.label}
    </button>
  )
}
