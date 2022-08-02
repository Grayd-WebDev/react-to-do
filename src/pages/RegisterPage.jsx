import React from 'react'
import { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm.jsx';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx';
import UserService from '../services/UserService.js';

import "./RegisterPage.css";

const RegisterPage = ({setUserAuth}) => {

  return (
    <div className='register'>
      <AuthForm page="register" authFn={UserService.register} setUserAuth={setUserAuth}/>
    </div>
  );
}

export default RegisterPage;