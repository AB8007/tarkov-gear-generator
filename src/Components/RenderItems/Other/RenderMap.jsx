import { useEffect, useState } from 'react';
import '../../Css/RenderMap.css';
import { useSelector } from 'react-redux';

export const RenderMap = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const timeout = useSelector((state) => state.settings.randomizeAllTimeout);
  const { randomMap } = useSelector((state) => state.map);
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => {
      if (timeout === false) {
        setImageLoaded(true);
        return;
      }
    };
    img.src = randomMap.image;
  }, [randomMap.image, timeout]);

  return (
    <>
      <div className='random-map-container'>
        <div className='map-title-container'>Location</div>
        {randomMap.name ? (
          <div>
            <div className='map-image-container'>
              {!imageLoaded ? (
                <div className='loading-animation'></div>
              ) : (
                <img src={randomMap.image} className='map-thumbnail'></img>
              )}
            </div>
            <div className='map-name-container'>
              {!imageLoaded ? null : (
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
