import { createSlice } from "@reduxjs/toolkit";

export const armoredrigReducer = createSlice ({
    name: 'armoredrig',
    initialState : {
        armoredRigsList: [],
        randomArmoredRigName: null,
        randomArmoredRigImage: null
    },
    reducers: {
        addArmoredRigs: (state, action) => {
            state.armoredRigsList.push(...action.payload)
        },
        armoredRigName: (state, action) => {
            state.randomArmoredRigName = action.payload
        },
        armoredRigImage: (state, action) => {
            state.randomArmoredRigImage = action.payload
        }
    }
})
export const { addArmoredRigs, armoredRigName, armoredRigImage } = armoredrigReducer.actions

export default armoredrigReducer.reducer
