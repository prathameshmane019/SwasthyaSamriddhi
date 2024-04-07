
import { login } from '../redux/slice';
import axios from 'axios';

export const fetchUserById = (id) => async (dispatch) => {
  try {
    const response = await axios.post('/api/finduser', { id });
    const user = response.data;
    dispatch(login(user));
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};
