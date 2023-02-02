import { useEffect, useState } from "react";
import { fetchTweetDetails } from "../../services/api";
import Header from "../../components/header/Header";
import polygon from "../../assets/images/Polygon.svg";
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
import MyNFTLoader from "./MyNFTLoader";
import "./myNFT.scss";

const Twitter = require("../../utils/Twitter.json");
const ethers = require("ethers");
const CONTRACT_ADDRESS = "0x7e8a6E80Caee4182922Df7810674eF6D73541D86";

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
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [wallet, setWallet] = useState(true);
  const [network, setNetwork] = useState(null);
  const [accountErrorMessage, setAccountErrorMassage] = useState("");

  const REVISE = process.env.REACT_APP_REVISE_APP_NETWORK;
  const seeAllRevisions = `${REVISE}/revisions/${nftId}`;

  //getting twitter id from the user
  let twitterId = localStorage.getItem("twitterId");
  const navigate = useNavigate();

  //calling fetchTweetDetails details and preventing un authorized entry
  useEffect(() => {
    if (twitterId === null || twitterId === "") {
      navigate("/mint-nft");
    } else {
      tweetDetails(twitterId);
      const { ethereum } = window;
      if (ethereum) {
        // window.ethereum.on("accountsChanged", function (accounts) {
        //   if (accounts.length <= 0) {
        //     navigate("/mint-nft");
        //   } else {
        //     navigate("/mint-nft");
        //   }
        // });
      }
    }
  }, [twitterId, account]);

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

    //getting you the revisions
    setTimeArray(tweetDetails.timestamps["#BuiltWithRevise"]);

    //getting the nft id
    setNFTId(tweetDetails.nftId);
    setIsLoading(false);

    let wallet = await checkWalletConnected();
    setAccount(wallet);

    setLoader(false);
  };

  const mintNFT = async (url, userName) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          Twitter.abi,
          signer
        );
        setWallet(true);
        setError(true);
        setAccountErrorMassage("Going to pop wallet now to pay gas...");
        let tx = await contract.register(url, userName);
        const receipt = await tx.wait();

        if (receipt.status === 1) {
          setWallet(true);
          setError(true);
          const url = `https://mumbai.polygonscan.com/tx/${tx.hash}`
          setAccountErrorMassage(
            <a href={url} target="_blank">
              NFT minted! https://mumbai.polygonscan.com/tx/{tx.hash}
            </a>

          );
        } else {
          setWallet(true);
          setError(true);
          setAccountErrorMassage("Transaction failed! Please try again");
        }
      }
    } catch (error) {
      setWallet(true);
      setError(true);
      setAccountErrorMassage(error.error.data.message);
      return error;
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        setAccount(null);
        setError(true);
        setWallet(false);
        setAccountErrorMassage(
          <a href="https://metamask.io/" target="_blank">
            Get MetaMask - https://metamask.io/
          </a>
        );
      } else {
        // console.log("We have the ethereum object", ethereum);
        setError(false);
        setAccountErrorMassage("");
      }

      // Fancy method to request access to account.
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // Boom! This should print out public address once we authorize Metamask.
      // console.log("Connected", accounts[0]);
      setAccount(accounts[0]);
      setWallet(true);
      setError(false);
      setAccountErrorMassage("");
      return accounts[0];
    } catch (error) {
      if (error.code === 4001) {
        setError(true);
        setAccountErrorMassage("you have denied to connect your wallet");
        setAccount(null);
        setWallet(false);
      }
      setAccount(null);
      setWallet(false);

      return null;
    }
  };

  const checkWalletConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      setAccount(null);
      setWallet(false);
      setError(true);
      setAccountErrorMassage(
        <a href="https://metamask.io/" target="_blank">
          Get MetaMask - https://metamask.io/
        </a>)
      return null;
    } else {
      // console.log("We have the ethereum object", ethereum);
      setError(false);
      setAccountErrorMassage("");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      // console.log("Found an authorized account:", account);
      setAccount(accounts[0]);
      setWallet(true);
      setError(false);
      setAccountErrorMassage("");
    } else {
      setAccount(null);
      setWallet(false);
      setError(false);
      setAccountErrorMassage("");
    }

    const chainId = await ethereum.request({ method: "eth_chainId" });
    setNetwork(chainId);
    console.log({ chainId });

    ethereum.on("chainChanged", handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
    return accounts.length > 0 ? accounts[0] : null;
  };

  const mintOnPolygon = async () => {
    // eslint-disable-next-line no-lone-blocks
    {
      if (account === null || account === undefined) {
        setLoader(true);
        setWallet(false);
        connectWallet();
        setLoader(false);
      } else {
        //Mint Function
        setLoader(true);
        setWallet(true);
        try {
          await mintNFT(`https://revise.link/${nftId}`, userName.trim());
        } catch (error) {
          setAccountErrorMassage(
            "you have disconnected your wallet, connect to your wallet again"
          );
        }
        setLoader(false);
      }
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x13881",
                  chainName: "Polygon Mumbai Testnet",
                  rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                  nativeCurrency: {
                    name: "Mumbai Matic",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  };

  const renderInputForm = () => {
    // If not on Polygon Mumbai Testnet, render the switch button
    if (network !== "0x13881") {
      return (
        <div className="connect-wallet-container">
          <p style={{ color: "red" }}>
            Please switch to Polygon Mumbai Testnet
          </p>
          <p
            className="wallet-address"
            style={{ cursor: "pointer" }}
            onClick={() => switchNetwork()}
          >
            Click here to switch
          </p>
        </div>
      );
    } else {
      return <p style={{ color: 'white' }}>Connected to Mumbai Network</p>;
    }
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
                  <img
                    src={userProfileImage}
                    alt="revise"
                    className="userProfileImage"
                  />
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
                  {network === "0x13881" && (
                    <p
                      className="mint-on-polygon"
                      onClick={() => mintOnPolygon()}
                    >
                      <img
                        src={
                          account === null || account === undefined
                            ? metamask
                            : polygon
                        }
                        alt="polygon"
                        style={{ margin: "5px", height: "20px" }}
                      />
                      {account === null || account === undefined
                        ? "Connect to Wallet"
                        : "Mint on Polygon"}
                    </p>
                  )}
                </div>
                {wallet ? (
                  <p className="wallet-address">
                    {" "}
                    Wallet {account?.slice(0, 6)}...{account?.slice(-4)}
                  </p>
                ) : (
                  ""
                )}
                {account && renderInputForm()}
                {error ? (
                  <p className="error-message">{accountErrorMessage}</p>
                ) : (
                  ""
                )}
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
