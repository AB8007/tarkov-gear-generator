import { useEffect, useState } from 'react';
import '../../Css/RenderRandomPistol.css';

import useItemsStore from '../../../store';
import { Tooltip } from 'react-tooltip';

export const RenderRandomPistol = () => {
  const randomizedSecondary = useItemsStore((state) => state.secondary);
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    setLoadingState(false);
  }, [randomizedSecondary.image]);

  const handleImageLoad = () => {
    setLoadingState(true);
  };

  return (
    <div className='pistol-container'>
      <div className='pistol-title-container'>Secondary</div>
      {randomizedSecondary.name ? (
        <>
          <a
            data-tooltip-id='itemTooltip'
            data-tooltip-content={randomizedSecondary.longName}
            data-tooltip-place='top'>
            <div className='pistol-icon-container'>
              {!loadingState && <div className='loading-animation'></div>}
              <Tooltip id='itemTooltip' />

              <img
                style={{ display: !loadingState ? 'none' : 'block' }}
                className='pistol-icon'
                src={randomizedSecondary.image}
                onLoad={handleImageLoad}
              />
            </div>
            {!loadingState ? (
              <div className='pistol-name-container'>Randomizing...</div>
            ) : (
              <div className='pistol-name-container'>
                {randomizedSecondary.name}
              </div>
            )}
          </a>
        </>
      ) : (
        <div className='no-pistol-to-show'>No Sidearm</div>
      )}
    </div>
  );
};
