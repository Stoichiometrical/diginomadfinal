import "./navbar.scss"
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

export default function Navbar(){
    let [change,setChange] = useState('')
    const[countryData,setCountryData] = useState('')
    const history = useNavigate('')
    const home = useNavigate('')

    const searchResult = e=>{setChange(e.target.value)}

    const handleClick = ()=>{ history('/country',{ state : { change }})}

    return(
        <>
            <div className="navbar">
                <div className="navbarWrapper">
                    <Link to="/home"> <img src="assets/l1.png" alt="Logo" className="img" /></Link>
                    <div className="s-container">
                        <input type="text" className="input" placeholder="SEARCH COUNTRY"  value={change} onChange={searchResult}/>
                        <img src="assets/search.png" alt="search-icon"
                             className='s-icon'
                             onClick={() => { handleClick()}} />
                    </div>


                    <Link to="/about" className="li"><div className="about">About Us</div></Link>
                </div>


            </div>
        </>
    )
}