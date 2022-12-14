import React from "react";
import blueStar from "../../assets/images/blue-star.svg";
import redStar from "../../assets/images/red-star.svg";
import yellowStar from "../../assets/images/yellow-star.svg";
import { Link } from "react-router-dom";
import gift from "../../assets/images/gift-box.svg";
import "./howItWorks.scss";

const HowItWorks = () => {
  return (
    <div className="how-it-works-wrapper">
      <div className="container">
        <div className="one-click-nft row">
          <div className="one-click-nft-gift-box col-md-3">
            <img
              src={gift}
              className="img-fluid"
              alt="revise"
              width="150"
              height="150"
            ></img>
          </div>
          <div className="one-click-nft-text col-md-5">
            Get your free NFT in just one click
          </div>
          <div className="one-click-nft-button col-md-4 ">
            <Link to="/mint-nft " className="linkButton">
              Mint NFT
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="how-it-works-header">
          <p className="how-it-works-title">HOW DOES IT WORK?</p>
          <div className="stars">
            <img src={blueStar} className="img-fluid" alt="revise"></img>
            <img src={redStar} className="img-fluid" alt="revise"></img>
            <img src={yellowStar} className="img-fluid" alt="revise"></img>
          </div>
        </div>
        <div className="container">
          <div className="row gx-5">
            <div className="col how-it-works-text-box">
              <div className="p-3 how-it-works-text">
                Less than
                <span className="highlight-tweet-number">10 tweets</span> on
                #BuildWithRevise
              </div>
              <div className="nft-rank-details">BRONZE NFT</div>
            </div>
            <div className="col how-it-works-text-box">
              <div className="p-3 how-it-works-text">
                More than
                <span className="highlight-tweet-number">11 tweets</span> and
                less than
                <span className="highlight-tweet-number">51 tweets</span> on
                #BuildWithRevise
              </div>
              <div className="nft-rank-details">SILVER NFT</div>
            </div>
            <div className="col how-it-works-text-box">
              <div className="p-3 how-it-works-text">
                More than
                <span className="highlight-tweet-number">10 tweets</span> on
                #BuildWithRevise
              </div>
              <div className="nft-rank-details">GOLD NFT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
