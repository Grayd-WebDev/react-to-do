import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import { useSelector } from "react-redux";

function App() {
  const { toDos } = useSelector((state) => state.main);
  const [userAuth, setUserAuth] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout userAuth={userAuth} />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={<LoginPage setUserAuth={setUserAuth} />}
          />
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
