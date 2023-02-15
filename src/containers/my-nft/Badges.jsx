import React from 'react';

import Badge from '../../assets/images/badges/badge.png';

const Badges = () => {
  return (
    <div className='image-grid'>
        <div className="badge">
          <div className="badgeTitle">
            <div>
              <h2>Badges Earned</h2>
              <a>CLAIM NEW BADGE</a>
            </div>
            <p className="expandBtn">SEE LESS</p>
          </div>
          <div className="badgeContent">
            <div className="badgeCard">
              <img src={Badge} alt="badge" />
            </div>
            <div className="badgeCard">
              <img src={Badge} alt="badge" />
            </div>
            <div className="badgeCard">
              <img src={Badge} alt="badge" />
            </div>
            <div className="badgeCard">
              <img src={Badge} alt="badge" />
            </div>
            <div className="badgeCard">
              <img src={Badge} alt="badge" />
            </div>
            <div className="badgeCard">
              <img src={Badge} alt="badge" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Badges