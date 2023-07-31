import React from "react";
import style from "./navbarPopUp.module.css";
import Schedulemeeting from "./schedulemeeting";

const HiglitedMobile = ({
  handleSelectDate,
  property,
  handleMeetingType,
  TourDate,
  activeIndex,
  MeetingType,
}) => {
  return (
    <>
      <div className={style.MobileHighlited}>
        <div className={style.basicSec}>
          <div className={style.Icon_portion}>
            <div className={style.Icon}>
              <img
                src={`/assets/images/Highlited/SqftRange.${"png" || "jpg"}`}
                alt=""
              />
            </div>
            <div className={style.Icon_text}>
              <h4>{property?.HighlightIcon?.SqftRange} Sqft</h4>
            </div>
          </div>
          <div className={style.Icon_portion}>
            <div className={style.Icon}>
              <img
                src={`/assets/images/Highlited/BedsRange.${"png" || "jpg"}`}
                alt=""
              />
            </div>
            <div className={style.Icon_text}>
              <h4>{property?.HighlightIcon?.BedsRange} Beds</h4>
            </div>
          </div>
          <div className={style.Icon_portion}>
            <div className={style.Icon}>
              <img
                src={`/assets/images/Highlited/BathRange.${"png" || "jpg"}`}
                alt=""
              />
            </div>
            <div className={style.Icon_text}>
              <h4>{property?.HighlightIcon?.BathRange} Baths</h4>
            </div>
          </div>
        </div>
        <div className={style.basicSec}>
          <div className={style.Icon_portion}>
            <div className={style.Icon}>
              <img
                src={`/assets/images/Highlited/PossessionHandover.${"png" || "jpg"}`}
                alt=""
              />
            </div>
            <div className={style.Icon_text}>
              <h4>{property?.HighlightIcon?.PossessionHandover} Time</h4>
            </div>
          </div>
          <div className={style.Icon_portion}>
            <div className={style.Icon}>
              <img
                src={`/assets/images/Highlited/HouseSizeRange.${"png" || "jpg"}`}
                alt=""
              />
            </div>
            <div className={style.Icon_text}>
              <h4>{property?.HighlightIcon?.HouseSizeRange} Sqft</h4>
            </div>
          </div>
          <div className={style.Icon_portion}>
            <div className={style.Icon}>
              <img
                src={`/assets/images/Highlited/ProjectArea.${"png" || "jpg"}`}
                alt=""
              />
            </div>
            <div className={style.Icon_text}>
              <h4>{property?.HighlightIcon?.ProjectArea} Area</h4>
            </div>
          </div>
        </div>
        <div className={style.BtnSec}>
          <div className={style.Type_picker}>
            <div
              onClick={() => {
                handleMeetingType("In Person");
              }}
              className={`${style.type_card_data} ${
                MeetingType == "In Person" && style.active_card
              }`}
            >
              <p>Tour in Person</p>
            </div>
            <div
              onClick={() => {
                handleMeetingType("Video Chat");
              }}
              className={`${style.type_card_data} ${
                MeetingType == "Video Chat" && style.active_card
              }`}
            >
              <p>Tour in Video Chat</p>
            </div>
          </div>
          <button
            type="button"
            class={`btn btn-thm ${style.btn_style}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Schedule A Tour
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <Schedulemeeting
              handleSelectDate={handleSelectDate}
              title={property.project_title}
              handleMeetingType={handleMeetingType}
              TourDate={TourDate}
              activeIndex={activeIndex}
              MeetingType={MeetingType}
            />
          </div>
          <div className={style.btn_group}>
            <button className="btn btn-thm w100">Email</button>
            <button className="btn btn-thm w100">Call</button>
            <button className="btn btn-thm w100">WhatsApp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiglitedMobile;
