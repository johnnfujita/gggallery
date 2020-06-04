import React from "react";


let imagesJson = require("../mockdata/obras.json")

export default React.createContext({
    obras: imagesJson.obras,
    cart:[],
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
})