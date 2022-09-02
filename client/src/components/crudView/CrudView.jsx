import React from 'react'
import Outcome from '../forms/Outcome'
import Income from '../forms/Income'
import BalanceCard from '../balance/BalanceCard'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIncomesAPI } from '../../features/incomes/incomesSlice'
import { fetchOutcomesAPI } from '../../features/outcomes/outcomesSlice'
import { synchroDbMovements } from '../../features/expenses/expensesSlice'
import { useEffect } from 'react'

const CrudView = () => {
    const [formComponent, setFormComponent] = useState('')
    const showForm = (component)=>{
        component == formComponent? setFormComponent(<></>): setFormComponent(component)
    }
    const dispatch = useDispatch()
    const incomesMovement = useSelector(state => state.incomes.incomes)
    const outcomesMovement = useSelector(state => state.outcomes.outcomes)

    const incomesState = useSelector(state => state.incomes.status)
    const outcomesState = useSelector(state => state.outcomes.status)

    //Llama a /bills y /incomes, una vez actualizado el status a succeded en c/u, los junta y los envía a expenses.
    useEffect(()=>{
        dispatch(fetchIncomesAPI())
        dispatch(fetchOutcomesAPI())
    },[])

    useEffect(() => {
        if(incomesState === 'succeeded' && outcomesState === 'succeeded'){
            dispatch(synchroDbMovements([...incomesMovement, ...outcomesMovement]))
        }
    }, [incomesMovement, outcomesMovement])

  return (
    // <div className='lg:w-6/12 xl:w-3/12 px-4 mx-auto'>
    <div className='px-4 md:px-24 py-4 md:py-12 mx-auto'>    
        <BalanceCard/>
        <div className="flex items-center justify-around xl:justify-center flex-wrap mx-auto">
            <div className="my-1 md:my-3 w-[150px]">
                <button onClick={()=>showForm(<Income/>)} className="border border-black rounded-lg bg-green-500 hover:bg-green-600 text-gray-800 font-bold py-2 px-6 inline-flex items-center">
                    <span className="mr-2 text-white">Ingresos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="18px" height="18px" viewBox="0 0 24 24" aria-labelledby="plusIconTitle" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000"> <title id="plusIconTitle">Plus</title> <path d="M20 12L4 12M12 4L12 20"/> </svg>
                </button>
            </div>

            <div className="my-1 md:m-3 w-[150px]">
                <button onClick={()=>showForm(<Outcome/>)} className="border border-black rounded-lg bg-red-600 hover:bg-red-700 text-gray-800 font-bold py-2 px-6 inline-flex items-center">
                    <span className="mr-2 text-white">Gastos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="18px" height="18px" viewBox="0 0 24 24" aria-labelledby="plusIconTitle" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000"> <title id="plusIconTitle">Plus</title> <path d="M20 12L4 12M12 4L12 20"/> </svg>
                </button>
            </div>
        </div>

        <div>
            {formComponent}
        </div>
    </div>

  )
}

export default CrudView