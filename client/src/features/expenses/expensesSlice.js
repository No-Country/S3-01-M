import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    expenses: [],
    category:[],
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        synchroDbMovements: (state, action) => {
            state.expenses = action.payload;
        },
        addMovement:(state,action)=>{
            state.expenses.push(action.payload)
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
        },
        setCategory:(state,action)=>{
            console.log(action.payload)
            state.category= action.payload
        },
    },
})

export const { addMovement, deleteMovement, modifyMovement, synchroDbMovements, setCategory } = expensesSlice.actions

export default expensesSlice.reducer

export const getMovements = state => state.expenses.expenses;

/* Borrar, es para poder hacer el onclick hasta que este la validación de usuario */
export const getByCategories = state=> state.expenses.category;

export const groupCategories = (state)=>{
    if(state.expenses.expenses){
        const addCategory = state.expenses.expenses.map((element) => ({
            ...element, category: element.incomeCategory || element.billCategory 
        }));
    
        const groups = addCategory.reduce((groups, item) => {
            const group = (groups[item.category] || []);
            group.push(item);
            groups[item.category] = group;
            return groups;
          }, {});
          return groups;
    }
}


// export const getBalance = state =>{
//     const expenses = state.expenses.expenses;
//     const incomes =  expenses.filter((expense) => expense.incomeCategory).map(income=>Number(income.amount)).reduce((pv,cv)=> { return pv+cv}, 0);
//     const outcomes =  expenses.filter((expense) => expense.billCategory).map(outcome=>Number(outcome.amount)).reduce((pv,cv)=> { return pv+cv}, 0)
//     const balance= incomes-outcomes;
//     return balance
// }