import React, { useState } from "react";
import downloadIcon from "../../../assets/images/modal/DownloadIcon.svg";
import cancleIcon from "../../../assets/images/modal/Ellipse 21.svg";
import { addCoupon } from "../../../services/api";

import "./couponCode.scss";

function CouponCode({ setCouponCodeModal }) {

  const twitterId = localStorage.getItem("twitterId");
  const [coupon, setCoupon] = useState("")


  const handleCoupon = async () => { 
    const body = {
      couponCode : coupon,
      userId : twitterId
    }
    const result = await addCoupon(body)
    console.log("result", result)
  }


  return (
    <section className="coupon_wrapper">
      <div className="inner_coupon_wrapper">
        <img
          className="cancle_btn_pos"
          onClick={() => setCouponCodeModal()}
          src={cancleIcon}
          alt="cancle"
        />
        <img src={downloadIcon} alt="downloadIcon" />
        <h5 className="claim_badge">Claim your badge</h5>
        <p>
          Enter the code provided to you by the administrator
        </p>
        <input placeholder="ENTER CODE HERE" onChange={(e) => setCoupon(e.target.value)}/>
        <button onClick={handleCoupon}>CLAIM</button>
      </div>
    </section>
  );
}

export default CouponCode;
