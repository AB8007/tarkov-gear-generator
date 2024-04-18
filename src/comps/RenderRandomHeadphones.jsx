import { useEffect, useState } from 'react'
import './css/RenderRandomHeadphones.css'

export const RenderRandomHeadphones = ({randomHeadphones, randomHeadphonesImage, headphonesNameToDisplay, rollRandomHeadphones }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomHeadphonesImage
    }, [randomHeadphonesImage])

    return (
        <div className='headphones-container'>
            <div className='headphones-button-container'>
                <button className='headphones-button' onClick={() => rollRandomHeadphones()}>Randomize Headset</button>
            </div>
        {randomHeadphones 
            ?
        <div>
            <div className='headphones-icon-container'>
            {!imageLoaded ? (
                    <div className='loading-animation'></div>
                ) : (
                    <img className='headphones-icon' src={randomHeadphonesImage} width={100}></img>
                )}
            </div>
            {!imageLoaded ? (
                <div className='headphones-name-container'>Randomizing...</div>
            ) : (
                <div className='headphones-name-container'>{headphonesNameToDisplay}</div>
            )}
        </div>
            : <div className='no-headphones-to-show'>No Headset</div>
        }
        </div>
    )
}