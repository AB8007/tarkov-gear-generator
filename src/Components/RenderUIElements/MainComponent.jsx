import { Menu } from '../RenderUIElements/Menu';
import { RenderMap } from '../RenderItems/Other/RenderMap';
import { Wearables } from '../RenderItems/Wearables/Wearables';
import { RenderWeapons } from '../RenderItems/Weapons/RenderWeapons';
import { getItems } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import useItemsStore from '../../store';
import { useEffect } from 'react';

export const MainComponent = () => {
  const setItemsToState = useItemsStore((state) => state.setItems);
  const { data, loading, error, refetch } = useQuery({
    queryKey: ['randomItems'],
    queryFn: getItems,
  });

  useEffect(() => {
    if (data) {
      setItemsToState(data);
    }
  }, [data, setItemsToState]);

  return (
    <div className='character-container'>
      {loading ? (
        <div className='loading-container'>
          Loading...
          <div className='loading-animation'></div>
        </div>
      ) : (
        <div className='main-container'>
          <Menu refetch={refetch} />
          <Wearables />
          <RenderWeapons />
          <div className='map-container'></div>
        </div>
      )}
      {error ? <div className='loading-container'>{error.message}</div> : null}
    </div>
  );
};
