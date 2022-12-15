import React from "react";
import { Link } from "react-router-dom";
import "./homeStart.scss";
const HomeStart = () => {
  return (
    <div className="container text-center m">
      <p className="banner-get-started-heading">Get your free Dynamic NFT</p>
      <p className="banner-get-started-sub-heading">
        Which changes the more you tweet with #BuiltWithRevise
      </p>
      <span className="banner-get-started-button">
        <Link to="/mint-nft" className="mintNFTButton">
          Mint NFT
        </Link>
      </span>
    </div>
  );
};

export default HomeStart;
