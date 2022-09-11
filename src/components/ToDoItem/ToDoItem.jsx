import React from 'react'

import { removeToDo } from "../../store/slices/mainSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useRemoveToDoMutation } from "../../store/rtcApi";

import ToDoItemCss from "./toDoItem.module.css";
import {useSpring, animated} from "react-spring";

import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPatchExclamationFill } from 'react-icons/bs';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';


const ToDoItem = ({item, style}) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.auth);

  const [ removeUserToDo ] = useRemoveToDoMutation();
  const crossLineStyle = useSpring({
    to: { opacity: 1, width: "65%", transform:"rotate(8deg)" },
    from: { opacity: 0, width: "0%",  transform:"rotate(-20deg)" },
    reverse: !item.isComplete,
    config: { frequency: 0.1 }
  }); 

  const onRemoveItem = (item) => {
    if(isAuth){
      return removeUserToDo(item._id);
    }
    dispatch(removeToDo(item.id));
  }

  return (
    <animated.div style={style} className={ToDoItemCss.toDoItem}>
      <animated.div style={crossLineStyle} className={ToDoItemCss.overCrossLineAnimated}></animated.div>
     <CustomCheckbox item={item} isAuth={isAuth}/>
        <div className={ToDoItemCss.toDoItemText}>{item.title}</div>
        <div className={ToDoItemCss.todoItemIconGroup}>
            {item.isImportant && <div className={ToDoItemCss.todoItemImportantIcon}><BsPatchExclamationFill/></div>}
            <div onClick={()=>{onRemoveItem(item)}} className='todo-item_bin-icon'><RiDeleteBin2Line/></div>
        </div>
    </animated.div>
  )
}

export default ToDoItem