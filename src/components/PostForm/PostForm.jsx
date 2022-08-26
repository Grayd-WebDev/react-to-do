import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {addToDo} from "../../store/slices/mainSlice";
import {BsPatchExclamation, BsPatchExclamationFill} from 'react-icons/bs';
import PostFormCss from "./PostForm.module.css";

const PostForm = () => {
  const [toDoText, setToDoText] = useState('');
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);

  const dispatch = useDispatch();
  const authState = useSelector((state)=>state.auth);

  const onToDoTextChange = (e)=>{
    setToDoText(e.target.value);
  };

  const onToDoSubmit = ()=>{
    const toDoData = {
      id: Date.now(),
      title: toDoText,
      importance: isActiveIcon
    }
    
    dispatch(addToDo(toDoData));
    setToDoText('');
    setIsActiveIcon(false);
    setIsIconClicked(false);
  };

  const toggleIsActiveIcon = () => {
    setIsActiveIcon(!isActiveIcon);
    setIsIconClicked(!isIconClicked);
  }

  const onHoverIcon = () => {
    if(!isIconClicked) setIsActiveIcon(false);
  };

    return (
    <div className={PostFormCss.postForm}>
        <div className={PostFormCss.toDoForm}>
          <div className={PostFormCss.postInputWithBtn}>
            <input placeholder='Type...' className={PostFormCss.toDoTextInput + " form-control shadow-none"} onChange={onToDoTextChange} type="text" value={toDoText}/>
            <button className={PostFormCss.toDoTextBtn} onClick={onToDoSubmit}>Add</button>
          </div>
          <div className={PostFormCss.formExclamationIcon}>
            {isActiveIcon ? 
            <BsPatchExclamationFill
            onClick={toggleIsActiveIcon}
            onMouseLeave={onHoverIcon}
            className={PostFormCss.importanceIcon}/>
            :
            <BsPatchExclamation
            onMouseEnter={()=>setIsActiveIcon(true)} 
            className={PostFormCss.importanceIcon}/>}
          </div>
        </div>
        {!authState.isAuth &&
        <div className={PostFormCss.attentionMessage}>
          Attention pls, as you are not authorized your to do list is npt going to be saved!
        </div>}
    </div>
  )
}

export default PostForm;