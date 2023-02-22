import React from 'react'
import './badgeListTable.scss'

const BadgeListTable = ({ tableHeaders, BadgeList }) => {
    const BASE_URL = process.env.REACT_APP_API_URL

    return (
        <div className='badge-list-table-wrapper'>
            <table className="badge-list-table-container">
                <thead>
                    <tr className="badge-list-header">
                        {tableHeaders.map((head, i) => {
                            return (
                                <th key={i} className="title">
                                    {head.header}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody >
                    {BadgeList?.length > 0 ? BadgeList.map((row, i) => {
                        return (
                            <tr className="badge-list-table-data" key={i}>
                                {tableHeaders.map((col, id) => {
                                    return (
                                        <td key={id} className="table-data">
                                            {col.field === 'image' ? <img src={BASE_URL + '/' + row[col.field]} alt='badge' width={25} height={25} /> : row[col.field]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    }) : <tr className='no-badges'><td>No Badges Created</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default BadgeListTable