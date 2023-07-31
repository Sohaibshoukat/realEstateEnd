import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import StarRatings from "react-star-ratings";
import style from "./navbarPopUp.module.css"

const Rating = (props) => {
  return (
    <div className="icon_box_area style2">
      <div className="icons_drivers">
        {props?.property?.RatingDrivers?.map((item) => {
          return (
            <>
              <div className={style.rating}>
                <StarRatings
                  rating={item?.Value} // The rating value (between 0 and 5)
                  starRatedColor="yellow" // Set the star color to yellow
                  starEmptyColor="#e3e3e3" // Set the empty star color
                  starHoverColor="yellow" // Set the star color on hover
                  numberOfStars={5} // The total number of stars
                  starDimension="20px" // Set the size of the stars to 20px
                  starSpacing="2px" // Set the spacing between stars
                />
                <div className="text_driver text-left mt-3">
                  <h4>{item?.Title}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
