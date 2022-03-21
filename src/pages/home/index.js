import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './style.css'
import Footer from '../../components/footer';
import Navbar from '../../components/navbar/nav';
import api from '../../services/api';

function Home(){

    const [image, setImage] = useState([])

    useEffect(()=>{

        api.get('/projects')
        .then(response => setImage(response.data))
        .catch((err) => {
            console.log(err)
        })
    },[])


    return(
        <div>
            <Helmet title="Somos Connect" />
            <Navbar />
        <section className="header">
            <div className="container">
            <div className="text">
                <h2>Conectamos pessoas a marcas</h2>
                <p>Somos Branding e Comunicação Integrada</p>
            </div>
            </div>
        </section>

        <section>
            <main className="show-port">
            <div className="container">
                <div className="content">

                    {image.slice(0,4).reverse().map((img, indx) => {
                        return(
                            <a href={`project/${img.slug}`} key={img.id} className="zoom_image">
                                <img src={img.thumbnail} alt={img.title}/>
                                <div className="meta_brand">
                                <h2>{img.title}</h2>
                                <span>Branding</span>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <a href="/portfolio" className="btn">Ver todos os projetos</a>
            </div>
            </main>
        </section>

        <section className="service_section">
            <div className="container">
                <div className="content_service">
                    <div className="service_box active">
                        <div>
                            <i class='bx bx-bar-chart-alt-2'></i>
                        </div>
                        <div className="title_box">
                            <h3>Comunicação Empresarial</h3>
                        </div>
                        <div><p>Planejamento Estratégico, Consultoria e Análise de mercado para o sucesso da sua empresa.</p></div>
                    </div>
                    <div className="service_box">
                        <div>
                            <i class='bx bx-rocket' ></i>
                        </div>
                        <div className="title_box">
                            <h3>MKT Digital</h3>
                        </div>
                        <div><p>Planejamento e ações de campanhas digitais com Facebook Business, Google Ads e Instagram.</p></div>
                    </div>
                    <div className="service_box">
                        <div>
                            <i class='bx bx-diamond'></i>
                        </div>
                        <div className="title_box">
                            <h3>Branding</h3>
                        </div>
                        <div><p>Desenvolvimento de identidades visuais, logotipos e tudo que sua marca precisa para ser vista e lembrada.</p></div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        </div>

    )
}

export default Home;