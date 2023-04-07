import  "./hero.scss"
import Navbar from "../navbar/Navbar";


export default function Hero(){
    const changeIt = (e)=>{
        const items = document.getElementById(e)
        items.scrollIntoView({ behavior: 'smooth' })
    }

    return(

        <>
            <div className="hero">
                <div  className="heroWrapper">
                    <Navbar/>
                    <div className="text">
                        <div className="section">
                            <div className="big-text">
                                <div className="h1">DIGI<span className="change">NOMAD</span> </div>
                                <div className="stext">Discover the next city to move to</div>
                            </div>
                            <div className="discover">
                                <span className="dtext" onClick={() => changeIt("continents")}>DISCOVER</span>
                            </div>


                        </div>
                    </div>

                </div>



            </div>



        </>
    )
}