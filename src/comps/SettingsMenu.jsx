import './css/SettingsMenu.css'

export const SettingsMenu = ({ checkboxValue, setCheckboxValue }) => {

    const handleCheckbox = () => {
        setCheckboxValue(prevState => !prevState)
    }

    return (
        <div  className='settings-container-wrapper'>
            <h2>Settings</h2>
            <div className='settings-container'></div>
                <div className='settings-container-top'>
                    <div className='settings-left'>
                        <div className='checkbox-container'>Headwear must be a helmet:  
                            <input type='checkbox' onChange={handleCheckbox}></input>
                        </div>
                        </div>
                    <div className='settings-right'><p>aa</p></div>
                </div>
            <p>aaa</p>
            <p>aaa</p>
        </div>
    )
}