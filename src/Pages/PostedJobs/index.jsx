import { Avatar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import Name from '../../Components/Name';
import PostedCards from '../../Components/PostedCards';
import './styles.css';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';

const PostedJobs = () => {
  const { currentUser } = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([])

  const fetchPostedJobs = async () => {
    if (currentUser) {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://jobs-api.squareboat.info/api/v1/recruiters/jobs',
          headers: {
            Authorization: currentUser?.token,
          },
        });
        setPostedJobs(res.data.data.data);
        console.log(setPostedJobs)
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchPostedJobs();
  }, [currentUser]);


  return (
    <div className="body">
      <div className="navbar">
        <Name />
        <div className="post">
          <a className="Post-link" href="/new-post">
            Post a job
          </a>
          <Avatar>P</Avatar>
        </div>
      </div>
      <div className="home">
        <FaHome /> Home
      </div>
      <div className="job-heading">Jobs Posted By You :</div>
      <div className="job-cards">
        {postedJobs.map((item)=>(
          <>
           <PostedCards
          number={item?.title}
          text={item?.description}
          location={item?.location}
          button="View Applications"
        />
          </>
        ))}
       
      </div>
    </div>
  );
};

export default PostedJobs;
