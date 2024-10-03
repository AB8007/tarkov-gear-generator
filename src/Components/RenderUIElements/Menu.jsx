import '../Css/SettingsMenu.css';
import dice from '/images/dice.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Menu = ({ refetch }) => {
  const [timeoutState, setTimeoutState] = useState(false);

  const randomizeAll = () => {
    refetch();
    setTimeout(() => {
      setTimeoutState(false);
    }, 1000);
    return;
  };

  return (
    <div className='settings-container-wrapper'>
      <h2>Settings</h2>
      <div className='settings-container'>
        <div className='settings-container-bottom'>
          {timeoutState ? (
            <button
              className='randomize-all-button'
              data-testid='randomizationButton'>
              Wait, Randomizing...
              <img src={dice} className='dice'></img>
            </button>
          ) : (
            <button
              className='randomize-all-button'
              onClick={randomizeAll}
              data-testid='randomizationButton'>
              Randomize everything!
              <img src={dice} className='dice'></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  refetch: PropTypes.func,
};
