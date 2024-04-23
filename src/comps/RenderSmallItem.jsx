import { useEffect, useState } from 'react'
import './css/RenderSmallItem.css'
export const RenderSmallItem = ({category, name, image, rollRandomItem}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => {
        setImageLoaded(false)
        const img = new Image()
        img.onload = () => {
            setTimeout(() => {
                setImageLoaded(true)
            }, 1500)
        }
        img.src = image
    }, [image])

    return (
        <div className="small-item-container">
            <div className="small-item-button-container">
                <button className="small-item-button" onClick={() => rollRandomItem()}>{category}</button>
            </div>
            {name ? (
                <div className='small-item-icon-container'>
                    {!imageLoaded ? (
                        <>
                            <div className='loading-animation'></div>
                            <div className='small-item-name-container'>Randomizing...</div>
                        </>
                    ) : (
                        <>
                            <img className='small-item-icon' src={image}></img>
                            <div className='small-item-name-container'>{name}</div>
                        </>
                    )}
                </div>
                    ) : (
                        <div className='no-small-item-to-show'>No {category}</div>
                    )
            }
        </div>
    )
}