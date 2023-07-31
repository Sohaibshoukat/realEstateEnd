import { useEffect, useState } from "react";
import style from "./ListingDetail.module.css";
import Slider from "react-slick";

const PropertySpecification = (props) => {
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

  const Specification_render = (Highlight) => {
    if (!isMobile) {
      if (Highlight?.length < 5) {
        return (
          <div className={`${style.SpecificationPart}`}>
            {Highlight?.map((item) => {
              return (
                <div className={`${style.Specificationbox}`}>
                  <h5>{item.Title}</h5>
                  <h6>{item.Description}</h6>
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
            {Highlight?.map((item) => {
              return (
                <div className={`${style.Specificationbox}`}>
                  <h5>{item.Title}</h5>
                  <h6>{item.Description}</h6>
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
        <div className={`${style.AmmentiesSection}`}>
          <h3>Structure</h3>
          {Specification_render(
            props.property?.list_of_specifications?.Structure
          )}
        </div>

        <div className={`${style.AmmentiesSection}`}>
          <h3>Flooring</h3>
          {Specification_render(
            props.property?.list_of_specifications?.Flooring
          )}
        </div>
        <div className={`${style.AmmentiesSection}`}>
          <h3>
            Doors<br></br> Wardrobe <br></br> Windows
          </h3>
          {Specification_render(
            props.property?.list_of_specifications?.doorsWindowsWardrobe
          )}
        </div>
        <div className={`${style.AmmentiesSection}`}>
          <h3>
            Bedroom<br></br>Bathroom<br></br>Kitchen
          </h3>
          {Specification_render(
            props.property?.list_of_specifications?.bedroomBathroomKitchen
          )}
        </div>
      </div>
    </>
  );
};

export default PropertySpecification;
