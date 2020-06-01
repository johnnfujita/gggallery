import React, { Component } from 'react'


let imagesJson = require("../mockdata/obras.json")
let imageList = imagesJson.obras

export default class SingleProduct extends Component {
    
    render() {
        let item = imageList.filter((el) => el.id === Number(this.props.match.params.id))
        console.log(item)
        item = item[0]
        return (
            <div className="obra-container">
                 <div className="image-container">
                            <img  className="image" src={require(`../assets/${item.url}.jpg`)} alt={`${item.title}`} />
                                <div className="description">
                                    <div className="price">R$ {item.price}</div>
                                    <div className="details">
                                        <div className="artist">{item.artist}</div>
                                        <div className="title">{item.title}, {item.date}</div>
                                    </div>
                                </div>
                            </div>
            </div>
        )
    }
}
