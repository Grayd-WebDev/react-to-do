import React from 'react'
import { useState } from 'react'

const RegisterPage = () => {
  const [registerData, setRegister] = useState({});
    const onChangeForm = (e) => {
        setRegister({...registerData ,[e.target.name]: [e.target.name]});
    console.log(registerData);
    }
  return (
    <div className='register'>
        <input type="text" onChange={onChangeForm} value={registerData.password}/>
        <input type="text" onChange={onChangeForm} value={registerData.email}/>
    </div>
  );
}

export default RegisterPage;