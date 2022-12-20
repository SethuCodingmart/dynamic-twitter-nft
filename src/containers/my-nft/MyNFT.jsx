import { useEffect, useState } from "react";
import { fetchTweetDetails } from "../../services/api";
import Header from "../../components/header/Header";
import polygon from "../../assets/images/Polygon.svg";
// import ethereum from "../../assets/images/Ethereum.svg";
import arrowPercentage from "../../assets/images/arrow-percentage.svg";
import masterRank from "../../assets/images/master-rank.svg";
import silverRank from "../../assets/images/silver-rank.svg";
import bronzeRank from "../../assets/images/bronze-rank.svg";
import Revisions from "../revisions/Revisions";
import learnMore from "../../assets/images/learn-more.svg";
import share from "../../assets/images/share-image.svg";
import metamask from "../../assets/images/metamask.svg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { checkWalletConnected, connectWallet, mintNFT } from "../../mint/index";
import MyNFTLoader from "./MyNFTLoader";

import "./myNFT.scss";

const MyNFT = () => {
  const [userProfileImage, setUserProfileImage] = useState("");
  const [userName, setUserName] = useState("");
  const [totalTweets, setTotalTweets] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [rank, setRank] = useState("");
  const [nextLevel, setNextLevel] = useState(0);
  const [rankImage, setRankImage] = useState();
  const [timeArray, setTimeArray] = useState([]);
  const [nftId, setNFTId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [mintingNFT, setMintingNFT] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMassage] = useState("");
  const REVISE = process.env.REACT_APP_REVISE_APP_NETWORK;
  const seeAllRevisions = `${REVISE}/revisions/${nftId}`;
  //getting twitter id from the user
  let twitterId = localStorage.getItem("twitterId");
  const navigate = useNavigate();
  //calling fetchTweetDetails details and preventing un authorization
  useEffect(() => {
    if (twitterId === null || twitterId === "") {
      navigate("/mint-nft");
    } else {
      tweetDetails(twitterId);
    }
  }, [twitterId]);

  //getting the tweet details
  const tweetDetails = async (twitterId) => {
    setLoader(true);
    const tweetDetails = await fetchTweetDetails(twitterId);

    //get the details

    //get user profile image
    setUserProfileImage(tweetDetails.user.profile_image_url);
    //get user name
    setUserName(tweetDetails.user.name);

    //get user tweet counts
    if (tweetDetails.count["#BuiltWithRevise"] === undefined) {
      setTotalTweets(0);
    } else {
      setTotalTweets(tweetDetails.count["#BuiltWithRevise"]);
    }

    //get percentage difference
    setPercentage(tweetDetails.rankStat.percentage);

    //get rank
    setRank(tweetDetails.level);

    //to reach the next level
    setNextLevel(tweetDetails.forNextLevel);

    //setting up an image for rank
    // console.log(totalTweets);
    if (
      tweetDetails.count["#BuiltWithRevise"] < 11 ||
      tweetDetails.count["#BuiltWithRevise"] === undefined
    ) {
      setRankImage(bronzeRank);
    } else if (
      tweetDetails.count["#BuiltWithRevise"] > 10 &&
      tweetDetails.count["#BuiltWithRevise"] < 51
    ) {
      setRankImage(silverRank);
    } else if (tweetDetails.count["#BuiltWithRevise"] > 50) {
      setRankImage(masterRank);
    }

    //getting u the revisions
    setTimeArray(tweetDetails.timestamps["#BuiltWithRevise"]);

    //getting the nft id
    setNFTId(tweetDetails.nftId);
    setIsLoading(false);

    let account = await checkWalletConnected();
    let currentAccount = await connectWallet();
    let mintingNFT = await mintNFT();
    setAccount(account);
    setCurrentAccount(currentAccount);
    setMintingNFT(mintingNFT);
    console.log(account);
    console.log(currentAccount);
    console.log(mintingNFT);
    setLoader(false);

    // if (account === null) {
    //   setErrorMassage("Make sure you have MetaMask!");
    // }
  };
  return (
    <>
      {!isLoading ? (
        <div className="my-nft-wrapper">
          <Header />
          {loader && <div className="loading"></div>}
          <div className="my-nft-display">
            <div className="my-nft-container container">
              <div className="user-details">
                <div className="userProfile">
                  <img src={userProfileImage} alt="revise" />
                </div>
                <div className="userDetail">
                  <p className="userName">{userName}</p>
                  <p className="userId">{`@` + twitterId}</p>
                </div>
              </div>
              <div className="hashtag-tweets">
                <p className="hashtag">TWEETS MADE WITH #BuiltWithRevise</p>
                <div className="stats">
                  <p className="number-stats">{totalTweets}</p>
                  <div className="percentage-stats">
                    <div className="arrowUP">
                      <img src={arrowPercentage} alt="revise" />
                    </div>
                    <div>
                      <p className="percentage">{percentage + "%"}</p>
                      <p className="timeline"> since last week</p>
                    </div>
                  </div>
                </div>
                <div className="rank-medal">
                  <p className="showRank">rank</p>
                  <p className="showMedal">{rank}</p>
                </div>
              </div>
              <div className="more-tweets">
                <div className="to-reach-next-level">
                  <p className="required-tweets">{nextLevel}</p>
                  <a
                    href="https://twitter.com/intent/tweet?text=Say%20something...%20%23revise%20%23BuiltWithRevise%20"
                    target="_blank"
                    className="tweet-now-button"
                  >
                    Tweet #BuiltWithRevise
                  </a>
                </div>
                <p className="static-text">
                  More Tweets needed to reach next level
                </p>
              </div>
              <div className="rank">
                <img
                  src={rankImage}
                  alt="revise"
                  className="rank-image img-fluid"
                />
                <div className="minting-nft-off-chain">
                  <p
                    className="mint-on-polygon"
                    onClick={async () => {
                      if (account === null) {
                        setLoader(true);
                        connectWallet();
                        setLoader(false);
                      } else {
                        //Mint Function
                        setLoader(true);
                        await mintNFT(
                          `https://revise.link/${nftId}`,
                          userName.trim()
                        );
                        setLoader(false);
                      }
                    }}
                  >
                    <img
                      src={account === null ? metamask : polygon}
                      alt="polygon"
                      style={{ margin: "5px", height: "20px" }}
                    />
                    {account === null ? "Connect to Wallet" : "Mint on Polygon"}
                  </p>

                  {/* <p className="mint-on-ethereum">
                  <img
                    src={ethereum}
                    alt="ethereum"
                    style={{ marginRight: "5px" }}
                  />
                  Mint on Ethereum
                </p> */}
                </div>
                <p>{account || ""}</p>
                <p>{errorMessage}</p>
              </div>
              <div className="revisions">
                <div className="revisions-header">
                  <p className="revisions-title">revisions</p>
                  <a
                    href={seeAllRevisions}
                    className="revisions-button-link"
                    target="_blank"
                  >
                    <p className="revisions-button">see all</p>
                  </a>
                </div>
                {timeArray ? (
                  timeArray
                    .slice(0, 5)
                    .map((time) => <Revisions time={time} key={time} />)
                ) : (
                  <div>
                    <p className="empty_tweet_details">Your tweet revisions</p>
                    <p className="empty_tweet_details">will appear here</p>
                  </div>
                )}
              </div>
              <div className="learn-more">
                <div className="learnMoreImage">
                  <img src={learnMore} alt="revise" />
                </div>
                <div>
                  <p className="learnMore-text">
                    These NFT’s has been made dynamic using the Revise Library
                  </p>

                  <a
                    href="https://docs.revise.network/api-docs/"
                    target="_blank"
                  >
                    <p className="learnMore-button">learn more</p>
                  </a>
                </div>
              </div>
              <div className="share">
                <div className="shareImage">
                  <img src={share} alt="revise" />
                </div>
                <div>
                  <p className="shareText">
                    Share your new NFT with your friends and family
                  </p>
                  <a
                    href="https://twitter.com/intent/tweet?text=Say%20something...%20%23revise%20%23BuiltWithRevise%20"
                    target="_blank"
                  >
                    <p className="shareButton">share on twitter</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <MyNFTLoader />
      )}
    </>
  );
};

export default MyNFT;
