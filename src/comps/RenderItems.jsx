export const RenderItems = ({ pistol }) => {

    const excludeDefault = pistol.shortName.replace("Default","")



    return (
        <div>
            <img src={pistol.image512pxLink} width={100}></img>
            
            
            {excludeDefault}

        </div>
    )
}