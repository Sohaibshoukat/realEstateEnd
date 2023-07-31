import React from "react";
import { useState, useEffect } from "react";
import Table from "../attributes";
import style from "./style.module.css";

const Residental = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activecolor, setActiveColor] = useState(null);

  useEffect(() => {
    setActiveButton(1);
    setActiveColor(1);
  }, []);

  const dummArr = [
    "All",
    "Studio",
    "1 bed",
    "2 bed",
    "3 bed",
    "4 bed",
    "5 bed",
    "6 bed",
    "Penthouses",
  ];

  const handleClick = (index) => {
    index === activeButton
      ? (setActiveButton(null), setActiveColor(null))
      : (setActiveButton(index), setActiveColor(index));
  };

  return (
    <div className={style.header}>
      {dummArr.map((item, index) => {
        return (
          <button
            style={{
              backgroundColor: activecolor == index + 1 ? "pink" : null,
            }}
            onClick={() => handleClick(index + 1)}
          >
            {item}
          </button>
        );
      })}
      {activeButton ? <Table /> : null}
    </div>
  );
};

export default Residental;
