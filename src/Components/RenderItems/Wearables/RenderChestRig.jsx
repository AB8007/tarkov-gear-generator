import { useSelector } from 'react-redux';
import { RenderSmallItem } from './RenderSmallItem';

export const RenderChestRig = () => {
  const { randomizedChestrig } = useSelector((state) => state.chestrig);
  return (
    <>
      <RenderSmallItem
        category={'Chest Rig'}
        name={randomizedChestrig.name}
        image={randomizedChestrig.image}
      />
    </>
  );
};
