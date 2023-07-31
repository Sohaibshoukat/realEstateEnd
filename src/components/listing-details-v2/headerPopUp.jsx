import Link from "next/link";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import style from "./navbarPopUp.module.css";

const Header = ({ handleModel }) => {
  const [navbar, setNavbar] = useState(false);
  const [myColor, setmyColor] = useState(true);
  const [textColor, setTextColor] = useState(true);
  const [button_Color, setButtonColor] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setmyColor(false),
        setTextColor(false),
        setButtonColor(false),
        setNavbar(true);
    } else {
      setNavbar(false);
      setmyColor(true);
      setTextColor(true);
      setButtonColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  //   const { myState, setMyState } = useContext(MyContext);

  function handleClick() {
    localStorage.setItem("setIsModalOpen", false);
  }

  return (
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu" style={{ display: "block" }}>
        <div
          className={`header stylehome1 ${style.headerPopMobile}`}
        >
          <div className={style.backarrow} onClick={handleModel}>
            <img src="/assets/images/Arrows/previous.png" alt="" />
          </div>

          <div className="main_logo_home2 text-center">
            <img
              className="nav_logo_img img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span className="mt20">FindHouse</span>
          </div>
        </div>
      </div>
      {/* <!-- /.mobile-menu --> */}
    </div>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
