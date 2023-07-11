import React from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import "./styles.css"

const dropDown = () => {
  return (
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <IoMdArrowDropdown />
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Logout</a>
    </div>
  </div>
  )
}

export default dropDown