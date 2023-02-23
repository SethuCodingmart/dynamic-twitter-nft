import React, { useEffect, useState } from 'react'
import { selectTemplates } from '../../../services/api'
import Tooltip from '../../../assets/admin-dashboard/tooltip-icon.svg'
import customSelectTemplate from '../../../assets/admin-dashboard/custom-select-template.svg'
import './templateImages.scss'

const TemplateImages = () => {
    const token = localStorage.getItem('admin')
    // const [data, setData] = useState([])
    const BASE_URL = process.env.REACT_APP_API_URL
    const data = [{
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }, {
        description: "temp1",
        image: "nft-image/v2/image/Badge-1.png",
        name: "template1",
    }]

    const handleTemplateSelect = (event) => {
        console.log('data');
    }

    useEffect(() => {
        templateImages()
    }, [])

    const templateImages = async () => {
        const data = await selectTemplates({ token })
        // setData(data)
        console.log(data);
    }
    return (
        <div className='template-images-wrapper'>
            <div>
                <h2 className='template-images-header'>Images <img src={Tooltip} alt="" className='template-images-tooltip' /> </h2>
            </div>
            <div className='template-images-data-wrapper'>
                <div className='template-images-data' onClick={handleTemplateSelect}>
                    <div className='template-images-image-wrapper'><img src={customSelectTemplate} alt="" className='template-images-image' /></div>
                    <div>
                        <p className='template-images-badge-name'>Name</p>
                        <p className='template-images-badge-description'>Description</p>
                    </div>
                </div>
                {data.map((item, id) =>
                    <div className='template-images-data' key={id} onClick={handleTemplateSelect}>
                        <div className='template-images-image-wrapper'>
                            <img src={BASE_URL + '/' + item.image} alt="badge" className='template-images-image' />
                        </div>
                        <div>
                            <p className='template-images-badge-name'>{item.name}</p>
                            <p className='template-images-badge-description'>{item.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TemplateImages