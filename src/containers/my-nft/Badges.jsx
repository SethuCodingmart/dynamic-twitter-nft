import React, { useState, useEffect } from "react";

import {fetchBadges} from '../../services/api';
import BadgeModal from "../../components/modal/badgesModal";
import CouponCode from "../../components/modal/couponCode/CouponCode";

const Badges = () => {
  const [couponCodeModal, setCouponCodeModal] = useState(false);
  const [badgeModal, setBadgeModal] = useState(false);

  // const badges = [
  //   Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, 
  // ]

  const [badges, setbadges] = useState([])

  useEffect(() => {
    fetchBadgeApi()
  }, [])
  
  const fetchBadgeApi = async () => {
    const result = await fetchBadges()
    setbadges(result.data)
    console.log(result.data);
  }

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
            badges?.map((badge) => {
              return(
                <div className={badge.status === "locked" ? "badgeCard inActive" : "badgeCard"} onClick={() => setBadgeModal(true)}>
                  <img src={badge.image} alt="badge" />
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
      <BadgeModal closeBadges={setBadgeModal} badgesData={badges}/>
      }
    </>
  );
};

export default Badges;
