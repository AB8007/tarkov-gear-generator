import axios from 'axios'
const tarkovApi = 'https://api.tarkov.dev/graphql'

const fetchHeadwear = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Headwear) {
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

const fetchHeadphones = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Headphones) {
                  name
                  image512pxLink
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

const fetchPistols = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Handgun) {
                    id
                    name
                    image512pxLink
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

const fetchRevolvers = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Revolver) {
                    name
                    shortName
                    image512pxLink
                    width
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchAssaultRifles = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: AssaultRifle) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchAssaultCarbines = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: AssaultCarbine) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchSniperRifles = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: SniperRifle) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchSMGs = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: SMG) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchShotguns = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Shotgun) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchMachineGuns = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Machinegun) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchDMRs = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: MarksmanRifle) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchBodyarmor = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: Armor) {
                    name
                    shortName
                    image512pxLink
                }
            }`
        })
        const data = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

const fetchChestRigs = async () => {
    try {
        const response = await axios.post(`${tarkovApi}`, {
            query: `{
                items(categoryNames: ChestRig) {
                    name
                    shortName
                    image512pxLink
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
    fetchHeadwear, 
    fetchHeadphones, 
    fetchPistols, 
    fetchRevolvers, 
    fetchAssaultRifles, 
    fetchAssaultCarbines,
    fetchSniperRifles,
    fetchSMGs,
    fetchShotguns,
    fetchMachineGuns,
    fetchDMRs,
    fetchBodyarmor,
    fetchChestRigs,
    fetchMaps
}