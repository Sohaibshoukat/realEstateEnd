import React from "react";
import style from "./navbarPopUp.module.css";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Slider from "react-slick";
import { useEffect } from "react";

const ImageSection = ({ property }) => {
  const [ImageState, setImageState] = useState("InnerimgList");
  const [isMobile, setIsMobile] = useState(false);
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    innerWidth: 0
  };

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
      {!isMobile ? (
        <div className="container-fluid p0">
          {ImageState == "3Dview" ? (
            <iframe
              width="100%"
              height="500"
              frameborder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowfullscreen
              scrolling="no"
              src={`${property.video_3D}`}
            ></iframe>
          ) : ImageState == "Video" ? (
            <video
              width="100%"
              height="530"
              src={property.simple_video}
              controls
            />
          ) : (
            <Gallery>
              <div className="row g-0" key={property?.id}>
                <div className="col-md-6 col-lg-6 ">
                  <div className="row g-0">
                    <div className="col-lg-12 ">
                      <div className="spls_style_one 1px position-relative">
                        <Item
                          original={property?.img}
                          thumbnail={property?.img}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div style={{ padding: "3px" }}>
                              <img
                                style={{ borderRadius: "10px" }}
                                className="img-fluid w100 cover lds-2"
                                src={property.main_image}
                                alt={property.main_image}
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6 position-relative">
                  <div className="row g-0 gx-0" style={{ height: "100%" }}>
                    {ImageState == "InnerimgList"
                      ? property?.interiorPictures
                          ?.slice(0, 4)
                          ?.map((val, i) => (
                            <div className="col-6 col-lg-6 " key={i}>
                              <div
                                className="spls_style_one"
                                style={{ height: "100%" }}
                              >
                                <Item
                                  original={val}
                                  thumbnail={val}
                                  width={752}
                                  height={450}
                                >
                                  {({ ref, open }) => (
                                    <div
                                      role="button"
                                      style={{
                                        padding: "3px",
                                        height: "100%",
                                      }}
                                      ref={ref}
                                      onClick={open}
                                    >
                                      <img
                                        className="img-fluid w100"
                                        style={{
                                          borderRadius: "10px",
                                          height: "100%",
                                          objectFit: "cover",
                                          maxHeight: "100%",
                                        }}
                                        src={val}
                                        alt={val}
                                      />
                                    </div>
                                  )}
                                </Item>
                              </div>
                            </div>
                          ))
                      : property?.exteriorPictures
                          ?.slice(0, 4)
                          ?.map((val, i) => (
                            <div className="col-6 col-lg-6 " key={i}>
                              <div
                                className="spls_style_one"
                                style={{ height: "100%" }}
                              >
                                <Item
                                  original={val}
                                  thumbnail={val}
                                  width={752}
                                  height={450}
                                >
                                  {({ ref, open }) => (
                                    <div
                                      role="button"
                                      style={{
                                        height: "100%",
                                        border: "1.5px solid rgba(0,0,0,0.3)",
                                      }}
                                      ref={ref}
                                      onClick={open}
                                    >
                                      <img
                                        className="img-fluid w100"
                                        style={{
                                          height: "100%",
                                          objectFit: "cover",
                                          maxHeight: "100%",
                                        }}
                                        src={val}
                                        alt={val}
                                      />
                                    </div>
                                  )}
                                </Item>
                              </div>
                            </div>
                          ))}
                  </div>

                  <div className="single_property_social_share">
                    <div className="spss style2 mt10 text-right tal-400">
                      <ul className="mb0">
                        {property?.check_lda_approval && (
                          <li className={`list-inline-item ${style.tooltip}`}>
                            <a href="#">
                              <span>
                                LDA
                                <span class={style.tooltiptext}>
                                  {property.LDANum}
                                </span>
                              </span>
                            </a>
                          </li>
                        )}
                        {property?.check_fbr_approval && (
                          <li className={`list-inline-item ${style.tooltip}`}>
                            <a href="#">
                              <span>
                                FBR
                                <span class={style.tooltiptext}>
                                  {property.FBRNum}
                                </span>
                              </span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Gallery>
          )}
        </div>
      ) : (
        <div className="container-fluid p0">
          {ImageState == "3Dview" ? (
            <iframe
              width="100%"
              height="500"
              frameborder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowfullscreen
              scrolling="no"
              src={`${property.video_3D}`}
            ></iframe>
          ) : ImageState == "Video" ? (
            <video
              width="100%"
              height="530"
              src={property.simple_video}
              controls
            />
          ) : ImageState == "InnerimgList" ? (
            <Gallery>
              <Slider {...settings} arrows={true}>
                {property?.interiorPictures?.map((val, i) => (
                  <div className="col-6 col-lg-6 " key={i}>
                    <div className="spls_style_one" style={{ height: "100%" }}>
                      <Item
                        original={val}
                        thumbnail={val}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div
                            role="button"
                            style={{
                              padding: "3px",
                              height: "100%",
                            }}
                            ref={ref}
                            onClick={open}
                          >
                            <img
                              className="img-fluid w100"
                              style={{
                                borderRadius: "10px",
                                height: "100%",
                                objectFit: "cover",
                                maxHeight: "100%",
                              }}
                              src={val}
                              alt={val}
                            />
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                ))}
              </Slider>
            </Gallery>
          ) : ImageState == "OuterimgList" ? (
            <Gallery>
              <Slider {...settings} arrows={true}>
                {property?.exteriorPictures?.map((val, i) => (
                  <div className="col-6 col-lg-6 " key={i}>
                    <div className="spls_style_one" style={{ height: "100%" }}>
                      <Item
                        original={val}
                        thumbnail={val}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div
                            role="button"
                            style={{
                              padding: "3px",
                              height: "100%",
                            }}
                            ref={ref}
                            onClick={open}
                          >
                            <img
                              className="img-fluid w100"
                              style={{
                                borderRadius: "10px",
                                height: "100%",
                                objectFit: "cover",
                                maxHeight: "100%",
                              }}
                              src={val}
                              alt={val}
                            />
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                ))}
              </Slider>
            </Gallery>
          ) : (
            ""
          )}
        </div>
      )}

      {/* <div className="single_property_social_share">
                <div className="spss style2 mt10 text-right tal-400">
                  <ul className="mb0">
                    {property?.check_lda_approval && (
                      <li className={`list-inline-item ${style.tooltip}`}>
                        <a href="#">
                          <span>
                            LDA
                            <span class={style.tooltiptext}>
                              {property.LDANum}
                            </span>
                          </span>
                        </a>
                      </li>
                    )}
                    {property?.check_fbr_approval && (
                      <li className={`list-inline-item ${style.tooltip}`}>
                        <a href="#">
                          <span>
                            FBR
                            <span class={style.tooltiptext}>
                              {property.FBRNum}
                            </span>
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div> */}
      <div className={`${style.Button_Style}`}>
        <div>
          <button
            onClick={() => setImageState("InnerimgList")}
            type="submit"
            className={`btn ${style.btn_transparent}  btn-thm`}
          >
            Interior
          </button>
        </div>
        <div>
          <button
            onClick={() => setImageState("OuterimgList")}
            type="submit"
            className={`btn ${style.btn_transparent} btn-thm`}
          >
            Exterrior
          </button>
        </div>
        <div>
          <button
            onClick={() => setImageState("3Dview")}
            type="submit"
            className={`btn ${style.btn_transparent} btn-thm`}
          >
            3D view
          </button>
        </div>
        <div>
          <button
            onClick={() => setImageState("Video")}
            type="submit"
            className={`btn ${style.btn_transparent} btn-thm`}
          >
            Video
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
