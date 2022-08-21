import React from 'react'
import { useDispatch } from 'react-redux';
import AuthForm from '../components/AuthForm/AuthForm';
import UserService from '../services/UserService';
import { loginUser } from "../store/actionCreators";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <AuthForm page="login" authFn={loginUser}/>
    </div>
  )
}

export default LoginPage;