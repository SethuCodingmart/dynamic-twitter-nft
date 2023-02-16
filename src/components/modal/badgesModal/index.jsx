import React from "react";
import GoldTrophy from "../../../assets/images/badges/goldTropy.svg";
import Close from "../../../assets/images/modal/close.svg";

import "./badges.scss";

const BadgeModal = ({closeBadges}) => {
  return (
    <section className="badgesModal">
      <div className="badgesModalContainer">
        <div className="badgesModalHeading">
            <h2>Badges Earned</h2>
            <a>SHARE</a>
        </div>
        <div className="badgesModalContent">
          <div className="badgesModalCard">
            <img src={GoldTrophy} alt="GoldTropy" />
            <div>
              <h3>Gold Cup</h3>
              <p>Won first place in a verified forum competition</p>
            </div>
            <label>Unlocked on 1st January 2022</label>
          </div>
          <div className="badgesModalCard">
            <img src={GoldTrophy} alt="GoldTropy" />
            <div>
              <h3>Gold Cup</h3>
              <p>Won first place in a verified forum competition</p>
            </div>
            <label>Unlocked on 1st January 2022</label>
          </div>
          <div className="badgesModalCard">
            <img src={GoldTrophy} alt="GoldTropy" />
            <div>
              <h3>Gold Cup</h3>
              <p>Won first place in a verified forum competition</p>
            </div>
            <label>Unlocked on 1st January 2022</label>
          </div>
        </div>
        <div className="badgesModalClose">
            <img src={Close} alt="close" onClick={() => closeBadges()}/>
        </div>
      </div>
    </section>
  );
};

export default BadgeModal;
