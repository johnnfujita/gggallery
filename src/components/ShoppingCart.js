import React, { useState} from 'react'

import { connect } from 'react-redux';
import { incrementCartItem, decrementCartItem, cleanCartItem, cleanCart } from '../store/actions/cart'; 

import { NavLink } from "react-router-dom"
import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck"
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"
import {ShoppingBag} from "@styled-icons/boxicons-solid/ShoppingBag"
import styled from "styled-components"
import {Trash} from "@styled-icons/boxicons-solid/Trash"






const ShoppingCart = ({cart, incrementCartItem, decrementCartItem, cleanCartItem, cleanCart}) => {
   

    
    const handleIncrementClick = (itemId) => { 
        incrementCartItem(itemId)
        return itemId
    }

    const handleDecrementClick = (itemId, itemQnt) => {

        if(itemQnt > 1) {
            decrementCartItem(itemId)
        }
        else if(itemQnt === 1){
            cleanCartItem(itemId)

        }
        
        return itemId
    }

    const handleCleanItemClick = (itemId) => {
        cleanCartItem(itemId)
        return itemId
    }

    
    
    return (
      
        <div className="cart-container">
            <div className="go-to-title-smartphone">Cart
                <button onClick={()=>cleanCart()} className="remove-cart-button">
                    <Trash size={24}/>
                </button>
            </div>
            <div className="product-container">
                <div className="product-container-header">
                <div className="header-field">PRODUTO</div>
                <div className="header-field">PREÇO</div>
                <div className="header-field">QNT.</div>
                
 
                <div className="remove-cart-button-container">
                    <button onClick={()=>cleanCart()} className="remove-cart-button">
                        <Trash size={24}/>
                    </button>

                </div>
                </div>
                <div className="product-table">

                    {   
                        cart.length>0 ? (cart.map((element) => {
                            
                            return (

                    <div key={element.artwork_id} className="dummy-product-row">
                    <div className="item-thumbnail-container">
                        <img className="item-thumbnail" src={require(`../assets/${element.url}.jpg`)} alt=" "/>
                    </div>
                    <div className="row-text">
                        <div className="item-price-and-quantity-container">
                            <div className="item-price-field">R${element.original[0]},00</div>
                            <div className="item-quantity-field">
                                {element.original ? "Original" :   (<><div className="item-operators">
                                    <div onClick={()=> handleIncrementClick(element.artwork_id)} className="little-circle-operators">+</div>
                                </div>
                                <div className="item-count">
                                    <p>{element.quantity}</p>
                                </div>
                                <div className="item-operators">
                                    <div onClick={()=> handleDecrementClick(element.artwork_id,  element.quantity)} className="little-circle-operators">-</div>
                                </div></>)}
                                
                            </div>
                        </div>   
                        {/* <div className="item-total-field">R$100</div> */}
                        <div className="item-remove-button">
                            <button onClick={()=>handleCleanItemClick(element.id)} className="cart-item-remove-button">X</button>
                        </div>
                    </div>
                </div> 
                            )
                         
                    })) : (<h3 style={{display: "flex", justifyContent: "center", color:"#c0c0c0"}}>CARRINHO VAZIO</h3>)
                }
                    
                    

                </div>
                    
            </div>

            
                       

            <div className="go-to-checkout-container">
                <div className="go-to-checkout-title">Cart</div>
                <div className="go-to-checkout-inner-container">
                    {/* <div className="gant-line">
                        <div className="gant-circle-1">1</div>
                        <div className="gant-line-1"></div>
                        <div className="gant-circle-2">2</div>
                        <div className="gant-line-2"></div>
                        <div className="gant-circle-3">3</div>
                        
                    </div> */}
                    <div className="total-container">
                        <div className="total-label">TOTAL</div>
                        <div className="total-value">R$ {cart.length >= 1 ? cart.map(item => item.original[0] * item.quantity).reduce((prev, next) => prev + next) : 0},00</div>
                    </div>
                    <div className="conditions-and-agreements">
                        <div className="shipping-conditions">*entrega disponível apenas na região metropolitana de fortaleza</div>
                        <div className="term-agreement"> <input type="checkbox"></input>Eu li e aceito os <span>Termos & Condições</span></div>
                    </div>
                    <div className="checkout-buttons">
                        <div className="button-to-checkout">CHECKOUT <CheckoutBag size={22} /></div>
                    </div>
                </div>
            </div>

            <div className="cart-add-to-cart-container">
                        <div className="cart-price">R$ {cart.length >= 1 ? cart.map(item => item.original[0] * item.quantity).reduce((prev, next) => prev + next) : 0},00</div>
    
                        <div className="cart-certificates-warnings">
                            <div className="cart-certificate">
                                <AuthenticityCheck size={18} />
                                <div className="cart-label-certificate">Certificado de Autenticidade</div>
                                </div>
                            <div className="cart-certificate">
                                <PaymentBagde size={18} />
                               <div className="cart-label-certificate">Pagamento Seguro</div> 
                            </div>
                        </div>
                        <div className="cart-final-buttons">
                            <NavLink to="/carrinho" className="cart-add-button">Checkout</NavLink>
                            <div className="cart-or-label">ou</div>
                            <a href="https://wa.me/5585988526803?text=http://codepipeline-gggallery-dev.s3-website-us-east-1.amazonaws.com/obra/6" className="cart-direct-whats"> <WhatsappContact size={24}/> { window.innerWidth <= 650 ? "" : "Whatsapp"}</a>
                        </div>
                        
                    </div>
        </div>

    ) 
}

const mapStateToProps = state => ({
    cart: state.cart.cart
})
export default connect(mapStateToProps, {incrementCartItem, decrementCartItem, cleanCartItem, cleanCart})(ShoppingCart);


const CheckoutBag = styled(ShoppingBag)`
    color: white;
`

const PaymentBagde = styled(SecurePayment)`
    color: #ccc;
`
const AuthenticityCheck = styled(BadgeCheck)`
    color: #ccc;
`

const WhatsappContact = styled(Whatsapp)`
    color: $black;
`

const TrashIcon = styled(Trash)`
    color: $black;
`
