import axios from 'axios';
import { logout } from './api';
import { API_BASE } from './api';
const refreshAccessToken = async (refreshToken:any) => {
  try {
    const response = await axios.post(`${API_BASE}/users/token/refresh/`, { "refresh" :refreshToken });
    const newAccessToken = response.data.access;
    return newAccessToken;
  } catch (error) {
    logout();
    // console.error('Refresh token error:', error);
    throw error;
  }
};

export default refreshAccessToken;