import React, { useEffect, useState } from 'react'
import { badgeStandings } from '../../../services/api'
import './leastClaimedBadges.scss'

const RightBarLeastClaimedBadges = ({ token }) => {
    const BASE_URL = process.env.REACT_APP_API_URL
    const [leastBadge, setLeastBadge] = useState([])

    useEffect(() => {
        leastBadges()
    }, [])

    const leastBadges = async () => {
        const result = await badgeStandings({ token })
        setLeastBadge(result.leastBadges)
    }
    return (
        <div className='right-bar-least-badges-wrapper'>
            <div className="right-bar-least-badges-container">
                <div className="right-bar-least-badges-container-header">
                    Least CLAIMED Badges
                </div>
                <div className='right-bar-least-badge-details'>
                    {leastBadge.map((item) => (
                        <div style={{ textAlign: 'center' }} >
                            <div className="right-bar-least-badge-images">
                                <img src={BASE_URL + '/' + item.image} alt="badge" height='50px' width='50px' />
                            </div>
                            <div className="right-bar-least-badge-claims-number ">{item.claims}
                            </div>
                            <div className="right-bar-least-badge-claims-text">
                                Claims
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightBarLeastClaimedBadges