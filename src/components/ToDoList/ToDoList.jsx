import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoListCss from "./ToDoList.module.css";

const ToDoList = ({items, removeToDoItem}) => {
  return (
    <div className={ToDoListCss.toDoList}>
        {items.map((item)=><ToDoItem removeToDoItem={removeToDoItem} item={item} key={item.id}/>)}
    </div>
  )
}

export default ToDoList;