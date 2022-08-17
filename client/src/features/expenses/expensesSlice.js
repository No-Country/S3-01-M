import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    expenses: [],
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        synchroDbMovements: (state, action) => {
            state.expenses = action.payload;
            console.log(state.expenses)
        },
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
    },
})

export const { addMovement, deleteMovement, modifyMovement, synchroDbMovements } = expensesSlice.actions

export default expensesSlice.reducer

export const getMovements = state => state.expenses.expenses;

// export const getBalance = state =>{
//     const expenses = state.expenses.expenses;
//     const incomes =  expenses.filter((expense) => expense.incomeCategory).map(income=>Number(income.amount)).reduce((pv,cv)=> { return pv+cv}, 0);
//     const outcomes =  expenses.filter((expense) => expense.billCategory).map(outcome=>Number(outcome.amount)).reduce((pv,cv)=> { return pv+cv}, 0)
//     const balance= incomes-outcomes;
//     return balance
// }