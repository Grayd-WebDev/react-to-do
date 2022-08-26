import React from 'react'
import { useSelector } from 'react-redux';
import { useGetToDosQuery } from '../../store/rtcApi';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoListCss from "./ToDoList.module.css";


const ToDoList = () => {
  let toDosData = [];
  let state = useSelector(state => state);
  const {data} = useGetToDosQuery();
  
  return (
    <div className={ToDoListCss.toDoList}>
        {toDosData.map((item)=><ToDoItem item={item} key={item.id}/>)}
    </div>
  )
}

export default ToDoList;