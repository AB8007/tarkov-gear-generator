import { useEffect, useState } from 'react';
import '../../Css/RenderSmallItem.css';
import PropTypes from 'prop-types';

export const RenderSmallItem = ({ category, name, image }) => {
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    setLoadingState(false);
  }, [image]);
  const handleImageLoad = () => {
    setLoadingState(true);
  };
  return (
    <div className='small-item-container'>
      <div className='small-item-title-container'>{category}</div>
      {name ? (
        <>
          <div className='small-item-icon-container'>
            {!loadingState && (
              <div className='icon-loading'>
                <div className='loading-animation'></div>
              </div>
            )}
            <img
              style={{ display: !loadingState ? 'none' : 'block' }}
              className='small-item-icon'
              src={image}
              onLoad={handleImageLoad}
            />
          </div>
          <>
            {!loadingState ? (
              <>
                <div className='small-item-name-container'>Randomizing...</div>
              </>
            ) : (
              <>
                <div className='small-item-name-container'>{name}</div>
              </>
            )}
          </>
        </>
      ) : (
        <div className='no-small-item-to-show'>No {category}</div>
      )}
    </div>
  );
};

RenderSmallItem.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
};
