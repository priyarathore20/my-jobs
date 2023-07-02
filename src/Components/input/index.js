import React from 'react'
import './styles.css'

const Input = ({ label, placeholder, type, onChange = () => { }, value = '', error = false }) => {
  return (
    <div>
      <label className='label' >{label}</label>
      <input onChange={onChange} value={value} className={`input ${error ? 'input-error' : ""}`} type={type} placeholder={placeholder} />
      {error ? <p className="error">This field is mandatory.</p> : null}
    </div>
  )
}

export default Input