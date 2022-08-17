import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import axios from '../../axios/axios';

const initialState = {
    incomes: [],
    state: 'idle',
    error: null
}

export const fetchIncomesAPI = createAsyncThunk('expenses/fetchIncomes', async () => {
    const response = await axios.get('/incomes');
    const incomes = response.data;
    return incomes;
})

export const saveIncomeAPI = createAsyncThunk('expenses/saveIncome', async (values) => {
    console.log(values)
    const response = await axios.post('/incomes', values);
    return response;
})

export const getIncomeByIdAPI = createAsyncThunk('expenses/getIncomeById', async (id) => {
    const response = await axios.get(`incomes/id=${id}`);
    const outcome = response.data;
    return outcome;
})

export const deleteIncomeAPI = createAsyncThunk('expenses/deleteIncome', async (values) => {
    const {id} = values;
    const response = await axios.delete(`/incomes/id=${id}`);
    return response;
})

export const updateIncomeAPI = createAsyncThunk('expenses/updateIncome', async (values) => {
    const {id} = values;
    const response = await axios.patch(`/incomes/id=${id}`, values);
    return response;
})

export const incomesSlice = createSlice({
    name: 'incomes',
    initialState,
    reducers:{
        addIncomeMov:(state,action)=>{
            state.incomes.push(action.payload)
        },
        deleteIncomeMov:(state,action)=>{
            const {id} = action.payload
            const incomes = state.incomes.filter(income => income.id !== id)
            state.incomes = incomes
        },
        modifyIncomeMov:(state,action)=>{
            const {id, amount, name, date, description} = action.payload
            const foundIncome= state.incomes.find(income => income.id === id)
            // mejorar
            foundIncome.amount = amount;
            foundIncome.name = name;
            foundIncome.date = date;
            foundIncome.description = description;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchIncomesAPI.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchIncomesAPI.rejected, (state, action) => {
            state.status = 'error';
        }).addCase(fetchIncomesAPI.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const loadedIncomes = action.payload;
            console.log(loadedIncomes)
            state.incomes = loadedIncomes;
        })
    }
})

export default incomesSlice.reducer

export const {addIncomeMov, deleteIncomeMov, modifyIncomeMov } = incomesSlice.actions;

export const getIncomeBalance = state =>{
    const incomes = state.incomes.incomes;
    const balance =  incomes.map(income=>Number(income.amount)).reduce((pv,cv)=> { return pv+cv}, 0)
    return balance
}