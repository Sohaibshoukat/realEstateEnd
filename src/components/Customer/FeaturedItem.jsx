import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import properties from "../../data/properties";
import Slider from "react-slick";
import style from "./CustomerStyling.module.css";
// import cardreducer from "./Favriote"
import {addfavrioteProperty} from "./Favriote"

const FeaturedItem = () => {

  const dispatch = useDispatch();
  const favProperties = useSelector(
    (state) => state.favProperties.favrioteproperty
  );

  const handleFavriote = (property)=>{
    dispatch(addfavrioteProperty(property))
  }

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  

  // keyword filter
  const keywordHandler = (item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.price < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "all-status") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      if (featured === "featured-all") {
        return item;
      }
      return item.featured === featured;
    }
    return true;
  };



  return (
    <>
      {
        <Slider {...settings} arrows={true}>
          {properties
            ?.filter(keywordHandler)
            ?.filter(locationHandler)
            ?.filter(statusHandler)
            ?.filter(propertiesHandler)
            ?.filter(priceHandler)
            ?.filter(bathroomHandler)
            ?.filter(bedroomHandler)
            ?.filter(garagesHandler)
            ?.filter(builtYearsHandler)
            ?.filter(areaHandler)
            ?.filter(advanceHandler)
            ?.sort(statusTypeHandler)
            ?.filter(featuredHandler)
            .map((item) => (
              <div className="item" key={item.id}>
                <div className="feat_property home3">
                  <div className="thumb">
                    <img className="img-whp" src={item.img} alt="fp1.jpg" />
                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        {item.saleTag.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">{val}</a>
                          </li>
                        ))}
                      </ul>

                      <Link href={`/listing-details-v1/${item.id}`}>
                        <a className="fp_price">
                          ${item.price}
                          <small>/mo</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      <p className="text-thm">{item.type}</p>
                      <h4>
                        <Link href={`/listing-details-v1/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <p>
                        <span className="flaticon-placeholder"></span>
                        {item.location}
                      </p>

                      <ul className="prop_details mb0">
                        {item.itemDetails.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">
                              {val.name}: {val.number}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={style.btn_group}>
                    <button className={style.btn_favriote} onClick={() => {handleFavriote(item)}}>Add to Favriote</button>
                    <Link href={`/listing-details-v2/${item.id}`}>
                      <button className={style.btn_Details}>Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      }
    </>
  );
};

export default FeaturedItem;
