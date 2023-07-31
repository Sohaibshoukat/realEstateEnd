import React, { useState, useEffect } from "react";
import axios from "axios";

const property_data = () => {
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

  return updated;
};

export default property_data;
