import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AuthForm = ({userAuth, authFn, setUserAuth, page}) => {
    const [clientErrors, setClientErrors] = useState({});
    const [errorData, setErrorData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [registerData, setRegister] = useState({});

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
        
        setIsLoading(true);
        setErrorData({});
        authFn(email, password).then((res)=>{
          setUserAuth(res.data.userData);
          debugger;
          navigate('/', {replace:true});
        }).catch((err)=>{
          if(Object.keys(err.response.data).length > 0){
            return setErrorData(err.response.data);
          }
          setErrorData({message: "We are sorry, but something went wrong on our server, please try a bit later :C"});
          console.log(err);
        })
        .finally(()=>{
          setIsLoading(false);
        });
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
          {Object.keys(errorData).length > 0?errorData.message:""}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AuthForm