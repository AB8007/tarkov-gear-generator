import { useSelector } from 'react-redux';
import { RenderSmallItem } from './RenderSmallItem';
export const RenderBodyarmor = () => {
  const { randomizedBodyarmor } = useSelector((state) => state.bodyarmor);

  return (
    <>
      <RenderSmallItem
        category={'Body Armor'}
        name={randomizedBodyarmor.name}
        image={randomizedBodyarmor.image}
      />
    </>
  );
};
