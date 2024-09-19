import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Css/RenderSmallItem.css';

export const RenderSmallItem = ({ category, name, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const timeout = useSelector((state) => state.settings.randomizeAllTimeout);

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => {
      if (timeout === false) {
        setImageLoaded(true);
        return;
      }
    };
    img.src = image;
  }, [image, timeout]);

  return (
    <div className='small-item-container'>
      <div className='small-item-title-container'>{category}</div>
      {name ? (
        <>
          <div className='small-item-icon-container'>
            {!imageLoaded ? (
              <div className='icon-loading'>
                <div className='loading-animation'></div>
              </div>
            ) : (
              <>
                <img className='small-item-icon' src={image}></img>
              </>
            )}
          </div>
          <>
            {!imageLoaded ? (
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
