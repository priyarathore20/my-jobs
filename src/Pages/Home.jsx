import React from 'react'
import '../Home.css';
import Card from '../Components/Card';

const HomePage = () => {
  return (
    <div className="bg">
      <div className="upper">
        <div className='navbar'>
          <h1 className="logo">
            MyJobs
          </h1>
          <button className="nav-login">Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className="welcome">
            <div>
              <h1>Welcome To </h1>
              <h1>MyJobs</h1>
              <button className='main-btn'>Get Started</button>
            </div>
          </div>
          <div><img
            className='image'
            src="https://st2.depositphotos.com/1441511/10685/i/450/depositphotos_106852618-Learning-Studying-Woman-Using-Laptop-Computer-At-Cafe-Working.jpg"
            alt="img" />
          </div>
        </div>
      </div>
      <div className="lower">
        <Card />
      </div>
    </div>
  )
}

export default HomePage