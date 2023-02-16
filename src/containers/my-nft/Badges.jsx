import React, { useState } from "react";

import Badge from "../../assets/images/badges/badge.png";
import BadgeModal from "../../components/modal/badgesModal";
import CouponCode from "../../components/modal/couponCode/CouponCode";

const Badges = () => {
  const [couponCodeModal, setCouponCodeModal] = useState(false);
  const [badgeModal, setBadgeModal] = useState(false);

  const badges = [
    Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, 
  ]

  return (
    <>
      <div className="image-grid">
      <div className="badge">
        <div className="badgeTitle">
          <div>
            <h2>Badges Earned</h2>
            <a onClick={() => setCouponCodeModal(true)}>CLAIM NEW BADGE</a>
          </div>
          <p className="expandBtn">SEE MORE</p>
        </div>
        <div className="badgeContent">
          {
            badges.map((img) => {
              return(
                <div className="badgeCard" onClick={() => setBadgeModal(true)}>
                  <img src={img} alt="badge" />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
     {couponCodeModal && 
        <CouponCode setCouponCodeModal={setCouponCodeModal} />
      }
      {
        badgeModal && 
      <BadgeModal closeBadges={setBadgeModal}/>
      }
    </>
  );
};

export default Badges;
