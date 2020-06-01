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
                                        <NavLink className="anchors" to="/contact" exact>
                                            Como cadastrar seu espaço
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="anchors" to="/audit" exact>
                                            Como cadastrar suas obras
                                        </NavLink>
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