import React, { useState } from 'react';
import { checkToDo } from "../../store/slices/mainSlice";

import { animated, useSpring, config, useChain, useSpringRef } from "react-spring";
import { useUpdateToDoMutation } from '../../store/rtcApi';
import { useDispatch } from 'react-redux';

import "./CustomCheckbox.css";

const CustomCheckbox = ({ item, isAuth }) => {

  const [checkMarkLength, setCheckMarkLength] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [ updateToDo ] = useUpdateToDoMutation();

  const dispatch = useDispatch();

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor : item.isComplete ? "#808": "#fff",
    borderColor : item.isComplete ? "#808": "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef
  });

  const checkMarkAnimationRef = useSpringRef();
  const checkMarkLengthStyle = useSpring({
    x: item.isComplete ? 0 : checkMarkLength,
    config: config.gentle,
    ref: checkMarkAnimationRef
  });

  useChain(
    item.isComplete
    ?[checkboxAnimationRef, checkMarkAnimationRef]
    :[checkMarkAnimationRef, checkboxAnimationRef], 
    [0, 0.1]
    );

    const onCheckItem = (item) => {
      dispatch(checkToDo(item._id));
      if(isAuth){
        updateToDo(item._id);
      }
  }
  return (
  <div className='customCheckbox'>
    <label>
      <input
        type="checkbox"
        onChange={() => {
         if(item){
            onCheckItem(item);
          }
        }}
      />
          <animated.svg
              style={checkboxAnimationStyle}
              className={`checkbox ${item.isComplete ? "checkbox--active" : ""}`}
              // This element is purely decorative so
              // we hide it for screen readers
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
           <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            strokeDasharray={checkMarkLength}
            strokeDashoffset={checkMarkLengthStyle.x}
            stroke="#fff"// only show the checkmark when `isCheck` is `true`
            ref={(ref)=>{
              if(ref){
                setCheckMarkLength(ref.getTotalLength());
              }
            }}
          />
        </animated.svg>
    </label>
    </div>
  )
}

export default CustomCheckbox;