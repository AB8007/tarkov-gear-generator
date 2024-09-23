import '../Css/Titlebar.css';
import { Link } from 'react-router-dom';

export const Titlebar = () => {
  return (
    <div className='bar-container'>
      <div className='nav-container'>
        <div className='logo-wrapper'>
          <div className='logo-container'>
            <Link className='logo-text' to='/' data-testid='homeLink'>
              Random Raid Generator
            </Link>
          </div>
        </div>
        <div className='link-wrapper'>
          <Link to='/info' className='link-text' data-testid='infoLink'>
            Info
          </Link>
        </div>
      </div>
    </div>
  );
};
