import React from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import PricingRangeSlider from "./PricingRangeSlider";
import {
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPriceMax,
  addPriceMin,
  addPropertyType,
  addaffordability,
  addStatus,
  addArea,
  addYearBuilt,
  addFBR,
  addLDA,
  addcategory,
  addview3D,
  addView,
  addCompany,
  addDeveloper,
  addfurnishing,
  resetAmenities,
} from "../../features/properties/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalMobileSelectBox from "./GlobalMobileSelectBox";
import { useRouter } from "next/router";

const MobileFilter = ({ filterChanger }) => {
  const [Advance, setAdvance] = useState(false);
  const router=useRouter();

  const {
    location,
    affordability,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    category,
    area,
    amenities,
    LDA,
    FBR,
    area_type,
    company,
    furnishing,
    developer,
    view3D,
  } = useSelector((state) => state.properties);

  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });

  const submitHandler = () => {
    router.push(
      `/listing-map-v4${location.length > 0 ? `?location=${location}` : ""}${
        propertyType.length > 0 ? `?Propety Type=${propertyType}` : ""
      }${affordability.length > 0 ? `?affordability=${affordability}` : ""}${
        status.length > 0 ? `?Propety status=${status}` : ""
      }${
        price.min > 0 ? `?Price min=${price.min}` : ""
      }${price.max > 0 ? `?Price max=${price.max}` : ""}${bathrooms.length > 0 ? `?Bathroom=${bathrooms}` : ""}${
        bedrooms.length > 0 ? `?Bedrooms=${bedrooms}` : ""
      }${category.length > 0 ? `?Category=${category}` : ""}${
        area.min > 0 ? `?Area min=${area.min}` : ""
      }${area.max > 0 ? `?Area max=${area.max}` : ""}${
        LDA ? `?LDA=Approved` : ""
      }${FBR > 0 ? `?FBR=Approved` : ""}${
        area_type.length > 0 ? `?Propety Type=${area_type}` : ""
      }${company ? `?Company=Secured` : ""}${
        furnishing ? `?Furnishing=Furnished` : ""
      }${developer.length > 0 ? `?Developer=${developer}` : ""}${
        view3D ? `?3D View=Available` : ""
      }${
        amenities.length > 0
          ? `?Amenities=${amenities.map((item) => item)}`
          : ""
      }`)
  };

  const CLearHandler = () => {
    dispatch(resetAmenities());
    dispatch(addPriceMax(""));
    dispatch(addPriceMin(""));
    dispatch(addBathrooms(""));
    dispatch(addBedrooms(""));
    dispatch(addGarages(""));
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addPropertyType(""));
    dispatch(addaffordability(""));
    dispatch(addStatus(""));
    dispatch(addArea(""));
    dispatch(addAreaMax(""));
    dispatch(addAreaMin(""));
    dispatch(addYearBuilt(""));
    dispatch(addFBR(""));
    dispatch(addLDA(""));
    dispatch(addcategory(""));
    dispatch(addBedrooms(""));
    dispatch(addView(""));
    dispatch(addview3D(""));
    dispatch(addCompany(""));
    dispatch(addDeveloper(""));
    dispatch(addfurnishing(""));
  };

  return (
    <>
      <div className="filters_mobile">
        <div className="top_mobile_filter">
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              filterChanger();
            }}
          ></button>
          <h3>Filters</h3>
          <button
            className="btn btn-thm"
            onClick={() => {
              filterChanger();
            }}
          >
            Done
          </button>
        </div>
        <div className="filter_mobile_view">
          <ul>
            <li className={`list-inline-item`}>
              <div className="form-group">
                <label>Location</label>
                {isLoaded && (
                  <Autocomplete>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => dispatch(addLocation(e.target.value))}
                    />
                  </Autocomplete>
                )}
              </div>
            </li>

            <li className={`list-inline-item`}>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <label>Property Type</label>
                  <div className="filter_nav_type">
                    <ul>
                      <li
                        className={`${
                          area_type == "Resdential" && `nav-active`
                        }`}
                        onClick={() => {
                          dispatch(addArea("Resdential"));
                        }}
                      >
                        Resdential
                      </li>
                      <li
                        className={`${
                          area_type == "Commercial" && `nav-active`
                        }`}
                        onClick={() => {
                          dispatch(addArea("Commercial"));
                        }}
                      >
                        Commercial
                      </li>
                    </ul>
                  </div>
                  <div className="filters_prop_Type">
                    <div
                      className="property_icon_type"
                      onClick={() => {
                        dispatch(addPropertyType("Apartment"));
                      }}
                    >
                      <div
                        className={`filter_icon_img ${
                          propertyType == "Apartment" && "active_icon"
                        }`}
                      >
                        <img
                          src="/assets/images/FilterTypeIcon/Apartment.jpg"
                          alt=""
                        />
                      </div>
                      <h5>Apartment</h5>
                    </div>
                    <div
                      className="property_icon_type"
                      onClick={() => {
                        dispatch(addPropertyType("Villa"));
                      }}
                    >
                      <div
                        className={`filter_icon_img ${
                          propertyType == "Villa" && "active_icon"
                        }`}
                      >
                        <img
                          src="/assets/images/FilterTypeIcon/Villa.jpg"
                          alt=""
                        />
                      </div>
                      <h5>Villa</h5>
                    </div>
                    <div
                      className="property_icon_type"
                      onClick={() => {
                        dispatch(addPropertyType("Town House"));
                      }}
                    >
                      <div
                        className={`filter_icon_img ${
                          propertyType == "Town House" && "active_icon"
                        }`}
                      >
                        <img
                          src="/assets/images/FilterTypeIcon/TownHouse.jpg"
                          alt=""
                        />
                      </div>
                      <h5>Town House</h5>
                    </div>
                    <div
                      className="property_icon_type"
                      onClick={() => {
                        dispatch(addPropertyType("Pent House"));
                      }}
                    >
                      <div
                        className={`filter_icon_img ${
                          propertyType == "Pent House" && "active_icon"
                        }`}
                      >
                        <img
                          src="/assets/images/FilterTypeIcon/PentHouse.jpg"
                          alt=""
                        />
                      </div>
                      <h5>Pent House</h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="list-inline-item">
              <div className="candidate_revew_select">
                <label>BedRooms</label>
                <div className={`btn_select_group`}>
                  <li
                    className={`btn_select ${
                      bedrooms === "" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBedrooms(""));
                    }}
                  >
                    All
                  </li>
                  <li
                    className={`btn_select ${
                      bedrooms === "1" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBedrooms("1"));
                    }}
                  >
                    1 Bed
                  </li>
                  <li
                    className={`btn_select ${
                      bedrooms === "2" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBedrooms("2"));
                    }}
                  >
                    2 Bed
                  </li>
                  <li
                    className={`btn_select ${
                      bedrooms === "3" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBedrooms("3"));
                    }}
                  >
                    3 Bed
                  </li>
                  <li
                    className={`btn_select ${
                      bedrooms === "4" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBedrooms("4"));
                    }}
                  >
                    4 Bed
                  </li>
                  <li
                    className={`btn_select ${
                      bedrooms === "studio" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBedrooms("studio"));
                    }}
                  >
                    Studio
                  </li>
                </div>
              </div>
            </li>

            <li className="list-inline-item">
              <div className="candidate_revew_select">
                <label>BathRooms</label>
                <div className={`btn_select_group`}>
                  <li
                    className={`btn_select ${
                      bathrooms === "" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBathrooms(""));
                    }}
                  >
                    All
                  </li>
                  <li
                    className={`btn_select ${
                      bathrooms === "1" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBathrooms("1"));
                    }}
                  >
                    1 Bath
                  </li>
                  <li
                    className={`btn_select ${
                      bathrooms === "2" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBathrooms("2"));
                    }}
                  >
                    2 Bath
                  </li>
                  <li
                    className={`btn_select ${
                      bathrooms === "3" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBathrooms("3"));
                    }}
                  >
                    3 Bath
                  </li>
                  <li
                    className={`btn_select ${
                      bathrooms === "4" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBathrooms("4"));
                    }}
                  >
                    4 Bath
                  </li>
                  <li
                    className={`btn_select ${
                      bathrooms === "5" ? "active_filter" : ""
                    }`}
                    onClick={() => {
                      dispatch(addBathrooms("5"));
                    }}
                  >
                    5 Bath
                  </li>
                </div>
              </div>
            </li>
            {/* End li */}

            <li className="list-inline-item">
              <label>Price</label>
              <li className={`group_select`}>
                <li className="list-inline-item w-100">
                  <div className="candidate_revew_select">
                    <h5>Minimum</h5>
                    <input
                      type="number"
                      className={`form-control w-100`}
                      value={price.min}
                      placeholder="Min Pkr"
                      onChange={(e) => dispatch(addPriceMin(e.target.value))}
                    />
                  </div>
                </li>
                {/* End Li */}

                <li className="list-inline-item w-100">
                  <div className="candidate_revew_select">
                    <h5>Maximum</h5>
                    <input
                      type="number"
                      className={`form-control w-100`}
                      placeholder="Max Pkr"
                      value={price.max}
                      onChange={(e) => dispatch(addPriceMax(e.target.value))}
                    />
                  </div>
                </li>
                {/* End li */}
              </li>
            </li>
            {/* End Li */}

            <li className="list-inline-item">
              <label>Area</label>
              <li className={`group_select`}>
                <li className="list-inline-item w-100">
                  <div className="candidate_revew_select">
                    <h5>Minimum</h5>
                    <input
                      type="number"
                      className={`form-control w-100`}
                      value={area.min}
                      placeholder="Min sqft"
                      onChange={(e) => dispatch(addAreaMin(e.target.value))}
                    />
                  </div>
                </li>
                {/* End Li */}

                <li className="list-inline-item w-100">
                  <div className="candidate_revew_select">
                    <h5>Maximum</h5>
                    <input
                      type="number"
                      className={`form-control w-100`}
                      placeholder="Max sqft"
                      value={area.max}
                      onChange={(e) => dispatch(addAreaMax(e.target.value))}
                    />
                  </div>
                </li>
                {/* End li */}
              </li>
            </li>
            {/* End Li */}

            <li className="list-inline-item">
              <div className="candidate_revew_select mt-3 mb-3">
                <h3
                  onClick={() => {
                    setAdvance(!Advance);
                  }}
                >
                  Advance
                  <i
                    className="flaticon-more pl5"
                    style={{ fontSize: "20px" }}
                  ></i>
                </h3>
              </div>
            </li>

            {Advance && (
              <>
                <GlobalMobileSelectBox />
                <h3 className="mt-3 mb-3">Ementies</h3>
                <CheckBoxFilter />
              </>
            )}
          </ul>
        </div>

        <div className="btn_filter_mobile">
          <div className="reset_btn">
            <button className="btn reset_btn_filter" onClick={CLearHandler}>
              Reset
            </button>
          </div>
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm w-100"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilter;
