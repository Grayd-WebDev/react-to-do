import React, { memo } from 'react'
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

import { useDispatch, useSelector } from 'react-redux';
import { useRemoveToDoMutation } from "../../store/rtcApi";

import {useSpring, animated} from "react-spring";
 
import { BsPatchExclamationFill } from 'react-icons/bs';
import { RiDeleteBin2Line } from "react-icons/ri";
import ToDoItemCss from "./toDoItem.module.css";
import { removeToDo } from "../../store/slices/mainSlice";
import useMeasure from 'react-use-measure';

const ToDoItem = ({item}) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.auth);
  const [ removeUserToDo ] = useRemoveToDoMutation();
  const [ref, itemMeasures ] = useMeasure();
  const diagonal = Math.sqrt((itemMeasures.width)**2 + (itemMeasures.height)**2);
  const diaDegree = 180 - (90 + Math.asin(itemMeasures.height/diagonal)*(180/Math.PI));
  const crossLineStyle = useSpring({
    to: { opacity: 1, height: diagonal + "px", transform:`rotate(${-diaDegree+"deg"})`},
    from: { opacity: 1, height:"100%", transform:"rotate(0deg)"},
    reverse: !item.isComplete,
    config: {frequency: 0.1}
  });

  const onRemoveItem = (item)=>{
    if(isAuth){
      return removeUserToDo(item._id);
    }
    dispatch(removeToDo(item._id));
  }

  return (
       item? <div  className={ToDoItemCss.toDoItem} ref={ref} style={{ boxShadow: item.isComplete && "none",opacity: item.isComplete && 0.6, background: item.isComplete && "rgba(125, 125, 125, 0.11)"}}>
        <animated.div style={crossLineStyle} className={ToDoItemCss.overCrossLineAnimated}></animated.div>
          <CustomCheckbox item={item} isAuth={isAuth}/>
          <div className={ToDoItemCss.toDoItemText}>{item.title}</div>
          <div className={ToDoItemCss.todoItemIconGroup}>
              {item.isImportant && <div className={ToDoItemCss.todoItemImportantIcon}><BsPatchExclamationFill/></div>}
              <div onClick={()=>{onRemoveItem(item)}} className='todo-item_bin-icon'><RiDeleteBin2Line/></div>
          </div>
      </div> : ""
  )
}

export default memo(ToDoItem);