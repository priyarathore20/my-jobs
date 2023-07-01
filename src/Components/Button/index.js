import React from 'react'
import "./styles.css"

const Button = ({ text, onClick = () => { } }) => {
  return (
    <div>
      <button onClick={onClick} className='button'>{text}</button>
    </div>
  )
}

export default Button