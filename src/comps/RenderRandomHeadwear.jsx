import { useState } from 'react'
import './css/RenderRandomHeadwear.css'

export const RenderRandomHeadwear = ({ headwear, checkboxValue }) => {
    const [randomHeadwear, setRandomHeadwear] = useState(null)
    const [randomHeadwearImage, setRandomHeadwearImage] = useState('')

    console.log(checkboxValue)
    const rollRandomHeadwear = () => {
        console.log(checkboxValue)

        if (checkboxValue) {
            const helmets = headwear.filter(item => item.properties.__typename === "ItemPropertiesHelmet")
            const randomIndex = Math.floor(Math.random() * helmets.length)
            const randomHelmet = helmets[randomIndex]

            setRandomHeadwear(randomHelmet.name)
            setRandomHeadwearImage(randomHelmet.gridImageLink)

            return
        } 

        const randomIndex = Math.floor(Math.random() * headwear.length)
        const randomItem = headwear[randomIndex]

        setRandomHeadwear(`${randomItem.name}`)
        setRandomHeadwearImage(randomItem.gridImageLink)
        
    }

    return (
        <div className='container'>
            <button className='headwear-button' onClick={rollRandomHeadwear}>Roll your headwear</button><br/>

        <br/>
        {randomHeadwear && 
            <p>
                <br/>
                <img className='helmet-icon' src={randomHeadwearImage} width={100}></img>
            </p>
        }
        </div>
    )
}