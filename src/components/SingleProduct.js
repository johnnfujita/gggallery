import React, { useEffect, useState} from 'react'
import { addCartItem } from '../store/actions/cart'

import { Redirect } from 'react-router-dom';
import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck"
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"
import styled from "styled-components"
import { connect } from 'react-redux';


function debounce(fn, ms) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            timer = null;
            fn.apply(this, arguments);
        }, ms)
    }
}

let imagesJson = require("../mockdata/obras.json")
let imageList = imagesJson


const SingleProduct = ({cart, match, addCartItem}) => {
    
    const [addedItem, setAddedItem] = useState(false) 
    
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    
    useEffect(()=> {
        const debounceHandleResize = debounce(function handleResize(){
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)
        window.addEventListener("resize", debounceHandleResize);

        return () => {
            window.removeEventListener("resize", debounceHandleResize );
        }
    })
    
    const handleClickAddItem = (itemId) => {
        if (cart.findIndex(item => item.artwork_id === itemId) === -1){
            addCartItem(imageList.filter(item => item.artwork_id === itemId)[0])
            setAddedItem(true)
        }
        
    }
    if (addedItem) { 
        return <Redirect to="/carrinho" />
    }
    let item = imageList.filter((el) => Number(el.artwork_id) === Number(match.params.id))
    
    item = item[0]
    return (
        <>
                <div className="obra-container">
                <div className="image-container">
                    <img  className="image" src={require(`../assets/${item.url}.jpg`)} alt={`${item.title}`} />
                </div>
                <div className="menu">
                    <div className="description">
                        <div className="details">
                            <div className="title">{item.title}, {item.date}</div>
                            <div className="artist"> {item.artist}</div>
                            
                            <div className="size">{item.width}cm x {item.height}cm</div>
                            <div className="size">{item.technique}</div>
                            {/* <div className="size">{item.style}</div> */}
                        </div>
                        <div className="buttons-container-bottom">
                            <div className="description-container">{item.description}</div>
                            <div className="labels">
                            <div className="label">Original</div>
                            {item.prints.length > 0 ? <div className="label">Prints</div>:null}
                            </div>
                            <div className="counter">
                                <div className="counter-button">+</div>
                                <input className="input-counter" type="text" pattern="\d+" placeholder="Qnt." disabled={true}/>
                                <div className="counter-button">-</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="add-to-cart-container">
                        <div className="price">R$ {item.original[0]},00</div>
    
                        {/* <div className="certificates-warnings">
                            <div className="certificate">
                                <AuthenticityCheck size={18} />
                                <div className="label-certificate">Certificado de Autenticidade</div>
                                </div>
                            <div className="certificate">
                                <PaymentBagde size={18} />
                               <div className="label-certificate">Pagamento Seguro</div> 
                            </div>
                        </div> */}
                        <div className="final-buttons">
                            {/* <div onClick={()=> handleClickAddItem(item.id) }className="add-button">Adicionar</div>
                            <div className="or-label">ou</div> */}
                            {/* <a href={`https://wa.me/5585988526803?text=https://karysvalley.com/obra/${item.id}`} className="direct-whats"> <WhatsappContact size={24}/> { dimensions.width <= 650 ? "" : "Whatsapp"}</a> */}
                            <a href={`https://wa.me/5585988526803?text=https://karysvalley.com/obra/${item.id}`} className="add-button"> Contato&nbsp;&nbsp;&nbsp;<WhatsappContact size={24}/> { dimensions.width <= 650 ? "" : ""}</a>
                        </div>
                        
                    </div>
                       
    
                </div>
            </div>
        </>
        
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps, { addCartItem }) (SingleProduct);


const PaymentBagde = styled(SecurePayment)`
    color: #ccc;
`
const AuthenticityCheck = styled(BadgeCheck)`
    color: #ccc;
`

const WhatsappContact = styled(Whatsapp)`
    color: $black;
`
