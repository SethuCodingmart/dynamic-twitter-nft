import React from 'react'
import IncreaseIcon from '../../../assets/admin-dashboard/increase-icon.svg'
import DecreaseIcon from '../../../assets/admin-dashboard/decrease-icon.svg'
import './dashboardTopSection.scss'


const DashboardTopSection = () => {
  return (
    <div className='dashboard-top-section-wrapper'>
      <div className="dashboard-top-section-container">
        <div className="nft-claimed user-nft-details">
          <p className='name'>NFT CLAIMED</p>
          <div className='number-stats'>
            <p className='number'>10,124</p>
            <p className="stats">
              <img src={IncreaseIcon} alt="icon" className='icon' />
              <span>25%</span>
            </p>
          </div>
        </div>
        <div className="points-generated user-nft-details">
          <p className='name'>POINTS GENERATED</p>
          <div className='number-stats'>
            <p className='number'>268,124</p>
            <p className="stats">
              <img src={DecreaseIcon} alt="icon" className='icon' />
              <span>5%</span>
            </p>
          </div>
        </div>
        <div className="badges-claimed user-nft-details">
          <p className='name'>BADGES CLAIMED</p>
          <div className='number-stats'>
            <p className='number'>214</p>
            <p className="stats">
              <img src={IncreaseIcon} alt="icon" className='icon' />
              <span>25%</span>
            </p>
          </div>
        </div>
        <div className="total-users user-nft-details">
          <p className='name'>TOTAL USERS</p>
          <div className='number-stats'>
            <p className='number'>121,522</p>
            <p className="stats">
              <img src={IncreaseIcon} alt="icon" className='icon' />
              <span>25%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardTopSection