import React from "react";
import blueStar from "../../assets/images/blue-star.svg";
import redStar from "../../assets/images/red-star.svg";
import yellowStar from "../../assets/images/yellow-star.svg";
import mintedOnRevise from "../../assets/images/minted-on-revise.svg";
import chainOnRevise from "../../assets/images/onchain.svg";
import reviseJsLibrary from "../../assets/images/programmed-with-revise-js.svg";
import moreTweet from "../../assets/images/changes-more-you-tweet.svg";
import "./builtFromTheBottom.scss";

const BuiltFromTheBottom = () => {
  return (
    <div className="built-from-the-bottom-wrapper ">
      <div className="container">
        <div className="built-from-the-bottom-header">
          <p className="built-from-the-bottom-title">BUILT FROM THE BOTTOM</p>
          <div className="stars">
            <img src={blueStar} className="img-fluid" alt="revise"></img>
            <img src={redStar} className="img-fluid" alt="revise"></img>
            <img src={yellowStar} className="img-fluid" alt="revise"></img>
          </div>
        </div>
        <div className="built-with-revise-special ">
          <div className="row">
            <div className="col-lg-3 col-6 built-with-revise-special-column">
              <div>
                <img
                  src={mintedOnRevise}
                  className="img-fluid"
                  alt="revise"
                ></img>
              </div>
              <p className="built-with-revise-special-text">Minted on Revise</p>
            </div>
            <div className="col-lg-3 col-6 built-with-revise-special-column">
              <div>
                <img
                  src={chainOnRevise}
                  className="img-fluid"
                  alt="revise"
                ></img>
              </div>
              <p className="built-with-revise-special-text">
                Hosted on chain with Revise
              </p>
            </div>
            <div className="col-lg-3 col-6 built-with-revise-special-column">
              <div>
                <img
                  src={reviseJsLibrary}
                  className="img-fluid"
                  alt="revise"
                ></img>
              </div>
              <p className="built-with-revise-special-text">
                Programmed with the ReviseJS Library
              </p>
            </div>
            <div className="col-lg-3 col-6 built-with-revise-special-column">
              <div>
                <img src={moreTweet} className="img-fluid" alt="revise"></img>
              </div>
              <p className="built-with-revise-special-text">
                Changes the more you tweet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltFromTheBottom;
