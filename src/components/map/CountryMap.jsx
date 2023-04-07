import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const MapMarker = () => <div className="map-marker"></div>;

    // Code for getting map location has been adapted from the google-map-react documentation

const Map4 = ({ countryName  }) => {
    const [mapApiLoaded, setMapApiLoaded] = useState(false);
    const [map, setMap] = useState(null);

    const handleApiLoaded = (map, maps) => {
        setMap(map);
        setMapApiLoaded(true);
    };

       //Getting maps coordinates
     if(map!= null){
         const geocoder = new window.google.maps.Geocoder();
         geocoder.geocode({ address: countryName }, (results, status) => {
             if (status === window.google.maps.GeocoderStatus.OK) {
                 const lat = results[0].geometry.location.lat();
                 const lng = results[0].geometry.location.lng();
                 const center = new window.google.maps.LatLng(lat, lng);
                 map.setCenter(center);
                 map.setZoom(5);
                 new window.google.maps.Marker({ position: center, map: map });
             } else {
                 console.log(`Unable to geocode address: ${status}`);
             }
         });
     }



    return (
        <div style={{ height: '400px', width: '90%',margin:"5%" }}>
            <div style={{ marginTop : "2%",marginBottom:"3%", color: "#48ACF0",fontWeight:"bold",fontSize:"2rem",textAlign: "center"}}>WHERE DO YOU FIND {countryName} ?</div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBGyhrptyng664wJgEw5kN-SfHDH1CkoQ0' }}
                defaultCenter={{ lat: 0, lng: 0 }}
                defaultZoom={2}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {mapApiLoaded && <MapMarker />}
            </GoogleMapReact>
        </div>

    );
};

export default Map4;
