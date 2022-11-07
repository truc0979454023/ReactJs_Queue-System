import React, { useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Deivce from "./components/device/Deivce";
import Forget from "./components/login/Forget";
import Login from "./components/login/Login";

const App: React.FC = () => {
  const login = useMemo(() => {
    return localStorage.getItem("firstLogin");
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={login ? <Dashboard /> : <Login />} />
        <Route path="/forget" element={<Forget />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/device" element={<Deivce />} />
      </Routes>
    </div>
  );
};

export default App;
