import React from "react";
import LineChart from "../Graficos/LineChart";

const CardBigEstadistic = () => {
  return (
    <div className="bg-white md:p-8 mx-auto rounded-md text-slate-50 border shadow-md shadow-indigo-500/50">
      <h1 className="text-3xl text-gray-800"> CardBigEstadistic</h1>
      <div className="flex flex-row justify-start">
        <LineChart />
      </div>
    </div>
  );
};

export default CardBigEstadistic;
