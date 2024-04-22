import { useEffect, useState } from 'react'
import './css/RenderRandomBodyArmor.css'
import { useSelector } from 'react-redux'

export const RenderRandomChestRig = () => {
    const [imageLoaded, setImageLoaded] = useState(false)

    const randomChestRig = useSelector(state => state.chestrig)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomChestRig.randomChestRigImage
    }, [randomChestRig])

    return (
        <div className='chestrig-container'>
            <div className="chestrig-title">Chest rig</div>
            {randomChestRig.randomChestRigName 
                ? 
                <div>
                    <div className="chestrig-icon-container">
                        {!imageLoaded ? (
                        <div className='loading-animation'></div>
                        ) : (
                            <img className='chestrig-icon' src={randomChestRig.randomChestRigImage}></img>
                        )}
                    </div>
                    {!imageLoaded ? (
                            <div className="chestrig-name-container">Randomizing...</div>
                        ) : (
                            <div className="chestrig-name-container">{randomChestRig.randomChestRigName }</div>
                        )}
                </div>
                : 
                <div className="chestrig-icon-container">No Chest Rig</div>
            }
        </div>
    )
}