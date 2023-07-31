import React from "react";
import style from "./style.module.css";
import user from "../../../data/user";
import HeaderBar from "./form-data/index";
function Profile() {
  return (
    <>
      <div className={style.Profile_detail}>
        <div className={style.profile_info}>
          <div className={style.user_image}>
            <img src={user[0].img} alt="" />
          </div>
          <div className={style.Profile_basic}>
            <h1>{user[0].name}</h1>
            <h4>{user[0].type}</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>Payment</h5>
              <h5>50%</h5>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "100%" }}
            >
              <div
                className="progress-bar bg-info"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className={style.Intrestes_sec}>
          <h2>Intrested In</h2>
          <p>Master in Business and Managment</p>
          <h2>Sub-Stage</h2>
          <p>Application</p>
        </div>
        <div className={style.Favriote_sec}>
          <div className={style.fav}>
            <h6>Favriote(s)</h6>
            <p>2</p>
          </div>
          <div className={style.fav}>
            <h6>Application(s)</h6>
            <p>3</p>
          </div>
          <div className={style.fav}>
            <h6>Accepted Application(s)</h6>
            <p>0</p>
          </div>
        </div>
      </div>

      {<HeaderBar />}
    </>
  );
}

export default Profile;
