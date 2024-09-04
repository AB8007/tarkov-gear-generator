import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const secondaryReducer = createSlice({
  name: 'secondary',
  initialState: {
    secondaries: null,
    randomSecondaryName: null,
    randomSecondaryImage: null,
  },
  reducers: {
    setSecondaries: (state, action) => {
      state.secondaries = action.payload;
    },
    secondaryName: (state, action) => {
      state.randomSecondaryName = action.payload;
    },
    secondaryImage: (state, action) => {
      state.randomSecondaryImage = action.payload;
    },
  },
});

export const initializeSecondaries = (data) => {
  return async (dispatch) => {
    dispatch(setSecondaries(data));
  };
};

export const randomizeSecondary = createAsyncThunk(
  'secondary/randomizeSecondary',
  async (_, { dispatch, getState }) => {
    const state = getState();
    const secondaries = state.secondary.secondaries;
    const randomItem = randomizeItem(secondaries);
    dispatch(secondaryName(randomItem.shortName.replace('Default', '')));
    dispatch(secondaryImage(randomItem.image512pxLink));
  },
);

export const { setSecondaries, secondaryName, secondaryImage } =
  secondaryReducer.actions;
export default secondaryReducer.reducer;
