import { createSlice } from '@reduxjs/toolkit';
import { setArmoredRigs } from './bodyarmorReducer';

export const chestrigReducer = createSlice({
  name: 'chestrig',
  initialState: {
    chestrigs: null,
    randomizedChestrig: {
      name: null,
      image: null,
    },
  },
  reducers: {
    setChestrigs: (state, action) => {
      state.chestrigs = action.payload;
    },
    setRandomChestrig: (state, action) => {
      state.randomizedChestrig = { ...action.payload };
    },
  },
});
// filter between armored rig and plain chest rigs
export const initializeChestrigs = (data) => {
  return async (dispatch) => {
    const filterArmoredRigs = data.filter((item) =>
      /plate carrier|armored rig/i.test(item.name),
    );

    const filterRegularRigs = data.filter(
      (item) => !/plate carrier|armored rig/i.test(item.name),
    );
    dispatch(setChestrigs(filterRegularRigs));
    //set armored rigs state to be appended with normal body armors
    dispatch(setArmoredRigs(filterArmoredRigs));
  };
};

export const { setChestrigs, setRandomChestrig } = chestrigReducer.actions;

export default chestrigReducer.reducer;
