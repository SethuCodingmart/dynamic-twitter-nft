import React, { useRef } from 'react'
import userProfile from '../../../assets/admin-dashboard/userProfile.svg'
import RightBarTopBadges from '../right-bar-top-badges/TopBadges'
import RightBarLeastClaimedBadges from '../right-bar-least-claimed-badges/LeastClaimedBadges'
import RightBarContactSupport from '../right-bar-contact-support/ContactSupport'
import './rightBar.scss'
import { useNavigate } from 'react-router-dom'

const AdminDashboardRightBar = ({ token }) => {
    const toggleProfile = useRef()
    const navigate = useNavigate()

    const menuToggle = () => {
        toggleProfile.current.classList.toggle("active");
    }

    const handleLogout = () => {
        window.localStorage.removeItem('admin')
        navigate("/signin");

    }

    return (
        <div className='admin-dashboard-right-bar-wrapper'>
            <div className='admin-dashboard-right-bar-container'>
                <div className="user-profile-wrapper" onClick={menuToggle} >
                    <div>
                        <img src={userProfile} alt="profile" className='user-profile-image' />
                    </div>
                    <div className="userName">
                        Victor
                    </div>
                    <div ref={toggleProfile} className='userProfileList'>
                        <div className='userProfileListItem' onClick={handleLogout}><i style={{ paddingRight: '5px' }}>&#8592;</i> Logout</div>
                    </div>
                </div>
                <div className="right-bar-top-badges">
                    <RightBarTopBadges token={token} />
                    <RightBarLeastClaimedBadges token={token} />
                </div>
                <div className="right-bar-contact-support">
                    <RightBarContactSupport />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardRightBar