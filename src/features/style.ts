import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface StyleState {
  value: string;
}

const initialState: StyleState = {
  value: '',
};

export const StyleSlice = createSlice({
  name: 'Style',
  initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setStyle } = StyleSlice.actions;
export const selectStyle = (state: RootState) => state.styleReducer.value;
export default StyleSlice.reducer;
