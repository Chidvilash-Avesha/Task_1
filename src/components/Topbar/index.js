import React from "react";
import  Buildings  from "./Buildings.jpg";
import  NotifyOn  from "./notify.jpg";
import  Profile  from "./user.jpg";
import "./index.css";

function Topbar (){
  return (
    <div className="topbar">
      <div className="frame">
        <div className="div">
          <button className="frame-2 button-tb">
            <img src={Buildings} alt="buildings" className="buildings-instance" />
            <div className="text-wrapper">Avesha</div>
          </button>
          <div className="text-wrapper-2">/</div>
          <div className="text-wrapper">Events</div>
        </div>
        <div className="frame-3">
          <button className="frame-4 button-tb">
            <img src={NotifyOn} alt = "notify" className="icon-instance-node" />
          </button>
          <button className="frame-4 button-tb">
            <img src={Profile} alt="profile" className="icon-instance-node" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Topbar

