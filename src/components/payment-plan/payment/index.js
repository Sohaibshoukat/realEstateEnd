import React, { useEffect, useState } from "react";
import style from "./style.module.css";
const Payment = (props) => {
  const [amount, setAmount] = useState(0);
  const [year, setYear] = useState(0);
  const [TotalPay, setTotalPay] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    amountCal();

    console.log(selectedOption);
  }, [amount, year, selectedOption]);

  function amountCal() {
    const rem = props.amount - amount;
    const yearDiv = year * 12;
    const interestAmount = 0;
    const monthlyInstallment = 0;

    if (amount != 0 && year != 0) {
      monthlyInstallment = parseInt(rem / yearDiv);
      interestAmount = parseInt(
        monthlyInstallment * (selectedOption / 100) + monthlyInstallment
      );
    } else if (amount == 0 && year != 0) {
      monthlyInstallment = parseInt(props.amount / yearDiv);
      interestAmount = parseInt(
        monthlyInstallment * (selectedOption / 100) + monthlyInstallment
      );
    }

    setTotalPay(interestAmount);
  }

  const handlerAmount = (event) => {
    setAmount(event.target.value);
  };
  const handlerYear = (event) => {
    setYear(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={style.header}>
      <div
        style={{
          padding: 20,
          paddingLeft: 30,
          marginBottom: -10,
          height: 50,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h5>Actual amount {props.amount}</h5>
      </div>
      <div className={style.container}>
        <h4>Upfront Amount</h4>
        <input
          type="range"
          min="5000"
          max="100000"
          step={5000}
          value={amount}
          onChange={handlerAmount}
          className={style.slider}
        />
        <div className={style.amount}>
          <h5>PKR</h5>
          <h5>{amount}</h5>
        </div>
      </div>

      <div className={style.containerCopy}>
        <h4>No of Years</h4>
        <input
          type="range"
          min="0"
          max="10"
          step={1}
          value={year}
          onChange={handlerYear}
          className={style.slider}
        />
        <div className={style.year}>
          <h5>Years</h5>
          <h5>{year}</h5>
        </div>
      </div>

      <div className={style.container1}>
        <h5 style={{ marginBottom: -8 }}>Your Monthly Payment :</h5>
        <hr style={{ height: 1, backgroundColor: "black" }} />
        <h5 style={{ marginTop: -10, opacity: 0.8, fontSize: 12 }}>
          base calculation
        </h5>

        <div className={style.c1Child1}>
          <div>
            <h5>{amount}</h5>
          </div>
          <div>
            <h5>{year}</h5>
          </div>

          <div>
            <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="0">0%</option>
              <option value="1">1%</option>
              <option value="2">2%</option>
              <option value="3">3%</option>
              <option value="4">4%</option>
            </select>
          </div>

          <div>
            <h3 className={style.totalPay}>{TotalPay}</h3>
          </div>
        </div>
        <hr
          style={{
            height: 1,
            backgroundColor: "black",
            margin: 20,
            marginTop: -8,
          }}
        />
        <div className={style.c1Child2}>
          <div>
            <h5 className={style.text}>Upfront Amount</h5>
          </div>
          <div>
            <h5 className={style.text}>No of Years</h5>
          </div>
          <div>
            <h5 className={style.text}>Interest Rate</h5>
          </div>
          <div>
            <h5 className={style.monthlyPayment}>Monthly Payment</h5>
          </div>
        </div>

        <div>
          <button className={style.c1Child3}>Get started</button>
        </div>
      </div>
    </div>
  );
};
export default Payment;
