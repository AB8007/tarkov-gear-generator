import React, { useEffect, useState } from 'react';
import { SettingsMenu } from './SettingsMenu'
import { RenderMap } from './RenderMap'
import { useDispatch } from 'react-redux';
import { initializeHeadwear } from '../reducers/headwearReducer';
import { initializeHeadphones } from '../reducers/headphonesReducer';
import { initializePrimaries } from '../reducers/primaryReducer';
import { initializeBodyarmors } from '../reducers/bodyarmorReducer';
import { initializeChestrigs} from '../reducers/chestrigReducer';
import { initializeMaps } from '../reducers/mapReducer';
import { initializeSecondaries } from '../reducers/secondaryReducer';
import { RenderWeapons } from './RenderWeapons';
import { Wearables } from './Wearables';

export const MainComponent = () => {
    const dispatch = useDispatch()

    const [ isLoading, setIsLoading ] = useState(true) 

      useEffect(() => {
        dispatch(initializeBodyarmors())
        dispatch(initializeChestrigs())
        dispatch(initializeHeadwear())
        dispatch(initializeHeadphones())
        dispatch(initializeSecondaries())
        dispatch(initializeMaps())
        dispatch(initializePrimaries())
        setIsLoading(false)
      }, [])
        
    return (
      <div className='character-container'>
        {isLoading ? 
        <div className='loading-container'>
          Loading...
          <div className='loading-animation'></div>
        </div>
          :
      <div className='main-container'>  
        <SettingsMenu/>
          <img className='character-background' src='/images/character2.png'></img>
          <Wearables/>
          <RenderWeapons/>
        <div className='map-container'>
          <RenderMap/>
        </div>
      </div>
      }
    </div>
    )
}