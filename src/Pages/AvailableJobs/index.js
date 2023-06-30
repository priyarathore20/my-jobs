import React from 'react'
import JobCards from '../../Components/JobCards'
import Name from '../../Components/Name'
import { Avatar } from '@mui/material'
import "./styles.css"

const AvailableJobs = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        < Name />
        <div className="applied-jobs">
          <a className='apply-link' href="#">Applied jobs</a>
          <Avatar className='avatar'>P</Avatar>
        </div>
      </div>
      <div className="job-cards">
        < JobCards />
        < JobCards />
        < JobCards />
        < JobCards />
        < JobCards />
        < JobCards />
      </div>
    </div>
  )
}

export default AvailableJobs