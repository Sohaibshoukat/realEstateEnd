import FilteringItem from "../listing-half-map/listing-map-v4/FilteringTop";
import style from "./CustomerStyling.module.css"

import FeaturedItem from "./FeaturedItem";

const index = () => {
  return (
    <>
     <section className={style.Filtering_top}>
            <FilteringItem />
        </section>
          <div className="row">
              <div className="row">
                <FeaturedItem />
              </div>
          </div>
          {/* End .row */}

    </>
  );
};

export default index;
