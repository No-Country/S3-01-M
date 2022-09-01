import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import axios from '../../axios/axios';

const initialState = {
    outcomes: [],
    state: 'idle',
    error: null
}

export const fetchOutcomesAPI = createAsyncThunk('expenses/fetchOutcomes', async () => {
    const response = await axios.get('/bills/all', {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    const outcomes = response.data;
    return outcomes;
})

export const saveOutcomeAPI = createAsyncThunk('expenses/saveOutcome', async (values, headers) => {
    const response = await axios.post('/bills', values, {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    return response;
})

export const getOutcomesByCategoryAPI = createAsyncThunk('expenses/', async (category) => {
    const response = await axios.get(`/bills/category${category}`,{headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    const outcomes = response.data;
    return outcomes;
})

export const deleteOutcomeAPI = createAsyncThunk('expenses/deleteOutcome', async (values) => {
    const {id} = values;
    const response = await axios.put(`/bills/delete${id}?id=${id}`, values, {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    return response;
})

export const getOutcomeByNameAPI = createAsyncThunk('expenses/getOutcomeByName', async (name) => {
    const response = await axios.get(`/bills/find-by-name${name}`, {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    const outcome = response.data;
    return outcome;
})

export const getOutcomeByIdAPI = createAsyncThunk('expenses/getOutcomeById', async (id) => {
    const response = await axios.get(`/bills/find${id}`, {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    const outcome = response.data;
    return outcome;
})

export const updateOutcomeAPI = createAsyncThunk('expenses/updateOutcome', async (values) => {
    const {id} = values;
    const response = await axios.put(`/bills/update${id}?id=${id}`, values,  {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).jwtToken}` }});
    return response;
})

export const outcomesSlice = createSlice({
    name: 'outcomes',
    initialState,
    reducers:{
        addOutcomeMov:(state,action)=>{
            state.outcomes.push(action.payload)
        },
        deleteOutcomeMov:(state,action)=>{
            const {id} = action.payload
            const outcomes = state.outcomes.filter(outcome => outcome.id !== id)
            state.outcomes = outcomes
        },
        modifyOutcomeMov:(state,action)=>{
            const {id, amount, name, date, description} = action.payload
            const foundOutcome = state.outcomes.find(outcome => outcome.id === id)
            // mejorar
            foundOutcome.amount = amount;
            foundOutcome.name = name;
            foundOutcome.date = date;
            foundOutcome.description = description;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchOutcomesAPI.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchOutcomesAPI.rejected, (state, action) => {
            state.status = 'error';
        }).addCase(fetchOutcomesAPI.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const loadedOutcomes = action.payload;
            state.outcomes = loadedOutcomes;
        })
    }
})

export default outcomesSlice.reducer

export const {deleteOutcomeMov, modifyOutcomeMov, addOutcomeMov} = outcomesSlice.actions;

export const getOutcomeBalance = state =>{
    const outcomes = state.outcomes.outcomes;
        const balance =  outcomes.map(outcome=>Number(outcome.amount)).reduce((pv,cv)=> { return pv+cv}, 0)
        return balance
}