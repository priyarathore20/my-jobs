import React from 'react'
import JobCards from '../Components/JobCards'

const AvailableJobs = () => {
  return (
    <div className="bg">
      <div className="upper">
        <div className='navbar'>
          <h1 className="logo">MyJobs</h1>
          <button >
            <img style={{ height: '50px', borderRadius: 50, }} src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="#" />
          </button>
        </div>
        <div className="upper-section">
          < JobCards />
          < JobCards />
          < JobCards />
          < JobCards />
          < JobCards />
          < JobCards />
        </div>
      </div>
    </div>
  )
}

export default AvailableJobs