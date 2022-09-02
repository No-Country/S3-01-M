import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HappyFace from '../../assets/icons/HappyFace'
import NeutralFace from '../../assets/icons/NeutralFace'
import SadFace from '../../assets/icons/SadFace'
import { getIncomeBalance } from '../../features/incomes/incomesSlice'
import { getOutcomeBalance } from '../../features/outcomes/outcomesSlice'

const Balance = () => {
    const incomeBalance = useSelector(getIncomeBalance);
    const outcomeBalance = useSelector(getOutcomeBalance);
    const balance = (incomeBalance - outcomeBalance);
    const [emoji, setEmoji] = useState('')
    const [colorEmoji, setColorEmoji] = useState(false)

    const handleEmoji = ()=>{
        if(balance <0){
            setEmoji(<SadFace/>)
            setColorEmoji('bg-red-500')
        } 
        if(balance ===0){
            setEmoji(<NeutralFace/>)
            setColorEmoji('bg-gray-400')
        } 
        if(balance >0){
           setEmoji(<HappyFace/>)
           setColorEmoji('bg-green-500')
        } 
        return emoji
    }

    useEffect(()=>{
        handleEmoji()
    }, [balance])

  return (
    <div className="flex flex-wrap w-full ">
        <div className="w-full  py-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg border border-black">
                <div className="flex-auto p-4">
                <div className="flex flex-wrap ">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">Balance</h5>
                        <span className="font-bold text-xl">${balance}</span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${colorEmoji ? colorEmoji :''}`}>
                            {emoji}
                        </div>
                    </div>
                </div>
                <p className="text-sm text-blueGray-500 mt-4 font-semibold"><span className="text-emerald-500 mr-2"> 3.48%</span><span className="whitespace-nowrap">Since last month</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Balance