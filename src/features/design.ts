import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import Phism from '../designs/phism';
import {
  Claymorphism,
  Neumorphism,
  Glassmorphism,
} from '../designs';

interface DesignState {
  value: {[key: string]: string} | null;
}

const initialState: DesignState = {
  value: null,
};

export const designs: { [key: string]: {[key: string]: string} } = {
  'claymorphism': new Claymorphism().props,
  'neumorphism': new Neumorphism().props,
  'glassmorphism': new Glassmorphism().props,
} as const;

export const DesignSlice = createSlice({
  name: 'Design',
  initialState,
  reducers: {
    setDesign: (state, action: PayloadAction<string>) => {
      state.value = designs[action.payload] ?? null;
    },
  },
});

export const { setDesign } = DesignSlice.actions;
export const selectDesign = (state: RootState) => state.designReducer.value;
export default DesignSlice.reducer;
