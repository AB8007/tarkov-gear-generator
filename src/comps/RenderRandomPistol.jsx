import { useState } from "react"

export const RenderRandomPistol = ({ filteredPistols }) => {
    const [randomPistol, setRandomPistol] = useState(null)
    const [randomPistolImage, setRandomPistolImage] = useState('')

    const rollRandomPistol = () => {
        const randomIndex = Math.floor(Math.random() * filteredPistols.length) 
        const randomItem = filteredPistols[randomIndex]
        setRandomPistol(`A ${randomItem.name} it is...`)
        setRandomPistolImage(randomItem.gridImageLink)
    }

    return (
        <div className="pistol-container">
            <button onClick={rollRandomPistol}>Roll your gun</button>
            <br/>
            {randomPistol && 
                <p>
                    {randomPistol}<br/>
                    <br/>
                    <img src={randomPistolImage}></img>
                </p>
            }
        </div>
    )
}