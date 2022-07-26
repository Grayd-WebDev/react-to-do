import React from 'react'
import { useState } from 'react'

const RegisterPage = () => {
  const [registerData, setRegister] = useState({});
    const onChangeForm = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      setRegister({
        ...registerData,
        [name]: value
      });
    }
    const onFormSend = () => {
      console.log(registerData);
      setRegister({email: "", password:""});
    }
  return (
    <div className='register'>
        <input type="text" name="email" onChange={onChangeForm} value={registerData.email}/>
        <input type="text" name="password" onChange={onChangeForm} value={registerData.password}/>
        <button onClick={onFormSend}>Send</button>
    </div>
  );
}

export default RegisterPage;