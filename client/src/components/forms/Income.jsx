import React from 'react'
import { useState } from 'react';
import { useDispatch} from 'react-redux'
import { saveIncomeAPI, addIncomeMov } from '../../features/incomes/incomesSlice';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faMoneyBill, faHandHoldingDollar, faFaucetDrip, faHouse, faBriefcaseMedical, faHandSparkles, faReceipt, faShirt, faHandHoldingHeart, faFilm, faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Income = () => {
    const dispatch = useDispatch();
    const [logo, setLogo] = useState(faMoneyBill)
    const [selectedOption, setSelectedOption] = useState('Trabajo')
  
    const changeLogo = (e)=>{
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
    const icon = fontAwesomeIcons.find((icon)=>icon.category === e.target.value)
      setSelectedOption(e.target.value)
      setLogo(icon.fontAwesomeIcon)
    }

    const categories = ['Trabajo', 'Venta', 'Alquiler']

    const submitIncomes = async(amount, category, name, date, description)=>{
        //category en el back necesita SNAKE_CASE, se parsea antes de enviar
        const response = await dispatch(saveIncomeAPI({ amount, incomeCategory:category.toUpperCase().split(" ").join("_"), date,name, description}))
        //Agrega al estado incomes
        if(response.payload.status=== 201) dispatch(addIncomeMov(response.payload.data))
    }
    return (
    <>
        {/* Título */}
        <div className="flex items-center justify-center font-black m-3 mb-12">
            <h1 className="tracking-wide text-3xl text-white">Agrega un ingreso</h1>
        </div>
        {/* ---------Formulario-------- */}
        <Formik initialValues={{
            amount:0,
            category: 'Trabajo',
            name: '',
            date: '',
            description: '',
          }}
          onSubmit={({amount, category, name, date, description}, { resetForm })=>{           
                        submitIncomes(amount, selectedOption, name, date, description)
                        resetForm();
                    }}
        >
            {()=>(
                <Form className="flex flex-col justify-center">
                <div className="flex justify-between items-center mb-3">
                    {/* Categorías */}
                    <div className="inline-flex items-center self-start">
                        <FontAwesomeIcon icon={logo} className="border border-black h-4 w-4 mr-3 bg-gradient-to-r from-green-600 to-green-600 shadow-lg rounded p-1.5 text-gray-100"/>
                        <label htmlFor="category"></label>
                        <Field component="select" name="category" id="category" value={selectedOption} onChange={changeLogo}  className="border border-black rounded-md p-1 font-bold text-gray-900" >
                                {categories.map((category, index)=>
                                <option key={category+index} value={category}>{category}</option>)
                                }
                        </Field>
                    </div>
                    {/* Input ingresos */}
                    <div className="flex">
                        <label htmlFor="amount"></label>
                        <Field  id="amount" placeholder='0' min="1" name="amount" type="number" className="border border-black max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
                        block rounded-md text-sm shadow-sm  placeholder-gray-400
                        focus:outline-none
                        focus:border-sky-500
                        focus:ring-1
                        focus:ring-sky-500
                        focus:invalid:border-red-500  focus:invalid:ring-red-500"/>
                    
                    </div>
                </div>
                {/* Nombre ingreso */}
                <label htmlFor='name' className="text-sm font-medium">Nombre</label>
                <Field className="border border-black mb-3 px-2 py-1.5
                    mb-3 mt-1 block w-full px-2 py-1.5  rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="name" id="name" placeholder="Aguinaldo"/>
                    {/* Fecha ingreso */}
                    <label htmlFor='date' className="text-sm font-medium">Fecha</label>
                    <Field className="border border-black mb-3 px-2 py-1.5
                    mb-3 mt-1 block w-full px-2 py-1.5 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500" type="date" name="date" id="date" placeholder="Fecha"/>
                {/* Descripción ingreso */}
                <label htmlFor='description' className="text-sm font-medium">Descripción (opcional)</label>
                <Field component="textarea" className=" border border-black
                mb-3 mt-1 block w-full px-2 py-1.5 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none
                focus:border-sky-500
                focus:ring-1
                focus:ring-sky-500
                focus:invalid:border-red-500 focus:invalid:ring-red-500" name="description" id="description" placeholder="Escribe algo"></Field>
                {/* Botón agregar */}
                <button type='submit' className="border border-black w-full px-4 py-1.5 rounded-md shadow-lg bg-green-400 font-medium text-gray-100 block transition duration-300">
                    <span className="hidden">Sending</span>
                    <span >Agregar</span>
                </button>
            </Form>
            )}
        </Formik>
        {/* ----------Termina formulario---------- */}
    </>
  )
}

export default Income