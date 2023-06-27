import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//64988d159543ce0f49e225fe.mockapi.io/contacts/:endpoint
axios.defaults.baseURL = 'https://64988d159543ce0f49e225fe.mockapi.io/';
axios.defaults.baseURL = 'https://648c54b28620b8bae7ecb565.mockapi.io/';

export async function fetchBooks() {
  const { data } = await axios.get('/contacts');
  return data;
}

// export const fetchBooks = createAsyncThunk('contactss/fetchAll', async () => {
//   const { data } = await axios.get('/contacts');
//   return data;
// });
