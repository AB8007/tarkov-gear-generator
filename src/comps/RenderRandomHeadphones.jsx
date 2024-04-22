import { useEffect, useState } from 'react'
import './css/RenderRandomHeadphones.css'
import { useSelector } from 'react-redux'

export const RenderRandomHeadphones = ({ rollRandomHeadphones }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const headphones = useSelector(state => state.headphones)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = headphones.randomHeadphonesImage
    }, [headphones.randomHeadphonesImage])

    return (
        <div className='headphones-container'>
            <div className='headphones-button-container'>
                <button className='headphones-button' onClick={() => rollRandomHeadphones()}>Randomize Headset</button>
            </div>
        {headphones.randomHeadphonesName
            ?
        <div>
            <div className='headphones-icon-container'>
            {!imageLoaded ? (
                    <div className='loading-animation'></div>
                ) : (
                    <img className='headphones-icon' src={headphones.randomHeadphonesImage} width={100}></img>
                )}
            </div>
            {!imageLoaded ? (
                <div className='headphones-name-container'>Randomizing...</div>
            ) : (
                <div className='headphones-name-container'>{headphones.randomHeadphonesName}</div>
            )}
        </div>
            : <div className='no-headphones-to-show'>No Headset</div>
        }
        </div>
    )
}