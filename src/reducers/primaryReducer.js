import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const primaryReducer = createSlice({
  name: 'primary',
  initialState: {
    primaries: null,
    randomPrimaryName: null,
    randomPrimaryImage: null,
  },
  reducers: {
    setPrimaries: (state, action) => {
      state.primaries = action.payload;
    },
    primaryName: (state, action) => {
      state.randomPrimaryName = action.payload;
    },
    primaryImage: (state, action) => {
      state.randomPrimaryImage = action.payload;
    },
  },
});

export const initializePrimaries = (data) => {
  return async (dispatch) => {
    console.log(data);
    dispatch(setPrimaries(data));
  };
};

export const randomizePrimary = createAsyncThunk(
  'primary/randomizePrimary',
  async (_, { dispatch, getState }) => {
    const state = getState();
    const primaries = state.primary.primaries;
    console.log(primaries);
    const randomItem = randomizeItem(primaries);
    dispatch(primaryName(randomItem.shortName.replace('Default', '')));
    dispatch(primaryImage(randomItem.image512pxLink));
  },
);

export const { setPrimaries, primaryImage, primaryName } =
  primaryReducer.actions;
export default primaryReducer.reducer;
