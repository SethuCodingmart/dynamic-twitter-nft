import { useEffect, useState } from "react";
import { fetchTweetDetails } from "../../services/api";
import Header from "../../components/header/Header";
import polygon from "../../assets/images/Polygon.svg";
import ethereum from "../../assets/images/Ethereum.svg";
import arrowPercentage from "../../assets/images/arrow-percentage.svg";
import masterRank from "../../assets/images/master-rank.svg";
import silverRank from "../../assets/images/silver-rank.svg";
import bronzeRank from "../../assets/images/bronze-rank.svg";
import Revisions from "../revisions/Revisions";
import learnMore from "../../assets/images/learn-more.svg";
import share from "../../assets/images/share-image.svg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./myNFT.scss";
import MyNFTLoader from "./MyNFTLoader";

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
  const url = `https://app.revise.network/revisions/${nftId}`;

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
    const tweetDetails = await fetchTweetDetails(twitterId);
    console.log(tweetDetails);
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
    console.log(tweetDetails.count["#BuiltWithRevise"]);
    console.log(totalTweets);
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
  };
  return (
    <>
      {!isLoading ? (
        <div className="my-nft-wrapper">
          <Header />
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
                    href="https://twitter.com/intent/tweet?button_hashtag=BuiltWithRevise&ref_src=twsrc%5Etfw"
                    className="twitter-hashtag-button tweet-now-button"
                    data-text="I have created my Dynamic NFT using Revise"
                    data-show-count="false"
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
                  loading="lazy"
                  src={rankImage}
                  alt="revise"
                  className="rank-image img-fluid"
                />
                <div className="minting-nft-off-chain">
                  <p className="mint-on-polygon">
                    <img
                      src={polygon}
                      alt="polygon"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Mint on Polygon
                  </p>
                  <p className="mint-on-ethereum">
                    <img
                      src={ethereum}
                      alt="ethereum"
                      style={{ marginRight: "5px" }}
                    />
                    Mint on Ethereum
                  </p>
                </div>
              </div>
              <div className="revisions">
                <div className="revisions-header">
                  <p className="revisions-title">revisions</p>
                  <a
                    href={url}
                    className="revisions-button-link"
                    target="_blank"
                  >
                    <p className="revisions-button">see all</p>
                  </a>
                </div>
                {timeArray ? (
                  timeArray
                    .slice(0, 4)
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

                  <a href="https://docs.revise.network/api-docs/">
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
                  <p className="shareButton">share on twitter</p>
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
