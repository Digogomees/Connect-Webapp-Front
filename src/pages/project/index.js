import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/nav';
import './style.css'

import api from '../../services/api'
import Footer from '../../components/footer';

export default function Project(props) {

    const [brand, setNewBrand] = useState({})
    const [images, setNewimages] = useState([])

    useEffect(() => {
        api.get(`project/${props.match.params.title}`)
        .then(response => {

            setNewBrand(response.data.project)
            setNewimages(response.data.images)

        }).catch(err => {
            console.log(err)
        })
           
        

    }, [])



    return (
        <div>
            <Navbar />
                    <section className="main_text">
                        <div className="container">
                            <div className="text_description">
                                <h2>{brand.title}</h2>
                                <p>{brand.description}</p>
                            </div>
                        </div>
                    </section>

                    <section className="brand_img">
                        <div className="container">
                            
                            {images.map((img, index) => {

                                return (
                                    <div key={index} className="img">
                                    <img src={img} />
                                    </div>
                                )
                            })}
                            
                        </div>
                    </section>


            <Footer />

            
        </div>
    )
}