import React, { useEffect, useRef } from "react";
import { useState } from "react";
import style from "./navbarPopUp.module.css";
import Slider from "react-slick";

const Schedulemeeting = ({
  MeetingType,
  TourDate,
  activeIndex,
  handleSelectDate,
  title,
}) => {
  const closeButtonRef = useRef(null);

  const Schedule_Tour = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          name,
          Email,
          PhoneNu,
          Message,
          MeetingType,
          videoApp,
          TourTime,
          TourDate,
        }),
      });

      if (response.ok) {
        setNext(1);
        closeButtonRef.current.click();
      } else {
        throw new Error("Error sending email ss");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email");
    }
  };

  const [Next, setNext] = useState(1);

  const [videoApp, setVideoApp] = useState(null);
  const [videoID, setvideoID] = useState(null);

  const [activeTimeIndex, setActiveTimeIndex] = useState(-1);
  const [timeSlots, settimeSlots] = useState([]);

  const [TourTime, setTourTime] = useState(null);
  const [name, setname] = useState(null);
  const [Email, setEmail] = useState(null);
  const [PhoneNu, setPhoneNu] = useState(null);
  const [Message, setMessage] = useState(null);

  const handleSelectTime = (date, index) => {
    setTourTime(date);
    setActiveTimeIndex(index);
  };

  const Form_settings = {
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  const today = new Date();
  const days = Array.from(
    { length: 30 },
    (_, i) =>
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
  );

  const startHour = 11;
  const endHour = 19;
  const interval = 30;
  const getTimeSlots = () => {
    const timeSlots = [];
    let hour = startHour;
    let minute = 0;

    while (hour < endHour || (hour === endHour && minute === 0)) {
      const formattedHour = hour === 12 ? 12 : hour % 12;
      const period = hour < 12 ? "AM" : "PM";
      const formattedMinute = minute < 10 ? `0${minute}` : minute;

      const timeSlot = `${formattedHour}:${formattedMinute} ${period}`;
      timeSlots.push(timeSlot);

      minute += interval;
      if (minute >= 60) {
        minute = 0;
        hour += 1;
      }
    }

    return timeSlots;
  };

  useEffect(() => {
    settimeSlots(getTimeSlots());
  }, []);

  const Step1 = () => {
    return (
      <div>
        <h2>Pick a date</h2>
        <div className={style.Scheduler_slider}>
          <Slider {...Form_settings} arrows={true}>
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
        <h2>Pick a time</h2>
        <div className={style.Scheduler_slider}>
          <Slider {...Form_settings} arrows={true}>
            {timeSlots?.map((time, index) => {
              const isActive = index === activeTimeIndex;
              return (
                <div
                  className={`${style.Time_card} ${
                    isActive && style.active_card
                  }`}
                  onClick={() => handleSelectTime(time, index)}
                >
                  <div className={`${style.card_Time}`}>
                    <h5>{time}</h5>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className={style.Btn_next}>
          <button
            className={`btn btn-thm`}
            disabled={!TourDate || !TourTime}
            onClick={() => {
              MeetingType == "Video Chat" ? setNext(2) : setNext(3);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const Step2 = () => {
    return (
      <div>
        <h2>Which video chat app would you like to use for the tour?</h2>
        <div className={style.Video_cards}>
          <div
            onClick={() => {
              setVideoApp("Google Meet");
              setvideoID(null);
            }}
            className={`${
              videoApp === "Google Meet" ? style.active_card : ""
            } ${style.video_card}`}
          >
            <h4>Google Meet</h4>
          </div>
          {videoApp == "Google Meet" && (
            <div className={style.Video_id_box}>
              <h5>Mobiel Number</h5>
              <input
                type="Text"
                onChange={(e) => {
                  setvideoID(e.target.value);
                }}
              />
            </div>
          )}
          <div
            className={`${videoApp === "Skype" ? style.active_card : ""} ${
              style.video_card
            }`}
            onClick={() => {
              setVideoApp("Skype");
              setvideoID(null);
            }}
          >
            <h4>Skype</h4>
          </div>
          {videoApp == "Skype" && (
            <div className={style.Video_id_box}>
              <h5>Skype ID</h5>
              <input
                type="Text"
                onChange={(e) => {
                  setvideoID(e.target.value);
                }}
              />
            </div>
          )}
          <div
            className={`${videoApp === "Zoom" ? style.active_card : ""} ${
              style.video_card
            }`}
            onClick={() => {
              setvideoID(null);
              setVideoApp("Zoom");
            }}
          >
            <h4>Zoom</h4>
          </div>
          {videoApp == "Zoom" && (
            <div className={style.Video_id_box}>
              <h5>Email</h5>
              <input
                type="email"
                onChange={(e) => {
                  setvideoID(e.target.value);
                }}
              />
            </div>
          )}
          <div
            className={`${videoApp === "WhatsApp" ? style.active_card : ""} ${
              style.video_card
            }`}
            onClick={() => {
              setvideoID(null);
              setVideoApp("WhatsApp");
            }}
          >
            <h4>WhatsApp</h4>
          </div>
          {videoApp == "WhatsApp" && (
            <div className={style.Video_id_box}>
              <h5>Mobiel Number</h5>
              <input
                type="Number"
                value={videoID}
                onChange={(e) => {
                  setvideoID(e.target.value);
                  console.log(videoID);
                }}
              />
            </div>
          )}
        </div>
        <div className={style.Btn_next}>
          <button
            className={`btn btn-thm`}
            onClick={() => setNext(3)}
            disabled={!videoApp || !videoID}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="modal-dialog" style={{ maxWidth: "1000px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Schedule A Tour
            </h1>
            <button
              ref={closeButtonRef}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setNext(1);
              }}
            ></button>
          </div>
          <div className={`modal-body ${style.Schedule_body}`}>
            {Next == 1 ? (
              <Step1 />
            ) : Next == 2 ? (
              <Step2 />
            ) : Next == 3 ? (
              <div>
                <div className={style.scheduleForm}>
                  <form action="">
                    <h2>Tell us a little about yourself</h2>
                    <div className={style.Form_group}>
                      <div className="form-floating">
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="Name"
                          name="user_name"
                          placeholder="name@example.com"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                        <label htmlFor="Name">Name</label>
                      </div>
                      <div className="form-floating">
                        <input
                          required
                          type="email"
                          className="form-control"
                          id="Email"
                          name="user_email"
                          placeholder="name@example.com"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label htmlFor="Email">Email address</label>
                      </div>
                      <div className="form-floating">
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="phoneNo"
                          name="user_Nu"
                          placeholder="Password"
                          onChange={(e) => {
                            setPhoneNu(e.target.value);
                          }}
                        />
                        <label htmlFor="phoneNo">Phone No</label>
                      </div>
                      <div className="form-floating">
                        <textarea
                          style={{ height: "auto" }}
                          rows="4"
                          cols="50"
                          className="form-control"
                          id="Note"
                          name="note"
                          placeholder="Password"
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        />
                        <label htmlFor="Note">Add Note</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={style.Btn_next} onClick={Schedule_Tour}>
                  <button
                    className={`btn btn-thm`}
                    disabled={!name || !Email || !PhoneNu}
                  >
                    Schedule Meeting
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedulemeeting;
