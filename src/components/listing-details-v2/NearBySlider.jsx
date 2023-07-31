import Link from "next/link";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import VillaContext from "../../Context/TownVilla/TownVillaContext";

const FeaturedProperties = (props) => {
  const villaContext = useContext(VillaContext);
  const { villa } = villaContext;

  function distance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // distance in km
    return d;
  }

  const [range, setRange] = useState(50);
  const [Properties, setProperties] = useState([]);

  useEffect(() => {
    const propertiesWithinRange = villa.filter((property) => {
      if (props.locationCoordinates) {
        if (
          props.locationCoordinates.lat !== property.locationCoordinates.lat ||
          props.locationCoordinates.lng !== property.locationCoordinates.lng
        ) {
          const d = distance(
            props.locationCoordinates.lat,
            props.locationCoordinates.lng,
            property.locationCoordinates.lat,
            property.locationCoordinates.lng
          );
          return d <= range;
        }
      }
    });
    setProperties(propertiesWithinRange);
  }, [props.Located, range]);

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <>
      <div className="slider-range" style={{ maxWidth: "230px" }}>
        <p htmlFor="range">Range (km): {range}</p>
        <InputRange
          formatLabel={() => ``}
          maxValue={50}
          minValue={5}
          value={range}
          onChange={(value) => setRange(value)}
        />
      </div>

      {villa.length > 0 ? (
        <h2>No Project Nearby</h2>
      ) : (
        <Slider {...settings} arrows={true}>
          {Properties.map((item) => (
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

                    <ul className="icon mb0">
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-transfer-1"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-heart"></span>
                        </a>
                      </li>
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
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default FeaturedProperties;
