import './css/RenderRandomPistol.css'

export const RenderRandomPistol = ({ randomPistol, randomPistolImage, pistolNameToDisplay, rollRandomPistol }) => {

    return (
        <div className="pistol-container">
            <div className="pistol-button-container">
                <button className='pistol-button' onClick={() => rollRandomPistol()}>Randomize Sidearm</button>
            </div>
            {randomPistol 
                ? 
                <div>
                    <div className="pistol-icon-container">
                        <img className='pistol-icon' src={randomPistolImage}></img>
                    </div>
                    <div className="pistol-name-container">{pistolNameToDisplay}</div>
                </div>
                : <div className="no-pistol-to-show">
                    A Random Sidearm
                </div>    
            }
        </div>
    )
}