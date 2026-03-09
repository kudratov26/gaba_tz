import axios from 'axios';
import type { UsersResponse } from '../types/user';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchUsers = async (limit: number, skip: number): Promise<UsersResponse> => {
  const response = await axios.get<UsersResponse>(`${API_BASE_URL}/users`, {
    params: { limit, skip },
  });
  return response.data;
};

export const searchUsers = async (query: string, limit: number, skip: number): Promise<UsersResponse> => {
  const response = await axios.get<UsersResponse>(`${API_BASE_URL}/users/search`, {
    params: { q: query, limit, skip },
  });
  return response.data;
};
