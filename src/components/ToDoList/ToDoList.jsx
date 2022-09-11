import React from 'react'
import { useSelector } from 'react-redux';
import { useGetToDosQuery } from '../../store/rtcApi';

import ToDoItem from '../ToDoItem/ToDoItem';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import ToDoListCss from "./ToDoList.module.css";
import { useTransition, animated } from 'react-spring';


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

  const transition = useTransition(toDosData, {
    from: {x: -100, y:800, opacity: 0},
    enter: {x: 0, y:0, opacity: 1},
    leave: {x: 100, y: 800, opacity: 0},
  });

  if(isLoading)
   return <LoadingSpinner scaleSet={0.5}/>;
   
  return (
    <div className={ToDoListCss.toDoList}>
      {transition((style, item)=>{
        return item? <ToDoItem style={style} item={item} key={item.id}/>: ""
      })}
    </div>
  )
}

export default ToDoList;