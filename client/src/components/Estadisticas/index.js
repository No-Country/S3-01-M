import React from "react";
import CardBigEstadistic from "../CardEstadistic/CardBigEstadistic";
import CardMidEstadistic from "../CardEstadistic/CardMidEstadistic";
import CardEstadistic from "../CardEstadistic/CardSmallEstadictic";
import "./Estadisticas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faFaucetDrip } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import CardDetail from "../CardEstadistic/CardDetail";

const Estadisticas = () => {
  const svgs = [
    {
      title: "Alimentacion",
      svgComponent: (
        <FontAwesomeIcon
          icon={faBurger}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Trabajo",
      svgComponent: (
        <FontAwesomeIcon
          icon={faMoneyBill}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Venta",
      svgComponent: (
        <FontAwesomeIcon
          icon={faHandHoldingDollar}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Servicios",
      svgComponent: (
        <FontAwesomeIcon
          icon={faFaucetDrip}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Vivienda",
      svgComponent: (
        <FontAwesomeIcon
          icon={faHouse}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Salud",
      svgComponent: (
        <FontAwesomeIcon
          icon={faBriefcaseMedical}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Limpieza",
      svgComponent: (
        <FontAwesomeIcon
          icon={faHandSparkles}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Impuestos",
      svgComponent: (
        <FontAwesomeIcon
          icon={faReceipt}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Indumentaria",
      svgComponent: (
        <FontAwesomeIcon
          icon={faShirt}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Cuidado Personal",
      svgComponent: (
        <FontAwesomeIcon
          icon={faHandHoldingHeart}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
    {
      title: "Entretenimientos",
      svgComponent: (
        <FontAwesomeIcon
          icon={faFilm}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}
        />
      ),
    },
  ];

  return (
    <div className=" bg-[#F3F4F6] min-h-screen px-48 flex flex-row justify-evenly py-6 flex-wrap lg:flex-nowrap min-w-[50%]">
      <section>
        <div className="flex flex-row gap-6 flex-wrap">
          <div className="max-w-[400px]">
            <CardBigEstadistic />
          </div>
          <div className="max-w-[400px]">
            <CardMidEstadistic />
          </div>
        </div>
        <div className="w-full h-[400px] bg-white my-14">
          <CardDetail />
        </div>
      </section>
      <section className="flex flex-row flex-wrap justify-center gap-6 content-start pb-8">
        {svgs.map((svg) => (
          <CardEstadistic key={svg.title} expense={svg} />
        ))}
      </section>
    </div>
  );
};

export default Estadisticas;
