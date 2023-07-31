import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import Propertie_detail from "../../../pages/listing-details-v2/index";
import style from "./Listing.module.css";
import { useRouter } from "next/router";
import { addfavrioteProperty } from "../../Customer/Favriote";
import { useContext } from "react";
import VillaContext from "../../../Context/TownVilla/TownVillaContext";
import CurrencyConverter from "../../common/PriceConverter";
import Slider from "react-slick";
import AreaCalculator from "../../common/AreaCalculator";
import ValuePkrConverter from "../../common/ValuePkrConverter";
import DeveloperContext from "../../../Context/Developer/DeveloperContext";

const FeaturedItem = () => {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    innerWidth: 0,
  };

  const [showPopUp, setShowPopUp] = useState(false);

  const handleMouseEnter = () => {
    setShowPopUp(true);
  };

  const handleMouseLeave = () => {
    setShowPopUp(false);
  };

  const villaproject = useContext(VillaContext);
  const Developer_cont = useContext(DeveloperContext);

  const { villa } = villaproject;
  const { developer } = Developer_cont;

  const {
    location,
    affordability,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    category,
    yearBuilt,
    area,
    amenities,
    LDA,
    FBR,
    area_type,
    view,
    company,
    furnishing,
    // developer,
    view3D,
  } = useSelector((state) => state.properties);

  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const router = useRouter();

  const dispatch = useDispatch();

  // location handler
  const locationHandler = (item) => {
    return item?.projectLocation?.address
      .toLowerCase()
      .includes(location.toLowerCase());
  };

  const handleFavriote = (property) => {
    dispatch(addfavrioteProperty(property));
  };

  const favProperties = useSelector(
    (state) => state.favProperties.favrioteproperty
  );

  // status handler
  const statusHandler = (item) => {
    console.log(item?.ProjectStatus);
    item?.ProjectStatus?.toLowerCase().includes(status.toLowerCase());
  };
  // status handler
  const affordabilityHandler = (item) =>
    item?.affordabilityStatus.map((item2) => {
      item2.includes(affordability.toLowerCase);
    });

  // properties handler
  const propertiesHandler = (item) =>
    item?.projecttype.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item?.startingprice < price?.max && item?.startingprice > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item?.HighlightIcon.BathRange == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item?.HighlightIcon.BedsRange == bedrooms;
    }
    return true;
  };

  // garages handler
  // const garagesHandler = (item) =>
  //   garages !== ""
  //     ? item?.garages?.toLowerCase().includes(garages.toLowerCase())
  //     : true;

  // built years handler
  // const builtYearsHandler = (item) =>
  //   yearBuilt !== "" ? item?.built == yearBuilt : true;

  // build LDA handle
  const builtLDAHandler = (item) => {
    if (LDA === true) {
      return item?.check_lda_approval === true;
    } else {
      return true;
    }
  };
  // item?.check_lda_approval.toLowerCase().includes(LDA.toLowerCase());

  // build FBR handle
  const builtFBRHandler = (item) => {
    if (FBR === true) {
      return item?.check_fbr_approval === true;
    } else {
      return true;
    }
  };

  // build area handle
  // const builtAreaTypeHandler = (item) =>
  //   item?.projectcategory.toLowerCase().includes(area_type.toLowerCase());

  // // build view handle
  // const builtViewHandler = (item) =>
  //   item?.view.toLowerCase().includes(view.toLowerCase());

  // build Category handle
  // const builtCategoryHandler = (item) =>
  //   item?.category.toLowerCase().includes(category.toLowerCase());

  // build Category handle
  // const builtCompanyHandler = (item) =>
  //   item?.company.toLowerCase().includes(company.toLowerCase());

  // build view 3D handle
  const builtView3DHandler = (item) => {
    if (view3D === true) {
      return item.video_3D === true;
    } else {
      return true;
    }
  };

  // build Furnishing handle
  const builtFurnishingHandler = (item) => {
    if (furnishing === true) {
      return item.checkFurnished === true;
    } else {
      return true;
    }
  };

  // build Dveloper handle
  // const builtDeveloperHandler = (item) =>
  //   item?.projectDeveloper.toLowerCase().includes(developer.toLowerCase());

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item?.HighlightIcon.SqftRange) > area.min &&
          parseInt(item?.HighlightIcon.SqftRange) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      const itemAmenities = item?.amenities || {};
      const allAmenities = Object.values(itemAmenities).flat();
      return amenities.some((amenity) => allAmenities.includes(amenity));
    }
    return true;
  };

  // status filter
  // const statusTypeHandler = (a, b) => {
  //   if (statusType === "recent") {
  //     return a.created_at + b.created_at;
  //   } else if (statusType === "old") {
  //     return a.created_at - b.created_at;
  //   } else if (statusType === "") {
  //     return a.created_at + b.created_at;
  //   }
  // };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item?.featured_project === featured;
    }
    return true;
  };

  //Pop up Work
  const [ID, setID] = useState(null);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  
  const handleModel =()=>{
    setIsModalOpen(!IsModalOpen)
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("setIsModalOpen");

    if (storedValue !== null) {
      console.log(storedValue);
      setIsModalOpen(!storedValue);
    }
  }, []);

  // status handler
  let content = villa
    // ?.filter(locationHandler)
    // ?.filter(statusHandler)
    // ?.filter(propertiesHandler)
    // ?.filter(priceHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    // ?.filter(garagesHandler)
    // ?.filter(builtYearsHandler)
    ?.filter(areaHandler)
    ?.filter(affordabilityHandler)
    ?.filter(advanceHandler)
    // ?.sort(statusTypeHandler)
    ?.filter(featuredHandler)
    ?.filter(builtLDAHandler)
    ?.filter(builtFBRHandler)
    // ?.filter(builtCategoryHandler)
    ?.filter(builtView3DHandler)
    ?.filter(builtFurnishingHandler)
    // ?.filter(builtDeveloperHandler)
    // ?.filter(builtViewHandler)
    // ?.filter(builtCompanyHandler)
    // ?.filter(builtAreaTypeHandler)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item?.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <Slider {...settings} arrows={true}>
              <img className="img-whp" src={item?.main_image} alt="fp1.jpg" />
              {item?.interiorPictures.map((itemimg) => (
                <img className="img-whp" src={itemimg} alt="fp1.jpg" />
              ))}
              {item?.exteriorPictures.map((itemimg) => (
                <img className="img-whp" src={itemimg} alt="fp1.jpg" />
              ))}
            </Slider>
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                {item?.featured_project && (
                  <li className="list-inline-item">
                    <a href="#">Featured</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>
                <a
                  className="fp_title"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                    setID(item?._id);
                    window.history.pushState(
                      { ID },
                      null,
                      `/listing-details-v2/${item?._id}`
                    );
                  }}
                >
                  {item?.project_title}
                </a>
              </h4>
              {/* <li>
                <a
                  className="fp_price tooltip-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                    setID(item?._id);

                    window.history.pushState(
                      { ID },
                      null,
                      `/listing-details-v2/${item?._id}`
                    );
                  }}
                >
                  PKR {ValuePkrConverter(item?.startingprice)}
                  <div className="tooltip-text">
                    <CurrencyConverter PricePKR={item?.startingprice} />
                  </div>
                </a>
              </li> */}
              <p className="text-thm">
                <span className="flaticon-placeholder"></span>
                &nbsp;{item.projectLocation.address}
              </p>
              {/* <p className="text-thm">Developer: {item.projectDeveloper}</p> */}

              <ul className="prop_details" style={{ marginBottom: "10px" }}>
                <li
                  className="list-inline-item"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <a href="#" className="tooltip-link">
                    <img src="/assets/images/Highlited/SqftRange.png" alt="" />
                    {item?.HighlightIcon?.SqftRange}
                    <div className="tooltip-text">
                      <AreaCalculator
                        inputunit={"sqft"}
                        inputValue={item?.HighlightIcon?.HouseSizeRange}
                      />
                    </div>
                  </a>
                </li>
                <li
                  className="list-inline-item"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <a href="#" className="tooltip-link">
                    <img src="/assets/images/Highlited/BedsRange.png" alt="" />
                    {item?.HighlightIcon?.BedsRange} Beds
                  </a>
                </li>
                <li
                  className="list-inline-item"
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <a href="#" className="tooltip-link">
                    <img src="/assets/images/Highlited/BathRange.png" alt="" />
                    {item?.HighlightIcon?.BathRange} Baths
                  </a>
                </li>
              </ul>

              <div className="footer_prop">
                <div className="btn_group_footer">
                  <button className="btn btn-thm">Email</button>
                  <button className="btn btn-thm">Call</button>
                  <button className="btn btn-thm">WhatsApp</button>
                </div>
                <div className="dev_log">
                  {developer?.map((dev) => {
                    if (dev?.DevName == item?.projectDeveloper) {
                      return <img src={dev?.DevLog} alt="" />;
                    }
                  })}
                </div>
              </div>
            </div>
            {/* End .tc_content */}
          </div>
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, addLength, content]);

  return (
    <>
      {IsModalOpen && (
        <div className={style.popUpStyling}>
          <Link href={`/listing-map-v4`}>
            <button
              className={`${style.btn_close}`}
              onClick={() => {
               handleModel
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
              </svg>
            </button>
          </Link>
          <Propertie_detail itemId={ID} handleModel={handleModel} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
      {content}
    </>
  );
};

export default FeaturedItem;
