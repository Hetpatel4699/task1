import React from 'react'
import './index.css'

const Input = (props) => {
  const { placeholder, type, value, onChange } = props
  return (
    <div>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className='inputTag' />
    </div>
  )
}

export default Input