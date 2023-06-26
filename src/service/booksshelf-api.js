import axios from 'axios';

//64988d159543ce0f49e225fe.mockapi.io/contacts/:endpoint
axios.default.baseURL = 'https://64988d159543ce0f49e225fe.mockapi.io/';

export async function fetchBooks() {
  const { data } = await axios.get('/books');
  return data;
}
