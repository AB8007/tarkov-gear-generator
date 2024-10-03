import { RenderSmallItem } from './RenderSmallItem';
import useItemsStore from '../../../store';
export const RenderBodyarmor = () => {
  const randomizedBodyarmor = useItemsStore((state) => state.bodyArmor);

  return (
    <>
      {randomizedBodyarmor && (
        <RenderSmallItem
          category={'bodyArmor'}
          longName={randomizedBodyarmor.longName}
          name={randomizedBodyarmor.name}
          image={randomizedBodyarmor.image}
        />
      )}
    </>
  );
};
