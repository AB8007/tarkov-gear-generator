import { RenderSmallItem } from './RenderSmallItem';
import useItemsStore from '../../../store';

export const RenderHeadphones = () => {
  const randomizedHeadphones = useItemsStore((state) => state.headPhones);
  console.log(randomizedHeadphones);
  return (
    <div className='headset-container'>
      <RenderSmallItem
        category={'headPhones'}
        longName={randomizedHeadphones.longName}
        name={randomizedHeadphones.name}
        image={randomizedHeadphones.image}
      />
    </div>
  );
};
