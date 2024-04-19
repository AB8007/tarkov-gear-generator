import { useEffect, useState } from 'react'
import './css/RenderRandomPistol.css'

export const RenderRandomPistol = ({ randomPistol, randomPistolImage, pistolNameToDisplay, rollRandomPistol }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomPistolImage
    }, [randomPistolImage])

    return (
        <div className='pistol-container'>
            <div className="pistol-button-container">
                <button className='pistol-button' onClick={() => rollRandomPistol()}>Randomize Sidearm</button>
            </div>
            {randomPistol 
                ? 
                <div>
                    <div className="pistol-icon-container">
                    {!imageLoaded ? (
                        <div className='loading-animation'></div>
                            ) : (
                        <img className='pistol-icon' src={randomPistolImage}></img>
                        )}
                    </div>
                    {!imageLoaded ? (
                            <div className="pistol-name-container">Randomizing...</div>
                        ) : (
                            <div className="pistol-name-container">{pistolNameToDisplay}</div>
                        )}
                </div>
                : <div className="no-pistol-to-show">
                    No Sidearm
                </div>    
            }
        </div>
    )
}