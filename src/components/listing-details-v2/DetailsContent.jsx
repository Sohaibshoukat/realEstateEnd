import React, { useEffect, useRef, useState } from "react";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertySpecification from "../common/listing-details/PropertySepcification";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import NearbyProperties from "./NearBySlider";
import PaymentPlan from "../payment-plan";
import DecisionDriver from "./DecisionDriver";
import Rating from "./Rating";
import style from "./navbarPopUp.module.css";
import Gifs from "./Gifs";

const DetailsContent = (props) => {
  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            window.history.replaceState(null, null, `#${id}`);
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    const targetElements = document.querySelectorAll(".scroll-section-link");

    targetElements.forEach((el) => {
      observer.current.observe(el);
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <>
      <div className={style.Nav_design}>
        <div className={style.Detail_nav}>
          <a href="#about">
            <button className="btn btn-thm">About</button>
          </a>
          <a href="#price-list">
            <button className="btn btn-thm">Price List</button>
          </a>
          <a href="#floor-plan">
            <button className="btn btn-thm">Floor Plan</button>
          </a>
          <a href="#amenities">
            <button className="btn btn-thm">Amenities</button>
          </a>
          <a href="#attachment">
            <button className="btn btn-thm">Attachments</button>
          </a>
          <a href="#location">
            <button className="btn btn-thm">Location</button>
          </a>
        </div>
      </div>

      <div
        id="about"
        className="mb30 listing_single_description scroll-section-link"
      >
        <h2 className="scroll-section">About</h2>
        <PropertyDescriptions property={props.property} />
      </div>
      {/* End .listing_single_description */}

      {/* payment Integration */}
      <div
        id="price-list"
        className="application_statics mt30 scroll-section-link application_stats_p0"
      >
        <PaymentPlan property={props.property} />
      </div>
      {/* End payment Integration */}

      <div
        id="floor-plan"
        className="application_statics mt30 scroll-section-link"
      >
        <h2 className="mb30">Floor plans</h2>
        <div className="faq_according style2">
          <FloorPlans property={props.property} />
        </div>
      </div>
      {/* End .floor_plane */}

      <div
        id="amenities"
        className="application_statics mt30 scroll-section-link"
      >
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Amenities</h2>
          </div>
          <PropertyFeatures property={props.property} />
        </div>
      </div>
      {/* End .feature_area */}

      <div
        id="attachment"
        className="property_attachment_area mt30 scroll-section-link"
      >
        <h2 className="mb30">Property Attachments</h2>
        <div className="iba_container style2">
          <Attachments property={props.property} />
        </div>
      </div>
      {/* End .property_attachment_area */}

      <div
        id="location"
        className="application_statics mt30 scroll-section-link application_stats_p0"
      >
        <h3 className="mb30 px-3">
          Location{" "}
          <small className="float-end">
            {props.property?.projectLocation?.address}
          </small>
        </h3>
        <div className="property_video p0">
          <PropertyLocation property={props.property} />
        </div>
      </div>
      {/* End .location_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2>Nearby Properties</h2>
            <p>Within 50 Miles OF {props.property.project_title}</p>
          </div>
          <NearbyProperties Located={props.property.locationCoordinates} />
        </div>
      </div>

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Decision Driver</h2>
          </div>
          {/* End .col */}

          <DecisionDriver property={props.property} />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Rating</h2>
          </div>
          {/* End .col */}

          <Rating property={props.property} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb10">Specification</h2>
          </div>
          {/* End .col */}

          <PropertySpecification property={props.property} />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="mt30">
        <div className="row">
          <Gifs />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="mbp_comment_form style2">
            <h4>Write a Review</h4>
            <ul className="review_star">
              <li className="list-inline-item">
                <span className="sspd_review">
                  <ul>
                    <Ratings />
                  </ul>
                </span>
              </li>
              <li className="list-inline-item pr15">
                <p>Your Rating & Review</p>
              </li>
            </ul>
            <ReviewBox />
          </div>
        </div>
      </div>
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
