import React from 'react'
import AuthForm from '../components/AuthForm/AuthForm';
import UserService from '../services/UserService';

import "./LoginPage.css";

const LoginPage = ({setUserAuth}) => {
  return (
    <div className='LoginPage'>
      <AuthForm page="login" authFn={UserService.login} setUserAuth={setUserAuth}/>
    </div>
  )
}

export default LoginPage;