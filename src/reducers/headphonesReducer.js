import { createSlice } from "@reduxjs/toolkit";

export const headphonesReducer = createSlice ({
    name: 'headphones',
    initialState : {
        headphonesList: [],
        randomHeadphonesName: null,
        randomHeadphonesImage: null
    },
    reducers: {
        addHeadphones: (state, action) => {
            state.headphonesList.push(...action.payload)
        },
        headphonesName: (state, action) => {
            state.randomHeadphonesName = action.payload
        },
        headphonesImage: (state, action) => {
            state.randomHeadphonesImage = action.payload
        }
    }
})
export const { addHeadphones, headphonesName, headphonesImage } = headphonesReducer.actions

export default headphonesReducer.reducer
