import React from "react";
import style from "./navbarPopUp.module.css";
import { useState,useEffect } from "react";


const HighlightedIcon = ({ property }) => {
  const [isMobile, setIsMobile] = useState(false);
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    innerWidth: 0,
  };

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
  return (
    <>
      <div className={`${style.Highlighted_Icon}`}>
        <div className="container">
          <div className={`${style.grid}`}>
            {property?.HighlightIcon &&
              Object.keys(property?.HighlightIcon).map((key, i) => {
                return (
                  <div className={`${style.Icon_portion}`} key={i}>
                    <div className={`${style.Icon}`}>
                      <img
                        src={`/assets/images/Highlited/${key}.${
                          "png" || "jpg"
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="Icon_text">
                      <h4>{property?.HighlightIcon[key]}</h4>
                      <p>{key}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightedIcon;
