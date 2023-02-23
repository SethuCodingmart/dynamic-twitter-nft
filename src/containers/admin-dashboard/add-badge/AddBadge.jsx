import React, { useEffect, useState } from 'react'
import BackArrow from '../../../assets/admin-dashboard/add-badge-arrow.svg'
import AddBadgeIcon from '../../../assets/admin-dashboard/add-badge-icon.svg'
import Tooltip from '../../../assets/admin-dashboard/tooltip-icon.svg'
import fileUpload from '../../../assets/admin-dashboard/file-upload-icon.svg'
import Dropdown from '../drop-down/Dropdown'
import { addBadge } from '../../../services/api'
import { Link } from 'react-router-dom'
import './addBadge.scss'
import TemplateImages from '../template-images/TemplateImages'

const AddBadge = () => {
    const token = localStorage.getItem('admin')
    const [value, setValue] = useState('LU');

    const options = [
        { value: 'LU', label: 'Limited Use' },
        { value: 'TL', label: 'Limited Time' },
        { value: 'UL', label: 'User Limited' },
        { value: 'MS', label: 'Milestone' }
    ];



    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // if (fileUploadTag.current !== undefined) {
    //     fileUploadTag.current.addEventListener('change', () => {
    //         let attachment = fileUploadTag.current.files[0];
    //         setImage(attachment.name)
    //         console.log(image);
    //         if (attachment.type !== "image/png") {
    //             fileUploadTag.current.value = ''
    //             uploadedFileName.current.style.color = 'red'
    //             uploadedFileName.current.innerText = "only '.png' or '.jpg' are allowed"
    //         }
    //         else if (attachment.size / 1000 > 1024) {
    //             fileUploadTag.current.value = ''
    //             uploadedFileName.current.style.color = 'red'
    //             uploadedFileName.current.innerText = 'image size cannot exceed 1 mb(mega byte)'
    //         }
    //         uploadedFileName.current.innerText = attachment.name;
    //         console.log(attachment);
    //         console.log(attachment.type);
    //     })
    // }


    const [image, setImage] = useState('')

    const handleImage = (event) => {
        setImage(event.target.files[0])
        console.log(event.target.files[0]);
    }

    let form = document.getElementById('form')
    const createBadge = async (event) => {
        event.preventDefault();

        if (token !== null && image !== '') {
            try {
                const formData = new FormData(form)
                const data = await addBadge(formData, { token })
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className='dashboard-add-badge-wrapper'>
            <div className="dashboard-add-badge-container">
                <div className="add-badge-user-name">
                    Hey there, Victor
                </div>

                <div className="dashboard-add-badge-back-button">
                    <Link to="/admin-dashboard"><img src={BackArrow} alt="back" style={{ cursor: 'pointer' }} className='dashboard-add-badge-back-button-images' /></Link>
                    <img src={AddBadgeIcon} alt="icon" className='dashboard-add-badge-back-button-images' />
                    <p className='dashboard-add-badge-back-button-text'>Add Badge</p>
                </div>

                <div className="dashboard-add-badge-form-wrapper">

                    <form encType="multipart/form-data" onSubmit={createBadge} id='form'>
                        <div className='dashboard-add-badge-form-select-template'>
                            <TemplateImages />
                        </div>
                        <label className='add-badge-form-title-wrapper'>
                            <p className='add-badge-form-title-text'>Title</p>
                            <input type="text" className='add-badge-form-title-field add-badge-form-title-text' name='name' />
                        </label>

                        <label className='add-badge-form-title-wrapper'>
                            <p className='add-badge-form-title-text'>Description</p>
                            <textarea rows='4' name="description" className='add-badge-form-title-description-field add-badge-form-title-text' />
                        </label>

                        <div>
                            <Dropdown options={options}
                                value={value}
                                handleChange={handleChange} />
                        </div>
                        <div style={{ display: 'flex' }} >
                            <label className='add-badge-form-title-wrapper add-badge-form-points'>
                                <p>Points* <img src={Tooltip} alt="info" /></p>
                                <input type="number" className='add-badge-form-title-field' name='points' />
                            </label>
                        </div>

                        <div>
                            <label className='add-badge-form-title-wrapper add-badge-form-title-text'>
                                <p >Image* <img src={Tooltip} alt="info" /></p>
                            </label>

                            <div >
                                <label className='add-badge-file-upload-input'>
                                    <div className='add-badge-file-upload-input-drag-and-drop'>
                                        <img src={fileUpload} alt="file" />
                                        <span className='add-badge-click-to-upload-text'>Click to upload </span>
                                        <span className='add-badge-drag-and-drop-text'>or drag & drop</span>
                                        <input type="file" onChange={handleImage} name='image' />
                                    </div>
                                    <div className='add-badge-file-upload-image-input'>
                                        <span className='add-badge-file-upload-browse-image-button'>Browse image</span>
                                        <span className="add-badge-uploaded-image-name" ></span>
                                        <span className="add-badge-uploaded-image-format">JPG or PNG</span>
                                        <span className="add-badge-uploaded-image-size">Maximum size 1 mb(mega bytes)</span>
                                    </div>
                                </label>
                            </div>

                            <div className='add-badge-confirm-button-wrapper'>
                                <button className='add-badge-confirm-button'>Confirm badge</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBadge