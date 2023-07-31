import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";
import SearchBar from "../../SearchBar";
import style from "../../../searchbar.module.css";

const Header = () => {
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

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Menu Toggle btn--> */}
        <Link href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <img
              className="logo2 img-fluid"
              src="/assets/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>FindHouse</span>
          </a>
        </Link>
        {/* site logo brand */}

        <nav className={style.flex}>
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
