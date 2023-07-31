import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrow: true,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings} arrows={true} className="">
      <div className="slide-one">
        <img
          src="/assets/images/home/cover-1.jpg"
        />
      </div>
      <div className="slide-one">
        <img
          src="/assets/images/home/cover-2.jpg"
        />
      </div>
      <div className="slide-one">
        <img
          src="/assets/images/home/cover-3.jpg"
        />
      </div>
    </Slider>
  );
};

export default HeroSlider;
