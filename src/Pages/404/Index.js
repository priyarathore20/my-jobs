import React from 'react';
import {MdError} from  'react-icons/md'
import "./styles.css"

const NotFound = () => {
  return <div className='not-found'>
  {/* <MdError className='error-icon' />
  <h1 className='error-msg'>Page not found !</h1> */}
  <img className='error-img' src="https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg" alt="404" />
  </div>;
};

export default NotFound;
