import { RenderSmallItem } from './RenderSmallItem';
import useItemsStore from '../../../store';

export const RenderChestRig = () => {
  const randomizedChestrig = useItemsStore((state) => state.chestRig);
  return (
    <>
      {randomizedChestrig && (
        <RenderSmallItem
          category={'chestRig'}
          name={randomizedChestrig.name}
          image={randomizedChestrig.image}
        />
      )}
    </>
  );
};
