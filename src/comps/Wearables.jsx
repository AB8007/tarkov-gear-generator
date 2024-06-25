import { RenderHeadwear } from './RenderHeadwear';
import { RenderHeadphones } from './RenderHeadphones';
import { RenderBodyarmor } from './RenderBodyarmor';
import { RenderChestRig } from './RenderChestRig';
import { RenderBackpack } from './RenderBackpack';
import { RenderFacecover } from './RenderFacecover';

export const Wearables = () => {
    return (
        <div className='character-grid-container'>
        <RenderHeadphones/>
        <RenderHeadwear/>
        <RenderFacecover/>
        <RenderBackpack/>
        <RenderBodyarmor/>
        <RenderChestRig/>
    </div>
    )
}