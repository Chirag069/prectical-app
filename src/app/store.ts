import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import { Storage } from '@storage/mmkvStorage';

const persistConfig = {
  key: 'root',
  storage: Storage,
  whitelist: ['auth', 'wishlist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState  = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
