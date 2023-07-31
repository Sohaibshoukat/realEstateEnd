import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import Customerbody from "./Customerbody";
import style from "./CustomerStyling.module.css";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      <div className={`${style.Customer_div}`}>
        <div className={`${style.Uper_show}`}></div>
        <div className={`${style.Customer_body}`}>
          <div className={`${style.Customer_Area}`}>
            <Customerbody/>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
