import './css/RenderRandomBodyArmor.css'

export const RenderRandomChestRig = ({ randomChestRig, randomChestRigImage, chestRigNameToDisplay}) => {
    return (
        <div>
            <div className="chestrig-title">Chest rig</div>
            {randomChestRig 
                ? 
                <div>
                    <div className="chestrig-icon-container">
                        <img className='chestrig-icon' src={randomChestRigImage}></img>
                    </div>
                    <div className="chestrig-name-container">{chestRigNameToDisplay}</div>
                </div>
                : 
                <div className="armoredrig-chestrig-info">Chest Rigs cannot be worn with Armored Rigs</div>
            }
            <div className='no-chestrig-to-show'>No Chest Rig</div>
        </div>
    )
}