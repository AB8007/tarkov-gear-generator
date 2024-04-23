import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './css/RenderSmallItem.css'
export const RenderSmallItem = ({category, name, image, rollRandomItem}) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    const timeout = useSelector(state => state.settings.randomizeAllTimeout)

    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            if (timeout === false) {
                setImageLoaded(true)
                return
            } 
        }
        img.src = image
    }, [image, timeout])

    return (
        <div className="small-item-container">
            <div className="small-item-button-container">
                <button className="small-item-button" onClick={() => rollRandomItem()}>{category}</button>
            </div>
            {name ? (
                <>
                <div className='small-item-icon-container'>
                    {!imageLoaded ? (
                        <div className='icon-loading'>
                            <div className='loading-animation'></div>
                        </div>
                    ) : (
                        <>
                            <img className='small-item-icon' src={image}></img>
                        </>
                    )}
                </div>
                <div className='name-container-wrapper'>
                {!imageLoaded ? (
                        <>
                            <div className='small-item-name-container'>Randomizing...</div>
                        </>
                    ) : (
                        <>
                            <div className='small-item-name-container'>{name}</div>
                        </>
                    )}
                </div>
                </>
                    ) : (
                        <div className='no-small-item-to-show'>No {category}</div>
                    )
            }
        </div>
    )
}