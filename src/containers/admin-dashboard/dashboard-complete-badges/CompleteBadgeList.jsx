import React, { useEffect, useState } from 'react';
import BadgeListTable from '../badge-list-table/BadgeListTable';
import { getAllBadges } from '../../../services/api'
import './completeBadgeList.scss';

const CompleteBadgeList = () => {
    const [BadgeList, setBadgeList] = useState([])
    const token = localStorage.getItem('admin')
    const tableHeaders = [
        { field: "image", header: "IMAGE" },
        { field: "name", header: "TITLE" },
        { field: "description", header: "DESCRIPTION" },
        { field: "badgeType", header: "TYPE" },
        { field: "claims", header: "CLAIMS" },
    ];

    useEffect(() => {
        getBadges()
    }, [])
    const getBadges = async () => {

        if (token !== null) {
            try {
                const badges = await getAllBadges({ token })
                setBadgeList(badges)
            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <div className='complete-badge-list-wrapper'>
            <div className="complete-badge-list-container">
                <div className="complete-badge-list-header">
                    <div className="complete-badge-list-header-text">
                        BADGES
                    </div>
                    <div className="complete-badge-list-header-see-all-link">
                        See all
                    </div>
                </div>

                <div className="badge-list-table">
                    <BadgeListTable tableHeaders={tableHeaders} BadgeList={BadgeList} />
                </div>
            </div>
        </div>
    )
}

export default CompleteBadgeList