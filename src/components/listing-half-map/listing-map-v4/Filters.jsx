import Router, { useRouter } from "next/router";
import style from "./Listing.module.css";
import {
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
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
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import CheckBoxFilter from "../../common/CheckBoxFilter";
import GlobalSelectBox from "../../common/GlobalSelectBox";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

const GlobalFilter = ({ className = "" }) => {
  const [AdvanceModel, setAdvanceModel] = useState(false);

  const router = useRouter();

  //dispatching
  const dispatch = useDispatch();

  //Google Api Key loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries: ["places"],
  });

  // submit handler
  const submitHandler = () => {
    dispatch(resetAmenities());
    dispatch(addPrice({ min: 10000, max: 20000 }));
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
    router.push(`/listing-map-v4`);
  };

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

  const ResultFilterHandler = () => {
    setAdvanceModel(false)
    router.push(
      `/listing-map-v4${location.length > 0 ? `?location=${location}` : ""}${
        propertyType.length > 0 ? `?Propety Type=${propertyType}` : ""
      }${affordability.length > 0 ? `?affordability=${affordability}` : ""}${
        status.length > 0 ? `?Propety status=${status}` : ""
      }${bathrooms.length > 0 ? `?Bathroom=${bathrooms}` : ""}${
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
      }`
    );
  };

  return (
    <>
      <div className={`home1-advnc-search ${className}`}>
        <ul className="h1ads_1st_list mb0">
          <li className="list-inline-item">
            <div className="candidate_revew_select">
              {isLoaded && (
                <Autocomplete>
                  <input
                    type="text"
                    className={`form-control ${style.input_fields}`}
                    placeholder="Location"
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
          {/* End li */}

          <li className="list-inline-item">
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select
                  className="selectpicker  form-select show-tick"
                  onChange={(event) => {
                    if (event.target.value.length > 0) {
                      dispatch(addPropertyType(event.target.value));
                      router.push(
                        `/listing-map-v4/?propety-type=${event.target.value}`
                      );
                    } else {
                      dispatch(addPropertyType(event.target.value));
                      router.push(`/listing-map-v4`);
                    }
                  }}
                >
                  <option value="">Property Type</option>
                  <option>Commercial</option>
                  <option>Apartment</option>
                  <option>Pent House</option>
                  <option>Town Villas</option>
                </select>
              </div>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select
                  className="selectpicker  form-select show-tick"
                  onChange={(event) => {
                    if (event.target.value.length > 0) {
                      dispatch(addaffordability(event.target.value));
                      router.push(
                        `/listing-map-v4?Affordability=${event.target.value}`
                      );
                    } else {
                      dispatch(addaffordability(event.target.value));
                      router.push(`/listing-map-v4`);
                    }
                  }}
                >
                  <option value="">Affordability</option>
                  <option>Affordable</option>
                  <option>Value for Money</option>
                  <option>Luxury</option>
                </select>
              </div>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <div className="search_option_two">
              <div className="candidate_revew_select">
                <select
                  className="selectpicker  form-select show-tick"
                  onChange={(event) => {
                    if (event.target.value.length > 0) {
                      dispatch(addStatus(event.target.value));
                      router.push(
                        `/listing-map-v4?Status=${event.target.value}`
                      );
                    } else {
                      dispatch(addStatus(event.target.value));
                      router.push(`/listing-map-v4`);
                    }
                  }}
                >
                  <option value="">Property Status</option>
                  <option value="Under Construction">Under Construction</option>
                  <option value="Delieverd">Delieverd</option>
                  <option value="Off Plan">Off Plan</option>
                  <option value="Recently Delieverd">Recently Delieverd</option>
                </select>
              </div>
            </div>
          </li>
          {/*End li*/}
          <li className="list-inline-item">
            <div className="small_dropdown2">
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
          {/* End li */}

          <li className={`custome_fields_520 list-inline-item`}>
            <div className={`navbered`}>
              <div className={`mega-dropdown`}>
                <span
                  className="dropbtn"
                  onClick={() => {
                    setAdvanceModel(true);
                  }}
                >
                  Advanced <i className="flaticon-more pl10 flr-520"></i>
                </span>
                {/* End .dropdown-menu */}
              </div>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <div className="search_option_button">
              <button
                onClick={submitHandler}
                type="submit"
                className="btn btn-thm"
              >
                Clear Filters
              </button>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {AdvanceModel && (
        <div className={`${style.Advance_bg}`}>
          <div className={`${style.Advance_Head} ${style.head_sticky}`}>
            <h3>Filter Results</h3>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setAdvanceModel(false);
              }}
            ></button>
          </div>

          <div className="row p15 pt0-xsd">
            <div className="col-lg-12 col-xl-12">
              <ul className="mb10">
                <GlobalSelectBox />
              </ul>
            </div>
          </div>
          {/* End .row */}
          <div className={style.Advance_Head}>
            <h3>Amenities</h3>
          </div>
          <div className="row p15">
            <div className="col-lg-12"></div>
            <CheckBoxFilter />
          </div>
          {/* End .row */}

          <div className={style.Filter_btn}>
            <button
              className={`btn btn-thm w-100 ${style.review_btn}`}
              onClick={ResultFilterHandler}
            >
              View Results
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalFilter;
