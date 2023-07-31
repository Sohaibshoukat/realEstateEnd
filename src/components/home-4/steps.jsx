import Link from "next/link";
import Steps from "../../data/steps";
import Slider from "react-slick";
import style from "./design.module.css";

const Project_Status = () => {
  const settings = {
    arrows: true,
    slidesToShow: 3,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} arrows={true} className={style.slide}>
        {Steps.slice(0, 9).map((item) => (
          <div className={`item`} key={item.id}>
          <div className=" properti_city style2 d-block feat_property home3">
            <div className="details">
              <div className="tc_content">
                <h4>{item.name}</h4>
                <ul className="prop_details mb0">
                  <p>{item.description}</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </>
  );
};

export default Project_Status;
