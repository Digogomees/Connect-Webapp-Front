import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/nav';
import './style.css'

import api from '../../services/api'
import Footer from '../../components/footer';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Project(props) {

    const [brand, setNewBrand] = useState({})
    const [images, setNewimages] = useState([])
    const { title } = useParams()

    const updateViewsProject = async (id) => {
        await api.put(`project/${id}/views`)
       .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        api.get(`project/${title}`)
        .then(response => {

            setNewBrand(response.data)
            setNewimages(response.data.images)

        }).catch(err => {
            console.log(err)
        })

    }, [title])

    useEffect(() => {
        updateViewsProject(brand?.id)
    },[brand])

    const estilo = {
        color: "#EB3656"
    }

    return (
        <div>
            <Helmet title={`Projetos - ${brand.title}`} />
            <Navbar color={estilo} />
                    <section className="main_text">
                        <div className="container">
                            <div className="text_description">
                                <h2>{brand.title}</h2>
                                <p>{brand.description}</p>
                            </div>
                        </div>
                    </section>

                    <section className="brand_img">
                        <div>
                            {images.map((img, index) => {
                                const pathImage = 'http://localhost:5555'
                                return (
                                    <div key={index} className="img">
                                    <img src={`${pathImage}/files/${img}` || img} alt='upload' />
                                    </div>
                                )
                            })}
                        </div>
                    </section>


            <Footer />

            
        </div>
    )
}