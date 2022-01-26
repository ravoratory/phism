import { configureStore } from '@reduxjs/toolkit';
// write below to import your reducers.
import colorReducer from './features/color';

export const store = configureStore({
  reducer: {
    colorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
