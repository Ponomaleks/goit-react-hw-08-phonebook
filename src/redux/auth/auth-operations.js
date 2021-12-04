import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getStoredState from 'redux-persist/es/getStoredState';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  console.log(thunkAPI.getState().auth.token);
  const pesistedToken = thunkAPI.getState().auth.token;

  if (pesistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(pesistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {}
});

const authOperations = { register, logIn, logOut, fetchCurrentUser };

// console.log(authOperations);
export { authOperations };
