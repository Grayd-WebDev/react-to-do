import React from 'react';

import PostForm from '../PostForm/PostForm';
import ToDoList from '../ToDoList/ToDoList';

const HomePage = ({addToDoItem, toDoItems, removeToDoItem}) => {
  return (
    <div>
      <div className="SomeFn">
        {/* I`m thinking about adding here some nice functionaluty // such as
        Profile or File exchenge btween users of the app. */}
      </div>
      <div className="ToDoMain">
        <PostForm addToDoItem={addToDoItem} />
        <ToDoList items={toDoItems} removeToDoItem={removeToDoItem} />
      </div>
    </div>
  )
}

export default HomePage;