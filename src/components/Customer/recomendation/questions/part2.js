import React from "react";
import { useState } from "react";
import style from "./style.module.css";

const Part2 = () => {
  const [q5, setq5] = useState("");
  const [q6, setq6] = useState("");
  const [q8, setq8] = useState("");

  const Container5 = (event) => {
    setq5(event.target.value);
  };

  const Container6 = (event) => {
    setq6(event.target.value);
  };

  const Container8 = (event) => {
    setq8(event.target.value);
  };

  return (
    <div className={style.header}>
      <div className={style.question}>
        <h5 className={style.text}>
          5. When are you planning to take the procession?
        </h5>

        <div className={style.ans}>
          <button
            value="Instant"
            onClick={Container5}
            className={style.btn}
            style={{
              backgroundColor: q5 === "Instant" ? "green" : "white",
              color: q5 === "Instant" ? "white" : "black",
            }}
          >
            Instant
          </button>
          <button
            value="same year"
            onClick={Container5}
            style={{
              backgroundColor: q5 === "same year" ? "green" : "white",
              color: q5 === "same year" ? "white" : "black",
            }}
            className={style.btn}
          >
            same year
          </button>
          <button
            value="within 2 years"
            onClick={Container5}
            style={{
              backgroundColor: q5 === "within 2 years" ? "green" : "white",
              color: q5 === "within 2 years" ? "white" : "black",
            }}
            className={style.btn}
          >
            within 2 years
          </button>

          <button
            value="within 4 year"
            onClick={Container5}
            style={{
              backgroundColor: q5 === "within 4 year" ? "green" : "white",
              color: q5 === "within 4 year" ? "white" : "black",
            }}
            className={style.btn}
          >
            within 4 year
          </button>
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          6. What type of project prices do you prefer?
        </h5>

        <div className={style.ans}>
          <button
            value="Low for average projects"
            onClick={Container6}
            className={style.btn}
            style={{
              backgroundColor:
                q6 === "Low for average projects" ? "green" : "white",
              color: q6 === "Low for average projects" ? "white" : "black",
            }}
          >
            Low for average projects
          </button>

          <button
            value="medium for suitable"
            onClick={Container6}
            style={{
              backgroundColor: q6 === "medium for suitable" ? "green" : "white",
              color: q6 === "medium for suitable" ? "white" : "black",
            }}
            className={style.btn}
          >
            medium for suitable
          </button>

          <button
            value="high price for high-end"
            onClick={Container6}
            style={{
              backgroundColor:
                q6 === "high price for high-end" ? "green" : "white",
              color: q6 === "high price for high-end" ? "white" : "black",
            }}
            className={style.btn}
          >
            high price for high-end
          </button>
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          7. Choose top 3 amenities you want for in project
        </h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Choose top 3 amenities you want for in project"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          8. Which floor project do you prefer to buy?
        </h5>

        <div className={style.ans}>
          <button
            value="1-10 story"
            onClick={Container8}
            className={style.btn}
            style={{
              backgroundColor: q8 === "1-10 story" ? "green" : "white",
              color: q8 === "1-10 story" ? "white" : "black",
            }}
          >
            1-10 story
          </button>
          <button
            value="10-20 Story"
            onClick={Container8}
            style={{
              backgroundColor: q8 === "10-20 Story" ? "green" : "white",
              color: q8 === "10-20 Story" ? "white" : "black",
            }}
            className={style.btn}
          >
            10-20 Story
          </button>
          <button
            value="20-30 Story"
            onClick={Container8}
            style={{
              backgroundColor: q8 === "20-30 Story" ? "green" : "white",
              color: q8 === "20-30 Story" ? "white" : "black",
            }}
            className={style.btn}
          >
            20-30 Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part2;
