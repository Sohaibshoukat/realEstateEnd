import React, { useState } from "react";
import style from "./CustomerStyling.module.css";
import Shortlisted from "./Shortlisted";
import Projects from "./Projects";
import Recommendation from "./recomendation/index";
import Profile from "./profile/index";
import Document from "./Document";
import Services from "./Services";

function Customerbody() {
  const [activeIcon, setActiveIcon] = useState("Shortlisted");

  return (
    <>
      <ul className={style.CustomerList} id="pills-tab" role="tablist">
        <li className={style.ListItem}>
          <a
            className={`${style.Custome_nav} ${
              activeIcon === "Shortlisted" ? style.active : ""
            }`}
            onClick={() => setActiveIcon("Shortlisted")}
            id="pills-Shortlisted-tab"
            data-bs-toggle="pill"
            href="#pills-Shortlisted"
            role="tab"
            aria-controls="pills-Shortlisted"
            aria-selected="true"
          >
            Shortlisted
          </a>
        </li>

        <li className={style.ListItem}>
          <a
            className={`${style.Custome_nav} ${
              activeIcon === "Projects" ? style.active : ""
            }`}
            onClick={() => setActiveIcon("Projects")}
            id="pills-projects-tab"
            data-bs-toggle="pill"
            href="#pills-projects"
            role="tab"
            aria-controls="pills-projects"
            aria-selected="false"
          >
            Browse Projects
          </a>
        </li>
        <li className={style.ListItem}>
          <a
            className={`${style.Custome_nav} ${
              activeIcon === "Recomendation" ? style.active : ""
            }`}
            onClick={() => setActiveIcon("Recomendation")}
            id="pills-Recomendation-tab"
            data-bs-toggle="pill"
            href="#pills-Recomendation"
            role="tab"
            aria-controls="pills-Recomendation"
            aria-selected="false"
          >
            Recomendation
          </a>
        </li>
        <li className={style.ListItem}>
          <a
            className={`${style.Custome_nav} ${
              activeIcon === "Profile" ? style.active : ""
            }`}
            onClick={() => setActiveIcon("Profile")}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className={style.ListItem}>
          <a
            className={`${style.Custome_nav} ${
              activeIcon === "Document" ? style.active : ""
            }`}
            onClick={() => setActiveIcon("Document")}
            id="pills-Document-tab"
            data-bs-toggle="pill"
            href="#pills-Document"
            role="tab"
            aria-controls="pills-Document"
            aria-selected="false"
          >
            Document
          </a>
        </li>
        <li className={style.ListItem}>
          <a
            className={`${style.Custome_nav} ${
              activeIcon === "Service" ? style.active : ""
            }`}
            onClick={() => setActiveIcon("Service")}
            id="pills-Service-tab"
            data-bs-toggle="pill"
            href="#pills-Service"
            role="tab"
            aria-controls="pills-Service"
            aria-selected="false"
          >
            Other Service
          </a>
        </li>
      </ul>

      <div
        className="tab-content home1_adsrchfrm container"
        id="pills-tabContent"
        style={{ maxWidth: "95%" }}
      >
        <div
          className={`tab-pane fade ${
            activeIcon === "Shortlisted" ? "show active" : ""
          }`}
          id="pills-Shortlisted"
          role="tabpanel"
          aria-labelledby="pills-Shortlisted-tab"
        >
          <Shortlisted />
        </div>
        <div
          className={`tab-pane fade ${
            activeIcon === "Projects" ? "show active" : ""
          }`}
          id="pills-projects"
          role="tabpanel"
          aria-labelledby="pills-projects-tab"
        >
          <Projects />
        </div>
        <div
          className={`tab-pane fade ${
            activeIcon === "Recomendation" ? "show active" : ""
          }`}
          id="pills-Recomendation"
          role="tabpanel"
          aria-labelledby="pills-Recomendation-tab"
        >
          <Recommendation />
        </div>
        <div
          className={`tab-pane fade ${
            activeIcon === "Profile" ? "show active" : ""
          }`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <Profile />
        </div>
        <div
          className={`tab-pane fade ${
            activeIcon === "Document" ? "show active" : ""
          }`}
          id="pills-Document"
          role="tabpanel"
          aria-labelledby="pills-Document-tab"
        >
          <Document />
        </div>
        <div
          className={`tab-pane fade ${
            activeIcon === "Service" ? "show active" : ""
          }`}
          id="pills-Service"
          role="tabpanel"
          aria-labelledby="pills-Service-tab"
        >
          <Services />
        </div>
      </div>
    </>
  );
}

export default Customerbody;
