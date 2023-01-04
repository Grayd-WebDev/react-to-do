import React from 'react'

import { loginUser } from "../store/actionCreators";
import AuthForm from '../components/AuthForm/AuthForm';

import "./LoginPage.css";

const LoginPage = () => {
  const inputList = [
    {
      id:1,
      name: "email",
      type: "email",
      placeholder: "Email",
      // errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id:2,
      name: "password",
      type: "password",
      placeholder: "Password",
      // errorMessage: "It should be a valid email address!",
      label: "Password",
      required: true,
    },

  ]
  return (
    <div className='LoginPage'>
      <AuthForm page="login" authFn={loginUser} inputList={inputList} setPassword={()=>{}}/>
    </div>
  )
}

export default LoginPage;