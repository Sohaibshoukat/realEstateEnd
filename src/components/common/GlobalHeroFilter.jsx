import Router from "next/router";
import style from "../home-4/HomeStyling.module.css";
import {
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addDeveloper,
  addBedrooms,
  addfloor,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const GlobalHeroFilter = ({ className = "", filterChanger, filterActive }) => {

  const [TypeSelection, setTypeSelection] = useState("resdential");
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });


  // submit handler
  const submitHandler = () => {
    Router.push("/listing-map-v4");
  };
  //dispatching
  const dispatch = useDispatch();
  dispatch(addPrice({ min: 10000, max: 20000 }));
  return (
    <div className={`home_adv_srch_opt ${className}`}>
      <div className="home_nav">
        <ul>
          <li
            className={`${TypeSelection == "resdential" && `nav-active`}`}
            onClick={() => {
              setTypeSelection("resdential");
              filterChanger();
            }}
          >
            Resdential
          </li>
          <li
            className={`${TypeSelection == "commercial" && `nav-active`}`}
            onClick={() => {
              setTypeSelection("commercial");
              filterChanger();
            }}
          >
            Commercial
          </li>
        </ul>
      </div>

      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className={`home1-advnc-search ${className}`}>
            <ul className={`h1ads_1st_list mb0 ${style.Filter_list}`}>
              <li className={`list-inline-item ${style.filter1}`}>
                <div className="search_option_two">
                  <div className="candidate_revew_select">
                    <label>Property Type</label>
                    <select
                      className="selectpicker w100 form-select show-tick"
                      onChange={(e) =>
                        dispatch(addPropertyType(e.target.value))
                      }
                    >
                      <option value="">All</option>
                      <option>Apartment</option>
                      <option>Pent House</option>
                      <option>Town House</option>
                      <option>Villas</option>
                    </select>
                  </div>
                </div>
              </li>

              <li className={`list-inline-item ${style.filter2}`}>
                <div className="form-group">
                  <label>Location</label>
                  {isLoaded && (
                    <Autocomplete>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        onChange={(e) => dispatch(addLocation(e.target.value))}
                      />
                    </Autocomplete>
                  )}
                </div>
              </li>

              <li className={`list-inline-item ${style.filter3}`}>
                <div>
                  <div className="candidate_revew_select">
                    <label>Project or Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project or Locatiion"
                      onChange={(e) => dispatch(addKeyword(e.target.value))}
                    />
                  </div>
                </div>
              </li>

              <li className={`list-inline-item ${style.filter4}`}>
                <div className="search_option_two">
                  <div className="candidate_revew_select">
                    <label>Developer</label>
                    <select
                      className="selectpicker w100 form-select show-tick"
                      onChange={(e) => dispatch(addDeveloper(e.target.value))}
                    >
                      <option value="">All</option>
                      <option>Zameen</option>
                    </select>
                  </div>
                </div>
              </li>

              {TypeSelection == "resdential" ? (
                <li className={`list-inline-item ${style.filter5}`}>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <label>Bed</label>
                      <select
                        className="selectpicker w100 form-select show-tick"
                        onChange={(e) => dispatch(addBedrooms(e.target.value))}
                      >
                        <option value="">All</option>
                        <option value="1">1 BedRoom</option>
                        <option value="2">2 BedRoom</option>
                        <option value="3">3 BedRoom</option>
                        <option value="4">4 BedRoom</option>
                        <option value="5">5 BedRoom</option>
                      </select>
                    </div>
                  </div>
                </li>
              ) : (
                <li className={`list-inline-item ${style.filter5}`}>
                  <div className="search_option_two">
                    <div className="candidate_revew_select">
                      <label>Floor</label>
                      <select
                        className="selectpicker w100 form-select show-tick"
                        onChange={(e) => dispatch(addfloor(e.target.value))}
                      >
                        <option value="">All</option>
                        <option value="1">1st Floor</option>
                        <option value="2">2nd Floor</option>
                        <option value="3">3rd Floor</option>
                        <option value="4">4th Floor</option>
                        <option value="5">5th Floor</option>
                      </select>
                    </div>
                  </div>
                </li>
              )}

              <li className={`list-inline-item ${style.filter6}`}>
                <label>Price</label>
                <div className="small_dropdown2 w-100">
                  <div
                    id="prncgs"
                    className="btn dd_btn"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <span>Price</span>
                    <label htmlFor="InputEmail2">
                      <span className="fa fa-angle-down"></span>
                    </label>
                  </div>
                  <div className="dd_content2 dropdown-menu">
                    <div className="pricing_acontent">
                      <PricingRangeSlider />
                    </div>
                  </div>
                </div>
              </li>

              <li className={`list-inline-item ${style.filter7}`}>
                <div className="search_option_button">
                  <button
                    onClick={submitHandler}
                    type="submit"
                    className="btn btn-thm search-btn"
                  >
                    Search
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
