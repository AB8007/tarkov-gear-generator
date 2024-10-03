import { RenderSmallItem } from './RenderSmallItem';
import useItemsStore from '../../../store';
export const RenderBodyarmor = () => {
  const randomizedBodyarmor = useItemsStore((state) => state.bodyArmor);
  console.log(randomizedBodyarmor);
  return (
    <>
      {randomizedBodyarmor && (
        <RenderSmallItem
          category={'bodyArmor'}
          name={randomizedBodyarmor.name}
          image={randomizedBodyarmor.image}
        />
      )}
    </>
  );
};
