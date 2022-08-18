import React from "react";
import "./CardEstadistic.css";

const CardEstadistic = (mes) => {
  return (
    <div className="w-1/6 bg-slate-800 mt-2 rounded-lg shadow-xl p-6">
      <img src="https://ey5me.csb.app/happy.svg" className="Img"></img>
      <p className="font-sans text-slate-50 text-base mb-2">Julio</p>
      <p className="font-sans text-slate-50 text-2xl mb-2">$ 5, 600</p>
      <div className="flex flex-row">
        <p className="bg-sky-200 rounded-lg text-xs text-green-600 ml-2 p-1">
          % 70+
        </p>
        <p className="text-xs text-white  ml-2 p-1">Than last month</p>
      </div>
    </div>
  );
};

export default CardEstadistic;
