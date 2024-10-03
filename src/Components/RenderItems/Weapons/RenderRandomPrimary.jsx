import { useEffect, useState } from 'react';
import '../../Css/RenderRandomPrimary.css';
import useItemsStore from '../../../store';

export const RenderRandomPrimary = () => {
  const randomizedPrimary = useItemsStore((state) => state.primary);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(false);
  }, [randomizedPrimary.image]);

  const handleImageLoad = () => {
    setLoadingState(true);
  };
  console.log('state:', loadingState);
  return (
    <div className='primary-container'>
      <div className='primary-title-container'>Primary</div>
      {randomizedPrimary.name ? (
        <>
          <div className='primary-icon-container'>
            {!loadingState && <div className='loading-animation'></div>}
            <img
              style={{ display: !loadingState ? 'none' : 'block' }}
              className='primary-icon'
              src={randomizedPrimary.image}
              onLoad={handleImageLoad}></img>
          </div>
          {!loadingState ? (
            <div className='primary-name-container'>Randomizing...</div>
          ) : (
            <div className='primary-name-container'>
              {randomizedPrimary.name}
            </div>
          )}
        </>
      ) : (
        <div className='no-primary-to-show'>No Primary Weapon</div>
      )}
    </div>
  );
};
