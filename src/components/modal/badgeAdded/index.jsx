import React from 'react';
import Tick from '../../../assets/images/modal/tick.svg';
import cancleIcon from "../../../assets/images/modal/Ellipse 21.svg";
import MyBadge from '../../../containers/admin-dashboard/myBadge/MyBadge';
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
                {/* Badge added */}
                <MyBadge badgeAdded="added"/>
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