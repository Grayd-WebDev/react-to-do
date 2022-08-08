import React from 'react';

import PostForm from '../components/PostForm/PostForm';
import ToDoList from '../components/ToDoList/ToDoList';

const HomePage = () => {
  return (
    <div>
      <div className="SomeFn">
        {/* I`m thinking about adding here some nice functionaluty // such as
        Profile or File exchenge btween users of the app. */}
      </div>
      <div className="ToDoMain">
        <PostForm/>
        <ToDoList/>
      </div>
    </div>
  )
}

export default HomePage;