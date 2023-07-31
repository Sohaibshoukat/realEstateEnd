import React, { useState } from "react";
import style from "./style.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={style.header}>
      <div className={style.question}>
        <h5 className={style.text}>Father Name</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Father Name"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>CNIC Number</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="CNIC Number"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Passport number</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Passport number"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Email</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Email" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Phone No</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Phone No" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Mobile No</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Mobile No" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Gender</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Gender" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Date of birth</h5>
        <div className={style.ans}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Nationality</h5>
        <div className={style.ans}>
          <input
            type="text"
            placeholder="Nationality"
            className={style.input}
          />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Country</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Country" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>Address</h5>
        <div className={style.ans}>
          <input type="text" placeholder="Address" className={style.input} />
        </div>
      </div>

      <div className={style.question}>
        <h5 className={style.text}>State</h5>
        <div className={style.ans}>
          <input type="text" placeholder="State" className={style.input} />
        </div>
      </div>
    </div>
  );
};

export default Form;
