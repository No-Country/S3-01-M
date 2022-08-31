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
    <div className=' px-24 py-12 mx-auto bg-[#8FE3CF]'>    
        <BalanceCard/>
        <div className="flex items-center justify-around xl:justify-center flex-wrap">
            <div className="my-3">
                <button onClick={()=>showForm(<Income/>)} className="button-exp bg-green-400 text-gray-800 font-bold py-2 px-6 inline-flex items-center">
                    <span className="mr-2">Ingresos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" width="18px" height="18px" viewBox="0 0 24 24" aria-labelledby="plusIconTitle" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000"> <title id="plusIconTitle">Plus</title> <path d="M20 12L4 12M12 4L12 20"/> </svg>
                </button>
            </div>

            <div className="m-3">
                <button onClick={()=>showForm(<Outcome/>)} className="button-exp bg-red-400 text-gray-800 font-bold py-2 px-6 inline-flex items-center">
                    <span className="mr-2">Gastos</span>
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