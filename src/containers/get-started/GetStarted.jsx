import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { fetchTweetDetails } from "../../services/api";
import twitterButton from "../../assets/images/twitter-button.svg";
import { CircularProgress } from "@mui/material";
import "./get-started.scss";

const GetStarted = () => {
  const navigate = useNavigate();
  const [twitterId, setTwitterId] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("twitterId") !== null) {
      navigate("/my-nft");
    }
  }, [localStorage.getItem("twitterId")]);

  //handle change
  const handleChange = (event) => {
    setErrorMessage("");
    setError(false);
    setTwitterId(event.target.value);
  };


  //fetching API
  const tweetDetailsFunction = async (twitterId) => {
    try {
      const tweetDetails = await fetchTweetDetails(twitterId);
      console.log(tweetDetails);
      setLoading(false);
      setError(false);

      setErrorMessage("");
      //Set TwitterId in Local Storage after Success
      localStorage.setItem("twitterId", twitterId);
      navigate("/my-nft");
      setTwitterId("");
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage("Enter a valid Twitter id");
    }
  };

  //handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (twitterId === "") {
      setLoading(false);
      setError(true);
      setErrorMessage("Enter your Twitter id");
    } else {
      tweetDetailsFunction(twitterId);
    }
  };

  return (
    <>
      <div className="get-started-container">
        <div className="get-started-wrapper">
          <div>
            <Header />
            <div
              className="get-started"
              style={{
                backgroundColor: "#202020",
              }}
            >
              <div className="container">
                <div className="get-started-on-click-wrapper row">
                  <div className="col-sm-5  col-12 get-started-on-click-text ">
                    You’re just one step away from acquiring your free nft
                  </div>
                  <div className="offset-sm-2 col-sm-5  col-12 get-started-on-click-box ">
                    <p className=" get-started-on-click-box-text">
                      Let’s get started
                    </p>
                    <div className="form-wrapper">
                      <form onSubmit={handleSubmit} className="form">
                        <div className="twitter_id">
                          <input
                            type="text"
                            name="user_twitter_id"
                            id="user_twitter_id"
                            placeholder="Enter your Twitter id"
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        {error ? (
                          <p className="error-message">{errorMessage}</p>
                        ) : (
                          ""
                        )}
                        <button className="submit_button" type="submit">
                          <img
                            src={twitterButton}
                            alt="twitter-icon"
                            className="twitter-image-icon"
                          />
                          {loading ? (
                            <CircularProgress color="inherit" size="25px" />
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
