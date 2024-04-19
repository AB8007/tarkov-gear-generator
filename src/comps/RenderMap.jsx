import { useEffect, useState } from 'react'
import './css/RenderMap.css'

export const RenderMap = ({ randomMap, randomMapName, mapImage, rollRandomMap}) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = mapImage
    }, [mapImage])

    return (
        <>
        <div className="random-map-container">
            <div className="map-button-container">
                <button className='random-map-button' onClick={() => rollRandomMap()}>Randomize Map</button>
            </div>
            {randomMap 
                ?
                <div>
                    <div className="map-image-container">
                        {!imageLoaded ? (
                            <div className='loading-animation'></div>
                        ) : (
                            <img src={mapImage} className='map-thumbnail'></img>
                        )}
                    </div>
                    <div className="map-name-container">
                        {!imageLoaded ? (
                       null 
                        ) : (
                            <p className='map-title'>{randomMapName}</p> 
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