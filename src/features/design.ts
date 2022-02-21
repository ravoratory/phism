import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Phism from '../designs/phism';
import { Claymorphism } from '../designs';

interface DesignState {
  value: Phism | null;
}

const initialState: DesignState = {
  // TODO: add other designs
  value: new Claymorphism(),
};

export const DesignSlice = createSlice({
  name: 'Design',
  initialState,
  reducers: {
    setDesign: (state, action: PayloadAction<Phism|null>) => {
      state.value = action.payload;
    },
  },
});

export const { setDesign } = DesignSlice.actions;
export const selectDesign = (state: RootState) => state.designReducer.value;
export default DesignSlice.reducer;
