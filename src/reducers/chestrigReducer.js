import { createSlice } from "@reduxjs/toolkit";

export const chestrigReducer = createSlice ({
    name: 'chestrig',
    initialState : { chestrigsList: [],
        randomChestRigName: null,
        randomChestRigImage: null
    },
    reducers: {
        addChestrigs: (state, action) => {
            state.chestrigsList.push(...action.payload)
        },
        chestrigName: (state, action) => {
            state.randomChestRigName = action.payload
        },
        chestrigImage: (state, action) => {
            state.randomChestRigImage = action.payload
        }
    }
})
export const { addChestrigs, chestrigName, chestrigImage } = chestrigReducer.actions

export default chestrigReducer.reducer
