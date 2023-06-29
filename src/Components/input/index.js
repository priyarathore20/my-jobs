import React from 'react'
import './styles.css'

const Input = (props) => {
  return (
    <div>
      <label >{props?.label}</label>
      <input className='input' type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Input