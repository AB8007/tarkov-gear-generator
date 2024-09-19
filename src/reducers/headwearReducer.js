import { createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';

export const headwearReducer = createSlice({
  name: 'headwear',
  initialState: {
    headwear: null,
    randomizedHeadwear: {
      name: null,
      image: null,
    },
  },
  reducers: {
    setHeadwear: (state, action) => {
      state.headwear = action.payload;
    },
    setRandomHeadwear: (state, action) => {
      state.randomizedHeadwear = { ...action.payload };
    },
  },
});

export const initializeHeadwear = (data) => {
  return async (dispatch) => {
    dispatch(setHeadwear(data));
  };
};

export const randomizeHeadwear = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const settings = state.settings;
    const headwear = state.headwear.headwear;
    const headsetCompatibleHeadwear = headwear.filter(
      (item) => item.blocksHeadphones === false,
    );
    // force headwear with headset compatibility
    if (settings.forceHeadsetsFit === true) {
      const randomCompatibleHeadwear = randomizeItem(headsetCompatibleHeadwear);
      dispatch(
        setRandomHeadwear({
          name: randomCompatibleHeadwear.shortName,
          image: randomCompatibleHeadwear.image512pxLink,
        }),
      );

      return;
    }
    const randomItem = randomizeItem(headwear);
    dispatch(
      setRandomHeadwear({
        name: randomItem.shortName,
        image: randomItem.image512pxLink,
      }),
    );
    return;
  };
};

export const { setHeadwear, setRandomHeadwear } = headwearReducer.actions;
export default headwearReducer.reducer;
