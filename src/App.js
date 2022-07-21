import { useState } from "react";
import PostForm from "./components/PostForm/PostForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addToDoItem = (title, importance) => {
    setToDoItems([...toDoItems, { id: Date.now(), title, importance }]);
  };

  return (
    <div className="App">
      <PostForm addToDoItem={addToDoItem} />
      <ToDoList items={toDoItems} />
    </div>
  );
}

export default App;
