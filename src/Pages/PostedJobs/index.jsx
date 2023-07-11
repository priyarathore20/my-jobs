import { AppBar, Avatar, Card,  Dialog, DialogContent, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import {GrDocumentText} from "react-icons/gr"
import Name from '../../Components/Name';
import PostedCards from '../../Components/PostedCards';
import './styles.css';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { Close } from '@mui/icons-material';

const PostedJobs = () => {
  const { currentUser } = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState({});
  const [applyLoading, setApplyLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

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
 
  const handleApplications = (item) => {
    setSelectedJob(item);
    setOpenDialog(true);
  };

  const handleClose = () => setOpenDialog(false);

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
          onClick={handleApplications}
        />
          </>
        ))}
       
      </div>
      <Dialog open={openDialog} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Applicants for this job.
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          Total 0 applications.
          <br /> 
          <Card style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <GrDocumentText />
            <p>No applications available.</p>
          </Card>
        </DialogContent>     
      </Dialog>
    </div>
  );
};

export default PostedJobs;
