import {
  AppBar,
  Avatar,
  Card,
  Dialog,
  DialogContent,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import Name from '../../Components/Name';
import PostedCards from '../../Components/PostedCards';
import './styles.css';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PostedJobs = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [jobCandidates, setJobCandidates] = useState([]);
  // const [applyLoading, setApplyLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
    await localStorage.removeItem('user');
    navigate('/login');
  };

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
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchOneJobApplicants = async (item) => {
    setOpenDialog(true);
    setSelectedJob(item);

    if (currentUser) {
      try {
        const res = await axios({
          method: 'get',
          url:
            'https://jobs-api.squareboat.info/api/v1/recruiters/jobs/' +
            item?.id +
            '/candidates',
          headers: {
            Authorization: currentUser?.token,
          },
        });
        setJobCandidates(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(item);
  };

  useEffect(() => {
    fetchPostedJobs();
  }, [currentUser]);

  const handleClose = () => setOpenDialog(false);

  const HandleClose = () => {
    setAnchorEl(null);
  };

  let initial = currentUser?.name.charAt(0);
  // console.log(initial)

  return (
    <div className="body">
      <div className="navbar">
        <Name />
        <div className="post">
          <a className="Post-link" href="/new-post">
            Post a job
          </a>
          <div>
            <Avatar
              className="avatar"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {initial}
            </Avatar>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={HandleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="home">
        <FaHome /> Home
      </div>
      <div className="job-heading">Jobs Posted By You :</div>
      <div className="job-cards">
        {postedJobs.map((item) => (
          <>
            <PostedCards
              number={item?.title}
              text={item?.description}
              location={item?.location}
              button="View Applications"
              onButtonClick={() => fetchOneJobApplicants(item)}
            />
          </>
        ))}
      </div>
      <div className="dialogg">
        <Dialog className="dialog" open={openDialog} onClose={handleClose}>
          <AppBar
            className="appbar"
            sx={{
              position: 'relative',
              backgroundColor: 'white',
              color: 'grey',
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                // color="inherit"
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
          <p style={{ margin: '10px', fontSize: '15px' }}>
            Total 0 applications.
          </p>
          <DialogContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              width: '400px',
              backgroundColor: 'grey',
              margin: '20px',
              marginTop: '0px',
              borderRadius: '20px',
            }}
          >
            <Card
              sx={{
                backgroundColor: 'grey',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <GrDocumentText
                style={{
                  height: '80px',
                  backgroundColor: 'grey',
                  width: '100px',
                }}
              />

              {jobCandidates?.map((item) => (
                <div>{item.name}</div>
              ))}
              <p style={{ backgroundColor: 'grey' }}>
                No applications available.
              </p>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PostedJobs;
