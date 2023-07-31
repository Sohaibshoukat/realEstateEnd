import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import properties from "../../../data/properties";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MyGoogleMap() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });
  
  const { location } = useSelector((state) => state.properties);

  const [center, setCenter] = useState({ lat: 31.3695, lng: 74.1768 })

  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  }; 

  const option = {
    draggable: true,
    zoomControl: true,
    draggableCursor: "move",
    draggingCursor: "grabbing",
  };

  useEffect(() => {
    if(location!="")
    {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
          setCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
      }); 
    }
    
  }, [location]);

  

  return (
    <>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={option}
        >
          {properties?.filter(locationHandler).map((item) => {
            return(
            <Marker
              key={item.id}
              position={{ lat: item.Located.lat, lng: item.Located.lng }}
              options={{
                icon: {
                  path: "M -12 0 L 0 -7 L 12 0 L 0 30 Z",
                  scale: 1.2,
                  strokeColor: "white",
                  fillColor: "#985dfe",
                  fillOpacity: 2,
                  strokeWeight: 2,
                },
              }}
            />)
          })}
        </GoogleMap>
      )}
    </>
  );
}
