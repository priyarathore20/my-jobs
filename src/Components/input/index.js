import React from 'react'
import './styles.css'

const Input = ({ label, placeholder, type, onChange = () => { }, value = '' }) => {
  return (
    <div>
      <label >{label}</label>
      <input onChange={onChange} value={value} className='input' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input