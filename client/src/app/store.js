import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import expensesReducer from '../features/expenses/expensesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    expenses: expensesReducer,
  },
});
