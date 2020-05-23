import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileButtons from "./ProfileButtons";
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
                                    <NavLink to="/case-studies" exact>
                                        Artistas
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/approach" exact>
                                        Obras
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" exact>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" exact>
                                        Curadoria
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
                                        <NavLink to="/contact" exact>
                                            Como cadastrar seu espaço
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/audit" exact>
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
                                    <li>Garcez, G</li>
                                    <li>+55 (85) 988 526 803</li>
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
