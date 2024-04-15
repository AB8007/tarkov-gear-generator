import './css/RenderRandomHeadphones.css'

export const RenderRandomHeadphones = ({randomHeadphones, randomHeadphonesImage, headphonesNameToDisplay, rollRandomHeadphones}) => {




    return (
        <div className='headphones-container'>
            <div className='headphones-button-container'>
                <button className='headphones-button' onClick={() => rollRandomHeadphones()}>Randomize Headset</button>
            </div>
        {randomHeadphones 
            ?
        <div>
            <div className='headphones-icon-container'>
                <img className='headphones-icon' src={randomHeadphonesImage} width={100}></img>
            </div>
                <div className='headphones-name-container'>{headphonesNameToDisplay}</div>
        </div>
            : <div className='no-headphones-to-show'>A Random Headset</div>
        }
        </div>
    )
}