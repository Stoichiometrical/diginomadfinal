import React, { useState, useEffect } from 'react';
import Navbar from "../navbar/Navbar";
import "./countryhero.scss"




export default function CountryInfo({ countryName }) {
       //assign variables to hold data from api requests
        const [countryData, setCountryData] = useState(null);
        const [imageUrl, setImageUrl] = useState('');

        //get country and pictures from apis
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);

            const imageResponse = await fetch(`https://api.pexels.com/v1/search?query=${countryName}&per_page=1`, {
                headers: {
                    Authorization: '563492ad6f91700001000001db00a30bd9924183ac7f6d51591cdc42'
                }
            });



            const data = await response.json();
            const imageData = await imageResponse.json(); // wait for the promise to be resolved
            console.log(imageData);
            if (imageData && imageData.photos && imageData.photos.length > 0) {
                setImageUrl(imageData.photos[0].src.large);
                console.log(imageData.photos[0].src.large)
            }
            setCountryData(data[0]);

        }
        fetchData();
    }, [countryName]);

  //if the api requests are still pending , display loader
    if (!countryData) {
            return <p>
                <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="loading"/>
                Loading...</p>;
        }


    return (
        <>
            <div className="country-hero">
                <div className="country-hero-wrapper">
                    <Navbar/>
                    <div className="head">
                        <div className='country-name'>{countryData.name}</div>
                        <div className="capital">Capital City : {countryData.capital}</div>
                    </div>
                    <div className="info-sect">
                        {imageUrl && <img src={imageUrl} alt={countryName} className="head-image" style={{width : "250px", height : "340px", borderRadius:"15px",marginRight:"3%"}}/>}
                        <div className="facts">
                            <h1>{countryData.name}</h1>
                            <p>Capital: {countryData.capital}</p>
                            <p>Population: {countryData.population}</p>
                            <p>Co-ordinates: {countryData.latlng}</p>
                            <p>Currency: {countryData.currencies[0].name}</p>
                            <p>Languages: {countryData.languages.map(language => language.name).join(', ')}</p>
                            <p>Region: {countryData.subregion}</p>
                            Flag : <img src={countryData.flags.png} alt="Flag" style={{ width : 50, height : 40}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
    }


