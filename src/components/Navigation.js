import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileButtons from "./ProfileButtons";

import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"
import styled from "styled-components"

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">
                            Menu
                            <ul className="nav-links">
                                <li>
                                    <NavLink className="anchors" to="/obras" exact>
                                        Acervo
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="anchors" to="/artistas" exact>
                                        Artistas
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="anchors" to="/about" exact>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="anchors" to="/espaços" exact>
                                        Espaços
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ProfileButtons />
                        <div className="nav-column">
                            <div className="nav-label">Contato</div>
                            <div className="nav-infos">
                                <ul className="nav-info">
                                    <li className="nav-info-label">Email</li>
                                    <li>
                                        <a  href={`https://api.whatsapp.com/send?phone=5585997382000&text=Garcez,%0agostaria%20de%20ter%20meu%20estabelecimento%20cadastrado%20para%20receber%20obras.`} className="anchors">
                                            Como cadastrar seu espaço
                                        </a>
                                    </li>
                                    <li>
                                    <a  href={`https://api.whatsapp.com/send?phone=5585997382000&text=Garcez,%0agostaria%20de%20ter%20obras%20de%20arte%20que%20possuo%20para%20venda.`} className="anchors">
                                            Como cadastrar suas obras
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav-info">
                                    <li className="nav-info-label">Galeria Principal</li>
                                    <li>Villa Pita</li>
                                    <li>Brazil</li>
                                    <li>Fortaleza, CE</li>
                                </ul>
                                <ul className="nav-info">
                                    <li className="nav-info-label">Phone</li>
                                    
                                    <li className="nav-whatsapp">
                                        <a className="anchors" href="https://wa.me/5585997382000/" >
                                            <WhatsappContact size={30} /> Whatsapp
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav-info">
                                    <li className="nav-info-label">Legal</li>
                                    <li>Privacidade & Cookies</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation


const WhatsappContact = styled(Whatsapp)`
    color: $white;
`