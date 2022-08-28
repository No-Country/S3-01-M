import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import expensesReducer from "../features/expenses/expensesSlice";
import incomesReducer from "../features/incomes/incomesSlice";
import outcomesReducer from "../features/outcomes/outcomesSlice";
import authSlice from "../features/user/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    expenses: expensesReducer,
    incomes: incomesReducer,
    outcomes: outcomesReducer,
    auth: authSlice,
  },
});
