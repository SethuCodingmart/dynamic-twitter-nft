import React from 'react';

import Tick from '../../../assets/images/modal/tick.svg';
import Edit from '../../../assets/images/modal/edit.svg';
import Badge from '../../../assets/images/badges/badge.png';
import cancleIcon from "../../../assets/images/modal/Ellipse 21.svg";

import './badgeAdded.scss';

const BadgeAdded = () => {
  return (
    <>
        <section className='badgeAdded'>
            <div className="badgeAddedContainer">
                <div className="badgeAddedHeader">
                    <img src={Tick} alt="success" />
                    <h2>Badge Added</h2>
                </div>
                <div className="badgeAddedBody">
                    <div className="badgeAddedContent">
                        <div className='badgeAddedImage'>
                            <img src={Badge} alt="badge" />
                        </div>
                        <div className="badgeAddedDetails">
                            <div>
                                <h3>Pro Photographer</h3>
                                <p>Shared more than 50 photos on social media</p>
                            </div>
                            <span>Added on 14 Feb 2023 | 14:47</span>
                        </div>
                        <div>
                            <p className='editBtn'><img src={Edit} alt="edit" /> Edit</p>
                        </div>
                    </div>
                    <div className="badgeAddedFooter">
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
                            <h4>NIKEPROPHOTO65465</h4>
                        </div>
                    </div>
                </div>
                <img
                    className="closeBtn"
                    src={cancleIcon}
                    alt="close"
                />
            </div>
        </section>
    </>
  )
}

export default BadgeAdded