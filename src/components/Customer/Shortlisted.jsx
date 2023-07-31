import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import style from "./CustomerStyling.module.css";
import { useState } from "react";

function Shortlisted() {
  const [ComparingProperty, setComparingProperty] = useState([]);
  const [ComparingLength, setComparingLength] = useState(0);
  // const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
  
    if (isChecked) {
      // add property to selected list
      if (ComparingLength < 4) {
        setComparingProperty([...ComparingProperty, item]);
        setComparingLength(ComparingLength + 1);
      }
    } else {
      // remove property from selected list
      const newProperties = ComparingProperty.filter((property) => property.id !== item.id);
      setComparingProperty(newProperties);
      setComparingLength(newProperties.length);
    }
  };
  
  // const handleCheckboxChange = (item,event) => {
    
  //   const checkedValue = parseInt(event.target.value);
  //   if (event.target.checked) {
  //     if (ComparingLength < 4) {
  //       setComparingLength(ComparingLength + 1);
  //       setComparingProperty([...ComparingProperty, ]);
  //     }
  //   } else {
  //     setComparingLength(ComparingLength - 1);
  //     setComparingProperty(
  //       ComparingProperty.filter((item) => item !== checkedValue)
  //     );
  //   }
  // };

  const favProperties = useSelector(
    (state) => state.favProperties.favrioteproperty
  );

  return (
    <>
    {console.log(ComparingProperty)}
      <div className={style.First_Section}>
        <h1>Select the properties to compare</h1>
        <Link href={{ pathname:'/compare', query:{properties:JSON.stringify(ComparingProperty)}}}>
        <button
          className="btn btn-thm"
          style={{ width: "15%", fontSize: "1.2rem" }}
          disabled={ComparingLength < 2}
        >
          Compare
        </button>
        </Link>
      </div>

      <div className="row">
        {favProperties.map((item) => {
          return (
            <div className={style.Data_Selection}>
              <div className={style.checkbox}>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, item)}
                  value={item.id}
                  disabled={
                    ComparingProperty.length >= 4 &&
                    !ComparingProperty.includes(item)
                  }
                />
              </div>
              <div className="col-lg-12" key={item.id}>
                <div className="feat_property list">
                  <div className="thumb" style={{ width: "30%" }}>
                    <img className="img-whp" src={item.img} alt="fp1.jpg" />
                    <div className="thmb_cntnt">
                      <ul className="tag mb0">
                        {item.saleTag.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">{val}</a>
                          </li>
                        ))}
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
                        <Link href={`/listing-details-v2/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <p>
                        <span className="flaticon-placeholder"></span>
                        {item.location}
                      </p>

                      <ul className="prop_details mb0">
                        {item.itemDetails.map((val, i) => (
                          <li className="list-inline-item" key={i}>
                            <a href="#">
                              {val.name}: {val.number}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* End .tc_content */}

                    <div className="fp_footer">
                      <div className="fp_pdate float-end">
                        {item.postedYear}
                      </div>
                    </div>
                    {/* End .fp_footer */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Shortlisted;
