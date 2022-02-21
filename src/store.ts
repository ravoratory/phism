import { configureStore } from '@reduxjs/toolkit';
// write below to import your reducers.
import colorReducer from './features/color';
import designReducer from './features/design';

export const store = configureStore({
  reducer: {
    colorReducer,
    designReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
