import { useEffect, useState } from 'react'
import './css/RenderRandomPistol.css'
import { useSelector } from 'react-redux'

export const RenderRandomPistol = ({ rollRandomPistol }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const randomSecondary = useSelector(state => state.secondary)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1500)
        }
        img.src = randomSecondary.randomSecondaryImage
    }, [randomSecondary])

    return (
        <div className='pistol-container'>
            <div className="pistol-button-container">
                <button className='pistol-button' onClick={() => rollRandomPistol()}>Sidearm</button>
            </div>
            {randomSecondary.randomSecondaryName
                ? 
                <div>
                    <div className="pistol-icon-container">
                    {!imageLoaded ? (
                        <div className='loading-animation'></div>
                            ) : (
                        <img className='pistol-icon' src={randomSecondary.randomSecondaryImage}></img>
                        )}
                    </div>
                    {!imageLoaded ? (
                            <div className="pistol-name-container">Randomizing...</div>
                        ) : (
                            <div className="pistol-name-container">{randomSecondary.randomSecondaryName}</div>
                        )}
                </div>
                : <div className="no-pistol-to-show">
                    No Sidearm
                </div>    
            }
        </div>
    )
}