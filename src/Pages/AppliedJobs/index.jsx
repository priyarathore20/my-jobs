import React from 'react'
import Name from "../../Components/Name"
import { Avatar } from '@mui/material'
import { FaHome } from "react-icons/fa"
import { TbMathGreater } from "react-icons/tb"
import "./styles.css"
import PostedCards from '../../Components/PostedCards'

const AppliedJobs = () => {
  return (
    <div className='body'>
      <div className='navbar'>
        < Name />
        <Avatar className='avatar'>P</Avatar>
      </div>
      <div >
        <p className="home"><a className='link' href="/available-jobs"><FaHome /> Home </a><TbMathGreater /> Applied jobs</p>
      </div>
      <div >
        <p className="job-heading">Jobs Applied by you :</p>
      </div>
      <div className="cards">
        <PostedCards number='1' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='2' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='3' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='4' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='5' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='6' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='7' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='8' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='9' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='10' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='11' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
        <PostedCards number='12' text='Job information given here.' location='Delhi' button='Applied on 17 may 2023' />
      </div>
    </div >
  )
}

export default AppliedJobs