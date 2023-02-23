import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Footer from '../../../components/footer/Footer'
import AddBadge from '../add-badge/AddBadge'
import AdminDashboardLeftBar from '../left-bar/LeftBar'
import AdminDashboardRightBar from '../right-bar/RightBar'

const AddBadgeHome = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('admin')
    useEffect(() => {
        if (token === null) {
            navigate('/signin')
        }
    }, [localStorage.getItem('admin')])

    return (
        <div className='admin-dashboard-wrapper'>
            <div className="admin-dashboard-home-container">
                <AdminDashboardLeftBar />
                <AddBadge />
                <AdminDashboardRightBar token={token} />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}


export default AddBadgeHome