import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
import { GrClose } from "react-icons/gr"

const NewPost = () => {
  return (
    <div className='card'>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h3 className='new-title'>Applications for this job.</h3>
        <GrClose />
      </div>
      <p className="new-text">Total 0 Applications.</p>
      <div className="total-applications" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ backgroundColor: "darkgray", borderRadius: 5, margin: "7px", padding: "10px" }}>
          < RiPagesLine />
          <p className='new-text'>No applications available.</p>
        </div>
      </div>
    </div>
  )
}

export default NewPost