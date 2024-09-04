import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const headphonesReducer = createSlice({
  name: 'headphones',
  initialState: {
    headphones: null,
    randomHeadphonesName: null,
    randomHeadphonesImage: null,
  },
  reducers: {
    setHeadphones: (state, action) => {
      state.headphones = action.payload;
    },
    headphonesName: (state, action) => {
      state.randomHeadphonesName = action.payload;
    },
    headphonesImage: (state, action) => {
      state.randomHeadphonesImage = action.payload;
    },
  },
});

export const initializeHeadphones = (data) => {
  return async (dispatch) => {
    dispatch(setHeadphones(data));
  };
};

export const randomizeHeadphones = createAsyncThunk(
  'headphones/randomizeHeadphones',
  async (_, { dispatch, getState }) => {
    const state = getState();
    const headphones = state.headphones.headphones;
    const normalHeadphones = headphones.filter(
      (item) => !item.name.includes('RAC'),
    );
    console.log(normalHeadphones);
    const randomItem = randomizeItem(normalHeadphones);
    dispatch(headphonesName(randomItem.shortName));
    dispatch(headphonesImage(randomItem.image512pxLink));
  },
);

export const { setHeadphones, headphonesName, headphonesImage } =
  headphonesReducer.actions;
export default headphonesReducer.reducer;
