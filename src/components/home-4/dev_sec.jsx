import Link from "next/link";
import Slider from "react-slick";
import Developers from "../../data/dev_sec";

const Team = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={true}>
      {Developers.slice(0, 6).map((item) => (
        <div className="item" key={item.id}>
          <div className="team_member home4">
            <div className="thumb">
              <img
                className="image-fluid"
                src={item.img}
                alt="5.jpg"
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Team;
