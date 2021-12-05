import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  } catch (error) {
    alert(`${error.message}, registration error, try again`);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(`${error.message}, login error, try again`);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
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

export { authOperations };
