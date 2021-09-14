import React from 'react';
import './style.css'
import Photo1 from '../../assets/img/amanda.jpg';


import Call from '../../assets/img/bora_action.svg';
import FooterWhite from '../../components/footerWhite';
import NavbarWhite from '../../components/navbarWhite/nav';


export default function About(){
    return(
        <div>

        <NavbarWhite />

        <section className="action_text">
            <div className="container action">
                <div className="content_action">
                <div className="img">
                    <img src={Call} alt="Bora pra Action" />
                </div>

                <div className="text_action">
                    <h2>“Dois inconformados com modelos de agências que entregam números e não resultados.” </h2>
                    <p>Para nós um bom design combinado com uma boa estratégia de negócio bem aplicado pode ser a 
                        forma mais eficiente de colocar o nome da sua marca na cabeça e no coração dos seus clientes.  
                        Por isso em 2017  criamos a Connect, um modelo bem diferente de agência, que busca somar conceitos 
                        como comunicação, branding e estratégias de negócios pontos essenciais para criar seu posicionamento 
                        diante do mercado.</p>
                </div>
                </div>
            </div>
        </section>

        <section className="action_about">
            <div className="container">
                <div className="content-about">

                    <div className="about-1">
                        <div className="imgAbout">
                            <img src={Photo1} alt="foto" />
                        </div>

                        <div className="about_text">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                                aliquam erat volutpat.</p>
                        </div>
                    </div>

                    <div className="about-2">
                        <div className="about_text_2">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                                aliquam erat volutpat.</p>
                        </div>

                        <div className="imgAbout">
                            <img src={Photo1} alt="foto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="header-about">
                <div className="container about">
                <div className="about-text">
                        <h2>“A única jornada <font>impossível</font> é aquela que você nunca começa.”</h2>
                        <p>- Tony Robbins</p>
                    </div>
                </div>
            </section>

        <FooterWhite />

        </div>
    )
}