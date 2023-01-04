import React, { useState } from 'react'

import "./FormInput.css";

const FormInput = ({input, onChangeForm, value}) => {
  const [wasFocused, setWasFocused] = useState(false);
    
  const onBlur = () => {
    setWasFocused(true);
  }
    return (
    <div className='FormInput'>
        <input {...input} onChange={onChangeForm} value={value} focused={wasFocused.toString()} onBlur={onBlur}/>
        <span className='input-error'>{input.errorMessage}</span>
    </div>
  )
}

export default FormInput;