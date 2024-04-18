import { useEffect, useState } from 'react'
import './css/RenderRandomBodyArmor.css'

export const RenderRandomBodyArmor = ({randomBodyArmor, randomBodyArmorImage, armorNameToDisplay, rollRandomBodyarmor }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomBodyArmorImage
    }, [randomBodyArmorImage])

    return (
        <div>
        <div className="bodyarmor-container">
            <div className="bodyarmor-button-container">
                <button className='bodyarmor-button' onClick={() => rollRandomBodyarmor()}>Randomize Bodyarmor</button>
            </div>
            </div>
            {randomBodyArmor 
                ? 
                <div>
                    <div className="bodyarmor-icon-container">
                    {!imageLoaded ? (
                        <div className='loading-animation'></div>
                        ) : (
                            <img className='bodyarmor-icon' src={randomBodyArmorImage}></img>
                        )}
                    </div>
                    {!imageLoaded ? (
                        <div className="bodyarmor-name-container">Randomizing...</div>
                        ) : (
                            <div className="bodyarmor-name-container">{armorNameToDisplay}</div>
                        )}
                </div>
                :
                <div>
                <div className='no-bodyarmor-to-show'>No Bodyarmor</div>
                </div>
            }

        </div>
    )
}