import React from "react";
import footer from "../../assets/images/footer-image.svg";
import facebook from "../../assets/images/footer-facebook.svg";
import instagram from "../../assets/images/footer-instagram.svg";
import twitter from "../../assets/images/footer-twitter.svg";
import discord from "../../assets/images/footer-discord.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div
        className="footer-wrapper"
        style={{
          backgroundColor: "#202020",
        }}
      >
        <div className="footer-image">
          <img src={footer} alt="revise" />
        </div>
        <div className="footer-text">
          Revise offers a powerful back-end to program NFTs to interact with
          applications, utilities and data feeds.
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/ReviseNFT/">
            <img src={facebook} alt="revise" className="icon" />
          </a>
          <a href="https://www.instagram.com/revisenft/">
            <img src={instagram} alt="revise" className="icon" />
          </a>
          <a href="https://twitter.com/ReviseNFT">
            <img src={twitter} alt="revise" className="icon" />
          </a>
          <a href="https://discord.com/invite/aMRnzBR5Pj">
            <img src={discord} alt="revise" className="icon" />
          </a>
        </div>
        <div className="footer-bottom">
          <div>Copyright © 2022 Revise Innovations.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
