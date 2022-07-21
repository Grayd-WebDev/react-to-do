import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({items}) => {
  return (
    <div className='ToDoList'>
        {items.map((item)=><ToDoItem item={item} key={item.id}/>)}
    </div>
  )
}

export default ToDoList;