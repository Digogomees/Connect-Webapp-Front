import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/navbar/nav'
import './style.css'


export default function Contact(){

    const estilo = {
        color: "#EB3656"
    }

    const wpp = "https://api.whatsapp.com/send?phone=556199210022&text=Ol%C3%A1%2C%20tudo%20bem%20%3F%20estou%20interessado%20nos%20servi%C3%A7os%20da%20Connect%20e%20queria%20saber%20mais%20sobre..."
    const email = "mailto:connectmarketing3@gmail.com"

    return(
        <div>

            <Helmet title="Contato" />

            <Navbar contact={estilo} />

            <main>
                <div className="container center">
                    <div className="content_contact_box">

                        <div className="box_contact">
                            <div className="icon_contact"><i class='bx bxl-whatsapp'></i></div>
                            <div className="text_contact">
                                <h2>Contato pelo WhatsApp</h2>
                                <p>Por aqui você pode conversar diretamente com a gente e tirar qualquer dúvida sobre nossos serviços.</p>
                            </div>

                            <a href={wpp} target="_blank" className="btn_contact">Entrar em Contato</a>
                        </div>

                        <div className="box_contact">
                            <div className="icon_contact"><i class='bx bx-envelope'></i></div>
                            <div className="text_contact">
                                <h2>Contato por Email </h2>
                                <p>Já aqui você pode solicitar orçamentos, briefings e tirar dúvidas sobre os projetos</p>
                            </div>
                            <a href={email} target="_blank" className="btn_contact">Entrar em Contato</a>
                        </div>
                        
                    </div>
                </div>
            </main>

        </div>
    )
}