import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@features/auth/authSlice';
import eventReducer from '@features/event/eventSlice';
import wishlistReducer from '@features/wishlist/wishlistSlice';

const rootReducer = combineReducers({
  auth:     authReducer,
  event:    eventReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
