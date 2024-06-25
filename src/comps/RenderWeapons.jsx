import { RenderRandomPistol } from "./RenderRandomPistol"
import { RenderRandomPrimary } from "./RenderRandomPrimary"

export const RenderWeapons = () => {
    return (
        <div className='weapons-container'>
            <RenderRandomPrimary/>
            <RenderRandomPistol/>
        </div>
    )
}