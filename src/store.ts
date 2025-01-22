// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import referral from './slices/referralSlice';

export const store = configureStore({
  reducer: {
    referral
  },
});

// Infer types for usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
