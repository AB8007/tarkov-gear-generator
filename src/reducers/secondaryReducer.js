import { createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const secondaryReducer = createSlice({
  name: 'secondary',
  initialState: {
    secondaries: null,
    randomizedSecondary: {
      name: null,
      image: null,
    },
  },
  reducers: {
    setSecondaries: (state, action) => {
      state.secondaries = action.payload;
    },
    setRandomizedSecondary: (state, action) => {
      state.randomizedSecondary = { ...action.payload };
    },
  },
});

export const initializeSecondaries = (data) => {
  return async (dispatch) => {
    dispatch(setSecondaries(data));
  };
};

export const randomizeSecondary = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const secondaries = state.secondary.secondaries;
    const randomItem = randomizeItem(secondaries);
    dispatch(
      setRandomizedSecondary({
        name: randomItem.shortName.replace('Default', ''),
        image: randomItem.image512pxLink,
      }),
    );
  };
};

export const { setSecondaries, setRandomizedSecondary } =
  secondaryReducer.actions;
export default secondaryReducer.reducer;
