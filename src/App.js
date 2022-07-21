import { useState } from "react";
import PostForm from "./components/PostForm/PostForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addToDoItem = (title, importance) => {
    setToDoItems([...toDoItems, { id: Date.now(), title, importance }]);
  };

  const removeToDoItem = (id) => {
    setToDoItems([...toDoItems.filter((item) => item.id !== id)]);
  };

  return (
    <div className="App">
      <PostForm addToDoItem={addToDoItem} />
      <ToDoList items={toDoItems} removeToDoItem={removeToDoItem} />
    </div>
  );
}

export default App;
