import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Footer from '../../../components/footer/Footer'
import AdminDashboardLeftBar from '../left-bar/LeftBar'
import MyBadge from '../myBadge/MyBadge'
import AdminDashboardRightBar from '../right-bar/RightBar'

const AllBadges = () => {
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
                <MyBadge />
                <AdminDashboardRightBar token={token} />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}
export default AllBadges