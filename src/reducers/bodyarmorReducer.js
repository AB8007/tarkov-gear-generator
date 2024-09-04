import { createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';
import { chestrigName, chestrigImage } from './chestrigReducer';

export const bodyarmorReducer = createSlice({
  name: 'bodyarmor',
  initialState: {
    bodyarmors: null,
    armoredRigs: null,
    randomBodyarmorName: null,
    randomBodyarmorImage: null,
  },
  reducers: {
    setBodyarmors: (state, action) => {
      state.bodyarmors = action.payload;
    },
    setArmoredRigs: (state, action) => {
      state.armoredRigs = action.payload;
    },
    bodyarmorName: (state, action) => {
      state.randomBodyarmorName = action.payload;
    },
    bodyarmorImage: (state, action) => {
      state.randomBodyarmorImage = action.payload;
    },
  },
});

export const initializeBodyarmors = (data) => {
  return async (dispatch) => {
    dispatch(setBodyarmors(data));
  };
};

export const randomizeBodyarmor = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const settings = state.settings;
    const bodyArmors = state.bodyarmor.bodyarmors;
    const armoredRigs = state.bodyarmor.armoredRigs;
    const chestRigs = state.chestrig.chestrigs;
    console.log(bodyArmors);
    const allBodyarmors = [...bodyArmors, ...armoredRigs];

    // limit randomization to only regular body armors
    if (settings.forceArmoredRigsOut === true) {
      const randomBodyArmor = randomizeItem(bodyArmors);
      const randomChestRig = randomizeItem(chestRigs);
      dispatch(bodyarmorName(randomBodyArmor.shortName.replace('Default', '')));
      dispatch(bodyarmorImage(randomBodyArmor.image512pxLink));
      dispatch(chestrigName(randomChestRig.shortName));
      dispatch(chestrigImage(randomChestRig.image512pxLink));
      return;
    }
    const randomArmor = randomizeItem(allBodyarmors);
    // if armor is not an armored rig, also roll for a chest rig
    if (randomArmor && bodyArmors.includes(randomArmor)) {
      const randomChestRig = randomizeItem(chestRigs);
      dispatch(bodyarmorName(randomArmor.shortName.replace('Default', '')));
      dispatch(bodyarmorImage(randomArmor.image512pxLink));
      dispatch(chestrigName(randomChestRig.shortName));
      dispatch(chestrigImage(randomChestRig.image512pxLink));
      return;
    }
    // if armor is an armored rig, no separate chestrig needed
    dispatch(bodyarmorName(randomArmor.shortName.replace('Default', '')));
    dispatch(bodyarmorImage(randomArmor.image512pxLink));
    dispatch(chestrigName(null));
    dispatch(chestrigImage(null));
    return;
  };
};

export const { setBodyarmors, setArmoredRigs, bodyarmorName, bodyarmorImage } =
  bodyarmorReducer.actions;
export default bodyarmorReducer.reducer;
