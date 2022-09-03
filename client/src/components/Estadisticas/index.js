import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardBigEstadistic from "../CardEstadistic/CardBigEstadistic";
import CardMidEstadistic from "../CardEstadistic/CardMidEstadistic";
import CardEstadistic from "../CardEstadistic/CardSmallEstadictic";
import "./Estadisticas.css";
import CardDetail from "../CardEstadistic/CardDetail";
import {
  groupCategories,
  getMovements,
} from "../../features/expenses/expensesSlice";
import background from "../Estadisticas/circle-scatter-haikei.svg";

const Estadisticas = () => {
  const movements = useSelector(getMovements);
  const movementsGroups = useSelector(groupCategories);
  // console.log(movementsGroups)
  // const movKeys = Object.keys(movementsGroups);
  const titles = Object.keys(movementsGroups);
  const categoryList = Object.values(movementsGroups);
  // console.log(movKeys)
  // movKeys.map((category)=> console.log(movementsGroups[category]))
  // const movementsList = movKeys.map((category)=>movementsGroups[category])
  // console.log(movementsList)

  return (
    <div
      className="pt-[120px] min-h-screen md:px-48 flex flex-row justify-evenly py-6 flex-wrap lg:flex-nowrap min-w-[50%] bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section>
        <div className="flex flex-row gap-6 flex-wrap">
          <div className="mx-auto max-w-[400px]">
            <CardBigEstadistic />
          </div>
          <div className="mx-auto max-w-[400px]">
            <CardMidEstadistic />
          </div>
        </div>
        <div className="w-[80%] mx-auto md:w-full h-[400px] bg-white my-14 shadow-md shadow-indigo-500/50">
          <CardDetail />
        </div>
      </section>
      <section className="flex flex-row flex-wrap justify-center gap-6 content-start pb-8">
        {categoryList.length >= 1 ? (
          categoryList.map((category, index) => (
            <CardEstadistic
              key={category + index}
              expense={category}
              title={titles[index]}
            />
          ))
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default Estadisticas;
