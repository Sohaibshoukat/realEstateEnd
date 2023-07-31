import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import style from "./navbarPopUp.module.css"

const DecisionDriver = (props) => {
  return (
    <div className="style2">
      <div className="icons_drivers">
        {props?.property?.DecisionDriver?.map((item) => {
          return (
            <>
              <div className={style.drivers}>
                <CircularProgressbar
                  value={item?.Value}
                  text={item?.Value}
                  strokeWidth={12}
                  styles={{
                    path: {
                      stroke: "#1B46B9",
                      strokeLinecap: "butt", // Change strokeLinecap to "butt" for flat edges
                      transition: "stroke-dashoffset 0.5s ease 0s",
                    },
                    text: {
                      fill: "black",
                      fontSize: "24px",
                      fontWeight: 700, // Set fontWeight to 700
                      dominantBaseline: "middle", // Vertically center the text
                      textAnchor: "middle", // Horizontally center the text
                    },
                    trail: {
                      stroke: "#e0e0e0",
                    },
                  }}
                />
                <div className="text_driver text-center mt-3">
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

export default DecisionDriver;
