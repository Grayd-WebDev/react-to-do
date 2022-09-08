import React from 'react'
import { useSelector } from 'react-redux';
import { useGetToDosQuery } from '../../store/rtcApi';

import ToDoItem from '../ToDoItem/ToDoItem';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import ToDoListCss from "./ToDoList.module.css";


const ToDoList = () => {
  const {data, isLoading, isFetching} = useGetToDosQuery();
  const {toDos} = useSelector(state => state.main);
  const {isAuth} = useSelector(state => state.auth);
  
  let toDosData = [];

  if(isAuth && data){
    toDosData = data.toDos.toDos;  
  }else{
    toDosData = toDos;
  }

  if(isLoading)
   return <LoadingSpinner scaleSet={0.5}/>;
   
  return (
    <div className={ToDoListCss.toDoList}>
        {toDosData.map((item)=><ToDoItem item={item} key={item.id}/>)}
    </div>
  )
}

export default ToDoList;