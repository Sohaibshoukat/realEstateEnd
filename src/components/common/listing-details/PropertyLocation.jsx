import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./ListingDetail.module.css";

const PropertyLocation = (props) => {
  const [activeButtons, setActiveButtons] = useState(["hospital"]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });

  const { location } = useSelector((state) => state.properties);
  const [center, setcenter] = useState(null);

  const [HospitalView, setHospitalView] = useState(true);
  const [SchoolView, setSchoolView] = useState(false);
  const [MosqueView, setMosqueView] = useState(false);
  const [BankView, setBankView] = useState(false);
  const [ParkView, setParkView] = useState(false);
  const [RestaurantView, setRestaurantView] = useState(false);
  const [RetailStoresView, setRetailStoresView] = useState(false);

  const [hospitals, setHospitals] = useState([]);
  const [schools, setSchools] = useState([]);
  const [Mosque, setMosque] = useState([]);
  const [Bank, setBank] = useState([]);
  const [Restaurant, setRestaurant] = useState([]);
  const [RetailStores, setRetailStores] = useState([]);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const mapStyle = [
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];
  const option = {
    draggable: true,
    zoomControl: true,
    draggableCursor: "move",
    draggingCursor: "grabbing",
    disableDefaultUI: true,
    styles: mapStyle,
  };

  useEffect(() => {
    if (props.property.locationCoordinates) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
          setcenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        } else {
          console.log(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      const requestHospital = {
        location: props.property.locationCoordinates,
        radius: 5000,
        keyword: "hospital",
      };
      const requestSchools = {
        location: props.property.locationCoordinates,
        radius: 5000,
        keyword: "school",
      };
      const requestMosque = {
        location: props.property.locationCoordinates,
        radius: 5000,
        keyword: "mosque",
      };
      const requestBank = {
        location: props.property.locationCoordinates,
        radius: 5000,
        keyword: "bank",
      };
      const requestRestaurant = {
        location: props.property.locationCoordinates,
        radius: 5000,
        keyword: "restaurant",
      };
      const requestRetailStores = {
        location: props.property.locationCoordinates,
        radius: 5000,
        keyword: "retail stores",
      };

      service.nearbySearch(requestHospital, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setHospitals(results);
        }
      });
      service.nearbySearch(requestSchools, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setSchools(results);
        }
      });
      service.nearbySearch(requestMosque, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setMosque(results);
        }
      });
      service.nearbySearch(requestBank, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setBank(results);
        }
      });
      service.nearbySearch(requestRestaurant, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setRestaurant(results);
        }
      });
      service.nearbySearch(requestRetailStores, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setRetailStores(results);
        }
      });
    }
  }, [props.property.locationCoordinates]);

  function distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  return (
    <>
      {console.log(RetailStores.length)}
      <div className="thumb">
        <div id="map-canvas">
          <div 
          className={`${style.Google_Box}`}
          onClick={() => {
            const url = `https://www.google.com/maps/dir/?api=1&origin=${props.property.locationCoordinates.lat},${props.property.locationCoordinates.lng}`;
            window.open(url, "_blank");
          }}>
              <h4>Compute Time</h4>
          </div>
          <div className="gmap_canvas ">
            {isLoaded && props.property.locationCoordinates && (
              <GoogleMap
                center={props.property.locationCoordinates}
                zoom={14}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={option}
              >
                <Marker
                  key={props.property.id}
                  position={props.property.locationCoordinates}
                  options={{
                    icon: {
                      url: "/assets/images/Markers/home.png",
                      scale: 1.5,
                      fillColor: "white",
                      fillOpacity: 1,
                      strokeColor: "white",
                      strokeWeight: 2,
                      scaledSize: new window.google.maps.Size(50, 50),
                      anchor: new window.google.maps.Point(15, 15),
                    },
                  }}
                />
                {HospitalView &&
                  hospitals.map((hospital) => {
                    return (
                      <Marker
                        key={props.property.id}
                        position={hospital.geometry.location}
                        onClick={() => {
                          setSelectedMarker(hospital);
                        }}
                        options={{
                          icon: {
                            url: "/assets/images/Markers/hospital.png",
                            scale: 1.5,
                            fillColor: "white",
                            fillOpacity: 1,
                            strokeColor: "white",
                            strokeWeight: 2,
                            scaledSize: new window.google.maps.Size(40, 40),
                            anchor: new window.google.maps.Point(15, 15),
                          },
                        }}
                      />
                    );
                  })}

                {SchoolView &&
                  schools.map((school) => (
                    <Marker
                      key={school.place_id}
                      position={school.geometry.location}
                      title={school.name}
                      onClick={() => {
                        setSelectedMarker(school);
                      }}
                      options={{
                        icon: {
                          url: "/assets/images/Markers/school.png",
                          scale: 1.5,
                          fillColor: "white",
                          fillOpacity: 1,
                          strokeColor: "white",
                          strokeWeight: 2,
                          scaledSize: new window.google.maps.Size(40, 40),
                          anchor: new window.google.maps.Point(15, 15),
                        },
                      }}
                    />
                  ))}

                {MosqueView &&
                  Mosque.map((mosque) => (
                    <Marker
                      key={mosque.place_id}
                      position={mosque.geometry.location}
                      title={mosque.name}
                      onClick={() => {
                        setSelectedMarker(mosque);
                      }}
                      options={{
                        icon: {
                          url: "/assets/images/Markers/mosque.png",
                          scale: 1.5,
                          fillColor: "white",
                          fillOpacity: 1,
                          strokeColor: "white",
                          strokeWeight: 2,
                          scaledSize: new window.google.maps.Size(40, 40),
                          anchor: new window.google.maps.Point(15, 15),
                        },
                      }}
                    />
                  ))}

                {BankView &&
                  Bank.map((bank) => (
                    <Marker
                      key={bank.place_id}
                      position={bank.geometry.location}
                      title={bank.name}
                      onClick={() => {
                        setSelectedMarker(bank);
                      }}
                      options={{
                        icon: {
                          url: "/assets/images/Markers/bank.png",
                          scale: 1.5,
                          fillColor: "white",
                          fillOpacity: 1,
                          strokeColor: "white",
                          strokeWeight: 2,
                          scaledSize: new window.google.maps.Size(40, 40),
                          anchor: new window.google.maps.Point(15, 15),
                        },
                      }}
                    />
                  ))}

                {RestaurantView &&
                  Restaurant.map((restaurant) => (
                    <Marker
                      key={restaurant.place_id}
                      position={restaurant.geometry.location}
                      title={restaurant.name}
                      onClick={() => {
                        setSelectedMarker(restaurant);
                      }}
                      options={{
                        icon: {
                          url: "/assets/images/Markers/restaurant.png",
                          scale: 1.5,
                          fillColor: "white",
                          fillOpacity: 1,
                          strokeColor: "white",
                          strokeWeight: 2,
                          scaledSize: new window.google.maps.Size(40, 40),
                          anchor: new window.google.maps.Point(15, 15),
                        },
                      }}
                    />
                  ))}

                {RetailStoresView &&
                  RetailStores.map((retailStores) => {
                    return (
                      <Marker
                        key={retailStores.place_id}
                        position={retailStores.geometry.location}
                        title={retailStores.name}
                        onClick={() => {
                          setSelectedMarker(retailStores);
                        }}
                        options={{
                          icon: {
                            url: "/assets/images/Markers/cart.png",
                            scale: 1.5,
                            fillColor: "white",
                            fillOpacity: 1,
                            strokeColor: "white",
                            strokeWeight: 2,
                            scaledSize: new window.google.maps.Size(40, 40),
                            anchor: new window.google.maps.Point(15, 15),
                          },
                        }}
                      />
                    );
                  })}

                {selectedMarker && (
                  <InfoWindow
                    position={selectedMarker.geometry.location}
                    onCloseClick={() => {
                      setSelectedMarker(null);
                    }}
                  >
                    <div style={{ display: "flex", gap: "7px" }}>
                      <div style={{ height: "100%" }}>
                        <img
                          src={`${selectedMarker.icon}`}
                          alt=""
                          style={{ height: "100%", objectFit: "contain" }}
                        />
                      </div>
                      <div style={{ paddingRight: "10px" }}>
                        <h5>{selectedMarker.name}</h5>
                        <p>{selectedMarker.vicinity}</p>
                        <p>
                          {parseFloat(
                            distance(
                              selectedMarker.geometry.location.lat(),
                              selectedMarker.geometry.location.lng(),
                              props.property.locationCoordinates.lat,
                              props.property.locationCoordinates.lng
                            ).toFixed(2)
                          )}{" "}
                          km
                        </p>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            )}
          </div>
        </div>
        <div className={`${style.Map_box}`}>
          <a
            onClick={() => {
              setHospitalView(!HospitalView);
              setActiveButtons((prevButtons) =>
                prevButtons.includes("hospital")
                  ? prevButtons.filter((btn) => btn !== "hospital")
                  : [...prevButtons, "hospital"]
              );
            }}
            className={`${style.Selection_Map} ${
              activeButtons.includes("hospital") ? style.Active_Button : ""
            }`}
          >
            <h4>Hospitals</h4>
          </a>
          <a
            onClick={() => {
              setSchoolView(!SchoolView);
              setActiveButtons((prevButtons) =>
                prevButtons.includes("school")
                  ? prevButtons.filter((btn) => btn !== "school")
                  : [...prevButtons, "school"]
              );
            }}
            className={`${style.Selection_Map} ${
              activeButtons.includes("school") && style.Active_Button
            }`}
          >
            <h4>School</h4>
          </a>
          <a
            onClick={() => {
              setMosqueView(!MosqueView);
              setActiveButtons((prevButtons) =>
                prevButtons.includes("mosque")
                  ? prevButtons.filter((btn) => btn !== "mosque")
                  : [...prevButtons, "mosque"]
              );
            }}
            className={`${style.Selection_Map} ${
              activeButtons.includes("mosque") && style.Active_Button
            }`}
          >
            <h4>Mosque</h4>
          </a>
          <a
            onClick={() => {
              setBankView(!BankView);
              setActiveButtons((prevButtons) =>
                prevButtons.includes("bank")
                  ? prevButtons.filter((btn) => btn !== "bank")
                  : [...prevButtons, "bank"]
              );
            }}
            className={`${style.Selection_Map} ${
              activeButtons.includes("bank") && style.Active_Button
            }`}
          >
            <h4>Bank</h4>
          </a>
          <a
            onClick={() => {
              setRestaurant(!RestaurantView);
              setActiveButtons((prevButtons) =>
                prevButtons.includes("resturant")
                  ? prevButtons.filter((btn) => btn !== "resturant")
                  : [...prevButtons, "resturant"]
              );
            }}
            className={`${style.Selection_Map} ${
              activeButtons.includes("resturant") && style.Active_Button
            }`}
          >
            <h4>Resturant</h4>
          </a>
          <a
            onClick={() => {
              setRetailStoresView(!RetailStoresView);
              setActiveButtons((prevButtons) =>
                prevButtons.includes("retailstore")
                  ? prevButtons.filter((btn) => btn !== "retailstore")
                  : [...prevButtons, "retailstore"]
              );
            }}
            className={`${style.Selection_Map} ${
              activeButtons.includes("retailstore") && style.Active_Button
            }`}
          >
            <h4>Retai Store</h4>
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyLocation;
