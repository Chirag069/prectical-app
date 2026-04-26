import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEventsAPI } from '@services/event/eventService';
import type { Event } from '@types/api';

export const fetchEvents = createAsyncThunk(
  'event/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchEventsAPI();
      if (!res.success) return rejectWithValue('Failed to load events');
      return res.data.events;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message ?? 'Network error');
    }
  },
);

type EventState = {
  items: Event[];
  loading: boolean;
  error: string | null;
};

const eventSlice = createSlice({
  name: 'event',
  initialState: { items: [], loading: false, error: null } as EventState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending,   state => { state.loading = true;  state.error = null; })
      .addCase(fetchEvents.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchEvents.rejected,  (state, action) => { state.loading = false; state.error = action.payload as string; });
  },
});

export default eventSlice.reducer;
