import axios from 'axios';

const API_BASE_URL = 'https://find-my-ca-coral.vercel.app/'; // URL for JSON Server

export const fetchAccountants = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/accountants`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching accountants:', error);
    throw error;
  }
};


