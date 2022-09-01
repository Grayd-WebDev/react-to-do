import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/actionCreators";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
    console.log("Auth is checked");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
