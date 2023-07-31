import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import style from "./Listing.module.css";
import {
  addLocation,
  addPropertyType,
  addArea,
} from "../../../features/properties/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const MobileFilter = ({ filterChanger }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const { location, area_type } = useSelector((state) => state.properties);

  return (
    <div className={style.project_listing_filter}>
      <ul>
        <li className="list-inline-item w-100">
          <div className="candidate_revew_select">
            {isLoaded && (
              <Autocomplete>
                <input
                  type="text"
                  className={`form-control`}
                  style={{ border: "1px solid #7f7f7f" }}
                  placeholder="e.g. DHA Lahore"
                  value={location}
                  onChange={(e) => {
                    dispatch(addLocation(e.target.value));
                  }}
                  onKeyUp={(event) => {
                    if (
                      event.key === "Enter" &&
                      event.target.value.length > 0
                    ) {
                      dispatch(addLocation(event.target.value));
                      router.push(
                        `/listing-map-v4/?location=${event.target.value}`
                      );
                    } else {
                      router.push(`/listing-map-v4`);
                    }
                  }}
                />
              </Autocomplete>
            )}
          </div>
        </li>
        <li>
          <div className={style.Type_filter}>
            <ul>
              <li>
                <button className="btn btn-thm w100" onClick={filterChanger}>
                  Filters
                </button>
              </li>
              <li className={`list-inline-item`}>
                <div className="search_option_two">
                  <div className="candidate_revew_select">
                    <select
                      className="selectpicker w100 form-select show-tick"
                      onChange={(e) =>
                        dispatch(addPropertyType(e.target.value))
                      }
                    >
                      <option value="">Property Type</option>
                      <option>Apartment</option>
                      <option>Pent House</option>
                      <option>Town House</option>
                      <option>Villas</option>
                    </select>
                  </div>
                </div>
              </li>
              <li className={`list-inline-item`}>
                <div className="search_option_two">
                  <div className="candidate_revew_select">
                    <select
                      className="selectpicker w100 form-select show-tick"
                      onChange={(e) => dispatch(addArea(e.target.value))}
                    >
                      <option value="">Area Type</option>
                      <option>Resdential</option>
                      <option>Commercial</option>
                    </select>
                  </div>
                </div>
              </li>
              {/* <li
                className={`${
                  area_type == "Resdential" && `${style.nav_active}`
                }`}
                onClick={() => {
                  dispatch(addArea("Resdential"));
                }}
              >
                Resdential
              </li>
              <li
                className={`${
                  area_type == "Commercial" && `${style.nav_active}`
                }`}
                onClick={() => {
                  dispatch(addArea("Commercial"));
                }}
              >
                Commercial
              </li> */}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileFilter;
