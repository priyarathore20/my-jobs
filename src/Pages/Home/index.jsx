import React from 'react'
import './styles.css';
import HomeCards from "../../Components/HomeCards"
import CompaniesLogo from '../../Components/Logo';
import Name from "../../Components/Name"
import Button from "../../Components/Button"
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }
  return (
    <div>
      <div className="upper">
        <div className='navbar'>
          <Name />
          <button className="nav-login" onClick={handleClick}>Login/Signup</button>
        </div>
        <div className="upper-section">
          <div className='welcome-title'>
            <div>
              <h1 className='welcome'>Welcome To </h1>
              <h1 className='welcome'>MyJobs</h1>
            </div>
            <div><Button text='Get Started' /></div>
          </div>
          <div>
            <img
              className='image'
              src="https://st2.depositphotos.com/1441511/10685/i/450/depositphotos_106852618-Learning-Studying-Woman-Using-Laptop-Computer-At-Cafe-Working.jpg"
              alt="img" />
          </div>
        </div>
      </div>
      <div className="lower">
        <HomeCards />
        < CompaniesLogo />
      </div>
    </div>
  )
}

export default HomePage