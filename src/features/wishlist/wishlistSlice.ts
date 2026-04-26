import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Event } from '@appTypes/api';

type WishlistState = {
  items: Event[];
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: [] } as WishlistState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<Event>) {
      const index = state.items.findIndex(
        e => e.event_date_id === action.payload.event_date_id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push({ ...action.payload, isFavorite: 1 });
      }
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
