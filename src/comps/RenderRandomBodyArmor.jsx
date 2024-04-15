import './css/RenderRandomBodyArmor.css'

export const RenderRandomBodyArmor = ({randomBodyArmor, randomBodyArmorImage, armorNameToDisplay, randomChestRig, randomChestRigImage, chestRigNameToDisplay, rollRandomBodyarmor}) => {
    return (
        <div className="bodyarmor-container">
            <div className="bodyarmor-button-container">
                <button className='bodyarmor-button' onClick={() => rollRandomBodyarmor()}>Randomize Bodyarmor</button>
                <div className="chestrig-title">Chest rig</div>
            </div>

            {randomBodyArmor 
                ? 
                <div>
                    <div className="bodyarmor-icon-container">
                        <img className='bodyarmor-icon' src={randomBodyArmorImage}></img>
                    </div>
                    {randomChestRig 
                        ? 
                        <div>
                            <div className="chestrig-icon-container">
                                <img className='chestrig-icon' src={randomChestRigImage}></img>
                            </div>
                            <div className="chestrig-name-container">{chestRigNameToDisplay}</div>
                        </div>
                        : <div className="armoredrig-chestrig-info">Chest Rigs cannot be worn with Armored Rigs</div>
                    }
                    <div className="bodyarmor-name-container">{armorNameToDisplay}</div>
                </div>
                :
                <div>
                <div className='no-bodyarmor-to-show'>No Bodyarmor</div>
                <div className='no-chestrig-to-show'>No Chest Rig</div>
                </div>
            }
        </div>
    )
}