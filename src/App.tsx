import React from "react";
import { Routes, Route } from "react-router-dom";
import Forget from "./components/login/Forget";
import Login from "./components/login/Login";
import Main from "./components/main/Main";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
      </Routes>
    </div>
  );
};

export default App;
