import React from 'react'
import { useSelector } from 'react-redux'
import { getMovements } from '../../features/expenses/expensesSlice'
import MovementCard from './MovementCard'

const MovementsContainer = () => {
    const movements = useSelector(getMovements)

  return (
    <>
        <section className="antialiased bg-gray-100 text-gray-600 min-h-screen px-4 py-12">
            <div className="flex flex-col justify-start h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-black">
                    <header className="px-5 py-4 border-b border-black">
                        <h2 className="font-semibold text-gray-800">Movimientos</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
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
                                        movements.slice().sort((a,b)=>b.date.localeCompare(a.date))
                                        .map((movement, index)=> (<MovementCard  movement={movement} key={movement.id+index}/>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MovementsContainer