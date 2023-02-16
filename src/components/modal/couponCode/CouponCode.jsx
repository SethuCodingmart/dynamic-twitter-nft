import React from "react";
import downloadIcon from "../../../assets/images/modal/DownloadIcon.svg";
import cancleIcon from "../../../assets/images/modal/Ellipse 21.svg";

import "./couponCode.scss";

function CouponCode({ setCouponCodeModal }) {
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
        <input placeholder="ENTER CODE HERE" />
        <button>CLAIM</button>
      </div>
    </section>
  );
}

export default CouponCode;
