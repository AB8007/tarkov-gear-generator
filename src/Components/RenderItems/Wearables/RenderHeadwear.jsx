import { useSelector } from 'react-redux';
import { RenderSmallItem } from './RenderSmallItem';

export const RenderHeadwear = () => {
  const headwear = useSelector((state) => state.headwear);
  return (
    <div className='headwear-container'>
      <RenderSmallItem
        category={'Headwear'}
        name={headwear.randomHeadwearName}
        image={headwear.randomHeadwearImage}
      />
    </div>
  );
};
