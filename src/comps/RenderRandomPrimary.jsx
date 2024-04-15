import './css/RenderRandomPrimary.css'

export const RenderRandomPrimary = ({randomPrimary, randomPrimaryImage, primaryNameToDisplay, rollRandomPrimary}) => {


    return (
        <div className='primary-container'>
            <div className='primary-button-container'>
                <button className='primary-button' onClick={() => rollRandomPrimary()}>Randomize Primary Weapon</button>
            </div>
            {randomPrimary 
                ?
            <div>
                <div className='primary-icon-container'>
                    <img className='primary-icon' src={randomPrimaryImage}></img>
                </div>
                <div className='primary-name-container'>{primaryNameToDisplay}</div>
            </div>
                : <div className='no-primary-to-show'>A Random Primary Weapon</div>
            }
        </div>
    )
}