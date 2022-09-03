import React from "react";
import LineChart from "../Graficos/LineChart";
import { useSelector } from "react-redux";

const CardBigEstadistic = () => {
  const incomes = useSelector(state=> state.incomes.incomes)
  // const incomesAmount = incomes.map(income=> income.amount)
  console.log(incomes)
  // console.log(incomesAmount)

  const groups = incomes.slice().sort((a,b)=>a.date.localeCompare(b.date)).reduce((groups, item) => {
      const group = (groups[item.date] || []);
      group.push(item);
      groups[item.date] = group;
      return groups;
    }, {});

  return (
    <div className="bg-white mx-auto rounded-md text-slate-50 shadow-md shadow-indigo-500/50 w-full">
      <h2 className="text-2xl text-white bg-[#5146ED] w-full text-center py-2">Ingresos</h2>
      <div className="flex flex-row justify-start px-8 py-4">
        <LineChart groups={groups}/>
      </div>
    </div>
  );
};

export default CardBigEstadistic;
