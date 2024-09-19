import { createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const primaryReducer = createSlice({
  name: 'primary',
  initialState: {
    primaries: null,
    randomizedPrimary: {
      name: null,
      image: null,
    },
  },
  reducers: {
    setPrimaries: (state, action) => {
      state.primaries = action.payload;
    },
    setRandomizedPrimary: (state, action) => {
      state.randomizedPrimary = { ...action.payload };
    },
  },
});

export const initializePrimaries = (data) => {
  return async (dispatch) => {
    dispatch(setPrimaries(data));
  };
};

export const randomizePrimary = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const primaries = state.primary.primaries;
    const randomItem = randomizeItem(primaries);

    dispatch(
      setRandomizedPrimary({
        name: randomItem.shortName.replace('Default', ''),
        image: randomItem.image512pxLink,
      }),
    );
  };
};

export const { setPrimaries, setRandomizedPrimary } = primaryReducer.actions;
export default primaryReducer.reducer;
