import React, { useEffect, useState } from 'react'
import { badgeStandings } from '../../../services/api'
import './topBadges.scss'

const RightBarTopBadges = ({ token }) => {
    const BASE_URL = process.env.REACT_APP_API_URL

    const [topBadge, setTopBadge] = useState([])

    useEffect(() => {
        topBadges()
    }, [])

    const topBadges = async () => {
        const result = await badgeStandings({ token })
        setTopBadge(result.topBadges)
    }

    return (
        <div className='right-bar-top-badges-wrapper'>
            <div className="right-bar-top-badges-container">
                <div className="right-bar-top-badges-container-header">
                    Top Badges
                </div>
                <div className='right-bar-top-badge-details'>
                    {topBadge.map((item) => (
                        <div style={{ textAlign: 'center' }} >
                            <div className="right-bar-top-badge-images">
                                <img src={BASE_URL + '/' + item.image} alt="badge" width={50} height={50} />
                            </div>
                            <div className="right-bar-top-badge-claims-number ">{item.claims}
                            </div>
                            <div className="right-bar-top-badge-claims-text">
                                Claims
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightBarTopBadges