import { useEffect, useState } from 'react'
import './css/RenderRandomBodyArmor.css'
import { useSelector } from 'react-redux'

export const RenderRandomBodyArmor = ({ rollRandomBodyarmor }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const randomBodyarmor = useSelector(state => state.bodyarmor)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1000)
        }
        img.src = randomBodyarmor.randomBodyarmorImage
    }, [randomBodyarmor])

    return (
        <div className="bodyarmor-container">
            <div className="bodyarmor-button-container">
                <button className='bodyarmor-button' onClick={() => rollRandomBodyarmor()}>Randomize Bodyarmor</button>
            </div>
            {randomBodyarmor.randomBodyarmorName 
                ? 
                <div>
                    <div className="bodyarmor-icon-container">
                    {!imageLoaded ? (
                        <div className='loading-animation'></div>
                        ) : (
                            <img className='bodyarmor-icon' src={randomBodyarmor.randomBodyarmorImage}></img>
                        )}
                    </div>
                    {!imageLoaded ? (
                        <div className="bodyarmor-name-container">Randomizing...</div>
                        ) : (
                            <div className="bodyarmor-name-container">{randomBodyarmor.randomBodyarmorName}</div>
                        )}
                </div>
                :
                <div>
                <div className='bodyarmor-icon-container'>No Bodyarmor</div>
                </div>
            }

        </div>
    )
}