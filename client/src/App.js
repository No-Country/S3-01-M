import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ControlPanel from "./components/controlPanel/ControlPanel";
import Estadisticas from "./components/Estadisticas";

function App() {
  return (
    <div className="App" style={{background: 'linear-gradient(0deg, rgb(0 0 0 / 12%) 0%, rgba(255,255,255,1) 100%)'}}>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/control" element={<ControlPanel />}></Route>
          <Route path="/Estadisticas" element={<Estadisticas />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
