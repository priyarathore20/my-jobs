import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import PostedJobs from '../PostedJobs';
import AvailableJobs from '../AvailableJobs';

const MainPage = () => {
  const { currentUser } = useContext(AuthContext);


  if (currentUser?.userRole == null) return <div>Loading...</div>;

  return currentUser.userRole === 0 ? <PostedJobs /> : <AvailableJobs />;
};

export default MainPage;
