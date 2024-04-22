import axios from 'axios'
const tarkovApi = 'https://api.tarkov.dev/graphql'

const fetchItems = async (categoryName) => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: ${categoryName}) {
                  name
                  image512pxLink
                  properties {__typename}
                  blocksHeadphones
                  shortName
               } 
              }`
        }) 
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchMaps = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                maps {
                    name
                }
            }`
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    fetchMaps,
    fetchItems
}