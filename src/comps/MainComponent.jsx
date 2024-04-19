import React, { useEffect, useState } from 'react';
import { RenderRandomBodyArmor } from './RenderRandomBodyArmor'
import { RenderRandomHeadphones } from './RenderRandomHeadphones'
import { RenderRandomHeadwear } from './RenderRandomHeadwear'
import { RenderRandomPistol } from './RenderRandomPistol'
import { RenderRandomPrimary } from './RenderRandomPrimary'
import { RenderRandomChestRig } from './RenderRandomChestRig'
import { RenderCharacter } from './RenderCharacter'
import { SettingsMenu } from './SettingsMenu'
import {
    fetchHeadwear, 
    fetchPistols, 
    fetchHeadphones, 
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
} from '../routes/api'

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
import { RenderMap } from './RenderMap';
import { all } from 'axios';


export const MainComponent = () => {
    const [loadingPrimaryWeaponsData, setLoadingPrimaryWeaponsData] = useState(true)
    const [loadingWearableData, setLoadingWearableData] = useState(true)
    const [loadingPistolsData, setLoadingPistolsData] = useState(true)
    const [maps, setMaps] = useState([])
    const [headwear, setHeadwear] = useState([])
    const [headphones, setHeadphones] = useState([])
    const [bodyArmors, setBodyArmors] = useState([])
    const [armoredRigs, setArmoredRigs] = useState([])
    const [chestRigs, setChestRigs] = useState([])
    const [pistols, setPistols] = useState([])
    const [headphonesCheckboxValue, setHeadphonesCheckboxValue] = useState(false)
    const [helmetCheckboxValue, setHelmetCheckboxValue] = useState(false)
    const [headphoneBlockCheckboxValue, setHeadphoneBlockCheckboxValue] = useState(false)
    const [armorCheckboxValue, setArmorCheckboxValue] = useState(false)
    const [primaryWeapons, setPrimaryWeapons] = useState([])

    //map state
    const [mapImage, setMapImage] = useState('')

    //pistol states
    const [randomPistol, setRandomPistol] = useState(null)
    const [randomPistolImage, setRandomPistolImage] = useState('')
    const [pistolNameToDisplay, setPistolNameToDisplay] = useState('')
  
    //primary states

    const [randomPrimary, setRandomPrimary] = useState(null)
    const [randomPrimaryImage, setRandomPrimaryImage] = useState('')
    const [primaryNameToDisplay, setPrimaryNameToDisplay] = useState('')
  
    //armor states
    const [randomBodyArmor, setRandomBodyArmor] = useState(null)
    const [randomBodyArmorImage, setRandomBodyArmorImage] = useState('')
    const [randomChestRig, setRandomChestRig] = useState(null)
    const [randomChestRigImage, setRandomChestRigImage] = useState('')
    const [armorNameToDisplay, setArmorNameToDisplay] = useState('')
    const [chestRigNameToDisplay, setChestRigNameToDisplay] = useState('')

    //headwear states
    const [randomHeadwear, setRandomHeadwear] = useState(null)
    const [randomHeadwearImage, setRandomHeadwearImage] = useState('')
    const [headwearNameToDisplay, setHeadwearNameToDisplay] = useState('')

    //headphones states
    const [randomHeadphones, setRandomHeadphones] = useState(null)
    const [randomHeadphonesImage, setRandomHeadphonesImage] = useState('')
    const [headphonesNameToDisplay, setHeadphonesNameToDisplay] = useState('')
    
    //maps states
    const [randomMap, setRandomMap] = useState(null)
    const [randomMapName, setRandomMapName] = useState('')

    useEffect(() => {
        const fetchWearableData = async () => {
          try {
            const headwearData = await fetchHeadwear()
            setHeadwear(headwearData.data.items)
    
            const bodyArmorData = await fetchBodyarmor()
    
            setBodyArmors(bodyArmorData.data.items)
    
            const chestRigsData = await fetchChestRigs()
    
            const filterArmoredRigs = chestRigsData.data.items.filter(item => item.name.includes('plate carrier') || item.name.includes('armored rig'))
    
            const chestRigs = chestRigsData.data.items.filter(item => !item.name.includes('plate carrier') && !item.name.includes('armored rig'))
            setArmoredRigs(filterArmoredRigs)
            setChestRigs(chestRigs)

            const headphonesData = await fetchHeadphones()
            setHeadphones(headphonesData.data.items)

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
            const pistolsData = await fetchPistols()
    
            const getDefaults = pistolsData.data.items.filter(item => item.name.includes("Default") && !item.name.includes("FDE"))
    
            const pistolsAndRevolvers = [...getDefaults]
    
            const revolversData = await fetchRevolvers()
            const getHandgunRevolvers = revolversData.data.items.filter(item => item.name.includes("Default") && item.width <= 2 )
    
            pistolsAndRevolvers.push(...getHandgunRevolvers)
    
            setPistols(pistolsAndRevolvers)
            const mapsData = await fetchMaps()

            const filterDuplicates = mapsData.data.maps.filter(map => {
              return map.name !== 'Night Factory' && map.name !== 'Ground Zero 21+'
            })

            setMaps(filterDuplicates)
            setLoadingPistolsData(false)




          } catch (error) {
            console.log('error:', error)
          }
        }
        fetchPistolsData()
      }, [])
    
      useEffect(() => {
        const fetchPrimaryWeaponsData = async () => {
          try {
            const assaultRiflesData = await fetchAssaultRifles()
    
              const getDefaultARs = assaultRiflesData.data.items.filter(item => item.name.includes("Default"))
              const allPrimaryWeapons = [...getDefaultARs]
    
            const assaultCarbinesData = await fetchAssaultCarbines()
    
              const getDefaultACs = assaultCarbinesData.data.items.filter(item => item.name.includes("Default"))
              allPrimaryWeapons.push(...getDefaultACs)
    
            const sniperRiflesData = await fetchSniperRifles()
    
              const getDefaultSnipers = sniperRiflesData.data.items.filter(item => item.name.includes("Default"))
              allPrimaryWeapons.push(...getDefaultSnipers)
    
            const SMGsData = await fetchSMGs()
    
              const getDefaultSMGs = SMGsData.data.items.filter(item => item.name.includes("Default"))
              allPrimaryWeapons.push(...getDefaultSMGs)
    
            const shotgunsData = await fetchShotguns()
    
              const getDefaultShotguns = shotgunsData.data.items.filter(item => item.name.includes("Default"))
              allPrimaryWeapons.push(...getDefaultShotguns)
    
            const machineGunsData = await fetchMachineGuns()
    
              const getDefaultMGs = machineGunsData.data.items.filter(item => item.name.includes("Default"))
              allPrimaryWeapons.push(...getDefaultMGs)
    
            const marksmanRiflesData = await fetchDMRs()
    
              const defaultDMRs = marksmanRiflesData.data.items.filter(item => item.name.includes("Default"))
              allPrimaryWeapons.push(...defaultDMRs)
    
            setPrimaryWeapons(allPrimaryWeapons)
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
      setRandomMap(randomMap.name)
      setRandomMapName(randomMap.name)
    }

    useEffect(() => {
      const imageToDisplay = mapThumbnails.find(map => map.name.includes(randomMapName.toLowerCase()))
      if (imageToDisplay) {
          setMapImage(imageToDisplay.image);
      } else {
          console.log(`No image found for map: ${randomMapName}`)
      }
  }, [randomMapName, mapThumbnails])

    const rollRandomPistol = () => {
        const randomItem = pistols[randomIndex(pistols)]
        setRandomPistol(randomItem.shortName)
        setRandomPistolImage(randomItem.image512pxLink)
        setPistolNameToDisplay(randomItem.shortName.replace('Default',''))

        return
    }

    const rollRandomPrimary = () => {
        const randomItem = primaryWeapons[randomIndex(primaryWeapons)]
        setRandomPrimary(randomItem.shortName)
        setRandomPrimaryImage(randomItem.image512pxLink)
        setPrimaryNameToDisplay(randomItem.shortName.replace('Default',''))

        return
    }

    const rollRandomBodyarmor = () => {
        const armorsAndArmoredRigs = [...bodyArmors]

        armorsAndArmoredRigs.push(...armoredRigs)

        if (armorCheckboxValue === true) {
        const randomBodyArmor = bodyArmors[randomIndex(bodyArmors)]
        const randomChestRig = chestRigs[randomIndex(chestRigs)]
        setRandomBodyArmor(randomBodyArmor.shortName)
        setRandomBodyArmorImage(randomBodyArmor.image512pxLink)
        setArmorNameToDisplay(randomBodyArmor.shortName.replace('Default',''))

        setRandomChestRig(randomChestRig.shortName)
        setRandomChestRigImage(randomChestRig.image512pxLink)
        setChestRigNameToDisplay(randomChestRig.shortName)    
        return
        }
        const randomArmor = armorsAndArmoredRigs[randomIndex(armorsAndArmoredRigs)]
        // if armor is not an armored rig, also roll for a chest rig
        if (randomArmor && bodyArmors.includes(randomArmor)) {
            const randomChestRig = chestRigs[randomIndex(chestRigs)]
            setRandomBodyArmor(randomArmor.shortName)
            setRandomBodyArmorImage(randomArmor.image512pxLink)
            setArmorNameToDisplay(randomArmor.shortName.replace('Default',''))
            setRandomChestRig(randomChestRig.shortName)
            setRandomChestRigImage(randomChestRig.image512pxLink)
            setChestRigNameToDisplay(randomChestRig.shortName)
            return
        }
        setRandomBodyArmor(randomArmor.shortName)
        setRandomBodyArmorImage(randomArmor.image512pxLink)
        setArmorNameToDisplay(randomArmor.shortName.replace('Default',''))
        setRandomChestRig(null)
        setRandomChestRigImage(null)
        return
    }

    const rollRandomHeadwear = () => {
      const helmets = headwear.filter(item => item.properties.__typename === "ItemPropertiesHelmet")
      const compatibleHeadwear = headwear.filter(item => item.blocksHeadphones === false)  
      const compatibleHelmets = headwear.filter(item => {
          return item.properties.__typename === "ItemPropertiesHelmet" && item.blocksHeadphones === false
      })

      if (helmetCheckboxValue === true && headphoneBlockCheckboxValue === false) {
          const randomHelmet = helmets[randomIndex(helmets)]

          setRandomHeadwear(randomHelmet.name)
          setRandomHeadwearImage(randomHelmet.image512pxLink)
          setHeadwearNameToDisplay(randomHelmet.shortName)
          return

      } else if (helmetCheckboxValue === false && headphoneBlockCheckboxValue === true) {
          const randomCompatibleHeadwear = compatibleHeadwear[randomIndex(compatibleHeadwear)]

          setRandomHeadwear(randomCompatibleHeadwear.name)
          setRandomHeadwearImage(randomCompatibleHeadwear.image512pxLink)
          setHeadwearNameToDisplay(randomCompatibleHeadwear.shortName)
          return

      }   else if (headphoneBlockCheckboxValue === true && helmetCheckboxValue === true) {
          const randomCompatibleHelmet = compatibleHelmets[randomIndex(compatibleHelmets)]

          setRandomHeadwear(randomCompatibleHelmet.name)
          setRandomHeadwearImage(randomCompatibleHelmet.image512pxLink)
          setHeadwearNameToDisplay(randomCompatibleHelmet.shortName)
          return
      }
      const randomItem = headwear[randomIndex(headwear)]

      setRandomHeadwear(`${randomItem.name}`)
      setRandomHeadwearImage(randomItem.image512pxLink)
      setHeadwearNameToDisplay(randomItem.shortName)
  }

  const rollRandomHeadphones = () => {
    if (headphonesCheckboxValue) {
        const normalHeadphones = headphones.filter(item => !item.name.includes("RAC"))
        const randomHeadphones = normalHeadphones[randomIndex(normalHeadphones)]

        setRandomHeadphones(randomHeadphones.name)
        setRandomHeadphonesImage(randomHeadphones.image512pxLink)
        setHeadphonesNameToDisplay(randomHeadphones.shortName)
        return
    }
    const randomItem = headphones[randomIndex(headphones)]

    setRandomHeadphones(`${randomItem.name}`)
    setRandomHeadphonesImage(randomItem.image512pxLink)
    setHeadphonesNameToDisplay(randomItem.shortName)
  }

    return (
      <div className='character-container'>
        {isLoading ? <div className='loading-icon-container'>
          <p>Loading</p>
        </div>
          :
          <>  
                  <SettingsMenu
        helmetCheckboxValue={helmetCheckboxValue}
        setHelmetCheckboxValue={setHelmetCheckboxValue}
        setHeadphonesCheckboxValue={setHeadphonesCheckboxValue}
        setHeadphoneBlockCheckboxValue={setHeadphoneBlockCheckboxValue}
        setArmorCheckboxValue={setArmorCheckboxValue}

        rollRandomPistol={rollRandomPistol}
        rollRandomPrimary={rollRandomPrimary}
        rollRandomBodyarmor={rollRandomBodyarmor}
        rollRandomHeadwear={rollRandomHeadwear}
        rollRandomHeadphones={rollRandomHeadphones}
        rollRandomMap={rollRandomMap}
      ></SettingsMenu>
          <div className='character-wrapper'>
  <RenderMap
    randomMap={randomMap}
    randomMapName={randomMapName}
    mapImage={mapImage}
    rollRandomMap={rollRandomMap}
  ></RenderMap>
  <RenderRandomHeadwear
    randomHeadwear={randomHeadwear}
    randomHeadwearImage={randomHeadwearImage}
    headwearNameToDisplay={headwearNameToDisplay}
    rollRandomHeadwear={rollRandomHeadwear}
  />
  <RenderRandomHeadphones
    randomHeadphones={randomHeadphones}
    randomHeadphonesImage={randomHeadphonesImage}
    headphonesNameToDisplay={headphonesNameToDisplay}
    rollRandomHeadphones={rollRandomHeadphones}
  />
  <RenderRandomBodyArmor
    randomBodyArmor={randomBodyArmor}
    randomBodyArmorImage={randomBodyArmorImage}
    armorNameToDisplay={armorNameToDisplay}
    rollRandomBodyarmor={rollRandomBodyarmor}
  />
  <RenderRandomChestRig
    randomChestRig={randomChestRig}
    randomChestRigImage={randomChestRigImage}
    chestRigNameToDisplay={chestRigNameToDisplay}
  >
  </RenderRandomChestRig>
  <RenderRandomPrimary
    randomPrimary={randomPrimary}
    randomPrimaryImage={randomPrimaryImage}
    setRandomPrimaryImage={setRandomPrimaryImage}
    primaryNameToDisplay={primaryNameToDisplay}
    rollRandomPrimary={rollRandomPrimary}
  />
  <RenderRandomPistol 
    randomPistol={randomPistol}
    randomPistolImage={randomPistolImage}
    pistolNameToDisplay={pistolNameToDisplay}
    rollRandomPistol={rollRandomPistol}
    />
  </div>
  </>
      }
        </div>
    )
}