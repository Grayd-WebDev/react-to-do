import React from 'react'
import {BsPatchExclamationFill} from 'react-icons/bs';
import ToDoItemCss from "./toDoItem.module.css";
import {RiDeleteBin2Line} from "react-icons/ri";

const ToDoItem = ({item, removeToDoItem}) => {
  return (
    <div className={ToDoItemCss.toDoItem}>
        <div className={ToDoItemCss.toDoItemText}>{item.title}</div>
        <div className={ToDoItemCss.todoItemIconGroup}>
            {item.importance && <div className={ToDoItemCss.todoItemImportantIcon}><BsPatchExclamationFill/></div>}
            <div onClick={()=>removeToDoItem(item.id)} className='todo-item_bin-icon'><RiDeleteBin2Line/></div>
        </div>
    </div>
  )
}

export default ToDoItem