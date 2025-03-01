import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyBooksPage from "./pages/MyBooksPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mybooks" element={<MyBooksPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
