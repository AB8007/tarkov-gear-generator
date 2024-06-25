import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "../routes/api";
import { setArmoredRigs } from "./bodyarmorReducer";

export const chestrigReducer = createSlice ({
    name: 'chestrig',
    initialState : { chestrigsList: [],
        randomChestRigName: null,
        randomChestRigImage: null
    },
    reducers: {
        setChestrigs: (state, action) => {
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

export const initializeChestrigs = createAsyncThunk(
    'chestrig/initializeChestrigs',
    async (_, {dispatch}) => {
        const rawData = await fetchItems('ChestRig')
        const filterArmoredRigs = rawData.data.items.filter(item => item.name.includes('plate carrier') || item.name.includes('armored rig'))
        const filterDefaultsFromArmRigs = filterArmoredRigs.filter(item => !item.name.includes("Default"))
        const filterRegularRigs = rawData.data.items.filter(item => !item.name.includes('plate carrier') && !item.name.includes('armored rig'))
        dispatch(setChestrigs(filterRegularRigs))
        dispatch(setArmoredRigs(filterDefaultsFromArmRigs))
    }
)

export const { setChestrigs, chestrigName, chestrigImage } = chestrigReducer.actions

export default chestrigReducer.reducer
