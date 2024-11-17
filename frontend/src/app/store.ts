// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import insuranceReducer from '../features/insurance/insuranceSlice';

const store = configureStore({
  reducer: {
    insurance: insuranceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
