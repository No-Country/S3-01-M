import React from 'react'
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOutcomeAPI, deleteOutcomeMov, updateOutcomeAPI, modifyOutcomeMov } from '../../features/outcomes/outcomesSlice';
import { deleteIncomeAPI, deleteIncomeMov, updateIncomeAPI, modifyIncomeMov } from '../../features/incomes/incomesSlice';

const MovementCard = (movement) => {
    const {id, amount, name, date, description, billCategory, incomeCategory} = movement.movement;
    const [isDisabled, setIsDisabled] = useState(true)
    const dispatch = useDispatch()
    //Esto se va con Formik
    const nameRef = useRef(null)
    const descriptionRef = useRef(null)
    const expenseRef = useRef(null)
    const dateRef = useRef(null)
  // ------------------------

    const handleEdit = ()=>{
        setIsDisabled(false)
    }

    const handleDelete = async ()=>{
        if(movement.movement.incomeCategory){
            const response = await dispatch(deleteIncomeAPI({id}))
            if(response.payload.status=== 204) dispatch(deleteIncomeMov({id}))
        }else{
            const response = await dispatch(deleteOutcomeAPI({id}))
            if(response.payload.status=== 200) dispatch(deleteOutcomeMov({id}))
        }
    }

    const handleSave = async ()=>{
        //Esto se va con Formik
        const amount = expenseRef.current.value;
        const name = nameRef.current.value;
        const date = dateRef.current.value;
        const description = descriptionRef.current.value;
         // ------------------------
        if(movement.movement.incomeCategory){
            const incomeCategoryUpperCase = incomeCategory.toUpperCase().split(" ").join("_");
            const response = await dispatch(updateIncomeAPI({id, incomeCategory:incomeCategoryUpperCase, amount, date, description}))
            if(response.payload.status=== 200) dispatch(modifyIncomeMov({id, incomeCategory, amount, name, date, description}))
        }else{
            const billCategoryUpperCase = billCategory.toUpperCase().split(" ").join("_");
            const response = await dispatch(updateOutcomeAPI({id, billCategory:billCategoryUpperCase, amount, name, date, description}))
            if(response.payload.status=== 200) dispatch(modifyOutcomeMov({id, billCategory, amount, name, date, description}))
        }
        setIsDisabled(true)
    }

    const handleCancel = ()=>{
        setIsDisabled(true)
    }


  return (
    <>
        <tr>
            <td className="py-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                    <div className="rounded-full" width="30" height="30"> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100" role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="userIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="userIconTitle">User</title> <path strokeLinecap="round" d="M5.5,19.5 C7.83333333,18.5 9.33333333,17.6666667 10,17 C11,16 8,16 8,11 C8,7.66666667 9.33333333,6 12,6 C14.6666667,6 16,7.66666667 16,11 C16,16 13,16 14,17 C14.6666667,17.6666667 16.1666667,18.5 18.5,19.5"/> <circle cx="12" cy="12" r="10"/> </svg> 
                    </div>
                </div>
            </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <input type='text' className="font-medium text-gray-800 bg-white max-w-[90px]" defaultValue={name} disabled={isDisabled} ref={nameRef}/> 
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    {
                        description? 
                        (<input type="text" className="text-left max-w-[90px] bg-white" defaultValue={description} disabled={isDisabled} ref={descriptionRef}/>): 
                        (<input type="text" className="text-center pr-12 max-w-[90px] bg-white" defaultValue='-' disabled={isDisabled} ref={descriptionRef}/>) 
                    }
                </td>
                <td className="p-2 whitespace-nowrap">
                    {
                        movement.movement.incomeCategory? 
                        (<input type="number" className="text-left font-medium text-green-500 max-w-[90px] bg-white" defaultValue={amount} disabled={isDisabled} ref={expenseRef}/>):
                        (<input type="number" className="text-left font-medium text-red-500 max-w-[90px] bg-white" defaultValue={amount} disabled={isDisabled} ref={expenseRef}/>)
                    }
                    
                </td>
                <td className="p-2 whitespace-nowrap">
                    <input type="date" className="text-md text-right max-w-[120px] bg-white" defaultValue={date} disabled={isDisabled} ref={dateRef}/>
                </td>
                <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                    {
                        isDisabled ? (
                            <>
                            <div className="rounded-full" width="30" height="30" onClick={handleEdit}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6  bg-gradient-to-r from-green-500 to-green-600 shadow-lg rounded p-1.5 text-gray-100" role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="newIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="newIconTitle">New</title> <path d="M19 14V22H2.99997V4H13"/> <path d="M17.4608 4.03921C18.2418 3.25817 19.5082 3.25816 20.2892 4.03921L20.9608 4.71079C21.7418 5.49184 21.7418 6.75817 20.9608 7.53921L11.5858 16.9142C11.2107 17.2893 10.702 17.5 10.1716 17.5L7.5 17.5L7.5 14.8284C7.5 14.298 7.71071 13.7893 8.08579 13.4142L17.4608 4.03921Z"/> <path d="M16.25 5.25L19.75 8.75"/> </svg>
                            </div>
                            <div className="rounded-full px-2" width="30" height="30" onClick={handleDelete}>  
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6  bg-gradient-to-r from-red-500 to-red-600 shadow-lg rounded p-1.5 text-gray-100"  role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="binIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="binIconTitle">Bin</title> <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10"/> </svg>
                            </div>
                            </>

                        ):
                        (
                            <>
                            <div className="rounded-full" width="30" height="30" onClick={handleSave}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6  bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg rounded p-1.5 text-gray-100"  role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="saveIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="saveIconTitle">Save</title> <path d="M17.2928932,3.29289322 L21,7 L21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 L16.5857864,3 C16.8510029,3 17.1053568,3.10535684 17.2928932,3.29289322 Z"/> <rect width="10" height="8" x="7" y="13"/> <rect width="8" height="5" x="8" y="3"/> </svg>
                            </div> 
                            <div className="rounded-full px-2" width="30" height="30" onClick={handleCancel}>  
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6  bg-gradient-to-r from-red-500 to-red-600 shadow-lg rounded p-1.5 text-gray-100"  role="img" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="closeIconTitle" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff"> <title id="closeIconTitle">Close</title> <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/> </svg>
                            </div>
                            </>
                        )
                    }

                    </div>
                </td>
        </tr> 
    </>

  )
}

export default MovementCard