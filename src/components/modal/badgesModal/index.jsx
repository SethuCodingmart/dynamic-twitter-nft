import React from "react";
import Slider from "react-slick";
import moment from "moment";

import GoldTrophy from "../../../assets/images/badges/goldTropy.svg";
import Close from "../../../assets/images/modal/close.svg";

import "./badges.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BadgeModal = ({ closeBadges, badgesData }) => {
  var Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: false,
    seTransform: true,
    useCSS: true,
    cssEase: "ease-in-out",
    variableWidth: true,
  };

  return (
    <section className="badgesModal">
      <div className="badgesModalContainer">
        <div className="badgesModalHeading">
          <h2>Badges Earned</h2>
          <a>SHARE</a>
        </div>
        <div className="badgesModalContent">
          <Slider {...Settings}>
            {badgesData?.map((badge) => {
              return (
                <div className="badgesModalCardcontainer">
                  <div className={badge.status === "locked" ? "badgesModalCard inActive" : "badgesModalCard"}>
                    <img src={badge.image} alt="Badge" />
                    <div>
                      <h3>{badge.name}</h3>
                      <p>{badge.description}</p>
                    </div>
                    <label>{
                        badge.status === "locked" ? "locked" : `Unlocked on ${moment(badge.date).format("Do MMM YYYY")}`
                      }</label>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="badgesModalClose">
          <img src={Close} alt="close" onClick={() => closeBadges()} />
        </div>
      </div>
    </section>
  );
};

export default BadgeModal;
