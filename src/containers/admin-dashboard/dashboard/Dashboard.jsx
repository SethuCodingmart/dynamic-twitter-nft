import React, { useState } from 'react'
import CompleteBadgeList from '../dashboard-complete-badges/CompleteBadgeList'
import DashboardTopSection from '../right-bar-top-section/DashboardTopSection'
import './dashboard.scss'
import AddBadge from '../add-badge/AddBadge'

const AdminDashboardDashboard = () => {
    const [addBadgeVisibility, setAddBadgeVisibility] = useState(false)

    const HandleAddBadge = () => {
        setAddBadgeVisibility(true)
    }

    const handleBackButton = () => {
        setAddBadgeVisibility(false)
    }
    return (
        <div className='admin-dashboard-dashboard-wrapper'>
            {!addBadgeVisibility ? <div className="admin-dashboard-dashboard-container">
                <div className='create-badge-wrapper'>
                    <div className="user-name">
                        Hey there, Victor
                    </div>
                    <div className="create-badge" onClick={HandleAddBadge}>
                        <span className='add-badge-icon'>+</span> <span>Add Badge</span>
                    </div>
                </div>
                <div className='dashboard-top-section'>
                    <DashboardTopSection />
                </div>
                <div className="dashboard-bottom-section">
                    <CompleteBadgeList />
                </div>
            </div> :
                <div className="admin-dashboard-dashboard-add-badge-form-wrapper">
                    <AddBadge handleBackButton={handleBackButton} />
                </div>}
        </div>
    )
}

export default AdminDashboardDashboard