import React from "react";
import style from "./style.module.css";

const Part3 = () => {
  return (
    <div className={style.header}>
      <div className={style.question}>
        <h5 className={style.text}>9. How important is greenery for you?</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="How important is greenery for you"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          10. How important is Connectivity / Transits to you?
        </h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="How important is Transits to you"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          11. How Livability / active Community important to you?
        </h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="How Livability Community important to you"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>
          12. How important is the value of money important to you?
        </h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="How important is the value of money important to you?"
            className={style.input}
          />
        </div>
      </div>
    </div>
  );
};

export default Part3;
