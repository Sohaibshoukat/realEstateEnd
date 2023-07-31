import React, { useState } from "react";
import Image from "next/image";
import floorPlan from "../../../../public/assets/images/2dFloor/floorPlan.png";
import Payment from "../payment";
import style from "./style.module.css";

const FloorDetails = (props) => {
  const [payment, setPayment] = useState(false);
  return (
    <>
      <div className={style.header}>
        <div className={style.details}>
          <h3>415</h3>
          <h5>Building A</h5>
          <h5>480 W Broad C</h5>
          <ul>
            <li>- government steal appliances</li>
            <li>- balcony on every department</li>
            <li>- Energy efficient appliances</li>
            <li>- government steal appliances</li>
          </ul>

          <div className={style.btnContainer}>
            <button
              style={{ backgroundColor: payment ? "pink" : null }}
              className={style.btn}
              onClick={() => setPayment(!payment)}
            >
              Lease now
            </button>
            <button className={style.btn}>Schedule a tour</button>
            <button className={style.btn}>360 tour</button>
          </div>
        </div>
        <div>
          <Image
            src={floorPlan}
            alt="Picture of the Floor"
            width="350px"
            height="250px"
          />
        </div>
      </div>
      {payment && <Payment amount={props.amount} />}
    </>
  );
};

export default FloorDetails;
