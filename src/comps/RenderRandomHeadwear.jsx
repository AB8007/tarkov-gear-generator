import { useEffect, useState } from 'react'
import './css/RenderRandomHeadwear.css'

export const RenderRandomHeadwear = ({randomHeadwear, randomHeadwearImage, headwearNameToDisplay, rollRandomHeadwear }) => {

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomHeadwearImage
    }, [randomHeadwearImage])

    return (
        <div className='headwear-container'>
            <div className='headwear-button-container'>
                <button className='headwear-button' onClick={() => rollRandomHeadwear()}>Randomize Headwear</button>
            </div>
        {randomHeadwear 
            ?
            <div>
                <div className='helmet-icon-container'>
                {!imageLoaded ? (
                        <div className='loading-animation'></div>
                        ) : (
                            <img className='helmet-icon' src={randomHeadwearImage} width={100}></img>
                        )}
                </div>
                {!imageLoaded ? (
                <div className='headwear-name-container'>Randomizing...</div>
            ) : (
                <div className='headwear-name-container'>{headwearNameToDisplay}</div>
            )}
            </div>
            :
            <div className='no-headwear-to-show'>No Headwear</div>
        }
        </div>
    )
}