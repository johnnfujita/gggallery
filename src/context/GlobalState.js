import React, { Component } from "react";
import ShopContext from "./shop-context";

const obrasJson = require("../mockdata/obras.json");
const obras = obrasJson.obras;


class GlobalState extends Component {

    state = {
        obras: obras,
        cart: []
    }


    addProductToCart = product => {};
    removeProductToCart = productId => {};

    render() {
        return <ShopContext.Provider value={{
            obras: this.state.obras,
            cart: this.state.cart, 
            addProductToCart: this.addProductToCart,
            removeProductFromCart: this.removeProductToCart

        }}>{this.props.children}</ShopContext.Provider>
    }
}