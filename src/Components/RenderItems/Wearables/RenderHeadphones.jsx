import { RenderSmallItem } from './RenderSmallItem';
import useItemsStore from '../../../store';

export const RenderHeadphones = () => {
  const randomizedHeadphones = useItemsStore((state) => state.headPhones);
  console.log(randomizedHeadphones);
  return (
    <div className='headset-container'>
      <RenderSmallItem
        category={'headPhones'}
        name={randomizedHeadphones.name}
        image={randomizedHeadphones.image}
      />
    </div>
  );
};
