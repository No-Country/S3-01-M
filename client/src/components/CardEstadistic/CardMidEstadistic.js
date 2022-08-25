import React from "react";
import LineChart from "../Graficos/LineChart";

const CardMidEstadistic = () => {
  return (
    <div className="bg-white p-8 rounded-md text-slate-50">
      <h1 className="text-3xl text-gray-800">Gastos</h1>
      <div className="flex flex-row justify-start">
        <LineChart/>
      </div>
    </div>
  );
};

export default CardMidEstadistic;
