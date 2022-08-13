import React from 'react'

import { removeToDo } from "../../store/slices/mainSlice";
import { useDispatch } from 'react-redux';

import ToDoItemCss from "./toDoItem.module.css";

import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPatchExclamationFill } from 'react-icons/bs';


const ToDoItem = ({item}) => {
  const dispatch = useDispatch();
  const onRemoveItem = () =>{
    dispatch(removeToDo(item.id));
  }
  return (
    <div className={ToDoItemCss.toDoItem}>
        <div className={ToDoItemCss.toDoItemText}>{item.title}</div>
        <div className={ToDoItemCss.todoItemIconGroup}>
            {item.importance && <div className={ToDoItemCss.todoItemImportantIcon}><BsPatchExclamationFill/></div>}
            <div onClick={onRemoveItem} className='todo-item_bin-icon'><RiDeleteBin2Line/></div>
        </div>
    </div>
  )
}

export default ToDoItem