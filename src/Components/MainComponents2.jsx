import "../Styles/MainComponents2.css"
export const MainComponents2 = ({ image, firstpara, secondpara, thirdpara, listItems, button }) => {
    return (
        <div className="container">
            <img src={image} alt="" />
            <p className="subtittle">{firstpara}</p>
            <p>{secondpara}</p>
            <p>{thirdpara}</p>
            <ul>
                {
                    listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }

            </ul>
            <button>{button}</button>
        </div>
    )
}