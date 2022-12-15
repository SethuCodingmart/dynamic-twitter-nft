import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./myNFTLoader.scss";

const MyNFTLoader = () => {
  return (
    <div className="my-nft-loader-wrapper">
      <Header />
      <div className="my-nft-loader-display">
        <div className="my-nft-loader-container container">
          <div className="user-details-loader">
            <div className="userProfile-loader"></div>
            <div className="userDetail-loader">
              <p className="userName-loader"></p>
              <p className="userId-loader"></p>
            </div>
          </div>
          <div className="hashtag-tweets-loader">
            <p className="hashtag-loader"></p>
            <div className="stats-loader">
              <p className="number-stats-loader"></p>
              <div className="percentage-stats-loader">
                <div className="arrowUP-loader-loader"></div>
                <div>
                  <p className="percentage-loader"></p>
                  <p className="timeline-loader"> </p>
                </div>
              </div>
            </div>
            <div className="rank-medal-loader">
              <p className="showRank-loader"></p>
              <p className="showMedal-loader"></p>
            </div>
          </div>
          <div className="more-tweets-loader">
            <div className="to-reach-next-level-loader">
              <p className="required-tweets-loader"></p>
            </div>
            <p className="static-text-loader"></p>
          </div>
          <div className="rank-loader">
            <div className="minting-nft-off-chain-loader">
              <p className="mint-on-polygon-loader"></p>
              <p className="mint-on-ethereum-loader"></p>
            </div>
          </div>
          <div className="revisions-loader">
            <div className="revisions-header-loader">
              <p className="revisions-title-loader"></p>
            </div>
          </div>
          <div className="learn-more-loader">
            <div className="learnMoreImage-loader"></div>
            <div>
              <p className="learnMore-text-loader"></p>
            </div>
          </div>
          <div className="share-loader">
            <div className="shareImage-loader"></div>
            <div>
              <p className="shareText-loader"></p>
              <p className="shareButton-loader"></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyNFTLoader;
