import React from "react";
import style from "./style.module.css";

const Part4 = () => {
  return (
    <div className={style.header}>
      <div className={style.question}>
        <h5 className={style.text}>
          13. Do you need the Project to be approved by LDA, FBR etc
        </h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Do you need the Project to be approved by LDA"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          12. Do you need company secured projects?
        </h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Do you need company secured projects"
            className={style.input}
          />
        </div>
      </div>
    </div>
  );
};

export default Part4;
