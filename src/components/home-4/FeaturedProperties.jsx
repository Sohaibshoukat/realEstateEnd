import Link from "next/link";
import Slider from "react-slick";
import style from "./design.module.css"
import properties from "../../data/properties";
import {addfavrioteProperty} from "../Customer/Favriote"
import { useDispatch, useSelector } from "react-redux";


const FeaturedProperties = () => {
 const dispatch=useDispatch()
  
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
  const handleFavriote = (property)=>{
    dispatch(addfavrioteProperty(property))
  }

  const favProperties = useSelector(
    (state) => state.favProperties.favrioteproperty
  );

  return (
    <>
      <Slider {...settings} arrows={true}>
        {properties.slice(0, 12).map((item) => (
          <div className="item" key={item.id}>
            <div className="feat_property home3">
              <div className="thumb">
                <img className="img-whp" src={item.img} alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    {item.saleTag.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">{val}</a>
                      </li>
                    ))}
                  </ul>

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

                  <Link href={`/listing-details-v2/${item.id}`}>
                    <a className="fp_price">
                      ${item.price}
                      <small>/mo</small>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.type}</p>
                  <h4>
                    <Link href={`/listing-details-v1/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {item.location}
                  </p>

                  <p>Developer: {item.developer}</p>
                  {/* <ul className="prop_details mb0">
                    {item.itemDetails.map((val, i) => (
                      <li className="list-inline-item" key={i}>
                        <a href="#">
                          {val.name}: {val.number}
                        </a>
                      </li>
                    ))}
                  </ul> */}

                  <ul className="prop_details" style={{marginBottom:"10px"}}>
                      <li className="list-inline-item">
                        <a href="#">
                          {item.itemDetails[2].name}: {item.itemDetails[2].number}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          {item.itemDetails[3].name}: {item.itemDetails[3].number}
                        </a>
                      </li>
                  </ul>
                  
                  {/* <button className="btn btn-thm" style={{width:"100%"}}>Whatsapp Call</button> */}
                  <div className={style.btn_group}>
                    <button className={style.btn_favriote} onClick={() => {handleFavriote(item)}}>Add to Favriote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
