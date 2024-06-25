import { useSelector } from "react-redux"
import { RenderSmallItem } from "./RenderSmallItem"

export const RenderBodyarmor = () => {

    const bodyarmor = useSelector(state => state.bodyarmor)

    return (
        <>
        <RenderSmallItem
        category={'Body Armor'}
        name={bodyarmor.randomBodyarmorName}
        image={bodyarmor.randomBodyarmorImage}
      />
      </>
    )
}