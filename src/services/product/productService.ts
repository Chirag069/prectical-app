import { apiClient } from '@api/client';

export const fetchProductsAPI = () =>
  apiClient.get('/products').then(r => r.data);
