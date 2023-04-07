import "./card.scss"


export default function Card(props){
    return(
        <>
            <div className="card-container">
                <img src={props.image} alt="Photo Missing" className="img"/>
                    <div className='text-cont'>
                        <h2 className="text">{props.name}</h2>
                    </div>
            </div>
        </>
    )
}