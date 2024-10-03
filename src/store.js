import { create } from 'zustand';

const initialState = {
  name: null,
  image: null,
  longName: null,
};

const setData = (data) => {
  if (data) {
    return {
      name: data.shortName,
      image: data.image512pxLink,
      longName: data.name,
    };
  }
  return initialState;
};

const useItemsStore = create((set) => ({
  headWear: initialState,
  headPhones: initialState,
  chestRig: initialState,
  bodyArmor: initialState,
  primary: initialState,
  secondary: initialState,
  map: {
    name: null,
    mapId: null,
  },

  setItems: ({ data }) => {
    if (data.chestRig.type === 'Armored') {
      set({
        chestRig: initialState,
        bodyArmor: setData(data.chestRig),
      });
    } else {
      set({
        chestRig: setData(data.chestRig),
        bodyArmor: setData(data.bodyArmor),
      });
    }
    set({
      headPhones: setData(data.headphones),
      headWear: setData(data.headwear),
      primary: setData(data.primary),
      secondary: setData(data.secondary),
      map: { name: data.map.name, mapId: data.map.id },
    });
  },
}));

export default useItemsStore;
