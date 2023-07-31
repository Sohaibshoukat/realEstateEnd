import comparePricingContent from "../../data/comparePricing";
import style from "./ComparingStyle.module.css";
import Developer from "../../data/agency";
import { useState } from "react";

const ComparePricing = (props) => {
  const [selectedFloors, setSelectedFloors] = useState({});

  const handleFloorPlanChange = (propertyId, floorNumber) => {
    setSelectedFloors((prevState) => ({
      ...prevState,
      [propertyId]: floorNumber,
    }));
  };
  return (
    <>
      {props.properties &&
        props.properties.map((item) => (
          <li className="list-inline-item" key={item.id}>
            <ul className={`mc_child_list two text-left ${style.List}`}>
              <li
                className="text-center"
                style={{
                  position: "sticky",
                  top: "70px",
                  background: "white",
                }}
              >
                <div className="membership_header">
                  <div
                    className="thumb"
                    style={{ maxWidth: "250px", margin: "auto" }}
                  >
                    <img
                      className="img-fluid w100"
                      src={item.img}
                      alt="1.jpg"
                    />
                    <div className="price">
                      ${item.price}
                      <span className="mnth">/mo</span>
                    </div>
                  </div>
                  <div className="details">
                    <h4>{item.title}</h4>
                    <p>{item.type}</p>
                  </div>
                </div>
              </li>
              <li className={style.header_sec}></li>
              <li>{item.location}</li>
              <li>{item.itemDetails[2].number}</li>
              <li>{item.itemDetails[3].number}</li>
              <li>{item.State}</li>
              <li>{item.area_type}</li>
              <li>{item.TotalUnits}s</li>
              <li className={style.header_sec}></li>
              <li>
                <select
                  name={`floor_${item.id}`}
                  id={`floor_${item.id}`}
                  onChange={(event) =>
                    handleFloorPlanChange(item.id, event.target.value)
                  }
                  className={style.Search_Floor}
                  value={selectedFloors[item.id] || ""}
                >
                  <option value="">Select a floor plan</option>
                  {item.floorPlan.map((floor) => (
                    <option key={floor.number} value={floor.number}>
                      {floor.number}
                    </option>
                  ))}
                </select>
                <div className={style.flour_image}>
                  {selectedFloors[item.id] &&
                    item.floorPlan.map((floor) => {
                      if (floor.number == selectedFloors[item.id]) {
                        return (
                          <img key={floor.number} src={floor.img} alt="" />
                        );
                      }
                    })}
                </div>
              </li>
              <li className={style.header_sec}></li>
              <li>
                <a
                  href="#"
                  className={`${style.Approval_box}`}
                  style={item.LDA == "yes" ? {} : { backgroundColor: "red" }}
                >
                  <span>LDA</span>
                </a>
                <a
                  href="#"
                  className={`${style.Approval_box}`}
                  style={item.FBR == "yes" ? {} : { backgroundColor: "red" }}
                >
                  <span>FBR</span>
                </a>
              </li>
              <li style={{ height: "673.5px" }}>
                <ul className={style.Amenities_list}>
                  {item.sportsAmenities.map((item2) => (
                    <li
                      className={`${style.Amenities}`}
                      style={{ padding: "0px", border: "none" }}
                    >
                      <span>
                        <img
                          src={`/assets/images/Amenities/${item2}.png`}
                          alt=""
                        />
                      </span>
                      {item2}
                    </li>
                  ))}
                  {item.convinienceAmenities.map((item2) => (
                    <li
                      className={style.Amenities}
                      style={{ padding: "0px", border: "none" }}
                    >
                      <span>
                        <img
                          src={`/assets/images/Amenities/${item2}.png`}
                          alt=""
                        />
                      </span>
                      {item2}
                    </li>
                  ))}
                  {item.SafetyAmenities.map((item2) => (
                    <li
                      className={style.Amenities}
                      style={{ padding: "0px", border: "none" }}
                    >
                      <span>
                        <img
                          src={`/assets/images/Amenities/${item2}.png`}
                          alt=""
                        />
                      </span>
                      {item2}
                    </li>
                  ))}
                  {item.EnvironmentAmenities.map((item2) => (
                    <li
                      className={style.Amenities}
                      style={{ padding: "0px", border: "none" }}
                    >
                      <span>
                        <img
                          src={`/assets/images/Amenities/${item2}.png`}
                          alt=""
                        />
                      </span>
                      {item2}
                    </li>
                  ))}
                  {item.LisureAmenities.map((item2) => (
                    <li
                      className={style.Amenities}
                      style={{ padding: "0px", border: "none" }}
                    >
                      <span>
                        <img
                          src={`/assets/images/Amenities/${item2}.png`}
                          alt=""
                        />
                      </span>
                      {item2}
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.header_sec}></li>
              {item.Structure.map((item2) => (
                <li>{item2.Selected}</li>
              ))}
              {item.Flooring.map((item2) => (
                <li>{item2.Selected}</li>
              ))}
              {item.Furniture.map((item2) => (
                <li>{item2.Selected}</li>
              ))}
              {item.Rooms.map((item2) => (
                <li>{item2.Selected}</li>
              ))}
              <li className={style.header_sec}></li>
              <li style={{ height: "300px" }}>
                {Developer.map((dev) => {
                  if (dev.name === item.developer) {
                    return (
                      <ul className={style.Amenities_list}>
                        {dev.currentProject.length > 0
                          ? dev.currentProject.map((item2) => (
                              <li
                                className={style.Amenities}
                                style={{ padding: "0px", border: "none" }}
                              >
                                {item2}
                              </li>
                            ))
                          : "N/A"}
                      </ul>
                    );
                  }
                })}
              </li>
              <li style={{ height: "300px" }}>
                {Developer.map((dev) => {
                  if (dev.name === item.developer) {
                    return (
                      <ul className={style.Amenities_list}>
                        {dev.PreviousProject.length > 0
                          ? dev.PreviousProject.map((item2) => (
                              <li
                                className={style.Amenities}
                                style={{ padding: "0px", border: "none" }}
                              >
                                {item2}
                              </li>
                            ))
                          : "N/A"}
                      </ul>
                    );
                  }
                })}
              </li>
            </ul>
          </li>
        ))}
    </>
  );
};

export default ComparePricing;
