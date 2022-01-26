import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ColorState {
  value: string;
}

const initialState: ColorState = {
  value: 'black',
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export const selectColor = (state: RootState) => state.colorReducer.value;
export default colorSlice.reducer;
