import React, { useState } from 'react'

import AuthForm from '../components/AuthForm/AuthForm.jsx';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx';
import { registerUser } from '../store/actionCreators';

import "./RegisterPage.css";

const RegisterPage = ({setUserAuth}) => {
  const [password, setPassword] = useState("");

  const inputList = [
    {
      id:1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
      pattern: "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
    },
    {
      id:2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "It must be greater than 3 symbols",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Password",
      required: true,
    },
    {
      id:3,
      name: "Confirm password",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords are different!",
      label: "Confirm password",
      pattern: password,
      required: true,
    },

  ]

  return (
    <div className='register'>
      <AuthForm page="register" setPassword={setPassword} inputList={inputList} authFn={registerUser} setUserAuth={setUserAuth}/>
    </div>
  ); 
}

export default RegisterPage;