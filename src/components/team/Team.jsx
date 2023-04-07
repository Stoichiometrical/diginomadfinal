import "./team.scss"

export default function Team(){
    return(
        <>
            <div className="team">
                <div className="t-wrapper">
                    <div className='head'>MEET THE TEAM</div>
                    <div className="team-info">
                        <div className="image-side">
                            <img src="assets/dav.jpeg" alt="Member Photo" className="member-photo"/>
                            <div className="member-name">
                                David Gondo<br/>
                                Software Developer</div>
                        </div>
                        <div className="text-side">
                            David is the lead software engineer at DIGINOMAD who is responsible for crafting the user experience and managing the platform. He graduated from Glasgow Caledonian University summa cum laude with first class honours in Computer Science.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}