import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
//this style of import is so that we can animate it
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>
                                Há humanos:
                            </span>
                        </div>
                        <div className="line">
                            <span>
                                A prova é a Arte
                            </span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <Link to="/obras" >Galeria <RightArrow /></Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner
