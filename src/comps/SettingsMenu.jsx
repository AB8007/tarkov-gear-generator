import { useDispatch, useSelector } from 'react-redux'
import './css/SettingsMenu.css'
import dice from '/images/dice.svg'
import { changeForceArmoredRigsOut, changeForceHeadsetsFit, setRandomizeAllTimeout } from '../reducers/settingsReducer'


export const SettingsMenu = ({ rollRandomPistol, rollRandomPrimary, rollRandomBodyarmor, rollRandomHeadwear, rollRandomHeadphones, rollRandomMap}) => {
    const currentState = useSelector((state) => state.settings)
    const dispatch = useDispatch()

    const handleHeadphoneBlockCheckbox = () => {
        const newState = !currentState.forceHeadsetsFit
        dispatch(changeForceHeadsetsFit(newState))
    }

    const handleArmorCheckboxValue = () => {
        const newState = !currentState.forceArmoredRigsOut
        dispatch(changeForceArmoredRigsOut(newState))
    }

    const randomizeAll = () => {
        if (currentState.randomizeAllTimeout === false) {
            dispatch(setRandomizeAllTimeout(true))

            rollRandomPistol()
            rollRandomPrimary()
            rollRandomBodyarmor()
            rollRandomHeadwear()
            rollRandomHeadphones()
            rollRandomMap()
        }

        setTimeout(() => {
            dispatch(setRandomizeAllTimeout(false))
        }, 1000)
        return
    }

    return (
        <div className='settings-container-wrapper'>
            <h2>Settings</h2>
            <div className='settings-container'>
                    <div className='settings-container-middle'>
                    <div className='settings-left'>
                        <div className='checkbox-container'>Ensure headset compatibility
                            <input type='checkbox' onChange={handleHeadphoneBlockCheckbox}></input>
                        </div>
                    </div>
                    <div className='settings-left'>
                        <div className='checkbox-container'>Exclude armored rigs    
                            <input type='checkbox' onChange={handleArmorCheckboxValue}></input>
                        </div>
                    </div>
                    </div>
                    <div className='settings-container-bottom'>
                        {currentState.randomizeAllTimeout ? (
                            <button className='randomize-all-button'>Wait, Randomizing...
                            <img src={dice} className='dice'></img>
                            </button>
                        ) : (                        <button className='randomize-all-button' onClick={randomizeAll}>Randomize everything!
                        <img src={dice} className='dice'></img>
                    </button>)}
                    </div>
                </div>
        </div>
    )
}