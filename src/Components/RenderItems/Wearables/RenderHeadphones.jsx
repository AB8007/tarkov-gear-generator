import { useSelector } from 'react-redux';
import { RenderSmallItem } from './RenderSmallItem';

export const RenderHeadphones = () => {
  const { randomizedHeadphones } = useSelector((state) => state.headphones);
  return (
    <div className='headset-container'>
      <RenderSmallItem
        category={'Headset'}
        name={randomizedHeadphones.name}
        image={randomizedHeadphones.image}
      />
    </div>
  );
};
