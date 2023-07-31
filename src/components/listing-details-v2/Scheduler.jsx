import React, { useState, useEffect } from "react";
import style from "./navbarPopUp.module.css";
import Slider from "react-slick";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Schedulemeeting from "./schedulemeeting";

export default function Scheduler({ 
  sider, 
  title,
  activeIndex,
  TourDate,
  handleSelectDate,
  handleMeetingType,
  MeetingType
}) {
  
  const [slidesToShow, setslidesToShow] = useState(3);
  const [Slidetoscroll, setSlidetoscroll] = useState(3);

  useEffect(() => {
    if (sider == true) {
      setslidesToShow(2);
      setSlidetoscroll(2);
    } else {
      setslidesToShow(3);
      setSlidetoscroll(3);
    }
  }, [sider]);

  const today = new Date();
  const days = Array.from(
    { length: 30 },
    (_, i) =>
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
  );

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: Slidetoscroll,
    autoplay: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCopyClick = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      console.log("URL copied to clipboard:", url);
    } catch (error) {
      console.error("Failed to copy URL to clipboard:", error);
    }
  };

  return (
    <>
      <div className="tour_data">
        <h2>Schedule A Tour</h2>
        <p>Choose Your Preferred Day</p>
      </div>
      <div
        className={`${style.flxing_schduling}`}
        style={sider ? { flexDirection: "column", maxWidth: "350px" } : {}}
      >
        <div className={`${style.Date_picker}`}>
          <Slider {...settings} arrows={true}>
            {days &&
              days.map((date, index) => {
                const formattedDate = date.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  weekday: "long",
                });
                const day = formattedDate.split(" ")[2];
                const weekday = formattedDate.split(",")[0].trim();
                const month = formattedDate.split(" ")[1];

                const isActive = index === activeIndex;

                return (
                  <div
                    className={`${style.date_card} ${
                      isActive && style.active_card
                    }`}
                    onClick={() => handleSelectDate(date, index)}
                  >
                    <div className={`${style.card_data}`}>
                      <p>{weekday}</p>
                      <h4>{day}</h4>
                      <p>{month}</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>

        <div className={`${style.callToAction}`}>
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
            Select A Date
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <Schedulemeeting
              MeetingType={MeetingType}
              TourDate={TourDate}
              activeIndex={activeIndex}
              handleSelectDate={handleSelectDate}
              title={title}
            />
          </div>

          <div className={`btn btn-thm ${style.btn_style}`}>
            Add To Dashboard
          </div>
          <div className={style.btn_group}>
            <button className="btn btn-thm w-100">Contact Agent</button>
            <button className="btn btn-thm w-100">Whatsapp</button>
          </div>
        </div>

        {sider && (
          <div className={style.sharing_items}>
            <div className={style.sharing_item} onClick={handleCopyClick}>
              <img src="/assets/images/SocialSharing/copy.png" alt="" />
            </div>
            <WhatsappShareButton url={window.location.href}>
              <div className={style.sharing_item}>
                <img src="/assets/images/SocialSharing/whatsapp.png" alt="" />
              </div>
            </WhatsappShareButton>
            <FacebookShareButton url={window.location.href}>
              <div className={style.sharing_item}>
                <img src="/assets/images/SocialSharing/facebook.png" alt="" />
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <div className={style.sharing_item}>
                <img src="/assets/images/SocialSharing/twitter.png" alt="" />
              </div>
            </TwitterShareButton>
            <EmailShareButton url={window.location.href}>
              <div className={style.sharing_item}>
                <img src="/assets/images/SocialSharing/gmail.png" alt="" />
              </div>
            </EmailShareButton>
          </div>
        )}
      </div>
    </>
  );
}
