import { useEffect, useState } from 'react';
import '../../Css/RenderRandomPistol.css';

import useItemsStore from '../../../store';

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
          <div className='pistol-icon-container'>
            {!loadingState && <div className='loading-animation'></div>}
            <img
              style={{ display: !loadingState ? 'none' : 'block' }}
              className='pistol-icon'
              src={randomizedSecondary.image}
              onLoad={handleImageLoad}></img>
          </div>
          {!loadingState ? (
            <div className='pistol-name-container'>Randomizing...</div>
          ) : (
            <div className='pistol-name-container'>
              {randomizedSecondary.name}
            </div>
          )}
        </>
      ) : (
        <div className='no-pistol-to-show'>No Sidearm</div>
      )}
    </div>
  );
};
