import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { addLocation } from "../../features/properties/propertiesSlice";
import { useDispatch } from "react-redux";
import Slider from "react-slick";

const FindProperties = () => {

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
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

  const dispatch = useDispatch();

  const [Bahria, setBahria] = useState([]);
  const [dha, setdha] = useState([]);
  const [johartown, setjt] = useState([]);
  const [gulberg, setgulberg] = useState([]);
  const [mmalam, setmm] = useState([]);
  const [wapdatown, setwt] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/mainproject_get`)
      .then((res) => {
        setBahria(res.data.project_bahria);
        setdha(res.data.project_DHA);
        setjt(res.data.project_JT);
        setgulberg(res.data.project_gulberg);
        setmm(res.data.project_mm);
        setwt(res.data.project_wt);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updated = [
    {
      id: 1,
      img: "/assets/images/property/bh.jpg",
      name: "Bahria Town",
      number: Bahria.length,
      column: "",
    },
    {
      id: 2,
      img: "/assets/images/property/DHA.jpeg",
      name: "DHA",
      number: dha.length,
      column: "col-lg-4 col-xl-4",
    },
    {
      id: 3,
      img: "/assets/images/property/JT.jpg",
      name: "Johar Town",
      number: johartown.length,
      column: "",
    },
    {
      id: 4,
      img: "/assets/images/property/gulberg.jpg",
      name: "Gulberg",
      number: gulberg.length,
      column: "",
    },
    {
      id: 5,
      img: "/assets/images/property/ma.jpg",
      name: "M.M Alam",
      number: mmalam.length,
      column: "",
    },
    {
      id: 6,
      img: "/assets/images/property/wt.jpg",
      name: "Wapda Town",
      number: wapdatown.length,
      column: "",
    },
  ];
  return (
    <>
    <Slider {...settings} arrows={true}>
      {updated.slice(0, 6).map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4" key={item.id} onClick={(e) => dispatch(addLocation(item.name))}>
          <Link href="/listing-map-v4">
            <a>
              <div className="thumbsearch">
                <img
                  className="img-fluid w100"
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

export default FindProperties;
