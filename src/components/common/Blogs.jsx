import Link from "next/link";
import blogs from "../../data/blogs";
import Slider from "react-slick";

const Blogs = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
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
    <>
      <Slider {...settings} arrows={true}>
        {blogs.map((item) => (
          <div
            className="col-sm-6 col-lg-4 col-xl-4"
            key={item.id}
            onClick={(e) => dispatch(addLocation(item.name))}
          >
            <Link href={`/blog-details/${item.id}`}>
              <a>
                <div className="thumbsearch blogthumb">
                  <img
                    className="img-fluid w100"
                    src={item.img}
                    alt="pc1.jpg"
                    style={{ height: `19rem` }}
                  />
                  <div className="details_blog">
                    <h6>{item.title}</h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Blogs;
