import React from "react";
import { useEffect, useState } from "react";
import Form from "./Form";
import NomineeDetail from "./NomineDetail";
import style from "./style.module.css";

const HeaderBar = () => {
  const [activePart, setActivePart] = useState("");
  const [activeColor, setActiveColor] = useState(null);

  useEffect(() => {
    setActivePart("one"), setActiveColor("btn1");
  }, []);

  return (
    <>
      <div className={style.headerbar}>
        <div
          className={style.textContainer}
          style={{
            backgroundColor: activeColor === "btn1" ? "pink" : null,
          }}
          onClick={() => {
            setActivePart("one"), setActiveColor("btn1");
          }}
        >
          <h5 className={style.Txt}>Profile</h5>
        </div>

        <div
          className={style.textContainer}
          style={{
            backgroundColor: activeColor === "btn2" ? "pink" : null,
          }}
          onClick={() => {
            setActivePart("two"), setActiveColor("btn2");
          }}
        >
          <h5 className={style.Txt}>Nominee</h5>
        </div>
      </div>
      <div>
        {activePart === "one" && <Form />}
        {activePart === "two" && <NomineeDetail />}
      </div>
    </>
  );
};

export default HeaderBar;
