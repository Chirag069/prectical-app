import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAPI } from '@services/product/productService';

export const fetchProducts = createAsyncThunk('product/fetchAll', (_, thunkAPI) =>
  fetchProductsAPI().catch(err => thunkAPI.rejectWithValue(err.message)),
);

type ProductState = { items: any[]; loading: boolean; error: string | null };

const productSlice = createSlice({
  name: 'product',
  initialState: { items: [], loading: false, error: null } as ProductState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchProducts.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; });
  },
});

export default productSlice.reducer;
