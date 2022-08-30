import React from "react";
import LineChart from "../Graficos/LineChart";

const CardBigEstadistic = () => {
  return (
    <div className="bg-white p-8 rounded-md text-slate-50 border">
      <h1 className="text-3xl text-gray-800"> CardBigEstadistic</h1>
      <div className="flex flex-row justify-start">
        <LineChart />
      </div>
    </div>
  );
};

export default CardBigEstadistic;
