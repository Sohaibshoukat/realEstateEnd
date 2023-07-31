import { useState } from "react";
import { addAmenities } from "../../features/properties/propertiesSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import style from "../home-4/HomeStyling.module.css";

const CheckBoxFilter = () => {
  const dispatch = useDispatch();

  const { amenities } = useSelector((state) => state.properties);

  // const Router = useRouter();

  const ammenties = [
    "Swimming Pool",
    "Gym",
    "security",
    "Lifts",
    "Badminton Court",
    "Kids Play area",
    "Table tennis",
    "Cycle/jogging track",
    "Power backup",
    "Solar Panels",
    "Treated water Supply",
    "Maid rooms",
    "CCTV cameras",
    "Intercom Facility",
    "Fire Frightening System",
    "cafeteria",
    "saloon",
    "spa",
    "Reception",
    "Sewage treatment",
    "Daycare Center",
    "Coffee Shop",
    "Super Store",
    "Prayer Area",
    "Car Parking",
    "B Park parking",
    "Garbage collection",
    "housekeeping",
    "laundry service",
    "Rooftop Garden",
    "Library",
    "Cigar room",
    "Bar",
    "Steam & Sauna",
    "Theatre",
  ];

  return (
    <>
      <div className="col-sm col-lg col-xl li_chan">
        <ul className="ui_kit_checkbox selectable-list">
          {ammenties.map((am) => {
            return (
              <li className="list-inline-item">
                <div className={`candidate_revew_select ${style.radio_li}`}>
                  <input
                    type="checkbox"
                    value={am}
                    onChange={(e) => {
                      dispatch(addAmenities(e.target.value));
                    }}
                  />
                  <label>{am}</label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CheckBoxFilter;
