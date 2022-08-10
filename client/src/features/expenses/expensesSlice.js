import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    expenses: [],
    status: 'idle',
    error: null
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addMovement:(state,action)=>{
            state.expenses.push(action.payload)
            console.log(current(state.expenses))
        },
        deleteMovement:(state,action)=>{
            const {id} = action.payload
            const movements = state.expenses.filter(movement => movement.id !== id)
            state.expenses = movements
        },
        modifyMovement:(state,action)=>{
            const {id, amount, name, date, description} = action.payload
            const foundMovement = state.expenses.find(movement => movement.id === id)
            // mejorar
            foundMovement.amount = amount;
            foundMovement.name = name;
            foundMovement.date = date;
            foundMovement.description = description;
            console.log(current(foundMovement))
        }
    }
})

export const { addMovement, deleteMovement, modifyMovement } = expensesSlice.actions

export default expensesSlice.reducer

export const getMovements = state => state.expenses.expenses;

export const getBalance = state =>{
    const expenses = state.expenses.expenses;
    const balance =  expenses.map(expenses=>Number(expenses.amount)).reduce((pv,cv)=> { return pv+cv}, 0)
    return balance
}