import React from 'react'

import {ShoppingBag} from "@styled-icons/boxicons-solid/ShoppingBag"
import styled from "styled-components"
const ShoppingCart = () => {
    return (
        <div className="cart-container">
            <div className="go-to-title-smartphone">Cart</div>
            <div className="product-container">
                <div className="product-container-header">
                <div className="header-field">PRODUTO</div>
                <div className="header-field">PREÇO</div>
                <div className="header-field">QNT.</div>
 
                <div className="header-field"></div>
                </div>
                <div className="product-table">

                    <div className="dummy-product-row">
                        <div className="item-thumbnail-container">
                            <img className="item-thumbnail" src={require("../assets/paint1.jpg")} alt=" "/>
                        </div>
                        <div className="row-text">
                            <div className="item-price-and-quantity-container">
                                <div className="item-price-field">R$100</div>
                                <div className="item-quantity-field">
                                    <div className="item-operators">
                                        <div className="little-circle-operators">+</div>
                                    </div>

                                    <div className="item-count">unique</div>
                                    <div className="item-operators">
                                        <div className="little-circle-operators">-</div>
                                    </div>
                                </div>
                            </div>   
                            {/* <div className="item-total-field">R$100</div> */}
                            <div className="item-remove-button">X</div>
                        </div>
                    </div>

                    <div className="dummy-product-row">
                        <div className="item-thumbnail-container">
                            <img className="item-thumbnail" src={require("../assets/paint1.jpg")} alt=" "/>
                        </div>
                        <div className="row-text">
                            <div className="item-price-and-quantity-container">
                                <div className="item-price-field">R$100</div>
                                <div className="item-quantity-field">
                                    <div className="item-operators">
                                        <div className="little-circle-operators">+</div>
                                    </div>

                                    <div className="item-count">unique</div>
                                    <div className="item-operators">
                                        <div className="little-circle-operators">-</div>
                                    </div>
                                </div>
                            </div>   
                            {/* <div className="item-total-field">R$100</div> */}
                            <div className="item-remove-button">X</div>
                        </div>
                    </div>

                </div>
                    
            </div>
            <div className="go-to-checkout-container">
                <div className="go-to-checkout-title">Cart</div>
                <div className="go-to-checkout-inner-container">
                    <div className="gant-line">
                        <div className="gant-circle-1">1</div>
                        <div className="gant-line-1"></div>
                        <div className="gant-circle-2">2</div>
                        <div className="gant-line-2"></div>
                        <div className="gant-circle-3">3</div>
                        
                    </div>
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
        </div>
    )
}

export default ShoppingCart


const CheckoutBag = styled(ShoppingBag)`
    color: white;
`