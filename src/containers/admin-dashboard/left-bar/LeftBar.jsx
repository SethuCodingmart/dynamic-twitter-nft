import React, { useState } from 'react'
import Logo from '../../../assets/admin-dashboard/logo.svg'
import DashboardIcon from '../../../assets/admin-dashboard/dashboard-icon.svg'
import ContactIcon from '../../../assets/admin-dashboard/contact-icon.svg'
import AddBadgeIcon from '../../../assets/admin-dashboard/add-badge-icon.svg'

import './leftBar.scss'

const AdminDashboardLeftBar = () => {
    const [toggleState, setToggleState] = useState(1)

    return (
        <div className='admin-dashboard-left-bar-wrapper'>
            <div className="admin-dashboard-left-bar-container">
                <div className="logo">
                    <img src={Logo} alt="Revise" className='logo' />
                </div>
                <div className="button-list">
                    <ul>
                        <li onClick={() => setToggleState(1)} className={toggleState === 1 ? 'side-navbar' : ''}>
                            <div>
                                <img src={DashboardIcon} alt="icon" className='icon' />
                            </div>
                            <div>
                                Dashboard
                            </div>
                        </li>

                        <li onClick={() => setToggleState(2)} className={toggleState === 2 ? 'side-navbar' : ''}>
                            <div>
                                <img src={AddBadgeIcon} alt="icon" className='icon' />
                            </div>
                            <div>
                                My Badges
                            </div>
                        </li>

                        <li onClick={() => setToggleState(3)} className={toggleState === 3 ? 'side-navbar' : ''}>
                            <div>
                                <img src={ContactIcon} alt="icon" className='icon' />
                            </div>
                            <div>
                                Contact
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardLeftBar