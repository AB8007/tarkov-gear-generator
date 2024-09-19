import { createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const headphonesReducer = createSlice({
  name: 'headphones',
  initialState: {
    headphones: null,
    randomizedHeadphones: {
      name: null,
      image: null,
    },
  },
  reducers: {
    setHeadphones: (state, action) => {
      state.headphones = action.payload;
    },
    setRandomizedHeadphones: (state, action) => {
      state.randomizedHeadphones = { ...action.payload };
    },
  },
});

export const initializeHeadphones = (data) => {
  return async (dispatch) => {
    dispatch(setHeadphones(data));
  };
};

export const randomizeHeadphones = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const headphones = state.headphones.headphones;
    const normalHeadphones = headphones.filter(
      (item) => !item.name.includes('RAC'),
    );
    const randomItem = randomizeItem(normalHeadphones);
    dispatch(
      setRandomizedHeadphones({
        name: randomItem.shortName,
        image: randomItem.image512pxLink,
      }),
    );
  };
};

export const { setHeadphones, setRandomizedHeadphones } =
  headphonesReducer.actions;
export default headphonesReducer.reducer;
