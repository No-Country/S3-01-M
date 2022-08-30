import React from "react";
/* Borrar, es para poder hacer el onclick hasta que este la validación de usuario */
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/expenses/expensesSlice";
/* Borrar, es para poder hacer el onclick hasta que este la validación de usuario */
import "./CardEstadistic.css";

const CardEstadistic = (expense) => {
  const dispatch = useDispatch();
  
  const handleCategory = ()=>{
    dispatch(setCategory(expense.expense.title))
  }

  return (
    <div className="w-[250px] h-[200px] bg-white mt-2 rounded-lg p-6 border border-black hover:bg-[#FFD43B]" onClick={handleCategory}>
      {expense? <>{expense.expense.svgComponent}</>:<></>}
      <p className="font-sans text-gray-800 text-base mb-2">{expense.expense.title}</p>
      <p className="font-sans text-gray-800 text-2xl mb-2">$ 5.600</p>
      <div className="flex flex-row items-end">
        <p className="bg-[#8FE3CF] rounded-lg text-xs text-gray-800 py-2 px-4 border border-black">
          % 70+
        </p>
        <p className="text-xs text-gray-800  ml-2 p-1">Than last month</p>
      </div>
    </div>
  );
};

export default CardEstadistic;
