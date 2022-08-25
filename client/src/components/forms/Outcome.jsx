import React from 'react'
import { useDispatch} from 'react-redux'
import { saveOutcomeAPI, addOutcomeMov } from '../../features/outcomes/outcomesSlice';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const Outcome = () => {
  const dispatch = useDispatch();

  const categories = ['Servicios', 'Vivienda', 'Salud', 'Limpieza', 'Impuestos', 'Alimentacion', 'Indumentaria', 'Cuidado personal', 'Entretenimientos']

  const submitOutcomes = async(amount, category, name, date, description)=>{
    //category en el back necesita SNAKE_CASE, se parsea antes de enviar
      const response = await dispatch(saveOutcomeAPI({amount, billCategory:category.toUpperCase().split(" ").join("_"), name, date, description}))
      //Agrega al estado outcomes
      if(response.payload.status=== 200) dispatch(addOutcomeMov(response.payload.data))
  }
  return (
    <>
          {/* Título */}
          <div className="flex items-center justify-center font-black m-3 mb-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  text-red-600 animate-bounce"  role="img" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="dolarIconTitle" stroke="#3ACC6F" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000"> <title id="dolarIconTitle">Dolar</title> <path d="M12 4L12 6M12 18L12 20M15.5 8C15.1666667 6.66666667 14 6 12 6 9 6 8.5 7.95652174 8.5 9 8.5 13.140327 15.5 10.9649412 15.5 15 15.5 16.0434783 15 18 12 18 10 18 8.83333333 17.3333333 8.5 16"/> </svg>
              <h1 className="tracking-wide text-3xl text-gray-900">Agrega un gasto</h1>
          </div>
          {/* ---------Formulario-------- */}
          <Formik initialValues={{
            amount:0,
            category: 'Servicios',
            name: '',
            date: '',
            description: '',
          }}
          onSubmit={({amount, category, name, date, description}, { resetForm })=>{           
                        submitOutcomes(amount, category, name, date, description)
                        resetForm();
                    }}
          >
          {()=>(
            <Form className="flex flex-col justify-center">
                <div className="flex justify-between items-center mb-3">
                  {/* Categorías */}
                  <div className="inline-flex items-center self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="border border-black h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100" role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="userIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="userIconTitle">User</title> <path strokeLinecap="round" d="M5.5,19.5 C7.83333333,18.5 9.33333333,17.6666667 10,17 C11,16 8,16 8,11 C8,7.66666667 9.33333333,6 12,6 C14.6666667,6 16,7.66666667 16,11 C16,16 13,16 14,17 C14.6666667,17.6666667 16.1666667,18.5 18.5,19.5"/> <circle cx="12" cy="12" r="10"/> </svg>
                    <label htmlFor="category"></label>
                    <Field component="select" name="category" id="category" className="border border-black rounded-md p-1 font-bold text-gray-900" >
                            {categories.map((category, index)=>
                            <option key={category+index} value={category}>{category}</option>)
                            }
                    </Field>
                  </div>
                  {/* Input egresos */}
                  <div className="flex">
                      <label htmlFor='amount'></label>
                      <Field  id="amount" min="1" placeholder='0' name="amount" type="number" className="border border-black max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
                      block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
                      focus:outline-none
                      focus:border-sky-500
                      focus:ring-1
                      focus:ring-sky-500
                      focus:invalid:border-red-500  focus:invalid:ring-red-500"/>
      
                  </div>
                </div>
                {/* Nombre gasto */}
                <label htmlFor='name' className="text-sm font-medium">Nombre</label>
                <Field  className="border border-black mb-3 px-2 py-1.5
                    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="name" placeholder="Supermercado"/>
                  {/* Fecha gasto */}
                    <label htmlFor='date' className="text-sm font-medium">Fecha</label>
                    <Field  className="border border-black mb-3 px-2 py-1.5
                    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500" type="date" name="date" placeholder="Fecha"/>
                  {/* Descripción gasto */}
                    <label htmlFor='description' className="text-sm font-medium">Descripción (opcional)</label>
                    <Field component="textarea"  className="border border-black 
                    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none
                    focus:border-sky-500
                    focus:ring-1
                    focus:ring-sky-500
                    focus:invalid:border-red-500 focus:invalid:ring-red-500" id="description" name="description" placeholder="Escribe algo"></Field>
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

export default Outcome