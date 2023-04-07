import "./continenthero.scss"
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import {useLocation} from "react-router-dom";


export default function ContinentHero(){
    // const location = useLocation();
    // const value = location.state.name

    return(
        <>
        <div className="c-hero" >
            <div className="c-hero-wrapper">
                <Navbar/>
                <div className="text">
                    <div className="b-txt">WHERE TO NEXT ?</div>
                </div>
                <Search className="search"/>
            </div>
        </div>

        </>
    )
}