import { useEffect, useState } from "react";
import Pagination from "../../common/blog/Pagination";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar2 from "../../common/listing/FilterTopBar2";
import GridListButton from "../../common/listing/GridListButton";
import PopupSignInUp from "../../common/PopupSignInUp";
import FeaturedItem from "./FeaturedItem";
import FilteringItem from "./FilteringTop";
import MyGoogleMap from "./GoogleMap";
import style from "./Listing.module.css";
import MobileFilter from "../../common/MobileFilter";


const index = () => {
  const [filterActive, setfilterActive] = useState(false);

  const filterChanger=()=>{
    setfilterActive(!filterActive)
  }
  return (
    <div className='detail_head'>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Filters Shown --> */}
      {filterActive&&<MobileFilter filterChanger={filterChanger}/>}

      {/* <!-- Listing Grid View --> */}
      <section
        id="feature-property"
        className={`our-listing our-listing_map2 bgc-f7 pt0 pb0 ${style.Pop_edits}` }
      >
        <section className={style.Filtering_top}>
          <div className={style.Filter_items}>

            <FilteringItem filterChanger={filterChanger} filterActive={filterActive}/>
          </div>
        </section>
        <div className="container-fluid listing_mob">
          <div className="row">
            <div className="col-xxl-7 col-xl-6  position-relative">
              <MyGoogleMap />
            </div>

            <div className="col-xxl-5 col-xl-6 ">
              <div className="half_map_area_content mt20">
                <div className="col-md-12">
                  <div className="row" style={{marginBottom:"100px",overflowY:"scroll"}}>
                    <FeaturedItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
