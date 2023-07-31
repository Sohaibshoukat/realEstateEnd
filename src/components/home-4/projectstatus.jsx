import Link from "next/link";
import ProjectStatus from "../../data/projectstatus";
import Slider from "react-slick";
import style from "./design.module.css";
import { useDispatch } from "react-redux";
import { addStatus } from "../../features/properties/propertiesSlice";

const Project_Status = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
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
        breakpoint: 980,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 300,
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
      <Slider {...settings} arrows={true} className={style.slider}>
        {ProjectStatus.slice(0, 5).map((item) => (
          <div
            className="col-sm-6 col-lg-4 col-xl-4"
            key={item.id}
            onClick={(e) => dispatch(addStatus(item.name))}
          >
            <Link href="/listing-map-v4">
              <a>
                <div className="thumbsearch">
                  <img
                    className="image-fluid w-100"
                    src={item.img}
                    alt="pc1.jpg"
                  />
                </div>
                <div className="details">
                  <h3>{item.name}</h3>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Project_Status;
