import React, { useEffect, useState } from 'react';
import { RenderRandomBodyArmor } from './RenderRandomBodyArmor'
import { RenderRandomHeadphones } from './RenderRandomHeadphones'
import { RenderRandomHeadwear } from './RenderRandomHeadwear'
import { RenderRandomPistol } from './RenderRandomPistol'
import { RenderRandomPrimary } from './RenderRandomPrimary'
import { RenderRandomChestRig } from './RenderRandomChestRig'
import { SettingsMenu } from './SettingsMenu'
import { fetchItems, fetchMaps } from '../routes/api'
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
import { RenderMap } from './RenderMap'
import { useDispatch, useSelector } from 'react-redux';
import { addHeadwear, headwearImage, headwearName } from '../reducers/headwearReducer';
import { addHeadphones, headphonesName, headphonesImage } from '../reducers/headphonesReducer';
import { addPrimaryWeapons, primaryImage, primaryName } from '../reducers/primaryReducer';
import { addBodyarmors, bodyarmorImage, bodyarmorName } from '../reducers/bodyarmorReducer';
import { addChestrigs, chestrigImage, chestrigName } from '../reducers/chestrigReducer';
import { addArmoredRigs } from '../reducers/armoredrigReducer';
import { addMaps, mapImage, mapName} from '../reducers/mapReducer';
import { addSecondaryWeapons, secondaryImage, secondaryName } from '../reducers/secondaryReducer';

