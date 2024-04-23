import { useEffect, useState } from 'react'
import './css/RenderRandomPrimary.css'
import { useSelector } from 'react-redux'

export const RenderRandomPrimary = ({ rollRandomPrimary }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const randomPrimary = useSelector(state => state.primary)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1500)
        }
        img.src = randomPrimary.randomPrimaryImage
    }, [randomPrimary])

    return (
        <div className='primary-container'>
            <div className='primary-button-container'>
                <button className='primary-button' onClick={() => rollRandomPrimary()}>Primary Weapon</button>
            </div>
            {randomPrimary.randomPrimaryName
                ?
                <div>
                <div className='primary-icon-container'>
                {!imageLoaded ? (
                    <div className='loading-animation' ></div>
                    ) : (
                    <img className='primary-icon' src={randomPrimary.randomPrimaryImage}></img>  
                    )}
                 </div>
                {!imageLoaded ? (
                    <div className='primary-name-container'>Randomizing...</div>
                ) : (
                    <div className='primary-name-container'>{randomPrimary.randomPrimaryName}</div>
                )}
                </div>
                : <div className='no-primary-to-show'>No Primary Weapon</div>
            }
        </div>
    )
}