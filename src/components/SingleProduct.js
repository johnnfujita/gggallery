import React from 'react'

import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck"
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"
import styled from "styled-components"



let imagesJson = require("../mockdata/obras.json")
let imageList = imagesJson.obras

let isTablet = window.innerWidth <= 650


const SingleProduct = (props) => {
    let item = imageList.filter((el) => el.id === Number(props.match.params.id))
    console.log(item)
    item = item[0]
    return (
        <div className="obra-container">
            <div className="image-container">
                <img  className="image" src={require(`../assets/${item.url}.jpg`)} alt={`${item.title}`} />
            </div>
            <div className="menu">
                <div className="description">
                    <div className="details">
                        <div className="title">{item.title}, {item.date}</div>
                        <div className="artist">artist: {item.artist}</div>
                        
                        <div className="size">dimensions: {item.width}cm x {item.height}cm</div>
                        <div className="size">technique: {item.technique}</div>
                        <div className="size">style: {item.style}</div>
                    </div>
                    <div className="buttons-container-bottom">
                        <div className="labels">
                        <div className="label">Original Unique</div>
                        <div className="label">Replicas Limited</div>
                        </div>
                        <div className="counter">
                            <div className="counter-button">+</div>
                            <input className="input-counter" type="text" pattern="\d+" placeholder="Qnt." disabled={true}/>
                            <div className="counter-button">-</div>
                        </div>
                    </div>
                    
                </div>
                <div className="add-to-cart-container">
                    <div className="price">R$ {item.price},00</div>

                    <div className="certificates-warnings">
                        <div className="certificate">
                            <AuthenticityCheck size={18} />
                            <div className="label-certificate">Certificado de Autenticidade</div>
                            </div>
                        <div className="certificate">
                            <PaymentBagde size={18} />
                           <div className="label-certificate">Pagamento Seguro</div> 
                        </div>
                    </div>
                    <div className="final-buttons">
                        <div className="add-button">Checkout</div>
                        <div className="or-label">ou</div>
                        <div className="direct-whats"> <WhatsappContact size={24}/> {isTablet ? "" : "Whatsapp"}</div>
                    </div>
                    
                </div>
                   

            </div>
        </div>
    )
}

export default SingleProduct


const PaymentBagde = styled(SecurePayment)`
    color: #ccc;
`
const AuthenticityCheck = styled(BadgeCheck)`
    color: #ccc;
`

const WhatsappContact = styled(Whatsapp)`
    color: $black;
`
