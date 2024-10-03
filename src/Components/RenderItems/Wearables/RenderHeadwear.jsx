import { RenderSmallItem } from './RenderSmallItem';
import useItemsStore from '../../../store';

export const RenderHeadwear = () => {
  const randomizedHeadwear = useItemsStore((state) => state.headWear);
  return (
    <div className='headwear-container'>
      {randomizedHeadwear && (
        <RenderSmallItem
          category={'headWear'}
          longName={randomizedHeadwear.longName}
          name={randomizedHeadwear.name}
          image={randomizedHeadwear.image}
        />
      )}
    </div>
  );
};
