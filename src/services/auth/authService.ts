import { apiClient } from '@api/client';
import { ENDPOINTS } from '@api/endpoints';
import type { LoginResponse } from '@appTypes/api';

export const loginAPI = (email: string, password: string): Promise<LoginResponse> =>
  apiClient.post(ENDPOINTS.LOGIN, { email, password }).then(r => r.data);
