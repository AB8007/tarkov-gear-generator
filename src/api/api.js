import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const getItems = async () => {
  const { data } = await axios.get(apiUrl);
  console.log('data fetched');
  return data;
};
