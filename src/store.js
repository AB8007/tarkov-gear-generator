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
    imageId: null,
  },

  imageLoadedStatus: {
    headWear: false,
    headPhones: false,
    chestRig: false,
    bodyArmor: false,
    primary: false,
    secondary: false,
  },

  setLoadedState: (prop, val) =>
    set((state) => ({
      imageLoadedStatus: {
        ...state.imageLoadedStatus,
        [prop]: val,
      },
    })),

  areAllImagesLoaded: () => {
    const { imageLoadedStatus } = useItemsStore.getState();
    return Object.values(imageLoadedStatus).every((status) => status === true);
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
      map: setData(data.map),
    });
  },
}));

export default useItemsStore;
