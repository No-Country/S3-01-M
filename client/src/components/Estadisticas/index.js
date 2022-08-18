import React from "react";
import CardBigEstadistic from "../CardEstadistic/CardBigEstadistic";
import CardMidEstadistic from "../CardEstadistic/CardMidEstadistic";
import CardEstadistic from "../CardEstadistic/CardSmallEstadictic";
import "./Estadisticas.css";

const Estadisticas = () => {
  return (
    <div>
      <section className="flex flex-row  justify-evenly p-10">
        <CardEstadistic></CardEstadistic>

        <CardEstadistic></CardEstadistic>

        <CardEstadistic></CardEstadistic>

        <CardEstadistic></CardEstadistic>
      </section>

      <section className="flex flex-row   p-10">
        <div className="basis-7/12">
          <CardBigEstadistic></CardBigEstadistic>
        </div>
        <div className="basis-5/12">
          <CardMidEstadistic></CardMidEstadistic>
        </div>
      </section>
    </div>
  );
};

export default Estadisticas;
