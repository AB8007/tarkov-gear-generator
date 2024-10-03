import { useEffect, useState } from 'react';
import '../../Css/RenderMap.css';
import useItemsStore from '../../../store';

export const RenderMap = () => {
  const [loadingState, setLoadingState] = useState(false);
  const randomMap = useItemsStore((state) => state.map);
  useEffect(() => {
    setLoadingState(false);
  }, [randomMap.mapId]);

  const handleImageLoad = () => {
    setLoadingState(true);
  };
  console.log(randomMap.name, randomMap.mapId);

  return (
    <>
      <div className='random-map-container'>
        <div className='map-title-container'>Location</div>
        {randomMap.name ? (
          <div>
            <div className='map-image-container'>
              {!loadingState && <div className='loading-animation'></div>}
              <img
                src={`/images/maps/${randomMap.mapId}.png`}
                className='map-thumbnail'
                onLoad={handleImageLoad}></img>
            </div>
            <div className='map-name-container'>
              {!loadingState ? null : (
                <p className='map-title'>{randomMap.name}</p>
              )}
            </div>
          </div>
        ) : (
          <div className='no-map-to-show'>No Location</div>
        )}
      </div>
    </>
  );
};
