import React from 'react';

import PostForm from '../components/PostForm/PostForm';
import ToDoList from '../components/ToDoList/ToDoList';

const HomePage = () => {
  return (
    <div>
      <div className="ToDoMain">
        <PostForm/>
        <ToDoList/>
      </div>
    </div>
  )
}

export default HomePage;