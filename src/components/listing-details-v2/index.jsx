import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Scheduler from "./Scheduler";
import Header from "./headerPopUp";
import DetailsContent from "../../components/listing-details-v2/DetailsContent";
import style from "./navbarPopUp.module.css";
import agency from "../../data/agency";
import Link from "next/link";
import { useContext } from "react";
import VillaContext from "../../Context/TownVilla/TownVillaContext";
import DeveloperContext from "../../Context/Developer/DeveloperContext";
import { useRef } from "react";
import ValuePkrConverter from "../common/ValuePkrConverter";
import CurrencyConverter from "../common/PriceConverter";
import ImageSection from "./ImageSection";
import HighlightedIcon from "./HighlightedIcon";
import HiglitedMobile from "./HiglitedMobile";

const ListingDynamicDetailsV2 = (props) => {
  const [MeetingType, setMeetingType] = useState("In Person");

  const [TourDate, setTourDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectDate = (date, index) => {
    setMeetingType(MeetingType);
    setTourDate(date);
    setActiveIndex(index);
  };

  const handleMeetingType = (type) => {
    setMeetingType(type);
  };

  const firstSchedulerRef = useRef(null);
  const secondSchedulerRef = useRef(null);
  const [isSecondSchedulerVisible, setSecondSchedulerVisible] = useState(false);

  const villaproject = useContext(VillaContext);
  const { villa } = villaproject;

  const dev = useContext(DeveloperContext);
  const { developer } = dev;

  const router = useRouter();
  const [property, setProperty] = useState({});
  const id = props.itemId;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProperty(villa?.find((item) => item._id == id));
    return () => {};
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSecondSchedulerVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (firstSchedulerRef.current) {
      observer.observe(firstSchedulerRef.current);
    }

    return () => {
      if (firstSchedulerRef.current) {
        observer.unobserve(firstSchedulerRef.current);
      }
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550); // Set the desired breakpoint for mobile screens
    };

    handleResize(); // Check the initial screen width
    window.addEventListener("resize", handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header handleModel={props.handleModel} />

      {/* <!-- Listing Single Property --> */}
      <section className="single_page_listing_style p0  md-mt0">
        <ImageSection property={property} />
        <div className={`listing_single_description2 ${style.Head_title}`}>
          <div className="single_property_title">
            <h2>{property?.project_title}</h2>
            <p>{property?.projectLocation?.address}</p>
            <div className="price tooltip-link">
              <h2>PKR {ValuePkrConverter(property?.startingprice)}</h2>
              <div className="tooltip-text">
                <CurrencyConverter PricePKR={property?.startingprice} />
              </div>
            </div>
          </div>
          <div className={`${style.dev_social_Sec}`}>
            <div className={style.dev_log}>
              {developer?.map((dev) => {
                if (dev?.DevName == property?.projectDeveloper) {
                  return <img src={dev?.DevLog} alt="" />;
                }
              })}
            </div>
            <div className="logo_section">
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        {!isMobile ? (
          <>
            <HighlightedIcon property={property} />

            <div className="container">
              <div className={`${style.Schedule_Tour}`} ref={firstSchedulerRef}>
                <Scheduler
                  style={{ marginTop: `-10%` }}
                  title={property.project_title}
                  handleSelectDate={handleSelectDate}
                  handleMeetingType={handleMeetingType}
                  TourDate={TourDate}
                  activeIndex={activeIndex}
                  MeetingType={MeetingType}
                />
              </div>
            </div>
          </>
        ) : (
          <HiglitedMobile
            handleSelectDate={handleSelectDate}
            handleMeetingType={handleMeetingType}
            TourDate={TourDate}
            activeIndex={activeIndex}
            MeetingType={MeetingType}
            property={property}
          />
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              {/* End .listing_single_description2 */}
              <DetailsContent property={property} />
            </div>
            {/* End details content .col-lg-8 */}

            <div className="col-lg-4 col-xl-4">
              <div style={{ position: "sticky", top: "12%" }}>
                {!isMobile && isSecondSchedulerVisible && (
                  <div
                    className={`${style.SideBar_Schedule_Tour} 
                                ${isSecondSchedulerVisible ? "show" : ""}`}
                  >
                    <Scheduler
                      sider={true}
                      title={property.project_title}
                      handleSelectDate={handleSelectDate}
                      handleMeetingType={handleMeetingType}
                      TourDate={TourDate}
                      activeIndex={activeIndex}
                      MeetingType={MeetingType}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        <div className={`container ${style.MouSection}`}>
          <div className={`${style.MOUData}`}>
            <h2>MOU Contract</h2>
            <div className={`${style.MOU_image}`}>
              {agency.map((item) => {
                if (item.name === property.developer) {
                  return <img src={item.MOU} alt="" />;
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDynamicDetailsV2;
