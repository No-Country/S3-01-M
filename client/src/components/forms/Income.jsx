import React from 'react'
import { useState } from 'react';
import { useDispatch} from 'react-redux'
import { addMovement} from '../../features/expenses/expensesSlice';
import { nanoid } from '@reduxjs/toolkit';

const Income = () => {
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch();
    
    const categories = ['Trabajo', 'Venta', 'Alquiler']

    const handleIncomes = e=> setAmount(e.target.value)

    const handleCategory = e=> setCategory(e.target.value)

    const handleIncomeName = e=> setName(e.target.value)

    const handleDate = e => setDate(e.target.value)
  
    const handleDescription = e => setDescription(e.target.value)

    const submitIncomes = (e)=>{
        e.preventDefault;
        const id= nanoid()
        dispatch(addMovement({id,amount, category, name, date, description, type:'income'}))
    }


  return (
    <>
        {/* Título */}
        <div className="flex items-center justify-center font-black m-3 mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  text-red-600 animate-bounce"  role="img" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="dolarIconTitle" stroke="#3ACC6F" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000"> <title id="dolarIconTitle">Dolar</title> <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16"/> </svg>
            <h1 className="tracking-wide text-3xl text-gray-900">Agrega un ingreso</h1>
        </div>
        {/* ---------Formulario-------- */}
        <form className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-3">
                {/* Categorías */}
                <div className="inline-flex items-center self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100" role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="userIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="userIconTitle">User</title> <path strokeLinecap="round" d="M5.5,19.5 C7.83333333,18.5 9.33333333,17.6666667 10,17 C11,16 8,16 8,11 C8,7.66666667 9.33333333,6 12,6 C14.6666667,6 16,7.66666667 16,11 C16,16 13,16 14,17 C14.6666667,17.6666667 16.1666667,18.5 18.5,19.5"/> <circle cx="12" cy="12" r="10"/> </svg>
                    <select className="font-bold text-gray-900" onChange={handleCategory}>
                            {categories.map((categorie, index)=>
                            <option key={categorie+index} value={categorie}>{categorie}</option>)
                            }
                    </select>
                </div>
                {/* Input ingresos */}
                <div className="flex">
                    <button type="button"  className="bg-white p-1.5 font-bold rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    </button>
                    
                    <input  id="incomes" placeholder='0' name="incomes" type="number" onChange={handleIncomes} className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
                    block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500  focus:invalid:ring-red-500"/>
                
                    <button type="button"  className="bg-white p-1.5 font-bold rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>
            {/* Nombre ingreso */}
            <label  className="text-sm font-medium">Nombre</label>
            <input onChange={handleIncomeName} className="mb-3 px-2 py-1.5
                mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none
                focus:border-sky-500
                focus:ring-1
                focus:ring-sky-500
                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="name" placeholder="Aguinaldo"/>
                {/* Fecha ingreso */}
                <label className="text-sm font-medium">Fecha</label>
                <input onChange={handleDate} className="mb-3 px-2 py-1.5
                mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none
                focus:border-sky-500
                focus:ring-1
                focus:ring-sky-500
                focus:invalid:border-red-500 focus:invalid:ring-red-500" type="date" name="incomeDate" placeholder="Fecha"/>
            {/* Descripción ingreso */}
            <label className="text-sm font-medium">Descripción (opcional)</label>
            <textarea onChange={handleDescription} className="
            mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-red-500 focus:invalid:ring-red-500" name="messages" placeholder="Escribe algo"></textarea>
        </form>
        {/* ----------Termina formulario---------- */}
        {/* Botón agregar */}
        <button onClick={submitIncomes} className="w-full px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-green-400 to-green-600 font-medium text-gray-100 block transition duration-300">
            <span className="hidden">Sending</span>
            <span >Agregar</span>
        </button>

    </>

  )
}

export default Income