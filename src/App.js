import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import PostForm from "./components/PostForm/PostForm";
import ToDoList from "./components/ToDoList/ToDoList";

import "bootstrap/dist/css/bootstrap.min.css";

import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/Layout/Layout";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <HomePage
                removeToDoItem={removeToDoItem}
                addToDoItem={addToDoItem}
                toDoItems={toDoItems}
              />
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
