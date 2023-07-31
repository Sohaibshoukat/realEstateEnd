import Link from "next/link";
import Slider from "react-slick";
import agency from "../../data/agency";

const Feture_dev = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={true}>
      {agency.map(
        (item) =>
          item.featured === "yes" && (
            <Link href={`/agency-details/${item._id}`}>
              <a>
                <div className="thumbdev">
                  <img
                    className="image-fluid w-100"
                    src={item.img}
                    alt="pc1.jpg"
                  />
                </div>
              </a>
            </Link>
          )
      )}
    </Slider>
  );
};

export default Feture_dev;
