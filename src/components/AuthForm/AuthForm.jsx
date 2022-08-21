import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AuthForm = ({userAuth, authFn, setUserAuth, page}) => {
    const [clientErrors, setClientErrors] = useState({});
    const [registerData, setRegister] = useState({});
    const dispatch = useDispatch();
    const {isLoading, error} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
  
    const onChangeForm = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setRegister({
          ...registerData,
          [name]: value
        });
  
     /**
      * Don`t forget to make client Validation. and u have state clientErrors.
     */
    }
    const onFormSend =  () => {
        const {email, password} = registerData;
        dispatch(authFn({email, password, navigate}));
    }
  return (
    <div className='AuthForm'>
        <div className="auth_inner">
        <div className="auth_inner_inputs">
          <input placeholder='Email' type="text" name="email" onChange={onChangeForm} value={registerData.email}/>
          <input placeholder='Password' type="password" name="password" onChange={onChangeForm} value={registerData.password}/>
            {page === "register"? <input placeholder='Confirm password' type="password" name="confirmPassword" onChange={onChangeForm} value={registerData.confirmPassword}/>: null}
        </div>
        <button className='auth_inner_button' onClick={onFormSend}>Submit</button>
        <div className='auth_inner__info'>
          <span>{isLoading? <LoadingSpinner scaleSet={0.5}/>: ""}</span>
          <span>
          {Object.keys(error).length > 0?error.message:""}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AuthForm