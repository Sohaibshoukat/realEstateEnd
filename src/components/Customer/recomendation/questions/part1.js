import React from "react";
import { useState } from "react";
import style from "./style.module.css";

const Part1 = () => {
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");

  const Container1 = (event) => {
    setq1(event.target.value);
  };

  const Container2 = (event) => {
    setq2(event.target.value);
  };

  const Container3 = (event) => {
    setq3(event.target.value);
  };
  return (
    <div className={style.header}>
      <div className={style.question}>
        <h5 className={style.text}>1. Why do you want to buy the project?</h5>

        <div className={style.ans}>
          <button
            value="investment"
            onClick={Container1}
            className={style.btn}
            style={{
              backgroundColor: q1 === "investment" ? "green" : "white",
              color: q1 === "investment" ? "white" : "black",
            }}
          >
            Investment
          </button>
          <button
            value="rental"
            onClick={Container1}
            style={{
              backgroundColor: q1 === "rental" ? "green" : "white",
              color: q1 === "rental" ? "white" : "black",
            }}
            className={style.btn}
          >
            rental
          </button>
          <button
            value="residential"
            onClick={Container1}
            style={{
              backgroundColor: q1 === "residential" ? "green" : "white",
              color: q1 === "residential" ? "white" : "black",
            }}
            className={style.btn}
          >
            residential
          </button>
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>2. What are you looking for?</h5>

        <div className={style.ans}>
          <button
            value="Apartment"
            onClick={Container2}
            className={style.btn}
            style={{
              backgroundColor: q2 === "Apartment" ? "green" : "white",
              color: q2 === "Apartment" ? "white" : "black",
            }}
          >
            Apartment
          </button>
          <button
            value="commercial"
            onClick={Container2}
            style={{
              backgroundColor: q2 === "commercial" ? "green" : "white",
              color: q2 === "commercial" ? "white" : "black",
            }}
            className={style.btn}
          >
            commercial
          </button>
          <button
            value="townhouse"
            onClick={Container2}
            style={{
              backgroundColor: q2 === "townhouse" ? "green" : "white",
              color: q2 === "townhouse" ? "white" : "black",
            }}
            className={style.btn}
          >
            townhouse
          </button>
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>3. Size of unit type?</h5>

        <div className={style.ans}>
          <button
            value="Studio"
            onClick={Container3}
            className={style.btn}
            style={{
              backgroundColor: q3 === "Studio" ? "green" : "white",
              color: q3 === "Studio" ? "white" : "black",
            }}
          >
            Studio
          </button>
          <button
            value="commercial"
            onClick={Container3}
            style={{
              backgroundColor: q3 === "1bhk" ? "green" : "white",
              color: q3 === "1bhk" ? "white" : "black",
            }}
            className={style.btn}
          >
            1bhk
          </button>
          <button
            value="2bhk"
            onClick={Container3}
            style={{
              backgroundColor: q3 === "2bhk" ? "green" : "white",
              color: q3 === "2bhk" ? "white" : "black",
            }}
            className={style.btn}
          >
            2bhk
          </button>
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>4. Top 3 Preferred Locations</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Prefered Location"
            className={style.input}
          />
        </div>
      </div>
    </div>
  );
};

export default Part1;
