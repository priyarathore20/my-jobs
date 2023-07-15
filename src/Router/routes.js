// import { lazy } from 'react';
import HomePage from '../Pages/Home';
import Loginpage from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import Signup from '../Pages/Signup';
import NewPost from '../Pages/NewJob';
import AppliedJobs from '../Pages/AppliedJobs';
import MainPage from '../Pages/MainPage';
import NotFound from '../Pages/404/Index';

export const routes = [
  {
    name: '404',
    path: '*',
    // component: lazy(() => import('../Pages/Home')),
    component: NotFound,
    isProtected: false,
  },
  {
    name: 'landingPage',
    path: '/',
    // component: lazy(() => import('../Pages/Home')),
    component: HomePage,
    isProtected: false,
  },
  {
    name: 'login',
    path: '/login',
    // component: lazy(() => import('../Pages/Login')),
    component: Loginpage,
    isProtected: false,
  },
  {
    name: 'signup',
    path: '/signup',
    // component: lazy(() => import('../Pages/Signup')),
    component: Signup,
    isProtected: false,
  },
  {
    name: 'resetPassword',
    path: '/reset-password',
    // component: lazy(() => import('../Pages/ResetPassword')),
    component: ResetPassword,
    isProtected: false,
  },
  {
    name: 'forgotPassword',
    path: '/forgot-password',
    // component: lazy(() => import('../Pages/ForgotPassword')),
    component: ForgotPassword,
    isProtected: false,
  },
  {
    name: 'mainPage',
    path: '/home',
    // component: lazy(() => import('../Pages/MainPage')),
    component: MainPage,
    isProtected: true,
  },
  {
    name: 'appliedJobs',
    path: '/post-job',
    // component: lazy(() => import('../Pages/NewJob')),
    component: NewPost,
    isProtected: true,
  },
  {
    name: 'appliedJobs',
    path: '/applied-jobs',
    // component: lazy(() => import('../Pages/AppliedJobs')),
    component: AppliedJobs,
    isProtected: true,
  },
];
