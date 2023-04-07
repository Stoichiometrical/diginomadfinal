import "./search.scss"
import {useState} from "react";
import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export default function Search(){
    const[change,setChange] = useState('')
    // const [showValue, setShowValue] = useState(false);
    const[countryData,setCountryData] = useState('')
    const history = useNavigate('')

    const searchResult = e=>{setChange(e.target.value)}

    const handleClick = ()=>{ history('/country',{ state : { change }})}


    return(

        <>
        <div className="s-container">
            <input type="text" className="input" placeholder="SEARCH COUNTRY"  value={change} onChange={searchResult}/>
            <img src="assets/search.png" alt="search-icon"
                 className='s-icon'
                 onClick={() => { handleClick()}} />
        </div>


        </>
    )
}