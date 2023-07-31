import { useEffect } from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { addPrice } from "../../features/properties/propertiesSlice";

const RangeSlider = () => {
  const {
    price
  } = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const [Price, setPrice] = useState({ value: { min: price.min, max: price.max } });
  

  const handleOnChange = (value) => {
    console.log(value)
    setPrice({ value });
  };

  // price add to state
  useEffect(() => {
    dispatch(
      addPrice({
        min: Price.value.min,
        max: Price.value.max,
      })
    );
  }, [dispatch, Price, addPrice]);

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            <span>{Price.value.min}</span>
          </div>
        </div>
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            <span>{Price.value.max}</span>
          </div>
        </div>
      </div>

      <InputRange
        formatLabel={(value) => ``}
        maxValue={20000}
        minValue={10000}
        value={Price.value}
        onChange={(value) => handleOnChange(value)}
      />

      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
