import Router from "next/router";
import style from "../home-4/HomeStyling.module.css";
import {
  addAreaMin,
  addAreaMax,
  addFBR,
  addLDA,
  addcategory,
  addfurnishing,
  addDeveloper,
  addCompany,
  addview3D,
} from "../../features/properties/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import DeveloperContext from "../../Context/Developer/DeveloperContext";

const GlobalMobileSelectBox = () => {
  const developercontext = useContext(DeveloperContext);
  const { developer } = developercontext;

  const dispatch = useDispatch();
  return (
    <>
      <li className="list-inline-item">
        <div className={`candidate_revew_select ${style.dropdown_look}`}>
          <label>Category</label>
          <select
            onChange={(e) => {
              dispatch(addcategory(e.target.value));
            }}
            className={`selectpicker  show-tick form-select w-100`}
          >
            <option>Category</option>
            <option>Corner</option>
            <option>Standard</option>
            <option>Facing Lobby</option>
            <option>corner F Lobby</option>
            <option>Front</option>
          </select>
        </div>
      </li>
      {/* End li */}

      <li className="list-inline-item">
        <label>Approvals</label>
        <li className={`${style.group_select} ${style.radio}`}>
          <li className="list-inline-item">
            <div className={`candidate_revew_select ${style.radio_li}`}>
              <input
                type="checkbox"
                id="lda"
                onChange={(e) => {
                  dispatch(addLDA(e.target.checked));
                }}
              />
              <label htmlFor="lda">LDA Approved</label>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <div className={`candidate_revew_select ${style.radio_li}`}>
              <input
                type="checkbox"
                id="FBR"
                onChange={(e) => {
                  dispatch(addFBR(e.target.checked));
                }}
              />
              <label htmlFor="FBR">FBR Approved</label>
            </div>
          </li>
          {/* End li */}
        </li>
      </li>
      {/* End Li */}

      <li className="list-inline-item">
        <label>Availablitity</label>
        <li className={`${style.group_select} ${style.radio}`}>
          <li className="list-inline-item">
            <div className={`candidate_revew_select ${style.radio_li}`}>
              <input
                type="checkbox"
                id="3DView"
                onChange={(e) => {
                  dispatch(addview3D(e.target.checked));
                }}
              />
              <label htmlFor="3DView">3D View</label>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <div className={`candidate_revew_select ${style.radio_li}`}>
              <input
                type="checkbox"
                id="furnish"
                onChange={(e) => {
                  dispatch(addfurnishing(e.target.checked));
                }}
              />
              <label htmlFor="furnished">Furnishing</label>
            </div>
          </li>
          {/* End li */}

          <li className="list-inline-item">
            <div className={`candidate_revew_select ${style.radio_li}`}>
              <input
                type="checkbox"
                id="security"
                onChange={(e) => {
                  dispatch(addCompany(e.target.checked));
                }}
              />
              <label htmlFor="security">Secure Company</label>
            </div>
          </li>
          {/* End li */}
        </li>
      </li>

      <li className="list-inline-item">
        <div className={`candidate_revew_select ${style.dropdown_look}`}>
          <label>Developer</label>
          <select
            onChange={(e) => {
              dispatch(addDeveloper(e.target.value));
            }}
            className={`selectpicker  show-tick form-select w-100`}
          >
            <option value="">Developer</option>
            {developer &&
              developer?.map((dev) => (
                <option value={dev?.DevName}>{dev?.DevName}</option>
              ))}
          </select>
        </div>
      </li>
      {/* End li */}
    </>
  );
};

export default GlobalMobileSelectBox;
