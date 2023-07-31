import Router from "next/router";
import style from "../home-4/HomeStyling.module.css";
import {
  addBathrooms,
  addBedrooms,
  addYearBuilt,
  addAreaMin,
  addAreaMax,
  addFBR,
  addLDA,
  addcategory,
  addArea,
  addfurnishing,
  addDeveloper,
  addView,
  addCompany,
  addview3D,
} from "../../features/properties/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import DeveloperContext from "../../Context/Developer/DeveloperContext";

const GlobalSelectBox = () => {
  const developercontext = useContext(DeveloperContext);
  const { developer } = developercontext;

  const [projectType, setProjectType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <ul className={style.Global_select_list}>
        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <h4>Project Type</h4>
            <ul className={`${style.btn_select_group}`}>
              <li
                className={`${style.btn_select} ${
                  projectType === "" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addArea(""));
                  setProjectType("");
                }}
              >
                All
              </li>
              <li
                className={`${style.btn_select} ${
                  projectType === "Commercial" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addArea("Commercial"));
                  setProjectType("Commercial");
                }}
              >
                Commercial
              </li>
              <li
                className={`${style.btn_select} ${
                  projectType === "Residential" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addArea("Residential"));
                  setProjectType("Residential");
                }}
              >
                Residential
              </li>
            </ul>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <h4>BedRooms</h4>
            <ul className={`${style.btn_select_group}`}>
              <li
                className={`${style.btn_select} ${
                  bedrooms === "" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBedrooms(""));
                  setBedrooms("");
                }}
              >
                All
              </li>
              <li
                className={`${style.btn_select} ${
                  bedrooms === "1" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBedrooms("1"));
                  setBedrooms("1");
                }}
              >
                1 Bed
              </li>
              <li
                className={`${style.btn_select} ${
                  bedrooms === "2" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBedrooms("2"));
                  setBedrooms("2");
                }}
              >
                2 Bed
              </li>
              <li
                className={`${style.btn_select} ${
                  bedrooms === "3" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBedrooms("3"));
                  setBedrooms("3");
                }}
              >
                3 Bed
              </li>
              <li
                className={`${style.btn_select} ${
                  bedrooms === "4" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBedrooms("4"));
                  setBedrooms("4");
                }}
              >
                4 Bed
              </li>
              <li
                className={`${style.btn_select} ${
                  bedrooms === "studio" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBedrooms("studio"));
                  setBedrooms("studio");
                }}
              >
                Studio
              </li>
            </ul>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className="candidate_revew_select">
            <h4>BathRooms</h4>
            <ul className={`${style.btn_select_group}`}>
              <li
                className={`${style.btn_select} ${
                  bathrooms === "" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBathrooms(""));
                  setBathrooms("");
                }}
              >
                All
              </li>
              <li
                className={`${style.btn_select} ${
                  bathrooms === "1" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBathrooms("1"));
                  setBathrooms("1");
                }}
              >
                1 Bath
              </li>
              <li
                className={`${style.btn_select} ${
                  bathrooms === "2" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBathrooms("2"));
                  setBathrooms("2");
                }}
              >
                2 Bath
              </li>
              <li
                className={`${style.btn_select} ${
                  bathrooms === "3" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBathrooms("3"));
                  setBathrooms("3");
                }}
              >
                3 Bath
              </li>
              <li
                className={`${style.btn_select} ${
                  bathrooms === "4" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBathrooms("4"));
                  setBathrooms("4");
                }}
              >
                4 Bath
              </li>
              <li
                className={`${style.btn_select} ${
                  bathrooms === "5" ? style.active_filter : ""
                }`}
                onClick={() => {
                  dispatch(addBathrooms("5"));
                  setBathrooms("5");
                }}
              >
                5 Bath
              </li>
            </ul>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <div className={`candidate_revew_select ${style.dropdown_look}`}>
            <h4>Category</h4>
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
          <h4>
            Set Area <small>(Number only)</small>
          </h4>
          <li className={style.group_select}>
            <li className="list-inline-item">
              <div className="candidate_revew_select">
                <input
                  type="number"
                  className={`form-control w-100 ${style.input_fields}`}
                  id="exampleInputName2"
                  placeholder="Min Area"
                  onChange={(e) => dispatch(addAreaMin(e.target.value))}
                />
              </div>
            </li>
            {/* End Li */}

            <li className="list-inline-item">
              <div className="candidate_revew_select">
                <input
                  type="number"
                  className={`form-control w-100`}
                  id="exampleInputName3"
                  placeholder="Max Area"
                  onChange={(e) => dispatch(addAreaMax(e.target.value))}
                />
              </div>
            </li>
            {/* End li */}
          </li>
        </li>
        {/* End Li */}

        <li className="list-inline-item">
          <h4>Approvals</h4>
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
          <h4>Availablitity</h4>
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
            <h4>Developer</h4>
            <select
              onChange={(e) => {
                dispatch(addDeveloper(e.target.value));
              }}
              className={`selectpicker  show-tick form-select w-100`}
            >
              <option value="">Developer</option>
              {console.log(developer)}
              {developer &&
                developer?.map((dev) => (
                  <option value={dev?.DevName}>{dev?.DevName}</option>
                ))}
            </select>
          </div>
        </li>
        {/* End li */}

        {/* <li className="list-inline-item">
          <div className="candidate_revew_select">
            <h4>View</h4>
            <select
              onChange={(e) => {
                dispatch(addView(e.target.value));
              }}
              className={`selectpicker  show-tick form-select w-100`}
            >
              <option value="">View</option>
              <option value="Side">Side View</option>
              <option value="Middle View">Middle View</option>
            </select>
          </div>
        </li>
        End li */}
      </ul>
    </>
  );
};

export default GlobalSelectBox;
