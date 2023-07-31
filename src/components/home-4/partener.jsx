import React from "react";
import partner from "../../data/partner";
import Link from "next/link";
import style from "./design.module.css";
import Slider from "react-slick";

const partener = () => {
  const settings = {
    arrows: true,
    slidesToShow: 3,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.main}>
      <button className="btn btn-thm btn-big">Let's Talk</button>
      <div className={style.divs}>
      <Slider {...settings} arrows={true} className={style.slide}>
        {partner.slice(0, 5).map((item) => (
         <div className={`item`} key={item.id}>
            <div className={`d-block home3 ${style.Talk_Block}`}>
              <div className="details">
                <div className="tc_content">
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default partener;
