import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import randomizeItem from "../utils/randomIndex";
import { fetchItems } from "../routes/api";

export const headphonesReducer = createSlice ({
    name: 'headphones',
    initialState : {
        headphonesList: [],
        randomHeadphonesName: null,
        randomHeadphonesImage: null
    },
    reducers: {
        setHeadphones: (state, action) => {
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

export const initializeHeadphones = createAsyncThunk(
    'headphones/initialize',
    async (_, {dispatch}) => {
        const rawData = await fetchItems('Headphones')
        const filteredData = rawData.data.items
        dispatch(setHeadphones(filteredData))
    }
)

export const randomizeHeadphones = createAsyncThunk(
    'headphones/randomizeHeadphones',
    async (_, { dispatch, getState}) => {
        const state = getState()
        const headphones = state.headphones.headphonesList
        const normalHeadphones = headphones.filter(item => !item.name.includes("RAC"))
        console.log(normalHeadphones)
        const randomItem = randomizeItem(normalHeadphones)
        dispatch(headphonesName(randomItem.shortName))
        dispatch(headphonesImage(randomItem.image512pxLink))
    }
)

export const { setHeadphones, headphonesName, headphonesImage } = headphonesReducer.actions
export default headphonesReducer.reducer