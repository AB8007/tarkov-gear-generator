import { createSlice } from '@reduxjs/toolkit'

export const settingsReducer = createSlice({
    name: 'settings',
    initialState: {
        forceHelmet: false,
        forceHeadsetsFit: false,
        forceArmoredRigsOut: false,
        forceRacHeadsetOut: false,
        randomizeAllTimeout: false
    },
    reducers: {
        changeForceHelmet: (state, action) => {
            state.forceHelmet = action.payload
        },
        changeForceHeadsetsFit: (state, action) => {
            state.forceHeadsetsFit = action.payload
        },
        changeForceArmoredRigsOut: (state, action) => {
            state.forceArmoredRigsOut = action.payload
        },
        changeForceRacHeadsetOut: (state, action) => {
            state.forceRacHeadsetOut = action.payload
        },
        setRandomizeAllTimeout: (state, action) => {
            state.randomizeAllTimeout = action.payload
        }
    }
})


export const { changeForceHelmet, changeForceHeadsetsFit, changeForceArmoredRigsOut, changeForceRacHeadsetOut, setRandomizeAllTimeout } = settingsReducer.actions
export default settingsReducer.reducer



