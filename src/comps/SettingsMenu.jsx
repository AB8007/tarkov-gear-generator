import './css/SettingsMenu.css'
import dice from '/images/dice.svg'
import { useState } from 'react'

export const SettingsMenu = ({ setHelmetCheckboxValue, setHeadphonesCheckboxValue, setHeadphoneBlockCheckboxValue, setArmorCheckboxValue, rollRandomPistol, rollRandomPrimary, rollRandomBodyarmor, rollRandomHeadwear, rollRandomHeadphones, rollRandomMap}) => {

    const handleHelmetCheckbox = () => {
        setHelmetCheckboxValue(prevState => !prevState)
    }

    const handleHeadphonesCheckbox = () => {
        setHeadphonesCheckboxValue(prevState => !prevState)
    }

    const handleHeadphoneBlockCheckbox = () => {
        setHeadphoneBlockCheckboxValue(prevState => !prevState)
    }

    const handleArmorCheckboxValue = () => {
        setArmorCheckboxValue(prevState => !prevState)
    }

    const randomizeAll = () => {
        setTimeout(() => {
            rollRandomPistol()
            rollRandomPrimary()
            rollRandomBodyarmor()
            rollRandomHeadwear()
            rollRandomHeadphones()
            rollRandomMap()
        }, 100)
        return
    }

    return (
        <div className='settings-container-wrapper'>
            <h2>Settings</h2>
            <div className='settings-container'>
                <div className='settings-container-top'>
                    <div className='settings-left'>
                        <div className='checkbox-container'>Exclude unarmored headwear:  
                            <input type='checkbox' onChange={handleHelmetCheckbox}></input>
                        </div>
                    </div>
                    <div className='settings-right'>
                        <div className='checkbox-container'>Exclude RAC-headset (FAST-MT): 
                            <input type='checkbox' onChange={handleHeadphonesCheckbox}></input>
                        </div>
                    </div>
                    </div>
                    <div className='settings-container-middle'>
                    <div className='settings-left'>
                        <div className='checkbox-container'>Ensure headset compatibility
                            <input type='checkbox' onChange={handleHeadphoneBlockCheckbox}></input>
                        </div>
                    </div>
                    <div className='settings-right'>
                        <div className='checkbox-container'>Exclude armored rigs:
                            <input type='checkbox' onChange={handleArmorCheckboxValue}></input>
                        </div>
                    </div>
                    </div>
                    <div className='settings-container-bottom'>
                        <button className='randomize-all-button' onClick={randomizeAll}>Randomize everything!
                            <img src={dice} className='dice'></img>
                        </button>
                    </div>
                </div>
        </div>
    )
}