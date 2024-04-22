import { createSlice } from "@reduxjs/toolkit";

export const headwearReducer = createSlice({
    name: 'headwear',
    initialState: {headwearList: [],
        randomHeadwearName: null,
        randomHeadwearImage: null
    },
    reducers: {
        addHeadwear: (state, action) => {
            state.headwearList.push(...action.payload)
        },
        headwearName: (state, action) => {
            state.randomHeadwearName = action.payload
        },
        headwearImage: (state, action) => {
            state.randomHeadwearImage = action.payload
        }
    }
})

export const { addHeadwear, headwearName, headwearImage } = headwearReducer.actions

export default headwearReducer.reducer