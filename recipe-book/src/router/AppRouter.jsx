import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/recipe/Main";
import Login from "../components/login/Login";
import About from "../components/about/About";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  );
}

export default AppRouter;
