import React, { useState } from "react";
import blueStar from "../../assets/images/blue-star.svg";
import redStar from "../../assets/images/red-star.svg";
import yellowStar from "../../assets/images/yellow-star.svg";
import giftTilted from "../../assets/images/gift-box-tilted.svg";
import { Link } from "react-router-dom";
import FAQQuestion from "../faq-questions/FAQQuestion";
import { faqArray } from "./faqArray";
import line from "../../assets/images/arrow-line.svg";
import twitterIcon from "../../assets/images/Twitter-faq.svg";
import telegramIcon from "../../assets/images/telegram-faq.svg";
import discordIcon from "../../assets/images/discord-faq.svg";
import "./faq.scss";

const FAQ = () => {
  const [questions, setQuestions] = useState(faqArray);
  return (
    <>
      <div className="faq-wrapper">
        <div className="faq">
          <div className="container">
            <div className="faq-header">
              <p className="faq-title">FREQUENTLY ASKED QUESTIONS</p>
              <div className="stars">
                <img src={blueStar} className="img-fluid" alt="revise"></img>
                <img src={redStar} className="img-fluid" alt="revise"></img>
                <img src={yellowStar} className="img-fluid" alt="revise"></img>
              </div>
            </div>
            <div className="faq-questions row">
              <div className="col-md-8">
                {questions.map((question) => (
                  <FAQQuestion key={question.id} {...question} />
                ))}
              </div>
              <div className="col-md-4 more-faq">
                <p className="more-faq-text">
                  More questions? Connect with us directly
                </p>
                <div className="more-faq-connect">
                  <img src={line} alt="revise" className="more-faq-icons" />
                  <a href="https://twitter.com/ReviseNFT" target="_blank">
                    <img
                      src={twitterIcon}
                      alt="revise"
                      className="more-faq-icons"
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src={telegramIcon}
                      alt="revise"
                      className="more-faq-icons"
                    />
                  </a>
                  <a
                    href="https://discord.com/invite/aMRnzBR5Pj"
                    target="_blank"
                  >
                    <img
                      src={discordIcon}
                      alt="revise"
                      className="more-faq-icons"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="your-nft-in-one-click row">
              <div className="your-nft-in-one-click-gift-box col-md-3 ">
                <img
                  src={giftTilted}
                  className="img-fluid"
                  alt="revise"
                  width="150"
                  height="150"
                ></img>
              </div>
              <div className="your-nft-in-one-click-text col-md-5">
                Get your free NFT in just one click
              </div>
              <div className="your-nft-in-one-click-button col-md-4">
                <Link to="mint-nft" className="linkButton">
                  Mint NFT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
