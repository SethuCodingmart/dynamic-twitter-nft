import React from "react";
import NFTImage from "../../assets/images/demo-image-lg.svg";
import dynamicNFT from "../../assets/images/dynamic-nft-lg.svg";
import builtWithReviseTag from "../../assets/images/built-with-revise-tag-lg.svg";
import HomeStart from "../home-start/HomeStart";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <div className="banner-wrapper">
        <HomeStart />
        <div className="banner-image">
          <div className="container">
            <img src={NFTImage} className="img-fluid" alt="revise"></img>
          </div>
        </div>
        <div className="hashtags">
          <img
            src={dynamicNFT}
            className="img-fluid dynamic-nft-tag"
            alt="revise"
          ></img>
          <img
            src={builtWithReviseTag}
            className="img-fluid built-with-revise-tag"
            alt="revise"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
