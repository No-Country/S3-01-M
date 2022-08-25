import React from 'react'
import { useSelector } from 'react-redux';
import {getByCategories} from '../../features/expenses/expensesSlice'


const CardDetail = (prueba) => {
    const getExpensesByCategory = useSelector(getByCategories)
    console.log(getExpensesByCategory)
  return (
    <div>
        <h1>MOSTRAR DETALLE DE {getExpensesByCategory}</h1>
        
    </div>
  )
}

export default CardDetail