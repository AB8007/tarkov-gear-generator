import { createSlice } from '@reduxjs/toolkit';
import { setArmoredRigs } from './bodyarmorReducer';

export const chestrigReducer = createSlice({
  name: 'chestrig',
  initialState: {
    chestrigs: null,
    randomChestRigName: null,
    randomChestRigImage: null,
  },
  reducers: {
    setChestrigs: (state, action) => {
      state.chestrigs = action.payload;
    },
    chestrigName: (state, action) => {
      state.randomChestRigName = action.payload;
    },
    chestrigImage: (state, action) => {
      state.randomChestRigImage = action.payload;
    },
  },
});

export const initializeChestrigs = (data) => {
  return async (dispatch) => {
    const filterArmoredRigs = data.filter(
      (item) =>
        item.name.includes('plate carrier') ||
        item.name.includes('armored rig'),
    );

    const filterRegularRigs = data.filter(
      (item) =>
        !item.name.includes('plate carrier') &&
        !item.name.includes('armored rig'),
    );

    dispatch(setChestrigs(filterRegularRigs));
    dispatch(setArmoredRigs(filterArmoredRigs));
  };
};

export const { setChestrigs, chestrigName, chestrigImage } =
  chestrigReducer.actions;

export default chestrigReducer.reducer;
