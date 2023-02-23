import React, { useEffect, useState } from 'react'
import { selectTemplates } from '../../../services/api'
import Tooltip from '../../../assets/admin-dashboard/tooltip-icon.svg'
import './templateImages.scss'

const TemplateImages = () => {
    const token = localStorage.getItem('admin')
    const [data, setData] = useState([])
    const BASE_URL = process.env.REACT_APP_API_URL


    useEffect(() => {
        templateImages()
    }, [])

    const templateImages = async () => {
        const data = await selectTemplates({ token })
        setData(data)
        console.log(data);
    }
    return (
        <div className='template-images-wrapper'>
            <div>
                <h2 className='template-images-header'>Images <img src={Tooltip} alt="" className='template-images-image' /> </h2>
            </div>
            <div className='template-images-data-wrapper'>
                {data.map((item, id) => <div className='template-images-data' key={id}>
                    <div><img src={BASE_URL + '/' + item.image} alt="badge" /></div>
                    <div><p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default TemplateImages