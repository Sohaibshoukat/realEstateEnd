import React, { useEffect, useState } from "react";
import Commercial from "./commercial";
import Residental from "./residential";
import style from "./style.module.css";
import ValuePkrConverter from "../common/ValuePkrConverter";

const PaymentPlan = (props) => {
  const [commercial, setCommercial] = useState(false);
  const [residental, setResidental] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

  const [PlanSet, setPlanSet] = useState("All")
  const [DetailVisble, setDetailVisble] = useState(false)

  useEffect(() => {
    setCommercial(true), setActive(true);
  }, []);

  const CommercialBtn = () => {
    setCommercial(!commercial);
    setActive(!active);
    setResidental(false);
    setActive1(false);
  };

  const ResentalBtn = () => {
    setCommercial(false);
    setActive(false);
    setResidental(!residental);
    setActive1(!active1);
  };

  return (
    <>
      <div className={style.header}>
        <div className={`px-3 ${style.btnContainer}`}>
          <div>
            <h3>Payment Plan</h3>
          </div>
          {/* <div>
          {props.property.paymentPlan.map((item) => {
            <button
              className={style.btn}
              style={{ backgroundColor: active ? "pink" : null }}
              onClick={CommercialBtn}
            >
              Commercial
            </button>
          })}
        </div> */}
        </div>
      </div>

      <div className={`px-3 ${style.Plan_head}`}>
        <button className={`btn btn-thm ${style.btnplan}`} value={"All"} onClick={() => { setPlanSet("All") }}>ALL</button>
        {props.property?.paymentPlan?.map((item) => {
          return (
            <button className={`btn btn-thm ${style.btnplan}`} value={item.Title} onClick={() => { setPlanSet(item.Title) }}>{item.Title}</button>
          )
        })}
      </div>

      <div className={style.PaymentBlock}>
        <div className={style.InPlanHeader}>
          <h5>STORY</h5>
          <h5>HOUSE</h5>
          <h5>UNIT PRICE</h5>
          <h5>BED</h5>
          <h5>BATH</h5>
          <h5>SQFT</h5>
          <h5>MONTHLY</h5>
        </div>

        {PlanSet == "All" ?
          props.property?.paymentPlan?.map((item) =>
            item?.InPlan?.map((item2) =>
              <div className={style.InPlan}>
                <div className={style.Plan_Over} onClick={() => { setDetailVisble(!DetailVisble) }}>
                  {item2?.Plan &&
                    Object.keys(item2?.Plan).map((key, i) => {
                      if (key == "UnitPrice") {
                        return (
                          <p>{ValuePkrConverter(item2?.Plan[key])}</p>
                        )
                      }
                      else {
                        return (
                          <p>{item2?.Plan[key]}</p>)
                      }
                    }
                    )}
                </div>
                {DetailVisble &&
                  <div className={style.Data}>
                    <div className={style.Data_Down}>
                      <h3>{item2?.Plan?.housePlan}</h3>
                      {item2?.Dropdown?.descriptionPoint.map((item) =>
                        <p>- {item}</p>
                      )
                      }
                    </div>
                    <div className={style.Floor_Down}>
                      <img src={item2?.Dropdown?.FloorImage} alt="" />
                    </div>
                  </div>
                }
              </div>
            )
          )
          : props.property?.paymentPlan?.map((item) =>
            item.Title == PlanSet && item?.InPlan?.map((item2) =>
              <div className={style.InPlan}>
                <div className={style.Plan_Over} onClick={() => { setDetailVisble(!DetailVisble) }}>
                  {item2?.Plan &&
                    Object.keys(item2?.Plan).map((key, i) => {
                      if (key == "UnitPrice") {
                        return (
                          <p>{ValuePkrConverter(item2?.Plan[key])}</p>
                        )
                      }
                      else {
                        return (
                          <p>{item2?.Plan[key]}</p>)
                      }
                    }
                    )}
                </div>
                {DetailVisble &&
                  <div className={style.Data}>
                    <div className={style.Data_Down}>
                      <h3>{item2?.Plan?.housePlan}</h3>
                      {item2?.Dropdown?.descriptionPoint.map((item) =>
                        <p>- {item}</p>
                      )
                      }
                    </div>
                    <div className={style.Floor_Down}>
                      <img src={item2?.Dropdown?.FloorImage} alt="" />
                    </div>
                  </div>
                }
              </div>
            )
          )
        }

      </div>
    </>
  );
};

export default PaymentPlan;
