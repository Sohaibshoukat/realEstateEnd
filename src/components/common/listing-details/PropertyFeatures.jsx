import { useEffect, useState } from "react";
import style from "./ListingDetail.module.css";
import Slider from "react-slick";

const PropertyFeatures = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 1200,
    innerWidth: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set the desired breakpoint for mobile screens
    };

    handleResize(); // Check the initial screen width
    window.addEventListener("resize", handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  const Higlited_render = (Highlight) => {
    if (!isMobile) {
      if (Highlight?.length < 5) {
        return (
          <div className={style.AmmentiesPart}>
            {Highlight.map((item) => {
              return (
                <div className={`${style.Ammentiesbox}`}>
                  <div className={`${style.Ammentiesicon}`}>
                    <img src={`/assets/images/Amenities/${item}.png`} alt="" />
                  </div>
                  <h6>{item}</h6>
                </div>
              );
            })}
          </div>
        );
      }
    } else {
      return (
        <div>
          <Slider {...settings}>
            {Highlight.map((item) => {
              return (
                <div className={`${style.Ammentiesbox}`}>
                  <div className={`${style.Ammentiesicon}`}>
                    <img src={`/assets/images/Amenities/${item}.png`} alt="" />
                  </div>
                  <h6>{item}</h6>
                </div>
              );
            })}
          </Slider>
        </div>
      );
    }
  };

  return (
    <>
      <div className={`${style.AmmentiesCollection}`}>
        <div className={style.AmmentiesSection}>
          <h3>Activities</h3>
          {Higlited_render(props.property?.amenities?.activities)}
        </div>

        <div className={style.AmmentiesSection}>
          <h3>Facilities</h3>
          {Higlited_render(props.property?.amenities?.facilities)}
        </div>

        <div className={style.AmmentiesSection}>
          <h3>Safety</h3>
          {Higlited_render(props.property?.amenities?.safety)}
        </div>

        <div
          className={style.AmmentiesSection}
          style={{ borderBottom: "none" }}
        >
          <h3>Lisure</h3>
          {Higlited_render(props.property?.amenities?.leisure)}
        </div>
      </div>
    </>
  );
};

export default PropertyFeatures;
