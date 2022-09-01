import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fisalupng from "../../assets/imgs/fisalu.png";
import module from "./LoadingToRedirect.module.css";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className={module.container}>
      <h1>Debe logearse , Redirigiendo en {count} segundos</h1>

      <img src={fisalupng} alt="new"></img>
    </div>
  );
};

export default LoadingToRedirect;
