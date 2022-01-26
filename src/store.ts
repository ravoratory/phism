import { configureStore } from '@reduxjs/toolkit';
// write below to import your reducers.

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
