export const RenderItems = ({ pistol }) => {

    return (
        <div>
            <img src={pistol.gridImageLink} width={100}></img>
            {pistol.name}

        </div>
    )
}