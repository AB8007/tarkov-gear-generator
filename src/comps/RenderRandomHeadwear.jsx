import './css/RenderRandomHeadwear.css'

export const RenderRandomHeadwear = ({randomHeadwear, randomHeadwearImage, headwearNameToDisplay, rollRandomHeadwear }) => {

    return (
        <div className='headwear-container'>
            <div className='headwear-button-container'>
                <button className='headwear-button' onClick={() => rollRandomHeadwear()}>Randomize Headwear</button>
            </div>
        {randomHeadwear 
            ?
            <div>
                <div className='helmet-icon-container'>
                    <img className='helmet-icon' src={randomHeadwearImage} width={100}></img>
                </div>
                <div className='headwear-name-container'>{headwearNameToDisplay}</div>
            </div>
            :
            <div className='no-headwear-to-show'>A Random Headwear</div>
        }
        </div>
    )
}