import { apiClient } from '@api/client';
import { ENDPOINTS } from '@api/endpoints';
import type { EventsResponse } from '@types/api';

export const fetchEventsAPI = (): Promise<EventsResponse> =>
  apiClient.post(ENDPOINTS.EVENTS).then(r => r.data);
