import { useSelector } from "react-redux"
import { RenderSmallItem } from "./RenderSmallItem"

export const RenderChestRig = () => {
    const chestrig = useSelector(state => state.chestrig)
    return (
        <>
        <RenderSmallItem
        category={'Chest Rig'}
        name={chestrig.randomChestRigName}
        image={chestrig.randomChestRigImage}
      />
      </>
    )
}