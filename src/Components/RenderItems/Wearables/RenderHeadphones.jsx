import { useSelector } from 'react-redux';
import { RenderSmallItem } from './RenderSmallItem';

export const RenderHeadphones = () => {
  const headphones = useSelector((state) => state.headphones);
  return (
    <div className='headset-container'>
      <RenderSmallItem
        category={'Headset'}
        name={headphones.randomHeadphonesName}
        image={headphones.randomHeadphonesImage}
      />
    </div>
  );
};
