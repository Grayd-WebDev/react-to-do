import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from "../../store/slices/mainSlice";
import { BsPatchExclamationFill } from 'react-icons/bs';
import { useAddToDoMutation } from '../../store/rtcApi/toDosApi';

import "./PostForm.css";

const PostForm = () => {
  const [toDoText, setToDoText] = useState('');
  const [isActiveIcon, setIsActiveIcon] = useState(false);

  const [addUserToDo] = useAddToDoMutation();

  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.auth);
  
  const onToDoTextChange = (e)=>{
    setToDoText(e.target.value);
  };

  const onToDoSubmit = ()=>{
    if(toDoText.length === 0)
      return

    const toDoData = {
      _id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
      title: toDoText,
      isImportant: isActiveIcon,
      isComplete: false
    }
    
    if(!isAuth){
      dispatch(addToDo(toDoData));
    }else{
      addUserToDo(toDoData);
    }

    setToDoText('');
    setIsActiveIcon(false); 
  };

  const onClickIcon = () => {
    setIsActiveIcon(!isActiveIcon);
  }

    return (
    <div className="postForm">
        <div className="toDoForm">
          <div className="postInputWithBtn">
            <input placeholder='Type...' className="toDoTextInput form-control shadow-none" onChange={onToDoTextChange} type="text" value={toDoText}/>
            <button className="toDoTextBtn" onClick={onToDoSubmit}>Add</button>
          </div>
          <div className="formExclamationIcon">
          <BsPatchExclamationFill
            onClick={onClickIcon}
            className={`importanceIcon ${isActiveIcon && "importanceIconActive"}`}/>
          </div>
        </div>
        {!isAuth &&
        <div className="attentionMessage">
          Attention pls, as you are not authorized your to do list is not going to be saved!
        </div>}
    </div>
  )
}

export default React.memo(PostForm);