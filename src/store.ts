import { configureStore } from '@reduxjs/toolkit';
// write below to import your reducers.
import colorReducer from './features/color';
import styleReducer from './features/style';

export const store = configureStore({
  reducer: {
    colorReducer,
    styleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
