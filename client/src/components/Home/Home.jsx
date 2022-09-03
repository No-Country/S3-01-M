import React from "react";
import { Link } from "react-router-dom";
import rocket from "../../assets/imgs/cohete-svg.svg"
import tinyCloud from "../../assets/imgs/nubechicas-svg.svg"
import mediumCloud from "../../assets/imgs/nubemediana.svg"

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img src={tinyCloud} alt="" className="absolute bg-contain z-0 nube-chica"/>
      <img src={mediumCloud} alt="" className="absolute bg-contain z-10 nube-mediana"/>
      <div style={{clipPath: 'polygon(100% 15%, 0% 100%, 100% 100%)',background: "linear-gradient(0deg, rgba(0,204,153,1) 0%, rgba(48,108,201,1) 58%, rgba(102,0,255,1) 100%)"}} className="w-full bg-[#8FE3CF] absolute -z-50 min-h-screen bottom-0 right-0"></div>
      
      <div className="flex flex-col-reverse md:flex-row flex-wrap xl:flex-nowrap md:px-48 justify-center">
        <div className="z-40 mx-auto flex justify-center md:justify-left px-[5%] md:pt-[15%] w-full md:w-[45%] flex-col content-center align-center text-center xl:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-white">FISALU<span className="text-[#8FE3CF]">.</span></h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#06E2ED]">Finanzas saludables</h2>
          <p className="text-xl font-md text-white mt-1">Controlá tus gastos, conocé tus finanzas</p>
          <Link to="/control" className="mt-4 mx-auto md:mx-0 cursor-pointer bg-[#5A16F3] hover:bg-red-700 max-w-[120px] text-white font-medium py-2 px-5 rounded-lg">Ir al panel</Link>
        </div>
        <div className="w-[70%] md:w-full flex flex-col justify-center">
          <div className="container items-stretch mx-auto px-2 py-8  flex flex-row flex-wrap justify-center xl:justify-end justify-items-end content-end items-start">
            <div className="w-[80%] pt-[10%] z-40">
              <img src={rocket} alt="" />
            </div>     
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
