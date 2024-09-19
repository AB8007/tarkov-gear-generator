import { useEffect, useState } from 'react';
import '../../Css/RenderRandomPrimary.css';
import { useSelector } from 'react-redux';

export const RenderRandomPrimary = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const timeout = useSelector((state) => state.settings.randomizeAllTimeout);
  const { randomizedPrimary } = useSelector((state) => state.primary);
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => {
      if (timeout === false) {
        setImageLoaded(true);
        return;
      }
    };
    img.src = randomizedPrimary.image;
  }, [randomizedPrimary, timeout]);

  return (
    <div className='primary-container'>
      <div className='primary-title-container'>Primary</div>
      {randomizedPrimary.name ? (
        <div>
          <div className='primary-icon-container'>
            {!imageLoaded ? (
              <div className='loading-animation'></div>
            ) : (
              <img className='primary-icon' src={randomizedPrimary.image}></img>
            )}
          </div>
          {!imageLoaded ? (
            <div className='primary-name-container'>Randomizing...</div>
          ) : (
            <div className='primary-name-container'>
              {randomizedPrimary.name}
            </div>
          )}
        </div>
      ) : (
        <div className='no-primary-to-show'>No Primary Weapon</div>
      )}
    </div>
  );
};
