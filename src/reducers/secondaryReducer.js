import { createSlice } from '@reduxjs/toolkit'

export const secondaryReducer = createSlice({
    name: 'secondary',
    initialState: {
        secondariesList: [],
        randomSecondaryName: null,
        randomSecondaryImage: null
    },
    reducers: {
        addSecondaryWeapons: (state, action) => {
            state.secondariesList.push(...action.payload)
        },
        secondaryName: (state, action) => {
            state.randomSecondaryName = action.payload
        },
        secondaryImage: (state, action) => {
            state.randomSecondaryImage = action.payload
        }
    }
})


export const { addSecondaryWeapons, secondaryName, secondaryImage } = secondaryReducer.actions
export default secondaryReducer.reducer



