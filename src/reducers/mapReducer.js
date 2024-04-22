import { createSlice } from "@reduxjs/toolkit";

export const mapReducer = createSlice ({
    name: 'map',
    initialState: {
        mapsList: [],
        randomMapName: null,
        randomMapImage: null,
    },
    reducers: {
        addMaps: (state, action) => {
            state.mapsList.push(...action.payload)
        },
        mapName: (state, action) => {
            state.randomMapName = action.payload
        },
        mapImage: (state, action) => {
            state.randomMapImage = action.payload
        }
    }
})

export const { addMaps, mapName, mapImage} = mapReducer.actions

export default mapReducer.reducer