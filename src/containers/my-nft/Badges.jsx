import React, { useState, useEffect } from "react";

import {fetchBadges} from '../../services/api';
import BadgeModal from "../../components/modal/badgesModal";
import CouponCode from "../../components/modal/couponCode/CouponCode";
import BadgeAdded from "../../components/modal/badgeAdded";

const Badges = () => {
  const [couponCodeModal, setCouponCodeModal] = useState(false);
  const [badgeModal, setBadgeModal] = useState(false);
  const [badges, setBadges] = useState([])
  const [tempBadges, setTempBadges] = useState([])

  useEffect(() => {
    fetchBadgeApi()
  }, [])
  
  const fetchBadgeApi = async () => {
    const result = await fetchBadges()
    const lockedBadges = result.data?.filter((v) => v.status === "locked")
    const unLockedBadges = result.data?.filter((v) => v.status === "unlocked")
    const sortedBadges = [...unLockedBadges, ...lockedBadges]
    setBadges(sortedBadges);
    setTempBadges(sortedBadges.slice(0,5))
  }

  const handleDropdown = () => { 
    if (tempBadges.length > 5) {
      setTempBadges(badges.slice(0,5))
    } else {
      setTempBadges(badges)
    } 
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
          <p className="expandBtn" onClick={handleDropdown}>{
            tempBadges.length > 5 ? "SEE LESS" : "SEE MORE"
          }</p>
        </div>
        <div className="badgeContent">
          {
            tempBadges?.map((badge, i) => {
              return(
                <div key={i} className={badge.status === "locked" ? "badgeCard inActive" : "badgeCard"} onClick={() => setBadgeModal(true)}>
                  <img src={`https://revisequest.loca.lt/${badge.image}`} alt="badge" />
                </div>
              )
            })
          }
          <div className="badgeCardEmpty badgeCard"></div>
          <div className="badgeCardEmpty badgeCard"></div>
          <div className="badgeCardEmpty badgeCard"></div>
          <div className="badgeCardEmpty badgeCard"></div>
        </div>
      </div>
    </div>
    <BadgeAdded />
     {couponCodeModal && 
        <CouponCode setCouponCodeModal={setCouponCodeModal} />
      }
      {
        badgeModal && 
      <BadgeModal closeBadges={setBadgeModal} badgesData={tempBadges}/>
      }
    </>
  );
};

export default Badges;
