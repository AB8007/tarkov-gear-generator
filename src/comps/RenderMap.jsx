import { useEffect, useState } from 'react'
import './css/RenderMap.css'
import { useSelector } from 'react-redux'

export const RenderMap = ({ rollRandomMap }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const randomMap = useSelector(state => state.map)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1500)
        }
        img.src = randomMap.randomMapImage
    }, [randomMap.randomMapImage])

    return (
        <>
        <div className="random-map-container">
            <div className="map-button-container">
                <button className='random-map-button' onClick={() => rollRandomMap()}>Location</button>
            </div>
            {randomMap.randomMapName
                ?
                <div>
                    <div className="map-image-container">
                        {!imageLoaded ? (
                            <div className='loading-animation'></div>
                        ) : (
                            <img src={randomMap.randomMapImage} className='map-thumbnail'></img>
                        )}
                    </div>
                    <div className="map-name-container">
                        {!imageLoaded ? (
                       null 
                        ) : (
                            <p className='map-title'>{randomMap.randomMapName}</p> 
                        )}
                    </div>
                </div>
                :
                <div className='no-map-to-show'>No Location</div>
            }
        </div>
        </>
    )
}