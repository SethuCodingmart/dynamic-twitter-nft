import React, { useEffect } from 'react'
import LeftBar from '../left-bar/LeftBar'
import RightBar from '../right-bar/RightBar'
import Dashboard from '../dashboard/Dashboard'
import Footer from '../../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import './home.scss'

const AdminDashboardHome = () => {
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
                <LeftBar />
                <Dashboard />
                <RightBar token={token} />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default AdminDashboardHome