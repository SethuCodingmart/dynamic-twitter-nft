import React, { useState } from 'react'
import Logo from '../../../assets/admin-dashboard/logo.svg'
import DashboardIcon from '../../../assets/admin-dashboard/dashboard-icon.svg'
import ContactIcon from '../../../assets/admin-dashboard/contact-icon.svg'
import AddBadgeIcon from '../../../assets/admin-dashboard/add-badge-icon.svg'
import { Link } from 'react-router-dom'
import './leftBar.scss'

const AdminDashboardLeftBar = () => {

    const handleOnclick = (event) => {
        event.target.classList.add('side-navbar');
    }

    return (
        <div className='admin-dashboard-left-bar-wrapper'>
            <div className="admin-dashboard-left-bar-container">
                <div className="logo">
                    <img src={Logo} alt="Revise" className='logo' />
                </div>
                <div className="button-list">
                    <ul>
                        <div onClick={handleOnclick}>
                            <Link to='/admin-dashboard' >
                                <li>
                                    <div>
                                        <img src={DashboardIcon} alt="icon" className='icon' />
                                    </div>
                                    <div>
                                        Dashboard
                                    </div>
                                </li>
                            </Link>
                        </div>

                        <Link to='/all-badges' onClick={handleOnclick}>
                            <li>
                            <div>
                                <img src={AddBadgeIcon} alt="icon" className='icon' />
                            </div>
                            <div>
                                My Badges
                            </div>
                        </li>
                        </Link>

                        <li onClick={handleOnclick}>
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