import './css/RenderRandomBodyArmor.css'

export const RenderRandomBodyArmor = ({randomBodyArmor, randomBodyArmorImage, armorNameToDisplay, rollRandomBodyarmor}) => {
    return (
        <div>
        <div className="bodyarmor-container">
            <div className="bodyarmor-button-container">
                <button className='bodyarmor-button' onClick={() => rollRandomBodyarmor()}>Randomize Bodyarmor</button>

            </div>
            </div>
            {randomBodyArmor 
                ? 
                <div>
                    <div className="bodyarmor-icon-container">
                        <img className='bodyarmor-icon' src={randomBodyArmorImage}></img>
                    </div>
                    <div className="bodyarmor-name-container">{armorNameToDisplay}</div>
                </div>
                :
                <div>
                <div className='no-bodyarmor-to-show'>No Bodyarmor</div>
                </div>
            }

        </div>
    )
}