import React from 'react'
import "./styles.css"

const Button = ({ text, onClick = () => { }, ...restProps }) => {
  return (
    <div>
      <button onClick={onClick} {...restProps} className='button'>{text}</button>
    </div>
  )
}

export default Button