import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from './phonebook';

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), phonebookApi.middleware],
  devtools: true,
  // devtools: process.env.NODE_ENV === 'development',
});

export default store;
