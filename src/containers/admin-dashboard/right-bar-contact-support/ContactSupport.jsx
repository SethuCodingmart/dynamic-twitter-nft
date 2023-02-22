import React from 'react'
import contactSupport from '../../../assets/admin-dashboard/contact-support.svg'
import contactSupportIcon from '../../../assets/admin-dashboard/contact-support-icon.svg'
import './contactSupport.scss'

const RightBarContactSupport = () => {
    return (
        <div className='right-bar-contact-support-wrapper'>
            <div className="right-bar-contact-support-container">
                <div className="contact-support-image">
                    <img src={contactSupport} alt="support" />
                </div>
                <div className='contact-support'>
                    <div className="contact-support-icon">
                        <img src={contactSupportIcon} alt="icon" />
                    </div>
                    <div className='contact-support-text'>Contact Support</div>
                </div>
            </div>
        </div>
    )
}

export default RightBarContactSupport