import React from 'react'
import { Link } from 'react-router-dom'
import CompleteBadgeList from '../dashboard-complete-badges/CompleteBadgeList'
import DashboardTopSection from '../right-bar-top-section/DashboardTopSection'
import './dashboard.scss'

const AdminDashboardDashboard = () => {

    return (
        <div className='admin-dashboard-dashboard-wrapper'>
            <div className="admin-dashboard-dashboard-container">
                <div className='create-badge-wrapper'>
                    <div className="user-name">
                        Hey there, Victor
                    </div>
                    <Link to='/add-badge'>
                        <div className="create-badge" >
                        <span className='add-badge-icon'>+</span> <span>Add Badge</span>
                        </div>
                    </Link>
                </div>
                <div className='dashboard-top-section'>
                    <DashboardTopSection />
                </div>
                <div className="dashboard-bottom-section">
                    <CompleteBadgeList />
                </div>
            </div> 
        </div>
    )
}

export default AdminDashboardDashboard