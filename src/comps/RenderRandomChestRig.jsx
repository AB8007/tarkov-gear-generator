import { useEffect, useState } from 'react'
import './css/RenderRandomBodyArmor.css'

export const RenderRandomChestRig = ({ randomChestRig, randomChestRigImage, chestRigNameToDisplay }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomChestRigImage
    }, [randomChestRigImage])

    return (
        <div>
            <div className="chestrig-title">Chest rig</div>
            {randomChestRig 
                ? 
                <div>
                    <div className="chestrig-icon-container">
                        {!imageLoaded ? (
                        <div className='loading-animation'></div>
                        ) : (
                            <img className='chestrig-icon' src={randomChestRigImage}></img>
                        )}
                    </div>
                    {!imageLoaded ? (
                            <div className="chestrig-name-container">Randomizing...</div>
                        ) : (
                            <div className="chestrig-name-container">{chestRigNameToDisplay}</div>
                        )}
                </div>
                : 
                <div className="armoredrig-chestrig-info">No Chest Rig</div>
            }
        </div>
    )
}