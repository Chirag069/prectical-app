import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI } from '@services/auth/authService';
import type { User } from '@appTypes/api';

export const login = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await loginAPI(payload.email, payload.password);
      if (!res.success) return rejectWithValue(res.message);
      return res.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message ?? 'Login failed');
    }
  },
);

type AuthState = {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, user: null, loading: false, error: null } as AuthState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user  = null;
    },
    userDetailsUpdated(state, action: { payload: User }) {
      state.user = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending,   state => { state.loading = true;  state.error = null; })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token   = action.payload.token;
        state.user    = action.payload.user;
      })
      .addCase(login.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
