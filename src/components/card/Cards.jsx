import "./card.scss"


export default function Cards(props){
    return(
        <>
            <div className="cards">
                <div className="cardsWrapper">
                    <div className="head">{props.heading}</div>
                    <div className="card-sect">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}