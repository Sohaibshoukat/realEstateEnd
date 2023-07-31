import React, { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import FloorDetails from "../floor-details";
import style from "./style.module.css";

const Table1 = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [buildingOrder, setBuildingOrder] = useState(false);
  const [floororder, setFloorOrder] = useState(false);
  const [bedsorder, setBedsOrder] = useState(false);
  const [monthorder, setMonthOrder] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [mapRendering, setMapRendering] = useState([]);

  const handleClick = (index) => {
    setActiveIndexes((prevIndexes) => {
      const indexExists = prevIndexes.includes(index);
      if (indexExists) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  useEffect(() => {
    if (buttonName == "Month" && monthorder) {
      const MonthAscending = [...values].sort((a, b) => a.Monthly - b.Monthly);
      setMapRendering(MonthAscending);
    } else if (buttonName == "Month" && !monthorder) {
      const Monthdscending = [...values].sort((a, b) => b.Monthly - a.Monthly);
      setMapRendering(Monthdscending);
    } else if (buttonName == "Beds" && bedsorder) {
      const BedsAscending = [...values].sort((a, b) => a.Beds - b.Beds);
      setMapRendering(BedsAscending);
    } else if (buttonName == "Beds" && !bedsorder) {
      const Bedsdscending = [...values].sort((a, b) => b.Beds - a.Beds);
      setMapRendering(Bedsdscending);
    } else if (buttonName == "Floor" && floororder) {
      const FloorAscending = [...values].sort((a, b) =>
        a.FloorPlan > b.FloorPlan ? 1 : -1
      );
      setMapRendering(FloorAscending);
    } else if (buttonName == "Floor" && !floororder) {
      const Floordscending = [...values].sort((a, b) =>
        a.FloorPlan > b.FloorPlan ? -1 : 1
      );
      setMapRendering(Floordscending);
    } else if (buttonName == "Build" && buildingOrder) {
      const BuildAscending = [...values].sort((a, b) =>
        a.Building > b.Building ? 1 : -1
      );
      setMapRendering(BuildAscending);
    } else if (buttonName == "Build" && !buildingOrder) {
      const Builddscending = [...values].sort((a, b) =>
        a.Building > b.Building ? -1 : 1
      );
      setMapRendering(Builddscending);
    } else {
      setMapRendering(values);
    }
  }, [monthorder, bedsorder, floororder, buildingOrder]);

  const values = [
    {
      Building: "G Block",
      FloorPlan: "avari",
      UnitNo: 110,
      Beds: 9,
      Bath: 5,
      SQFt: 5240,
      Floor: 5,
      Monthly: 700000,
    },
    {
      Building: "I Block  ",
      FloorPlan: "sfaari",
      UnitNo: 108,
      Beds: 5,
      Bath: 3,
      SQFt: 1475,
      Floor: 4,
      Monthly: 3200000,
    },
    {
      Building: "Z Block",
      FloorPlan: "Castu",
      UnitNo: 508,
      Beds: 6,
      Bath: 3,
      SQFt: 1645,
      Floor: 4,
      Monthly: 24500000,
    },
    {
      Building: "F Block",
      FloorPlan: "DHA",
      UnitNo: 467,
      Beds: 10,
      Bath: 10,
      SQFt: 4959,
      Floor: 4,
      Monthly: 6500000,
    },
  ];

  return (
    <div className={style.header}>
      <div className={style.attr}>
        <div
          className={style.test}
          onClick={() => {
            setBuildingOrder(!buildingOrder), setButtonName("Build");
          }}
        >
          <button className={style.items1}>Building</button>
          {buildingOrder ? <FaCaretDown /> : <FaCaretUp />}
        </div>

        <div
          className={style.test}
          onClick={() => {
            setFloorOrder(!floororder), setButtonName("Floor");
          }}
        >
          <button className={style.items1}>FloorPlan</button>
          {floororder ? <FaCaretDown /> : <FaCaretUp />}
        </div>

        <button className={style.items}>UnitNo</button>

        <div
          className={style.test}
          onClick={() => {
            setBedsOrder(!bedsorder), setButtonName("Beds");
          }}
        >
          <button className={style.items1}>Beds</button>
          {bedsorder ? <FaCaretDown /> : <FaCaretUp />}
        </div>

        <button className={style.items}>Bath</button>
        <button className={style.items}>Sqft</button>
        <button className={style.items}>Floor</button>

        <div
          className={style.test}
          onClick={() => {
            setMonthOrder(!monthorder), setButtonName("Month");
          }}
        >
          <button className={style.items1}>Monthly</button>
          {monthorder ? <FaCaretDown /> : <FaCaretUp />}
        </div>
      </div>

      {mapRendering.map((item, index) => {
        return (
          <>
            <div className={style.list}>
              <h5>{item.Building}</h5>
              <h5>{item.FloorPlan}</h5>
              <h5>{item.UnitNo}</h5>
              <h5>{item.Beds}</h5>
              <h5>{item.Bath}</h5>
              <h5>{item.SQFt}</h5>
              <h5>{item.Floor}</h5>
              <h5>{item.Monthly}</h5>
              <h5 className={style.icon} onClick={() => handleClick(index)}>
                {activeIndexes.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </h5>
              {activeIndexes.includes(index) ? (
                <FloorDetails amount={item.Monthly} />
              ) : null}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Table1;
