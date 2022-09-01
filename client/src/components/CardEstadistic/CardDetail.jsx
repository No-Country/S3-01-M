import React from 'react'
import { useSelector } from 'react-redux';
import {getByCategories} from '../../features/expenses/expensesSlice'
import MovementCardStatistics from '../movements/MovementCardStatistics';


const CardDetail = () => {
    const expenses = useSelector(getByCategories)
    console.log(expenses)
  return (
    <div>
        <section className="text-gray-600 max-h-[400px] overflow-y-auto no-scrollbar">
            <div className="flex flex-col justify-start">
                <div className="w-full  mx-auto bg-white ">
                    <div className="p-3">
                        <div className="overflow-x-auto ">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-white bg-[#5146ed]">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Cat</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Nombre</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Descripción</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Monto</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap cursor-pointer">
                                            <div className="font-semibold text-center" >Fecha</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                {
                                    expenses.slice().sort((a,b)=>b.date.localeCompare(a.date))
                                            .map((movement, index)=> (<MovementCardStatistics  movement={movement} key={movement.id+index}/>))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CardDetail