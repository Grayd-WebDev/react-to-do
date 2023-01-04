import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AuthForm = ({authFn, inputList, setPassword}) => {
  const [formData, setFormData] = useState({});
  const {auth} = useSelector((state)=>state)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeForm = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      /*
        This password field is only for comparing 
        password and confirm password fields in 
        parent component RegisterPage.jsx; 
        we just need it. =_=
      */
      if(name === "password"){
        setPassword(value);
      }

      setFormData({
        ...formData,
        [name]: value
      });
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        const {email, password} = formData;
        dispatch(authFn({email, password, navigate}));
    }

    return (
      <div className='AuthForm'>
        <form onSubmit={handleSubmit}>
        <div className="auth_inner">
          <div className="auth_inner_inputs">
            {
              inputList.map((input)=>{
                return(
                  <FormInput key={input.id} input={input} onChangeForm={onChangeForm} value={formData[input.name]}/>
                );
              })
            }
          </div>
          <button type='submit' className='auth_inner_button'>Submit</button>
          <div className='auth_inner__info'>
            <span>{auth.isLoading && <LoadingSpinner scaleSet={0.5}/>}</span>
            <span>{auth.error?.response?.status !== 401? auth.error?.response?.data?.message.replace(/(Error?)\w+(:?)/g, "") : ""}</span>
          </div>
        </div>
        </form>
      </div>
    )
}

export default AuthForm