import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export async function makeRequest(url: string, options?: any) {
  try {
    const { data } = await api(url, options);
    return data;
  } catch (error: any) {
    return Promise.reject(error?.response?.data?.message ?? 'Error');
  }
}

// Generated by https://quicktype.io

export interface Post {
  id: string;
  title: string;
}