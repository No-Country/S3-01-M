import React from "react";
/* Borrar, es para poder hacer el onclick hasta que este la validación de usuario */
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faMoneyBill, faHandHoldingDollar, faFaucetDrip, faHouse, faBriefcaseMedical, faHandSparkles, faReceipt, faShirt, faHandHoldingHeart, faFilm, faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { setCategory } from "../../features/expenses/expensesSlice";
/* Borrar, es para poder hacer el onclick hasta que este la validación de usuario */
import "./CardEstadistic.css";

const CardEstadistic = ({expense, title}) => {
  const dispatch = useDispatch();
  const modifiedTitle = title.charAt(0) + title.slice(1).toLowerCase().split('_').join(' ');

  const totalAmount = ()=>{
    return expense.map(exp=>exp.amount).reduce((pv,cv)=> pv+cv,0)
  }
  const handleCategory = ()=>{
    dispatch(setCategory(expense))
  }

  const getIcon = ()=>{
    const fontAwesomeIcons = [
        {
          fontAwesomeIcon: faBurger,
          category: 'Alimentacion'
        },
        {
          fontAwesomeIcon: faMoneyBill,
          category: 'Trabajo'
        },
        {
          fontAwesomeIcon: faHandHoldingDollar,
          category: 'Venta'
        },
        {
            fontAwesomeIcon: faHouseCircleCheck,
            category: 'Alquiler'
          },
        {
          fontAwesomeIcon: faFaucetDrip,
          category: 'Servicios'
        },
        {
          fontAwesomeIcon: faHouse,
          category: 'Vivienda'
        },
        {
          fontAwesomeIcon: faBriefcaseMedical,
          category: 'Salud'
        },
        {
          fontAwesomeIcon: faHandSparkles,
          category: 'Limpieza'
        },
        {
          fontAwesomeIcon: faReceipt,
          category: 'Impuestos'
        },
        {
          fontAwesomeIcon: faShirt,
          category: 'Indumentaria'
        },
        {
          fontAwesomeIcon: faHandHoldingHeart,
          category: 'Cuidado personal'
        },
        {
          fontAwesomeIcon: faFilm,
          category: 'Entretenimientos'
        },
      ];
        const icon = fontAwesomeIcons.find((icon)=>icon.category === title.charAt(0) + title.slice(1).toLowerCase().split('_').join(' '))
        return icon.fontAwesomeIcon
}

  return (
        <div className="shadow-md shadow-indigo-500/50 w-[250px] h-[200px] bg-white mt-2 rounded-lg p-6  hover:bg-[#FFD43B] cursor-pointer" onClick={handleCategory}>
      <FontAwesomeIcon
          icon={getIcon()}
          className="w-8 h-8"
          style={{
            filter:
              "invert(44%) sepia(31%) saturate(1462%) hue-rotate(249deg) brightness(95%) contrast(82%)",
          }}/>
      <p className="font-sans text-gray-800 text-base mb-2">{modifiedTitle}</p>
      <p className="font-sans text-gray-800 text-2xl mb-2">$ {totalAmount()}</p>
      <div className="flex flex-row items-end">
        <p className="bg-[#5146ed] rounded-lg text-xs text-white py-2 px-4 ">
          % 70+
        </p>
        <p className="text-xs text-gray-800  ml-2 p-1">Than last month</p>
      </div>
    </div>
  );
};

export default CardEstadistic;
