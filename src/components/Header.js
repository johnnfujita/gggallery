import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import {ReactComponent as UpArrow} from "../assets/up-arrow-circle.svg";
import gsap from 'gsap';

let tl = gsap.timeline();


const Header = ({ dimensions}) => {
    const [menuState, setMenuState] = useState({
        menuOpened: false
    });

    useEffect(() => {
        if(menuState.menuOpened === true) {
            gsap.to("nav", {css: {display: "block"}})
            gsap.to("body", {css: {overflow: "hidden"}})

            tl.to(".App", {
                duration: 1,
                y: dimensions.width <= 654 ? "80vh" : "70vh",
                ease: "expo.inOut"
            });
        }
        else {
            
        }
    })

    return (
        <div className="header">
            <div className="container">
                <div className="row vcenter space-between">
                    <div className="logo">
                        <a href="/">GGG</a>
                    </div>
                    <div className="nav-toggle">
                        <div onClick={()=> setMenuState({menuOpened: true})} 
                             className="hamburguer-menu">
                            
                            <span></span>
                            <span></span>
                        </div>
                        <div onClick={()=> setMenuState({menuOpened: false})}
                             className="hamburguer-menu-close">
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
