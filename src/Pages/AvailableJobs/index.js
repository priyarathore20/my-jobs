import React, { useContext, useEffect } from 'react';
import Name from '../../Components/Name';
import {
  AppBar,
  Avatar,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import './styles.css';
import JobCards from '../../Components/JobCards';
import PostedCards from '../../Components/PostedCards';
import { FaHome } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { useState } from 'react';
import { Close } from '@mui/icons-material';

const AvailableJobs = () => {
  const { currentUser } = useContext(AuthContext);

  // to store the data of jobs
  const [availableJobs, setAvailableJobs] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  // stores the data of job jispe dialog open hua hai
  const [selectedJob, setSelectedJob] = useState({});

  // loading for fetching the available jobs on page-load
  const [fetchLoading, setFetchLoading] = useState(true);

  // loading for apply the job from the dialog
  const [applyLoading, setApplyLoading] = useState(false);

  console.log(currentUser);

  const fetchAvailableJobs = async () => {
    console.log('function called');
    if (currentUser) {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://jobs-api.squareboat.info/api/v1/candidates/jobs',
          headers: {
            Authorization: currentUser?.token,
          },
        });
        setAvailableJobs(res?.data?.data);
        setFetchLoading(false);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchAvailableJobs();
  }, [currentUser]);

  const handleApplyJob = (item) => {
    setSelectedJob(item);
    setOpenDialog(true);
  };

  const handleClose = () => setOpenDialog(false);

  const applyJob = async () => {
    setApplyLoading(true);
    try {
      const res = await axios({
        method: 'post',
        url: 'https://jobs-api.squareboat.info/api/v1/candidates/jobs',
        headers: {
          Authorization: currentUser?.token,
        },
        data: {
          jobId: selectedJob?.id,
        },
      });

      fetchAvailableJobs();
      setApplyLoading(false);
      setOpenDialog(false);
      setSelectedJob({});

      console.log(res);
    } catch (error) {
      setApplyLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="body">
      <div className="navbar">
        <Name />
        <div className="applied-jobs">
          <a className="apply-link" href="/applied-jobs">
            Applied jobs
          </a>
          <Avatar className="avatar">P</Avatar>
        </div>
      </div>
      <div className="breadcrumb">
        <p className="path">
          <FaHome className="new-icon" /> Home
        </p>
      </div>
      <div>
        <p className="job-heading-1">Jobs Available for you :</p>
      </div>

      {fetchLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
        >
          <CircularProgress />
        </div>
      ) : availableJobs.length === 0 ? (
        <p>No jobs</p>
      ) : (
        <div className="job-cards">
          {availableJobs.map((item) => (
            <div>
              <PostedCards
                number={item?.title}
                text={item?.description}
                location={item?.location}
                jobId={item?.id}
                button="Apply"
                onButtonClick={() => handleApplyJob(item)}
              />
            </div>
          ))}
        </div>
      )}

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
              Apply for a job
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          Are you sure you want to apply for this job?
          <br /> <b>Profile:</b> {selectedJob?.title}
          <br /> <b>Description:</b> {selectedJob?.description}
          <br />
          <b> Location:</b> {selectedJob?.location}
        </DialogContent>

        <DialogActions>
          <Button
            disabled={applyLoading}
            variant="contained"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            disabled={applyLoading}
            variant="contained"
            color="primary"
            onClick={applyJob}
          >
            {applyLoading ? <CircularProgress size={24} /> : 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AvailableJobs;
