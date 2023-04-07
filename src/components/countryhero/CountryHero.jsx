import Navbar from "../navbar/Navbar";
import "./countryhero.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import CountryInfo from "./Mapping";



export default function CountryHero(){
    //getting images for
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get('https://api.pexels.com/v1/search', {
            params: {
                query: 'tourist attraction',
                per_page: 1,
                page: 1
            },
            headers: {
                Authorization: '563492ad6f91700001000001db00a30bd9924183ac7f6d51591cdc42'
            }
        })
            .then(response => setImages(response.data.photos))
            .catch(error => console.log(error));
    }, []);


    return(
        <>
           <div className="country-hero">
               <div className="country-hero-wrapper">
                   <Navbar/>
                   <div className="head">
                       <div className='country-name'>ZIMBABWE</div>
                       <div className="capital">Capital City : </div>
                   </div>
                   <div className="info-sect">

                       { images.map(image => (
                           <img key={image.id} src={image.src.medium} alt={image.photographer}  className="head-image"/>
                       ))}

                       <div className="facts">
                           <CountryInfo countryName="Mauritius" className='list' />

                       </div>






                   </div>

               </div>
           </div>

        </>
    )

}

