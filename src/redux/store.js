import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slice/walletSlice'

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;
