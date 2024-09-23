import { useEffect } from 'react';
import { SettingsMenu } from '../RenderUIElements/SettingsMenu';
import { RenderMap } from '../RenderItems/Other/RenderMap';
import { useDispatch } from 'react-redux';
import { initializeHeadwear } from '../../reducers/headwearReducer';
import { initializeHeadphones } from '../../reducers/headphonesReducer';
import { initializePrimaries } from '../../reducers/primaryReducer';
import { initializeBodyarmors } from '../../reducers/bodyarmorReducer';
import { initializeChestrigs } from '../../reducers/chestrigReducer';
import { initializeMaps } from '../../reducers/mapReducer';
import { initializeSecondaries } from '../../reducers/secondaryReducer';
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../../queries';
import { Wearables } from '../RenderItems/Wearables/Wearables';
import { RenderWeapons } from '../RenderItems/Weapons/RenderWeapons';

export const MainComponent = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_DATA);

  useEffect(() => {
    if (
      data &&
      data.primaries &&
      data.secondaries &&
      data.headwear &&
      data.headphones &&
      data.bodyarmors &&
      data.chestrigs &&
      data.maps
    ) {
      dispatch(initializePrimaries(data.primaries));
      dispatch(initializeSecondaries(data.secondaries));
      dispatch(initializeHeadwear(data.headwear));
      dispatch(initializeBodyarmors(data.bodyarmors));
      dispatch(initializeChestrigs(data.chestrigs));
      dispatch(initializeHeadphones(data.headphones));
      dispatch(initializeMaps(data.maps));
    }
  }, [data, dispatch]);

  return (
    <div className='character-container'>
      {loading ? (
        <div className='loading-container'>
          Loading...
          <div className='loading-animation'></div>
        </div>
      ) : (
        <div className='main-container'>
          <SettingsMenu />
          <Wearables />
          <RenderWeapons />
          <div className='map-container'>
            <RenderMap />
          </div>
        </div>
      )}
      {error ? <div className='loading-container'>{error.message}</div> : null}
    </div>
  );
};
