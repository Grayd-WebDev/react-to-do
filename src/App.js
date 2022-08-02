import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import PostForm from "./components/PostForm/PostForm";
import ToDoList from "./components/ToDoList/ToDoList";

import "bootstrap/dist/css/bootstrap.min.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [userAuth, setUserAuth] = useState(null);

  const addToDoItem = (title, importance) => {
    setToDoItems([...toDoItems, { id: Date.now(), title, importance }]);
  };

  const removeToDoItem = (id) => {
    setToDoItems([...toDoItems.filter((item) => item.id !== id)]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout userAuth={userAuth} />}>
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
          <Route
            path="register"
            element={<RegisterPage setUserAuth={setUserAuth} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
