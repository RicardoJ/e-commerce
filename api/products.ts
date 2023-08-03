import { Product } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
};
