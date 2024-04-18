import { useEffect, useState } from 'react'
import './css/RenderRandomPrimary.css'

export const RenderRandomPrimary = ({randomPrimary, randomPrimaryImage, primaryNameToDisplay, rollRandomPrimary }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomPrimaryImage
    }, [randomPrimaryImage])


    return (
        <div className='primary-container'>
            <div className='primary-button-container'>
                <button className='primary-button' onClick={() => rollRandomPrimary()}>Randomize Primary Weapon</button>
            </div>
            {randomPrimary 
                ?
            <div>
                <div className='primary-icon-container'>
                {!imageLoaded ? (
                    <div className='loading-animation' ></div>
                    ) : (
                    <img className='primary-icon' src={randomPrimaryImage}></img>  
                    )}
                </div>
                {!imageLoaded ? (
                    <div className='primary-name-container'>Randomizing...</div>
                ) : (
                    <div className='primary-name-container'>{primaryNameToDisplay}</div>
                )}
            </div>
                : <div className='no-primary-to-show'>No Primary Weapon</div>
            }
        </div>
    )
}