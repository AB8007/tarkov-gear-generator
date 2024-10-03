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
          <a
            data-tooltip-id='itemTooltip'
            data-tooltip-content={randomizedPrimary.longName}
            data-tooltip-place='top'>
            <div className='primary-icon-container'>
              {!loadingState && <div className='loading-animation'></div>}

              <img
                style={{ display: !loadingState ? 'none' : 'block' }}
                className='primary-icon'
                src={randomizedPrimary.image}
                onLoad={handleImageLoad}
              />
            </div>
            {!loadingState ? (
              <div className='primary-name-container'>Randomizing...</div>
            ) : (
              <div className='primary-name-container'>
                {randomizedPrimary.name}
              </div>
            )}
          </a>
        </>
      ) : (
        <div className='no-primary-to-show'>No Primary Weapon</div>
      )}
    </div>
  );
};
