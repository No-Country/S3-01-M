import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loaders from "../Loader/Loaders"
import module from "./LoadingToRedirect.module.css";
import piggyShadowless from "../../assets/imgs/piggy-shadowless.svg"

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
      <div className="relative h-screen">
        <h2 className="pt-[10%] text-center text-4xl font-bold text-white">Debe logearse, redirigiendo en {count} segundos</h2>
        <div className="w-full z-40 ">
          <img src={piggyShadowless} className="w-[50%] mx-auto animate-bounce" alt="" />
        </div>
        <Loaders/>
      </div>
    </div>
  );
};

export default LoadingToRedirect;
