import React, { useEffect, useState } from "react";
import Table from "../attributes";
import style from "./style.module.css";
import Table1 from "../attributes/index1";

const Commercial = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activecolor, setActiveColor] = useState(null);

  useEffect(() => {
    setActiveButton(1);
    setActiveColor(1);
  }, []);

  const dummArr = [
    "All",
    "Basement",
    "Ground Floor",
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor",
    "5th Floor",
    "6th Floor",
    "7th Floor",
    "8th Floor",
    "9th Floor",
    "10th Floor",
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
      {activeButton && activeButton == 1 ? <Table /> : null}
      {activeButton && activeButton == 2 ? <Table1 /> : null}
      {activeButton && activeButton == 3 ? <Table /> : null}
      {activeButton && activeButton == 4 ? <Table1 /> : null}
      {activeButton && activeButton == 5 ? <Table /> : null}
      {activeButton && activeButton == 6 ? <Table1 /> : null}
      {activeButton && activeButton == 7 ? <Table /> : null}
      {activeButton && activeButton == 8 ? <Table1 /> : null}
      {activeButton && activeButton == 9 ? <Table /> : null}
      {activeButton && activeButton == 10 ? <Table1 /> : null}
      {activeButton && activeButton == 11 ? <Table /> : null}
      {activeButton && activeButton == 12 ? <Table1 /> : null}
      {activeButton && activeButton == 13 ? <Table /> : null}
    </div>
  );
};

export default Commercial;
