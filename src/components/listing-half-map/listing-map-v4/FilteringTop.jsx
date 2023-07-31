import { useState } from "react";
import Filter from "./Filters";
import { useEffect } from "react";
import MobileFilter from "./MobileFilter";

const GlobalHeroFilter = ({filterChanger,filterActive}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890); // Set the desired breakpoint for mobile screens
    };

    handleResize(); // Check the initial screen width
    window.addEventListener("resize", handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);
  return (
    <div>
      <div className="tab-content home1_adsrchfrm" id="pillss-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          {!isMobile ? <Filter /> : <MobileFilter filterChanger={filterChanger} filterActive={filterActive} />}
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
