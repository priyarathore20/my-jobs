import React from 'react'
import "./styles.css"

const Button = (props) => {
  return (
    <div>
      <button className='button'>{props.text}</button>
    </div>
  )
}

export default Button