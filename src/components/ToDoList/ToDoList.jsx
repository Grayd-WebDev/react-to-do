import React from 'react'
import { useSelector } from 'react-redux';
import { useGetToDosQuery } from '../../store/rtcApi';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoListCss from "./ToDoList.module.css";


const ToDoList = () => {
  const {data} = useGetToDosQuery();
  const state = useSelector(state => state);
  
  let toDosData = [];
  
  if(state.auth.isAuth){
    toDosData = data.toDos.toDos;
  }else{
    toDosData = state.main.toDos;
  }
  
  return (
    <div className={ToDoListCss.toDoList}>
        {toDosData.map((item)=><ToDoItem item={item} key={item.id}/>)}
    </div>
  )
}

export default ToDoList;