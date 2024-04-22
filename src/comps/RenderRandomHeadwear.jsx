import { useEffect, useState } from 'react'
import './css/RenderRandomHeadwear.css'
import { useSelector } from 'react-redux'

export const RenderRandomHeadwear = ({ rollRandomHeadwear }) => {
    const randomHeadwear = useSelector(state => state.headwear)

    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomHeadwear.randomHeadwearImage
    }, [randomHeadwear])

    return (
        <div className='headwear-container'>
            <div className='headwear-button-container'>
                <button className='headwear-button' onClick={() => rollRandomHeadwear()}>Randomize Headwear</button>
            </div>
        {randomHeadwear.randomHeadwearName 
            ?
            <div>
                <div className='helmet-icon-container'>
                {!imageLoaded ? (
                        <div className='loading-animation'></div>
                        ) : (
                            <img className='helmet-icon' src={randomHeadwear.randomHeadwearImage} width={100}></img>
                        )}
                </div>
                {!imageLoaded ? (
                <div className='headwear-name-container'>Randomizing...</div>
            ) : (
                <div className='headwear-name-container'>{randomHeadwear.randomHeadwearName }</div>
            )}
            </div>
            :
            <div className='no-headwear-to-show'>No Headwear</div>
        }
        </div>
    )
}