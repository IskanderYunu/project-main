import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
