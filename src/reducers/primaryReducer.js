import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import randomizeItem from '../utils/randomIndex'
import { fetchItems } from '../routes/api'

export const primaryReducer = createSlice({
    name: 'primary',
    initialState: {
        primariesList: [],
        randomPrimaryName: null,
        randomPrimaryImage: null
    },
    reducers: {
        setPrimaries: (state, action) => {
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

export const initializePrimaries = createAsyncThunk(
    'primary/initialize',
    async (_, {dispatch}) => {
        const assaultRiflesData = await fetchItems('AssaultRifle')
              const getDefaultARs = assaultRiflesData.data.items.filter(item => item.name.includes("Default") || item.name.includes("Carbine"))
              dispatch(setPrimaries(getDefaultARs))
            const assaultCarbinesData = await fetchItems('AssaultCarbine')
              const getDefaultACs = assaultCarbinesData.data.items.filter(item => item.name.includes("Default"))
              dispatch(setPrimaries(getDefaultACs))
            const sniperRiflesData = await fetchItems('SniperRifle')
              const getDefaultSnipers = sniperRiflesData.data.items.filter(item => item.name.includes("Default" ))
              dispatch(setPrimaries(getDefaultSnipers))
            const SMGsData = await fetchItems('SMG')
              const getDefaultSMGs = SMGsData.data.items.filter(item => item.name.includes("Default"))
              dispatch(setPrimaries(getDefaultSMGs))
            const shotgunsData = await fetchItems('Shotgun')
              const getDefaultShotguns = shotgunsData.data.items.filter(item => item.name.includes("Default"))
              dispatch(setPrimaries(getDefaultShotguns))
            const machineGunsData = await fetchItems('Machinegun')
              const getDefaultMGs = machineGunsData.data.items.filter(item => item.name.includes("Default"))
              dispatch(setPrimaries(getDefaultMGs))
            const marksmanRiflesData = await fetchItems('MarksmanRifle')
              const getDefaultDMRs = marksmanRiflesData.data.items.filter(item => item.name.includes("Default"))
              dispatch(setPrimaries(getDefaultDMRs))
    }
)

export const randomizePrimary = createAsyncThunk(
    'primary/randomizePrimary',
    async (_, { dispatch, getState }) => {
        const state = getState()
        const primaries = state.primary.primariesList
        const randomItem = randomizeItem(primaries)
        dispatch(primaryName(randomItem.shortName.replace('Default','')))
        dispatch(primaryImage(randomItem.image512pxLink))
    }
)

export const { setPrimaries, primaryImage, primaryName } = primaryReducer.actions
export default primaryReducer.reducer