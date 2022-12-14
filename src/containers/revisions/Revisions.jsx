import React from "react";
import "./revisions.scss";
import arrowIncrease from "../../assets/images/arrow-increase.svg";
import moment from "moment";

const Revisions = ({ time }) => {
  return (
    <>
      <div className="revisions-wrapper">
        <div className="revisions-point">
          <p className="increase-one-point">+1 Point</p>
          <div className="arrowIncrease">
            <img src={arrowIncrease} alt="" />
          </div>
        </div>
        <div className="revision-time">
          <p>You tweeted on</p>
          <span>{moment.parseZone(time).format("DD-MM-YYYY hh:mm A")}</span>
        </div>
      </div>
    </>
  );
};

export default Revisions;
