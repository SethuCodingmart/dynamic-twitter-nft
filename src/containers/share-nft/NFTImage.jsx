import { useEffect, useState } from "react";
import { fetchTweetDetails } from "../../services/api";
import Header from "../../components/header/Header";
import arrow from "../../assets/images/arrowUp.png";
import goldRank from "../../assets/images/goldRank.png";
import silverRank from "../../assets/images/silverRank.png";
import bronzeRank from "../../assets/images/bronzeRank.png";
import Revisions from "../revisions/Revisions";
import learnMore from "../../assets/images/learnMore.png";
import share from "../../assets/images/share.png";
import Footer from "../../components/footer/Footer";
import "./nftImage.scss";
import { Link } from "react-router-dom";

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
  const url = `https://app.revise.network/revisions/${nftId}`;

  //getting twitter id from the user
  let twitterId = localStorage.getItem("twitterId");

  //calling fetchTweetDetails details
  useEffect(() => {
    tweetDetails(twitterId);
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

    //get percentage difference
    setPercentage(tweetDetails.rankStat.percentage);

    //get rank
    setRank(tweetDetails.level);

    //to reach the next level
    setNextLevel(tweetDetails.forNextLevel);

    //setting up an image for rank
    // console.log(totalTweets);
    if (tweetDetails.count["#BuiltWithRevise"] < 11) {
      setRankImage(bronzeRank);
    } else if (
      tweetDetails.count["#BuiltWithRevise"] > 10 &&
      totalTweets < 51
    ) {
      setRankImage(silverRank);
    } else if (tweetDetails.count["#BuiltWithRevise"] > 50) {
      setRankImage(goldRank);
    }

    //getting u the revisions
    setTimeArray(tweetDetails.timestamps["#BuiltWithRevise"]);

    //getting the nft id
    setNFTId(tweetDetails.nftId);
  };
  return (
    <>
      <div className="my-nft-wrapper">
        <Header />
        <div className="nft-display ">
          <div className="nft-wrapper container">
            <div className="user-details">
              <div className="user-detail">
                <div className="userProfile">
                  <img src={userProfileImage} alt="revise" />
                </div>

                <p className="userName">{userName}</p>
              </div>
              <div className="connected-with-twitter">
                connected with twitter
              </div>
            </div>
            <div className="hashtag-tweets">
              <p className="hashtag">TWEETS MADE WITH #BuiltWithRevise</p>
              <div className="stats">
                <p className="number-stats">{totalTweets}</p>
                <div className="percentage-stats">
                  <div className="arrowUP">
                    <img src={arrow} alt="revise" />
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
              <img src={rankImage} alt="revise" />
            </div>
            <div className="revisions">
              <div className="revisions-header">
                <p className="revisions-title">revisions</p>
                <a href={url} className="revisions-button-link" target="_blank">
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
    </>
  );
};

export default MyNFT;
