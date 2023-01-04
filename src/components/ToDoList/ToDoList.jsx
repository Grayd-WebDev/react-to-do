import React from 'react'
import { useGetToDosQuery } from '../../store/rtcApi';
import { useSelector } from 'react-redux';

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ToDoItem from '../ToDoItem/ToDoItem'

import ToDoListCss from "./ToDoList.module.css";

const ToDoList = () => {
  //didLogout is related to a weird bug here that needs to be fixed;
  //rn i don`t know how. :c
  const {toDos, didLogout} = useSelector(state => state.main);
  const {isAuth} = useSelector(state => state.auth);
  const items = useGetToDosQuery();

  let toDosData = [];

  if(isAuth && items.isSuccess){
    toDosData = [...items.data.toDos.toDos];
  }else{
    toDosData = [...toDos];
  }


  if(items.isLoading)
    return <LoadingSpinner scaleSet={0.5}/>;

  return (
    <div className={ToDoListCss.toDoList}>
       {toDosData.length>0?
        toDosData.map((item)=><ToDoItem key={item._id} item={item}/>)
       :<div>Empty!</div>}
    </div>
  )
}

export default React.memo(ToDoList);
