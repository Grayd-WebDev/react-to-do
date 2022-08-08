import React from 'react'
import { useSelector } from 'react-redux';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoListCss from "./ToDoList.module.css";


const ToDoList = () => {
  const {toDos} = useSelector(state => state.main);
  return (
    <div className={ToDoListCss.toDoList}>
        {toDos.map((item)=><ToDoItem item={item} key={item.id}/>)}
    </div>
  )
}

export default ToDoList;