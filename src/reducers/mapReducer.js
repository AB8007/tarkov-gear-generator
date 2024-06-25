import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import randomizeItem from "../utils/randomIndex";
import customs from '/images/maps/customs.png'
import factory from '/images/maps/factory.png'
import groundzero from '/images/maps/groundzero.png'
import interchange from '/images/maps/interchange.png'
import lighthouse from '/images/maps/lighthouse.png'
import reserve from '/images/maps/reserve.png'
import shoreline from '/images/maps/shoreline.png'
import streets from '/images/maps/streets.png'
import woods from '/images/maps/woods.png'
import labs from '/images/maps/thelab.png'
import { fetchMaps } from "../routes/api";


const mapThumbnails = [
    { name: 'customs', image: customs },
    { name: 'factory', image: factory },
    { name: 'ground zero', image: groundzero },
    { name: 'interchange', image: interchange },
    { name: 'lighthouse', image: lighthouse },
    { name: 'reserve', image: reserve },
    { name: 'shoreline', image: shoreline },
    { name: 'streets of tarkov', image: streets },
    { name: 'woods', image: woods },
    { name: 'the lab', image: labs }
]

export const mapReducer = createSlice ({
    name: 'map',
    initialState: {
        mapsList: [],
        randomMapName: null,
        randomMapImage: null,
    },
    reducers: {
        setMaps: (state, action) => {
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

export const initializeMaps = createAsyncThunk(
    'map/initialize',
    async (_, {dispatch}) => {
        const rawData = await fetchMaps()
        const filterDuplicates = rawData.data.maps.filter(map => {
            return map.name !== 'Night Factory' && map.name !== 'Ground Zero 21+'
          })
        dispatch(setMaps(filterDuplicates))
    }
)

export const randomizeMap = createAsyncThunk(
    'map/randomizeMap',
    async (_, { dispatch, getState}) => {
        const state = getState()
        const maps = state.map.mapsList
        console.log('mitäpaskaa')
        console.log(maps)
        const randomMap = randomizeItem(maps)
        console.log(randomMap)
        const imageToDisplay = mapThumbnails.find(map => map.name.includes(randomMap.name.toLowerCase()))
        if (imageToDisplay) {
            dispatch(mapName(randomMap.name))
            dispatch(mapImage(imageToDisplay.image))
        } else {
            console.log(`No image found for map: ${randomMapName}`)
        }
        return 
    }
)

export const { setMaps, mapName, mapImage} = mapReducer.actions

export default mapReducer.reducer