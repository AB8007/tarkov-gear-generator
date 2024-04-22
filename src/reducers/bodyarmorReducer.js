import { createSlice } from "@reduxjs/toolkit";

export const bodyarmorReducer = createSlice ({
    name: 'bodyarmor',
    initialState : {
        bodyarmorsList: [],
        randomBodyarmorName: null,
        randomBodyarmorImage: null
    },
    reducers: {
        addBodyarmors: (state, action) => {
            state.bodyarmorsList.push(...action.payload)
        },
        bodyarmorName: (state, action) => {
            state.randomBodyarmorName = action.payload
        },
        bodyarmorImage: (state, action) => {
            state.randomBodyarmorImage = action.payload
        }
    }
})
export const { addBodyarmors, bodyarmorName, bodyarmorImage } = bodyarmorReducer.actions

export default bodyarmorReducer.reducer
