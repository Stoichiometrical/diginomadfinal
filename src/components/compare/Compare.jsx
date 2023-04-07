import "./compare.scss"
import {useState} from "react";
import CompareTable from "../compareTable/CompareTable";

export default function Compare(){
    const[country1,setCountry1] = useState("")
    const[country2,setCountry2] = useState("")
    const[visible,setVisible] =useState(false)

    const getCountry1 = (e)=>{
        setCountry1(e.target.value)
    }

    const getCountry2 = (e)=>{
        setCountry2(e.target.value)
    }

    const compare = ()=>{
        setVisible(!visible)
    }

    return(
        <>

            <div className="compare">
                <div className="compare-wrapper">
                    <div className="head">COMPARE COUNTRIES</div>
                    <div className="compare-fields">
                        <input type="text" className="input" placeholder="Choose Country" value={country1} onChange={getCountry1}/>
                        <input type="text" className="input" placeholder="Choose Country" value={country2} onChange={getCountry2}/>
                    </div>
                    <div className="compare-btn">
                        <div className="compare-sect" onClick={compare}>COMPARE</div>
                        { visible && <CompareTable country1={country1} country2={country2}/> }

                    </div>
                    <div className="compares">
                        <span className="item-c">Country1 : { country1 }</span>
                        <span className="item-c green">Country2 : { country2 }</span>
                    </div>

                </div>
            </div>
        </>
    )
}