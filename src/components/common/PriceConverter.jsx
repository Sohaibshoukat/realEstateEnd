import React, { useState, useEffect } from "react";

const CurrencyConverter = ({PricePKR}) => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [priceInPKR, setPriceInPKR] = useState(PricePKR);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/9570681c5cc4ab4795dd0404/latest/PKR"
        );
        const data = await response.json();
        setExchangeRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertPrice = (currency) => {
    if (!exchangeRates) return null;

    const convertedPrice = priceInPKR * exchangeRates[currency];
    return convertedPrice.toFixed(0);
  };

  return (
    <>
      {exchangeRates && (
        <div className="Converstion_popup">
          <h4 style={{textAlign:"center"}}>Price Info</h4>
          <p style={{ color: "white" }}><b>PKR: {PricePKR}</b></p>
          <p style={{ color: "white" }}>AED: {convertPrice("AED")}</p>
          <p style={{ color: "white" }}>SAR: {convertPrice("SAR")}</p>
          <p style={{ color: "white" }}>GBD: {convertPrice("GBP")}</p>
          <p style={{ color: "white" }}>USD: {convertPrice("USD")}</p>
        </div>
      )}
    </>
  );
};

export default CurrencyConverter;
