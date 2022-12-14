import React from "react";
import blueStar from "../../assets/images/blue-star.svg";
import redStar from "../../assets/images/red-star.svg";
import yellowStar from "../../assets/images/yellow-star.svg";
import "./specs.scss";

const Specs = () => {
  return (
    <>
      <div className="specs-wrapper">
        <div className="container">
          <div className="specs-header">
            <p className="specs-title">THE SPECS</p>
            <div className="stars">
              <img src={blueStar} className="img-fluid" alt="revise"></img>
              <img src={redStar} className="img-fluid" alt="revise"></img>
              <img src={yellowStar} className="img-fluid" alt="revise"></img>
            </div>
          </div>
          <div className="specs-paras">
            <p className="specs-para-one">
              Each Revise Twitter NFT is unique and programmatically generated.
              All NFTs are dope, and rare; Depending on how many time you have
              tweeted with #BuiltWithRevise
            </p>
            <p className="specs-para-two">
              The NFTs are stored as ERC-721 tokens on Revise and hosted on
              Revise. Minting and holding an NFT is free.
            </p>
            <p className="specs-para-three">
              Members can transfer their NFT to their own Ethereal/Polygon
              wallets by paying a gas fee.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specs;
