import React, {useEffect, useContext, useState } from 'react';
import Name from '../../Components/Name';
import { Avatar } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import { TbMathGreater } from 'react-icons/tb';
import './styles.css';
import PostedCards from '../../Components/PostedCards';
import { AuthContext } from '../../Context/AuthContext';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const {currentUser} = useContext(AuthContext)

  const fetchAppliedJobs = async () => {
    if (currentUser) {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://jobs-api.squareboat.info/api/v1/candidates/jobs/applied',
          headers: {
            Authorization: currentUser?.token,
          },
        });
        console.log(res.data.data);
        setAppliedJobs(res.data.data)
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      }
    }
  };

useEffect(()=> {
  fetchAppliedJobs()
}, [currentUser])

  return (
    <div className="body">
      <div className="navbar">
        <Name />
        <Avatar className="avatar">P</Avatar>
      </div>
      <div>
        <p className="home">
          <a className="link" href="/available-jobs">
            <FaHome /> Home{' '}
          </a>
          <TbMathGreater /> Applied jobs
        </p>
      </div>
      <div>
        <p className="job-heading">Jobs Applied by you :</p>
      </div>
      <div className="job-cards">
        {appliedJobs.map((item) => {
          <PostedCards
            number={item?.title}
            text={item?.description}
            location={item?.location}
            button={'Applied on' + item?.createdAt}
          />;
        })}
      </div>
    </div>
  );
};

export default AppliedJobs;
