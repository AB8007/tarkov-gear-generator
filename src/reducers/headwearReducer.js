import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const headwearReducer = createSlice({
  name: 'headwear',
  initialState: {
    headwear: null,
    randomHeadwearName: null,
    randomHeadwearImage: null,
  },
  reducers: {
    setHeadwear: (state, action) => {
      state.headwear = action.payload;
    },
    headwearName: (state, action) => {
      state.randomHeadwearName = action.payload;
    },
    headwearImage: (state, action) => {
      state.randomHeadwearImage = action.payload;
    },
  },
});

export const initializeHeadwear = (data) => {
  return async (dispatch) => {
    console.log(data);
    dispatch(setHeadwear(data));
  };
};

export const randomizeHeadwear = createAsyncThunk(
  'headwear/randomizeHeadwear',
  async (_, { dispatch, getState }) => {
    const state = getState();
    const settings = state.settings;
    const headwear = state.headwear.headwear;
    const headsetCompatibleHeadwear = headwear.filter(
      (item) => item.blocksHeadphones === false,
    );
    // force headwear with headset compatibility
    if (settings.forceHeadsetsFit === true) {
      const randomCompatibleHeadwear = randomizeItem(headsetCompatibleHeadwear);
      dispatch(headwearName(randomCompatibleHeadwear.shortName));
      dispatch(headwearImage(randomCompatibleHeadwear.image512pxLink));
      return;
    }
    const randomItem = randomizeItem(headwear);

    dispatch(headwearName(randomItem.shortName));
    dispatch(headwearImage(randomItem.image512pxLink));
    return;
  },
);

export const { setHeadwear, headwearName, headwearImage } =
  headwearReducer.actions;
export default headwearReducer.reducer;
