import './Info.css';

export const Info = () => {
  return (
    <>
      <div className='info-main-container'>
        <div className='content-box'>
          <h2>Note:</h2>
          <p>
            Some conflicting headwear combinations (e.g. SSh-68 helmet and M32
            headset) are not filtered by the app because the API does not
            provide data for that.
          </p>
        </div>
        <div className='content-box'>
          <h2>API by:</h2>
          <a href='https://tarkov.dev/api/' target='_blank'>
            Tarkov.dev
          </a>
        </div>
      </div>
    </>
  );
};
