import { createSlice } from '@reduxjs/toolkit';
import randomizeItem from '../utils/randomIndex';
import { setRandomChestrig } from './chestrigReducer';

export const bodyarmorReducer = createSlice({
  name: 'bodyarmor',
  initialState: {
    bodyarmors: null,
    armoredRigs: null,
    randomizedBodyarmor: {
      name: null,
      image: null,
    },
  },
  reducers: {
    setBodyarmors: (state, action) => {
      state.bodyarmors = action.payload;
    },
    setArmoredRigs: (state, action) => {
      state.armoredRigs = action.payload;
    },
    setRandomizedBodyarmor: (state, action) => {
      state.randomizedBodyarmor = { ...action.payload };
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
    const allBodyarmors = [...bodyArmors, ...armoredRigs];

    // limit randomization to only regular body armors
    if (settings.forceArmoredRigsOut === true) {
      const randomBodyArmor = randomizeItem(bodyArmors);
      const randomChestRig = randomizeItem(chestRigs);

      dispatch(
        setRandomizedBodyarmor({
          name: randomBodyArmor.shortName.replace('Default', ''),
          image: randomBodyArmor.image512pxLink,
        }),
      );
      dispatch(
        setRandomChestrig({
          name: randomChestRig.shortName,
          image: randomChestRig.image512pxLink,
        }),
      );
      return;
    }
    const randomArmor = randomizeItem(allBodyarmors);
    // if armor is not an armored rig, also roll for a chest rig
    if (randomArmor && bodyArmors.includes(randomArmor)) {
      const randomChestRig = randomizeItem(chestRigs);
      dispatch(
        setRandomizedBodyarmor({
          name: randomArmor.shortName.replace('Default', ''),
          image: randomArmor.image512pxLink,
        }),
      );
      dispatch(
        setRandomChestrig({
          name: randomChestRig.shortName,
          image: randomChestRig.image512pxLink,
        }),
      );
      return;
    }
    // if armor is an armored rig, no separate chestrig needed
    dispatch(
      setRandomizedBodyarmor({
        name: randomArmor.shortName.replace('Default', ''),
        image: randomArmor.image512pxLink,
      }),
    );
    dispatch(setRandomChestrig({ ...null }));
    return;
  };
};

export const { setBodyarmors, setArmoredRigs, setRandomizedBodyarmor } =
  bodyarmorReducer.actions;
export default bodyarmorReducer.reducer;
