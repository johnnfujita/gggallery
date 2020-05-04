import React from 'react'
import { NavLink } from 'react-router-dom'

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
                                        Case Studies
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/approach" exact>
                                        Approach
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" exact>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" exact>
                                        Services
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div className="nav-column">
                            <div className="nav-label">Contact</div>
                            <div className="nav-infos">
                                <ul className="nav-info">
                                    <li className="nav-info-label">Email</li>
                                    <li>
                                        <NavLink to="/contact" exact>
                                            Get in touch with us
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/audit" exact>
                                            Get a Free Audit
                                        </NavLink>
                                    </li>
                                </ul>
                                <ul className="nav-info">
                                    <li className="nav-info-label">Root Gallery</li>
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
                                    <li>Privacy and Cookies</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
