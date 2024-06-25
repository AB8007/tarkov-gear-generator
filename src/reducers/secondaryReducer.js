import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import randomizeItem from '../utils/randomIndex'
import { fetchItems } from '../routes/api'

export const secondaryReducer = createSlice({
    name: 'secondary',
    initialState: {
        secondariesList: [],
        randomSecondaryName: null,
        randomSecondaryImage: null
    },
    reducers: {
        setSecondaries: (state, action) => {
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

export const initializeSecondaries = createAsyncThunk(
    'secondary/initialize',
    async (_, {dispatch}) => {
        const rawPistolData = await fetchItems('Handgun')
        const filteredPistolData = rawPistolData.data.items.filter(item => item.name.includes("Default") && !item.name.includes("FDE"))
        const pistolsAndRevolvers = [...filteredPistolData]
        const rawRevolverData = await fetchItems('Revolver')
        const filteredRevolverData = rawRevolverData.data.items.filter(item => item.name.includes("Default") && item.width <= 2 )
        pistolsAndRevolvers.push(...filteredRevolverData)
        dispatch(setSecondaries(pistolsAndRevolvers))
    }
)

export const randomizeSecondary = createAsyncThunk( 
  'secondary/randomizeSecondary',
  async (_, { dispatch, getState } ) => {
    const state = getState()
    const secondaries = state.secondary.secondariesList
    const randomItem = randomizeItem(secondaries)
      dispatch(secondaryName(randomItem.shortName.replace('Default','')))
      dispatch(secondaryImage(randomItem.image512pxLink))
})

export const { setSecondaries, secondaryName, secondaryImage } = secondaryReducer.actions
export default secondaryReducer.reducer