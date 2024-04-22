import { createSlice } from '@reduxjs/toolkit'

export const primaryReducer = createSlice({
    name: 'primary',
    initialState: {
        primariesList: [],
        randomPrimaryName: null,
        randomPrimaryImage: null
    },
    reducers: {
        addPrimaryWeapons: (state, action) => {
            state.primariesList.push(...action.payload)
        },
        primaryName: (state, action) => {
            state.randomPrimaryName = action.payload
        },
        primaryImage: (state, action) => {
            state.randomPrimaryImage = action.payload
        }
    }
})


export const { addPrimaryWeapons, primaryImage, primaryName } = primaryReducer.actions
export default primaryReducer.reducer



