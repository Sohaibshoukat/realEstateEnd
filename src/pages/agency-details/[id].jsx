import agenceis from "../../data/agency";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import SidebarListings from "../../components/agency-details/SidebarListings";
import TabDetailsContent from "../../components/agency-details/TabDetailsContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./DeveloperDetail.module.css"
import { useContext } from "react";
import DeveloperContext from "../../Context/Developer/DeveloperContext";

const AgencyDetailsDynamic = () => {
  const developercontext = useContext(DeveloperContext)
  const {developer} = developercontext

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990); // Set the desired breakpoint for mobile screens
    };

    handleResize(); // Check the initial screen width
    window.addEventListener('resize', handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  const router = useRouter();
  const [agency, setAgencyItem] = useState({});
  const id = router.query.id;


  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setAgencyItem(developer.find((item) => item._id == id));

    return () => {};
  }, [id]);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991 mt85 md-mt0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  {/* <BreadCrumb2 /> */}
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">
                  <div className="feat_property list agency">

                    <div className="details">
                      <div className="tc_content">
                        <h1>{agency?.DevName}</h1>
                        <h3 style={{textAlign:"left"}}>Developer</h3>
                      </div>
                      {/* End .tc_content */}

                      <div className="fp_footer">
                        <ul className="fp_meta float-start mb0">
                          {agency?.socialmediaAccount?.map((social, i) => (
                            <li className="list-inline-item" key={i}>
                              <a
                                href={social.URL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className={`fa ${social.type}`}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* End .fp_footer */}
                    </div>

                    {isMobile&&<div className={style.Developer_image_head}>
              <img
                        className="img-whp"
                        src={agency?.DevLog}
                        alt={agency?.DevLog}
                      />
              </div>}
                  </div>
                  {/* End .feat_property */}

                  <div className="shop_single_tab_content style2 mt30">
                    <TabDetailsContent id={id} name={agency?.developer}/>
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
            </div>
            {/* End .col-md-12 col-lg-8 content left side */}

            <div className="col-lg-4 col-xl-4">
              <div className={style.Developer_image}>
              <img
                        className="img-whp"
                        src={agency?.DevLog}
                        alt={agency?.DevLog}
                      />
              </div>

              <SidebarListings />
            </div>
            {/* End .col-lg-4 col-xl-4 content left side */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
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

export default AgencyDetailsDynamic;
