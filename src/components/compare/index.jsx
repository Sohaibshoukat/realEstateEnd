import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import ComparePricing from "./ComparePricing";
import style from "./ComparingStyle.module.css"

const index = (props) => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

 
      {/* <!-- Our Pricing Table --> */}
      <section className={`our-pricing bgc-fa ${style.List_data}`}>
        <div className="container" style={{maxWidth:"95%"}}>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Compare Listings</h2>
                <p>We provide full service at every step</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="membership_container">
                <ul className="mc_parent_list" style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"}}>
                  <li className="list-inline-item" >
                    <ul className="mc_child_list one">
                      <li style={{height:"282px",position:"sticky",top:"70px",background:"white"}}>
                        <div className="membership_header dn"></div>
                      </li>
                      <li className={style.header_sec}><h3>Project Essentials</h3></li>
                      <li>Location</li>
                      <li>Unit Type Range</li>
                      <li>Unit Type Range</li>
                      <li>Project Status</li>
                      <li>Project Area</li>
                      <li>Total Units</li>
                      <li className={style.header_sec}><h3>Configurations</h3></li>
                      <li style={{height:"271.5px"}}>Floor Plan</li>
                      <li className={style.header_sec}><h3>Inside Project</h3></li>
                      <li>Approvals</li>
                      <li style={{height:"673.5px"}}>Amenitis</li>
                      <li className={style.header_sec}><h3>Specifications</h3></li>
                      <li>Roof Type</li>
                      <li>Walls Paint</li>
                      <li>Internal Wall thickness</li>
                      <li>External Wall Thickness</li>
                      <li>Living Room Tile</li>
                      <li>Bedroom Tile</li>
                      <li>Balcony Tile</li>
                      <li>Kitchen Tile</li>
                      <li>Bathroom Tile</li>
                      <li>Main Door</li>
                      <li>Inner Door</li>
                      <li>Windows</li>
                      <li>Wardrobe</li>
                      <li>Bathroom Fittings</li>
                      <li>Bedroom Fittings</li>
                      <li>Kitchen Equipment</li>
                      <li className={style.header_sec}><h3>Developer Info</h3></li>
                      <li style={{height:"300px"}}>Developer Previous Projects</li>
                      <li style={{height:"300px"}}>Developer Under Construction Projects</li>
                    </ul>
                  </li>
                  <ComparePricing properties={props.properties}/>
                </ul>
                {/* End .mc_parent_list */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Start Call to Action --> */}
      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
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

export default index;
