import "./country.scss"
import Footer from "../../components/footer/Footer";
import Compare from "../../components/compare/Compare";
import CoLChart from "../../components/colChart/CoLChart";
import CountryInfo from "../../components/countryhero/Mapping";
import {useLocation} from "react-router-dom";
import CountryMap from "../../components/map/CountryMap";
import Weather from "../../components/map/Weather";

export  default function Country(){
    const location = useLocation();
    const change = location.state.change;

    return(

        <>
            <div className="country" >
            <CountryInfo countryName={change}/>
            <CoLChart country={change}/>
            <CountryMap countryName={change}/>
            <Weather country={change}/>
            <Compare/>
            <Footer/>
            </div>

        </>
    )
}