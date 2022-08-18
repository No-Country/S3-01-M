import React from "react";
import LineChart from "../Graficos/LineChart";

const CardBigEstadistic = () => {
  return (
    <div className="bg-slate-800 p-10 m-10 h-full rounded-md text-slate-50 shadow-xl ">
      <h1 className="text-3xl"> CardBigEstadistic</h1>
      <div className="flex flex-row justify-center ">
        <LineChart />
      </div>
    </div>
  );
};

export default CardBigEstadistic;
