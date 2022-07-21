import React from 'react'
import {BsPatchExclamationFill} from 'react-icons/bs';

const ToDoItem = ({item}) => {
  return (
    <div className='todo-item'>
        <div className='todo-item_text'>{item.title}</div>
        {item.importance && <div className='todo-item_important-icon'><BsPatchExclamationFill/></div>}
    </div>
  )
}

export default ToDoItem