import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Badge from "../../../assets/images/badges/badge.png";
import Copy from "../../../assets/images/badges/copy.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import BackArrow from '../../../assets/admin-dashboard/add-badge-arrow.svg'
import AddBadgeIcon from '../../../assets/admin-dashboard/add-badge-icon.svg'
import { Link } from "react-router-dom";
import "./myBadge.scss";

const MyBadge = ({ badgeAdded }) => {
  const notify = () => toast("Code Copied");

  return (
    <div className="myBadge">
      <div className="myBadgeUserName">
        Hey there, Victor
      </div>

      <div className="myBadgeBackButton">
        <Link to="/admin-dashboard"><img src={BackArrow} alt="back" style={{ cursor: 'pointer' }} className='myBadgeBackButtonImages' /></Link>
        <img src={AddBadgeIcon} alt="icon" className='myBadgeBackButtonImages' />
        <p className='myBadgeBackButtonText'>My Badges</p>
      </div>

      <div className="myBadgeBody">
        <div className="myBadgeContent">
          <div className="myBadgeImage">
            <img src={Badge} alt="badge" />
          </div>
          <div className="myBadgeDetails">
            <div>
              <h3>Pro Photographer</h3>
              <p>Shared more than 50 photos on social media</p>
            </div>
            <span>Added on 14 Feb 2023 | 14:47</span>
          </div>
          <div>
            <p className={`${badgeAdded === "added" ? "editBtn" : "myBadgeEdit"}`}> {/* add "editBtn" class for badge added design*/}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8107 4.72192L8.25267 2.19041L9.0953 1.34658C9.32602 1.11553 9.60951 1 9.94576 1C10.2816 1 10.5649 1.11553 10.7956 1.34658L11.6382 2.19041C11.869 2.42146 11.9893 2.70033 11.9994 3.02701C12.0094 3.3533 11.8991 3.63196 11.6683 3.86301L10.8107 4.72192ZM9.93793 5.61096L3.55799 12H1V9.43836L7.37994 3.04932L9.93793 5.61096Z" fill="#D7FF3A" />
              </svg>
              Edit
            </p>
          </div>
        </div>
        <div className="myBadgeFooter">
          <div>
            <p>Type</p>
            <h4>Controlled</h4>
          </div>
          <div>
            <p>Points Earned</p>
            <h4>100</h4>
          </div>
          <div>
            <p>CODE</p>
            <CopyToClipboard text={"NIKEPROPHOTO65465"}
              onCopy={notify}
            >
              <h4>NIKEPROPHOTO65465 <span><img src={Copy} alt="copy" /></span></h4>
            </CopyToClipboard>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default MyBadge;
