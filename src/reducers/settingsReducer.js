import { createSlice } from '@reduxjs/toolkit';

export const settingsReducer = createSlice({
  name: 'settings',
  initialState: {
    forceHeadsetsFit: false,
    forceArmoredRigsOut: false,
    randomizeAllTimeout: false,
  },
  reducers: {
    changeForceHeadsetsFit: (state, action) => {
      state.forceHeadsetsFit = action.payload;
    },
    changeForceArmoredRigsOut: (state, action) => {
      state.forceArmoredRigsOut = action.payload;
    },
    setRandomizeAllTimeout: (state, action) => {
      state.randomizeAllTimeout = action.payload;
    },
  },
});

export const {
  changeForceHeadsetsFit,
  changeForceArmoredRigsOut,
  setRandomizeAllTimeout,
} = settingsReducer.actions;
export default settingsReducer.reducer;
