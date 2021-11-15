import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './reducer';

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
