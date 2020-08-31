import React, {useEffect, useState} from 'react'

import { connect } from 'react-redux';
import { incrementCartItem, decrementCartItem, cleanCartItem } from '../store/actions/cart'; 

import { NavLink } from "react-router-dom"
import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck"
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"
import {ShoppingBag} from "@styled-icons/boxicons-solid/ShoppingBag"
import styled from "styled-components"


var paintings  = [
    {
        imgUrl: "../assets/paint1.jpg",
        price: 44000.00

    },
    {
        imgUrl: "../assets/paint1.jpg",
        price: 40000.00
        
    }
]




const ShoppingCart = ({cart, incrementCartItem, decrementCartItem, cleanCartItem}) => {
   
    console.log(cart)
    useEffect(()=> {    
        console.log(cart)
        
    },[paintings, cart])
    
    const [localCart, setLocalCart] = useState([...cart])
        
    
    
    const handleIncrementClick = (item) => {
        console.log(item, "Eu sou o id")
        if (!(cart === undefined || cart.length === 0)) {
            const index = cart.findIndex(cartItem => cartItem.productId === item)
            console.log('dentro da list eu sou o id dentro do carrinho', index)
            console.log(cart)
            if (index !== -1) {
                cart[index].quantity += 1;
                setLocalCart([...cart])
            }
            else {
                cart.push(
                    {
                        productId: item,
                        quantity: 1
                    })
            }
        }
        else {
            cart.push(
                {
                    productId: item,
                    quantity: 1
                })
        }
       
        incrementCartItem(cart)
        return cart 
    }

    const handleDecrementClick = (item) => {
        if (!(cart === undefined || cart.length === 0)) {
            const index = cart.findIndex(cartItem => cartItem.productId === item)
            if (index!==-1){
                if(cart[index].quantity>=2){
                    cart[index].quantity -= 1;
                    console.log('tirei um da quantidade ai viu', cart)
                }
                else if(cart[index].quantity === 1) {
                    cart.splice(index, 1)
                    console.log('dropei tudo', cart)

                }
            }
            else {
                console.log('esse item nem existe e tu quer oq?', cart)
                return cart
            }
        }   
        else {
            console.log('da carrim n ma')
            return cart
        }
            


        decrementCartItem(cart)
        return cart 
    }

    const handleCleanItemClick = (item) => {
        if (!(cart === undefined || cart.length === 0)) {
            const index = cart.findIndex(cartItem => cartItem.productId === item)
            console.log(index)
            if (index!==-1) {
                cart.splice(index, 1)
                console.log('oi',cart)
            }
            else {
                console.log("oi sem item",cart)
                return cart
            }
        }
        else{
            console.log("oi sem carrim",cart)
            return cart
        }
        cleanCartItem(cart)
        return cart
    }
    const handleChangeQntField =(e)=> {
        
       e.preventDefault()
       const index = cart.findIndex(item => item.productId === parseInt(e.target.name))
       console.log(cart)
       console.log(parseInt(e.target.name), index)
        cart[index].quantity = parseInt(e.target.value)
    }
    
    return (
      
        <div className="cart-container">
            <p>{JSON.stringify(localCart)}</p>
            <div className="go-to-title-smartphone">Cart</div>
            <div className="product-container">
                <div className="product-container-header">
                <div className="header-field">PRODUTO</div>
                <div className="header-field">PREÇO</div>
                <div className="header-field">QNT.</div>
 
                <div className="header-field"></div>
                </div>
                <div className="product-table">

                    {   
                        (cart.map((element) => {
                            console.log("PASSEI POR AQUI")
                            return (

                    <div className="dummy-product-row">
                    <div className="item-thumbnail-container">
                        <img className="item-thumbnail" src={require("../assets/paint1.jpg")} alt=" "/>
                    </div>
                    <div className="row-text">
                        <div className="item-price-and-quantity-container">
                            <div className="item-price-field">{element.price}{}</div>
                            <div className="item-quantity-field">
                                <div className="item-operators">
                                    <button onClick={()=> handleIncrementClick(element.productId)} className="little-circle-operators">+</button>
                                </div>

                                <div className="item-count">
                                    <input type="number" name={element.productId}  onChange={handleChangeQntField} /><p>{cart[0].quantity}</p>
                                </div>
                                <div className="item-operators">
                                    <div onClick={()=> handleDecrementClick(element.productId)} className="little-circle-operators">-</div>
                                </div>
                            </div>
                        </div>   
                        {/* <div className="item-total-field">R$100</div> */}
                        <div onClick={()=> handleCleanItemClick(element.productId)} className="item-remove-button">X</div>
                    </div>
                </div> 
                            )
                         
                    }))
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
                        <div className="total-value">R$ 400.00</div>
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

            <div className="add-to-cart-container">
                        <div className="price">R$ {"item.price"},00</div>
    
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
                            <NavLink to="/carrinho" className="add-button">Checkout</NavLink>
                            <div className="or-label">ou</div>
                            <a href="https://wa.me/5585988526803?text=http://codepipeline-gggallery-dev.s3-website-us-east-1.amazonaws.com/obra/6" className="direct-whats"> <WhatsappContact size={24}/> { window.innerWidth <= 650 ? "" : "Whatsapp"}</a>
                        </div>
                        
                    </div>
        </div>

    ) 
}

const mapStateToProps = state => ({
    cart: state.cart.cart
})
export default connect(mapStateToProps, {incrementCartItem, decrementCartItem, cleanCartItem})(ShoppingCart);


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
