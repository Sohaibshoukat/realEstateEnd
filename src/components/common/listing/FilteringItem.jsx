import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
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
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const FilteringItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    company,
    LDA,
    area_type,
    FBR,
    view,
    category,
    view3D,
    developer,
    furnishing,
    amenities,
  } = useSelector((state) => state.properties);

  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  const [getPropertiesType, setPropertiesType] = useState(propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);
  const [getLDA, setLDA] = useState(LDA);
  const [getFBR, setFBR] = useState(FBR);
  const [getcategory, setcategory] = useState(category);
  const [getview3D, setview3D] = useState(view3D);
  const [getFurnishing, setFurnishing] = useState(furnishing);
  const [getDeveloper, setDeveloper] = useState(developer);
  const [getView, setView] = useState(view);
  const [getCompany, setCompany] = useState(company);
  const [getArea, setArea] = useState(area_type);




  // advanced state
  const [getAdvanced, setAdvanced] = useState([
    { id: uuidv4(), name: "Air Conditioning" },
    { id: uuidv4(), name: "Barbeque" },
    { id: uuidv4(), name: "Gym" },
    { id: uuidv4(), name: "Microwave" },
    { id: uuidv4(), name: "TV Cable" },
    { id: uuidv4(), name: "Lawn" },
    { id: uuidv4(), name: "Refrigerator" },
    { id: uuidv4(), name: "Swimming Pool" },
    { id: uuidv4(), name: "WiFi" },
    { id: uuidv4(), name: "Sauna" },
    { id: uuidv4(), name: "Dryer" },
    { id: uuidv4(), name: "Washer" },
    { id: uuidv4(), name: "Laundry" },
    { id: uuidv4(), name: "Outdoor Shower" },
    { id: uuidv4(), name: "Window Coverings" },
  ]);

  const dispath = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, addKeyword, getKeyword]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);
  const {isLoaded}=useJsApiLoader({
    googleMapsApiKey:"AIzaSyB4btr2-qapJbexdgT2sIajOY9adryN6Ns",
    libraries:['places'],
  })
  

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, addStatus, getStatus]);

  // properties type
  useEffect(() => {
    dispath(addPropertyType(getPropertiesType));
  }, [dispath, addPropertyType, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, addBathrooms, getBathroom]);

  // FBR
  useEffect(() => {
    dispath(addLDA(getLDA));
  }, [dispath, addLDA, getLDA]);

  // Area Type
   useEffect(() => {
    dispath(addArea(getArea));
  }, [dispath, addArea, getArea]);

  // LDA
  useEffect(() => {
    dispath(addFBR(getFBR));
  }, [dispath, addFBR, getFBR]);

  // View
  useEffect(() => {
    dispath(addView(getView));
  }, [dispath, addView, getView]);

  // Company Secured
  useEffect(() => {
    dispath(addCompany(getCompany));
  }, [dispath, addCompany, getCompany]);

  // Category
  useEffect(() => {
    dispath(addcategory(getcategory));
  }, [dispath, addcategory, getcategory]);

  // view3D
  useEffect(() => {
    dispath(addview3D(getview3D));
  }, [dispath, addview3D, getview3D]);

  // Developer
  useEffect(() => {
    dispath(addDeveloper(getDeveloper));
  }, [dispath, addDeveloper, getDeveloper]);

  // view3D
  useEffect(() => {
    dispath(addfurnishing(getFurnishing));
  }, [dispath, addfurnishing, getFurnishing]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, addBedrooms, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, addGarages, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, addYearBuilt, getBuiltYear]);

  // area min
  useEffect(() => {
    dispath(dispath(addAreaMin(getAreaMin)));
  }, [dispath, addAreaMin, getAreaMin]);

  // area max
  useEffect(() => {
    dispath(dispath(addAreaMax(getAreaMax)));
  }, [dispath, addAreaMax, getAreaMax]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };

  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setStatus("");
    setPropertiesType("");
    dispath(addPrice({ min: 10000, max: 20000 }));
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    setAreaMin("");
    setArea("");
    setAreaMax("");
    setLDA("");
    setFBR("");
    setcategory("");
    setCompany("");
    setview3D("");
    setFurnishing("");
    setDeveloper("");
    setView("");
    dispath(resetAmenities());
    dispath(addStatusType(""));
    dispath(addFeatured(""));
    clearAdvanced();
  };

  // clear advanced
  const clearAdvanced = () => {
    const changed = getAdvanced.map((item) => {
      item.isChecked = false;
      return item;
    });
    setAdvanced(changed);
  };

  // add advanced
  const advancedHandler = (id) => {
    const data = getAdvanced.map((feature) => {
      if (feature.id === id) {
        if (feature.isChecked) {
          feature.isChecked = false;
        } else {
          feature.isChecked = true;
        }
      }
      return feature;
    });

    setAdvanced(data);
  };

  return (
    <ul className="sasw_list mb0">

      <li className="search_area">
        <div className="form-group mb-3">
          {isLoaded&&<Autocomplete>
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Location"
            value={getLocation}
            onChange={(e) => setLocation(e.target.value)}
          />
          </Autocomplete>}
          <label htmlFor="exampleInputEmail">
            <span className="flaticon-maps-and-flags"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getStatus}
            >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setPropertiesType(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getPropertiesType}
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="bungalow">Bungalow</option>
              <option value="condo">Condo</option>
              <option value="house">House</option>
              <option value="land">Land</option>
              <option value="single family">Single Family</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="small_dropdown2">
          <div
            id="prncgs2"
            className="btn dd_btn"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span>Price Range</span>
            <label htmlFor="prncgs2">
              <span className="fa fa-angle-down"></span>
            </label>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            <div className="pricing_acontent ">
              <PricingRangeSlider />
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBathroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBathroom}
            >
              <option value="">Bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setArea(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBathroom}
            >
              <option value="">Area Type</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBedroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBedroom}
            >
              <option value="">Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBuiltYear(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              value={getBuiltYear}
            >
              <option value="">Year built</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li className="min_area list-inline-item" style={{width:"100%"}}>
        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            id="exampleInputName2"
            placeholder="Min Area"
            value={getAreaMin}
            onChange={(e) => setAreaMin(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}

      <li className="max_area list-inline-item">
        <div className="form-group mb-4">
          <input
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="Max Area"
            value={getAreaMax}
            onChange={(e) => setAreaMax(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}

      
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setView(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              value={getView}
            >
              <option value="">View</option>
            <option value="Islamabad">Islamabad View</option>
            <option value="margala hills">Margala Hills View</option>
            <option value="motarway">Motarway View</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setLDA(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              // value={getLDA}
            >
              <option value="">LDA Approved</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setFBR(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              // value={getLDA}
            >
              <option value="">FBR Approved</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setcategory(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              value={getcategory}
            >
            <option value="">Category</option>
            <option value="corner">Corner</option>
            <option value="standard">Standard</option>
            <option value="facing lobby">Facing Lobby</option>
            <option value="corner f lobby">corner F Lobby</option>
            <option value="front">Front</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setview3D(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              value={getview3D}
            >
            <option value="">View 3D</option>
            <option value="yes">Available</option>
            <option value="no">Not Available</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setCompany(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              value={getFurnishing}
            >
            <option value="">Company Security</option>
            <option value="yes">Secured</option>
            <option value="Not">Not Secured</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setFurnishing(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              value={getFurnishing}
            >
            <option value="">Furnish Status</option>
            <option value="yes">Furnished</option>
            <option value="not">Not Furnished</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}
      
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => {setDeveloper(e.target.value)}}
              className="selectpicker w100 show-tick form-select"
              value={getDeveloper}
            >
            <option value="">Developer</option>
            <option value="Zameen Estate">Zameen Estate</option>
            <option value="Mugal Estate">Mugal Estate</option>
            <option value="Hamza Estate">Hamza Estate</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}


      <li>
        <div id="accordion" className="panel-group">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyRating"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordion"
                >
                  <i className="flaticon-more"></i> Advanced features
                </a>
              </h4>
            </div>
            {/* End .panel-heading */}

            <div id="panelBodyRating" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {getAdvanced?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            checked={feature.isChecked || false}
                            onChange={(e) =>
                              dispath(addAmenities(e.target.value))
                            }
                            onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            Clear Filters
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
