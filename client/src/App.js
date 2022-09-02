import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Estadisticas from "./components/Estadisticas";
import { setUser } from "./features/user/authSlice";
import PrivateRoute from "./components/Private/PrivateRoute";
import Team from "./components/Team/Team";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <div
      className="App"
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/control"
            element={
              <PrivateRoute>
                <ControlPanel />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Estadisticas"
            element={
              <PrivateRoute>
                <Estadisticas />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
