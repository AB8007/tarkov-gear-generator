import './css/RenderMap.css'

export const RenderMap = ({ randomMap, randomMapName, mapImage, rollRandomMap}) => {

    return (
        <div className="random-map-container">
            <div className="map-button-container">
                <button className='random-map-button' onClick={() => rollRandomMap()}>Randomize Map</button>
            </div>
            {randomMap 
                ?
                <div>
                    <div className="map-image-container">
                        {mapImage ?
                            <img src={mapImage} className='map-thumbnail'></img>
                            : <div>aaa</div>
                        }



                    </div>
                    <div className="map-name-container">
                       <p className='map-title'>{randomMapName}</p> 
                    </div>
                </div>
                :
                <div className='no-map-to-show'>A Random Location</div>
            }
        </div>
    )
}