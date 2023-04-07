import "./door.scss"
import {Link} from "react-router-dom";

export default function Door(){
    return(
        <>
        <div className="door">
            <div className="doorWrapper">
                <div className="im-cont">
                    <Link to="/continent"><img src="https://img.icons8.com/fluency/96/null/door.png" className="door-image "/></Link>
                   <Link to="/continent"><img src="https://img.icons8.com/fluency/240/null/door-opened.png" className="door-image d2"/></Link>
                </div>
                <div className="door-text">Open Door To Start Your Journey</div>
            </div>
        </div>
        </>
    )
}