import React from 'react'
import Tooltip from '../../../assets/admin-dashboard/tooltip-icon.svg'
import './dropdown.scss'

const Dropdown = ({ options, value, handleChange }) => {

    return (
        <div style={{ display: 'flex' }} className='add-badge-dropdown-wrapper'>
            <label className='add-badge-form-title-wrapper add-badge-form-dropdown'>
                <p>Type* <img src={Tooltip} alt="info" /></p>
                <div className='select-dropdown'>
                    <select value={value} onChange={handleChange} name='type'>
                        {options.map((option, id) => (
                            <option value={option.value} key={id}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </label>

            <div>
                {value === 'LU' ? <label className='add-badge-form-title-wrapper add-badge-form-limited-use-claims'>
                    <div>
                        <p>Total Claims* <img src={Tooltip} alt="info" /></p>
                        <div className='add-badge-form-claims'>
                            <input type="text" style={{ border: 'none' }} className='add-badge-form-title-field' name='couponCriteria' /></div>
                    </div>
                </label> : ''}
                {value === 'TL' ? <div style={{ display: 'flex' }}>
                    <label className='add-badge-form-title-wrapper add-badge-form-limited-use-claims' style={{ marginRight: '10px' }}>
                        <div>
                            <p>Start Date & Time* <img src={Tooltip} alt="info" /></p>
                            <div className='add-badge-form-claims'>
                                <input type="number" style={{ border: 'none' }} className='add-badge-form-title-field' name='startDate' /></div>
                        </div>
                    </label>
                    <label className='add-badge-form-title-wrapper add-badge-form-limited-use-claims'>
                        <div>
                            <p>End Date & Time* <img src={Tooltip} alt="info" /></p>
                            <div className='add-badge-form-claims'>
                                <input type="number" style={{ border: 'none' }} className='add-badge-form-title-field' name='EndDate' /></div>
                        </div>
                    </label>
                </div> : ''}

                {value === 'UL' ? <label className='add-badge-form-title-wrapper add-badge-form-limited-use-claims'>
                    <div>
                        <p>Enter Twitter ID* <img src={Tooltip} alt="info" /></p>
                        <div className='add-badge-form-claims' >
                            <textarea rows='4' name="twitterId" className='dropdown-enter-twitter-id' />
                        </div>
                    </div>
                </label> : ''}
                {value === 'MS' ? <label className='add-badge-form-title-wrapper add-badge-form-limited-use-claims'>
                    <div>
                        <p>Points Reached* <img src={Tooltip} alt="info" /></p>
                        <div className='add-badge-form-claims'>
                            <input type="number" style={{ border: 'none' }} className='add-badge-form-title-field' /></div>
                    </div>
                </label> : ''}
            </div>
        </div>
    )
}

export default Dropdown