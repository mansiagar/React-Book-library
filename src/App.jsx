import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyBooksPage from "./pages/MyBooksPage";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mybooks" element={<MyBooksPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default App;