export const MainComponent = () => {
    const dispatch = useDispatch()

    const [loadingPrimaryWeaponsData, setLoadingPrimaryWeaponsData] = useState(true)
    const [loadingWearableData, setLoadingWearableData] = useState(true)
    const [loadingPistolsData, setLoadingPistolsData] = useState(true)

    //settings states
    const settings = useSelector(state => state.settings)

    //wearable states
    const headphones = useSelector(state => state.headphones.headphonesList)
    const headwear = useSelector(state => state.headwear.headwearList)
    const bodyArmors = useSelector(state => state.bodyarmor.bodyarmorsList)
    const armoredRigs = useSelector(state => state.armoredrig.armoredRigsList)
    const chestRigs = useSelector(state => state.chestrig.chestrigsList)

    //weapons states
    const primaryWeapons = useSelector(state => state.primary.primariesList)
    const secondaryWeapons = useSelector(state => state.secondary.secondariesList)

    const maps = useSelector(state => state.map.mapsList)

    useEffect(() => {
        const fetchWearableData = async () => {
          try {
            const headwearData = await fetchItems('Headwear')
              dispatch(addHeadwear(headwearData.data.items))
            const bodyArmorData = await fetchItems('Armor')
              dispatch(addBodyarmors(bodyArmorData.data.items))
            const chestRigsData = await fetchItems('ChestRig')
              const getArmoredRigs = chestRigsData.data.items.filter(item => item.name.includes('plate carrier') || item.name.includes('armored rig'))
              const getChestRigs = chestRigsData.data.items.filter(item => !item.name.includes('plate carrier') && !item.name.includes('armored rig'))
              dispatch(addArmoredRigs(getArmoredRigs))
              dispatch(addChestrigs(getChestRigs))
            const headphonesData = await fetchItems('Headphones')
              dispatch(addHeadphones(headphonesData.data.items))
            setLoadingWearableData(false)
          } catch (error) {
            console.log('error:', error)
          }
        } 
        fetchWearableData()
      }, [])
    
      useEffect(() => {
        const fetchPistolsData = async () => {
          try {
            const pistolsData = await fetchItems('Handgun')
            const getDefaults = pistolsData.data.items.filter(item => item.name.includes("Default") && !item.name.includes("FDE"))
            const pistolsAndRevolvers = [...getDefaults]
            const revolversData = await fetchItems('Revolver')
            const getHandgunRevolvers = revolversData.data.items.filter(item => item.name.includes("Default") && item.width <= 2 )
            pistolsAndRevolvers.push(...getHandgunRevolvers)
              dispatch(addSecondaryWeapons(pistolsAndRevolvers))
            setLoadingPistolsData(false)
          } catch (error) {
            console.log('error:', error)
          }
        }
        fetchPistolsData()
      }, [])
      
      useEffect(() => {
        const fetchMapsData = async () => {
          try {
            const mapsData = await fetchMaps()
            const filterDuplicates = mapsData.data.maps.filter(map => {
              return map.name !== 'Night Factory' && map.name !== 'Ground Zero 21+'
            })
              dispatch(addMaps(filterDuplicates))
          } catch (error) {
            console.log('error', error)
          }
        }
        fetchMapsData()
      }, [])

      useEffect(() => {
        const fetchPrimaryWeaponsData = async () => {
          try {
            const assaultRiflesData = await fetchItems('AssaultRifle')
              const getDefaultARs = assaultRiflesData.data.items.filter(item => item.name.includes("Default") || item.name.includes("Carbine"))
              dispatch(addPrimaryWeapons(getDefaultARs))
            const assaultCarbinesData = await fetchItems('AssaultCarbine')
              const getDefaultACs = assaultCarbinesData.data.items.filter(item => item.name.includes("Default"))
              dispatch(addPrimaryWeapons(getDefaultACs))
            const sniperRiflesData = await fetchItems('SniperRifle')
              const getDefaultSnipers = sniperRiflesData.data.items.filter(item => item.name.includes("Default" ))
              dispatch(addPrimaryWeapons(getDefaultSnipers))
            const SMGsData = await fetchItems('SMG')
              const getDefaultSMGs = SMGsData.data.items.filter(item => item.name.includes("Default"))
              dispatch(addPrimaryWeapons(getDefaultSMGs))
            const shotgunsData = await fetchItems('Shotgun')
              const getDefaultShotguns = shotgunsData.data.items.filter(item => item.name.includes("Default"))
              dispatch(addPrimaryWeapons(getDefaultShotguns))
            const machineGunsData = await fetchItems('Machinegun')
              const getDefaultMGs = machineGunsData.data.items.filter(item => item.name.includes("Default"))
              dispatch(addPrimaryWeapons(getDefaultMGs))
            const marksmanRiflesData = await fetchItems('MarksmanRifle')
              const getDefaultDMRs = marksmanRiflesData.data.items.filter(item => item.name.includes("Default"))
              dispatch(addPrimaryWeapons(getDefaultDMRs))
            setLoadingPrimaryWeaponsData(false)
          } catch (error) {
            console.log('error fetching data', error)
          }
        }
        fetchPrimaryWeaponsData()
      }, [])
        
    const isLoading = loadingPistolsData || loadingPrimaryWeaponsData || loadingWearableData
      
    //random index helper
    const randomIndex = (array) => {
        return Math.floor(Math.random() * array.length)
    }

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
  
    // Functions for randomizing an item from each category

    const rollRandomMap = () => {
      const randomMap = maps[randomIndex(maps)]
      const imageToDisplay = mapThumbnails.find(map => map.name.includes(randomMap.name.toLowerCase()))
      if (imageToDisplay) {
          dispatch(mapName(randomMap.name))
          dispatch(mapImage(imageToDisplay.image))
      } else {
          console.log(`No image found for map: ${randomMapName}`)
      }
      return 
    }

    const rollRandomPistol = () => {
        const randomItem = secondaryWeapons[randomIndex(secondaryWeapons)]
          dispatch(secondaryName(randomItem.shortName.replace('Default','')))
          dispatch(secondaryImage(randomItem.image512pxLink))
        return
    }

    const rollRandomPrimary = () => {
        const randomItem = primaryWeapons[randomIndex(primaryWeapons)]
          dispatch(primaryName(randomItem.shortName.replace('Default','')))
          dispatch(primaryImage(randomItem.image512pxLink))
        return
    }

    const rollRandomBodyarmor = () => {
        const armorsAndArmoredRigs = [...bodyArmors]
        armorsAndArmoredRigs.push(...armoredRigs)
        if (settings.forceArmoredRigsOut === true) {
        const randomBodyArmor = bodyArmors[randomIndex(bodyArmors)]
        const randomChestRig = chestRigs[randomIndex(chestRigs)]
          dispatch(bodyarmorName(randomBodyArmor.shortName.replace('Default','')))
          dispatch(bodyarmorImage(randomBodyArmor.image512pxLink))
          dispatch(chestrigName(randomChestRig.shortName))
          dispatch(chestrigImage(randomChestRig.image512pxLink)) 
        return
        }

        const randomArmor = armorsAndArmoredRigs[randomIndex(armorsAndArmoredRigs)]
        // if armor is not an armored rig, also roll for a chest rig
        if (randomArmor && bodyArmors.includes(randomArmor)) {
            const randomChestRig = chestRigs[randomIndex(chestRigs)]
            dispatch(bodyarmorName(randomArmor.shortName.replace('Default','')))
            dispatch(bodyarmorImage(randomArmor.image512pxLink))
            dispatch(chestrigName(randomChestRig.shortName))
            dispatch(chestrigImage(randomChestRig.image512pxLink)) 
            return
        }
        dispatch(bodyarmorName(randomArmor.shortName.replace('Default','')))
        dispatch(bodyarmorImage(randomArmor.image512pxLink))
        dispatch(chestrigName(null))
        dispatch(chestrigImage(null)) 
        return
    }

    const rollRandomHeadwear = () => {
      const helmets = headwear.filter(item => item.properties.__typename === "ItemPropertiesHelmet")
      const compatibleHeadwear = headwear.filter(item => item.blocksHeadphones === false)  
      const compatibleHelmets = headwear.filter(item => {
          return item.properties.__typename === "ItemPropertiesHelmet" && item.blocksHeadphones === false
      })
      // force helmet
      if (settings.forceHelmet === true && settings.forceHeadsetsFit === false) {
          const randomHelmet = helmets[randomIndex(helmets)]
            dispatch(headwearName(randomHelmet.shortName))
            dispatch(headwearImage(randomHelmet.image512pxLink))
          return
        // force headset compatibility
      } else if (settings.forceHelmet === false && settings.forceHeadsetsFit === true) {
          const randomCompatibleHeadwear = compatibleHeadwear[randomIndex(compatibleHeadwear)]
            dispatch(headwearName(randomCompatibleHeadwear.shortName))
            dispatch(headwearImage(randomCompatibleHeadwear.image512pxLink))
          return
        // force helmet with headset compatibility
      }   else if (settings.forceHeadsetsFit === true && settings.forceHelmet === true) {
          const randomCompatibleHelmet = compatibleHelmets[randomIndex(compatibleHelmets)]
            dispatch(headwearName(randomCompatibleHelmet.shortName))
            dispatch(headwearImage(randomCompatibleHelmet.image512pxLink))
          return
      }
      const randomItem = headwear[randomIndex(headwear)]
        dispatch(headwearName(randomItem.shortName))
        dispatch(headwearImage(randomItem.image512pxLink))
      return
  }

  const rollRandomHeadphones = () => {
    if (settings.forceRacHeadsetOut === true) {
        const normalHeadphones = headphones.filter(item => !item.name.includes("RAC"))
        const randomHeadphones = normalHeadphones[randomIndex(normalHeadphones)]

        dispatch(headphonesName(randomHeadphones.shortName))
        dispatch(headphonesImage(randomHeadphones.image512pxLink))
        return
    }
    const randomItem = headphones[randomIndex(headphones)]
    dispatch(headphonesName(randomItem.shortName))
    dispatch(headphonesImage(randomItem.image512pxLink))
  }

    return (
      <div className='character-container'>
        {isLoading ? 
        <div className='loading-container'>
          Loading...
        </div>
          :
        <>  
        <SettingsMenu
          rollRandomPistol={rollRandomPistol}
          rollRandomPrimary={rollRandomPrimary}
          rollRandomBodyarmor={rollRandomBodyarmor}
          rollRandomHeadwear={rollRandomHeadwear}
          rollRandomHeadphones={rollRandomHeadphones}
          rollRandomMap={rollRandomMap}
        ></SettingsMenu>
  <div className='character-wrapper'>
  <RenderRandomHeadwear
    rollRandomHeadwear={rollRandomHeadwear}
  />
  <RenderRandomHeadphones
    rollRandomHeadphones={rollRandomHeadphones}
  />
  <RenderRandomBodyArmor
    rollRandomBodyarmor={rollRandomBodyarmor}
  />
  <RenderRandomChestRig/>
  <RenderRandomPrimary
    rollRandomPrimary={rollRandomPrimary}
  />
  <RenderRandomPistol 
    rollRandomPistol={rollRandomPistol}
    />
  <RenderMap
    rollRandomMap={rollRandomMap}
  ></RenderMap>
  </div>
  </>
      }
    </div>
    )
}