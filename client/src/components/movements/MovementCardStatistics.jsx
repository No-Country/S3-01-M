import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faMoneyBill, faHandHoldingDollar, faFaucetDrip, faHouse, faBriefcaseMedical, faHandSparkles, faReceipt, faShirt, faHandHoldingHeart, faFilm, faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";

const MovementCardStatistics = (movement) => {
    const {id, amount, name, date, description, billCategory, incomeCategory} = movement.movement;

    const handleIcon = ()=>{
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
        if(incomeCategory){
            const icon = fontAwesomeIcons.find((icon)=>icon.category === incomeCategory.charAt(0) + incomeCategory.slice(1).toLowerCase().split('_').join(' '))
            return icon.fontAwesomeIcon
        }else{
            const icon = fontAwesomeIcons.find((icon)=>icon.category === billCategory.charAt(0) + billCategory.slice(1).toLowerCase().split('_').join(' '))
            return icon.fontAwesomeIcon
        } 
    }


  return (
    <>
        <tr className='hover:bg-gray-100'>
            <td className="py-2 whitespace-nowrap">
                <div className="flex items-center justify-center">
                    <div className="rounded-full" width="30" height="30"> 
                       {
                        incomeCategory? 
                        <FontAwesomeIcon icon={handleIcon()} className="h-3 w-3  bg-gradient-to-r from-green-600 to-green-600 shadow-lg rounded p-1.5 text-gray-100"/>
                       :
                       <FontAwesomeIcon icon={handleIcon()} className="h-3 w-3  bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100"/>
                       }
                        
                    </div>
                </div>
            </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div type='text' className="font-medium text-gray-800 bg-transparent max-w-[90px]">{name}</div>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    {
                        description? 
                        (<div type="text" className="text-left max-w-[90px] bg-transparent">{description}</div>): 
                        (<div type="text" className="text-center pr-12 max-w-[90px] bg-transparent">-</div>) 
                    }
                </td>
                <td className="p-2 whitespace-nowrap">
                    {
                        movement.movement.incomeCategory? 
                        (<div type="number" className="text-left font-medium text-green-500 max-w-[90px] bg-transparent">{amount}</div>):
                        (<div type="number" className="text-left font-medium text-red-500 max-w-[90px] bg-transparent">{amount}</div>)
                    }
                    
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div type="date" className="text-md text-right max-w-[120px] bg-transparent">{date}</div>
                </td>
                <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center justify-center">

                    </div>
                </td>
        </tr> 
    </>

  )
}

export default MovementCardStatistics