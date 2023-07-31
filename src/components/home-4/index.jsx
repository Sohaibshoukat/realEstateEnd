import Blogs from "../common/Blogs";
import GlobalHeroFilter from "../common/GlobalHeroFilter";
import MobileMenu from "../common/header/MobileMenu";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import LookingItem from "./LookingItem";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import PopupSignInUp from "../common/PopupSignInUp";
import style from "./HomeStyling.module.css";
import Slider from "react-slick";
import AboutInvest from "./About_invest";
import Affordability from "./affordability";
import ProjectStatus from "./projectstatus";
import Steps from "./steps";
import Partener from "./partener";
import Developers from "./dev_sec";
import FeatureDeveloper from "./feature_dev";
import { useState } from "react";
import MobileFilter from "../common/MobileFilter";

const index = ({ data }) => {
  const [filterActive, setfilterActive] = useState(false);

  const filterChanger = () => {
    setfilterActive(!filterActive);
  };

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
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
        breakpoint: 540,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />
      {/* <!-- Modal --> */}
      <PopupSignInUp />
      {/* <!-- 4th Home Slider --> */}

      {/* RESPONSIVE MOBILE FILTER */}
      {filterActive && <MobileFilter filterChanger={filterChanger} />}

      <div className="home-four ">
        <div className="container-fluid p0">
          <div className="main-banner-wrapper">
            <div className="arrow-style-2 banner-style-one ">
              <HeroSlider />
            </div>
          </div>
          {/* <!-- /.main-banner-wrapper --> */}
        </div>
        {/* End .container-fluid */}

        <div
          className="container home_iconbox_container"
          style={{ maxWidth: "1170px" }}
        >
          <div className="row posr">
            <div className="col-lg-12">
              <div className="home_content home4">
                <GlobalHeroFilter
                  className="home4"
                  filterChanger={filterChanger}
                  filterActive={filterActive}
                />
              </div>
            </div>
          </div>
          <div className="row hidden_feature">
            <div className="col-lg-12">
              <h4 className="text-center color-white fw600 mb0-520">
                What are you looking for?
              </h4>
              <ul className="home4_iconbox mb0">
                <LookingItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* About Company */}
      <section className={style.About_Us}>
        <div className={`container ovh ${style.Content_about_response} `}>
          <div className={style.About_main_img}>
            <div className={style.about_img}>
              <img src="/assets/images/about/About_img.jpg" alt="" />
            </div>
          </div>
          <div className={style.About_main_Content}>
            <div className={style.Content_about}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam eum ea sit aliquam nemo aperiam harum animi esse nam,
                pariatur voluptate facilis, cupiditate exercitationem quisquam
                rerum quos sint enim nesciunt? Corrupti non eaque esse commodi
                laboriosam harum voluptate dignissimos quae fuga similique vel
                cum
              </p>
              <a href="" className={`btn btn-thm ${style.custom_btn}`}>
                Discover know
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Suggestion Scroll */}
      <section className={style.Suggestion_Scroll}>
        <div className={`container ${style.scroller_data}`}>
          <div className={`rowzzzz`}>
            <div className="main-title text-left">
              <h1>Succesfull Investment With Number Of Advantages</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="best_property_slider gutter-x15">
                <Slider {...settings} arrows={true}>
                  {AboutInvest.map((item) => (
                    <div className={`item`} key={item.id}>
                      <div className=" properti_city style2 d-block feat_property home3">
                        <div className="details">
                          <div className="tc_content">
                            <h4>{item.Title}</h4>
                            <ul className="prop_details mb0">
                              <p>{item.description}</p>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-left">
                <h1>Pick Up By Location</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <FindProperties />
            <div></div>
          </div>
        </div>
      </section>
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-left">
                <h1>Pick Up By Affordability</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <Affordability />
          </div>
        </div>
      </section>
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-left">
                <h1>Pick Up By Project Status</h1>
              </div>
            </div>
          </div>
          <div className="p-0">
            <ProjectStatus />
          </div>
        </div>
      </section>
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-left">
                <h1>Become a HomeOwner in Seven Steps</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <Steps />
          </div>
        </div>
      </section>
      <section id="property-city" className="property-city bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-left">
                <h1>Interested in Developing or Partening With Us?</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <Partener />
          </div>
        </div>
      </section>
      {/* Featured Developer */}
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <FeatureDeveloper />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Blog --> */}
      <section className="our-blog pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-left">
                <h1>Want To Know More Read Our Blogs</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const data = await main_project.find({});
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
}

export default index;
