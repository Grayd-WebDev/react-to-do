import React from 'react'

import { removeToDo } from "../../store/slices/mainSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useRemoveToDoMutation } from "../../store/rtcApi";

import ToDoItemCss from "./toDoItem.module.css";

import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPatchExclamationFill } from 'react-icons/bs';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';


const ToDoItem = ({item}) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.auth);

  const [ removeUserToDo ] = useRemoveToDoMutation();
  
  const onRemoveItem = (item) => {
    if(isAuth){
      return removeUserToDo(item._id);
    }
    dispatch(removeToDo(item.id));
  }

  return (
    <div className={ToDoItemCss.toDoItem}>
     <CustomCheckbox item={item} isAuth={isAuth}/>
        <div className={ToDoItemCss.toDoItemText}>{item.title}</div>
        <div className={ToDoItemCss.todoItemIconGroup}>
            {item.isImportant && <div className={ToDoItemCss.todoItemImportantIcon}><BsPatchExclamationFill/></div>}
            <div onClick={()=>{onRemoveItem(item)}} className='todo-item_bin-icon'><RiDeleteBin2Line/></div>
        </div>
    </div>
  )
}

export default ToDoItem