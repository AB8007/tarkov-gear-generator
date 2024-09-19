import { useSelector } from 'react-redux';
import { RenderSmallItem } from './RenderSmallItem';

export const RenderHeadwear = () => {
  const { randomizedHeadwear } = useSelector((state) => state.headwear);
  return (
    <div className='headwear-container'>
      <RenderSmallItem
        category={'Headwear'}
        name={randomizedHeadwear.name}
        image={randomizedHeadwear.image}
      />
    </div>
  );
};
