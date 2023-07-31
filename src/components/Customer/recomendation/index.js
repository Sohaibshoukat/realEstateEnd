import React, { useEffect, useState } from "react";
import Part1 from "./questions/part1";
import Part2 from "./questions/part2";
import Part3 from "./questions/part3";
import Part4 from "./questions/part4";
import style from "./style.module.css";

function Recommendation() {
  const [activePart, setActivePart] = useState("");
  const [activeColor, setActiveColor] = useState(null);

  useEffect(() => {
    setActivePart("one"), setActiveColor("btn1");
  }, []);

  return (
    <div className={style.header}>
      <div className={style.container1}>
        <h3 className={style.selectionTxt}>Selection</h3>
        <h5 className={style.selectionTxt1}>
          Choose where and what you wish to study
        </h5>
      </div>

      <div className={style.container2}>
        <div
          className={style.numeric}
          style={{
            backgroundColor: activeColor === "btn1" ? "#ff5a5f" : null,
          }}
          onClick={() => {
            setActivePart("one"), setActiveColor("btn1");
          }}
        >
          <h5 className={style.numericTxt}>1</h5>
        </div>
        <div
          className={style.numeric}
          style={{
            backgroundColor: activeColor === "btn2" ? "#ff5a5f" : null,
          }}
          onClick={() => {
            setActivePart("two"), setActiveColor("btn2");
          }}
        >
          <h5 className={style.numericTxt}>2</h5>
        </div>
        <div
          className={style.numeric}
          style={{
            backgroundColor: activeColor === "btn3" ? "#ff5a5f" : null,
          }}
          onClick={() => {
            setActivePart("three"), setActiveColor("btn3");
          }}
        >
          <h5 className={style.numericTxt}>3</h5>
        </div>
        <div
          className={style.numeric}
          style={{
            backgroundColor: activeColor === "btn4" ? "#ff5a5f" : null,
          }}
          onClick={() => {
            setActivePart("four"), setActiveColor("btn4");
          }}
        >
          <h5 className={style.numericTxt}>4</h5>
        </div>
      </div>

      {activePart === "one" && <Part1 />}
      {activePart === "two" && <Part2 />}
      {activePart === "three" && <Part3 />}
      {activePart === "four" && <Part4 />}
    </div>
  );
}

export default Recommendation;
