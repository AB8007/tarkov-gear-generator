import { configureStore } from "@reduxjs/toolkit";
import headwearReducer from './reducers/headwearReducer'
import headphonesReducer from './reducers/headphonesReducer'
import bodyarmorReducer from "./reducers/bodyarmorReducer";
import chestrigReducer from "./reducers/chestrigReducer";
import primaryReducer from "./reducers/primaryReducer";
import armoredrigReducer from "./reducers/armoredrigReducer";
import mapReducer from "./reducers/mapReducer";
import secondaryReducer from "./reducers/secondaryReducer";
import settingsReducer from "./reducers/settingsReducer";



export default configureStore({
    reducer: { 
        headwear: headwearReducer, 
        headphones: headphonesReducer, 
        bodyarmor: bodyarmorReducer, 
        chestrig: chestrigReducer, 
        primary: primaryReducer,
        armoredrig: armoredrigReducer,
        secondary: secondaryReducer,
        map: mapReducer,
        settings: settingsReducer
    }
})

