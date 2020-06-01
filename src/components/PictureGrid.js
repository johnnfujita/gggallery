import React, {useEffect} from 'react'
import {  Link} from "react-router-dom";


let imagesJson = require("../mockdata/obras.json")
let imageList = imagesJson.obras
let column1 = imageList.filter((el, idx) => idx % 3 === 0)
let column2 = imageList.filter((el, idx) => idx % 3 === 1)
let column3 = imageList.filter((el, idx) => idx % 3 === 2)
const PictureGrid = (props) => {
    useEffect(()=>{
        console.log(column1)
        console.log(column2)
        console.log(column3)
    })
    
    return (
        
        <div className="grid-container">
            <div className="picture-grid">
                <div className="column">
                    {imageList.map((el, idx) => {
                        return idx % 3 === 0 ?  (
                        <Link key={el.id} to={`/obra/${el.id}`}>
                            <div className="image-container">
                            <img  className="image" src={require(`../assets/${el.url}.jpg`)} alt={`${el.title}`} />
                                <div className="description">
                                    <div className="price">R$ {el.price}</div>
                                    <div className="details">
                                        <div className="artist">{el.artist}</div>
                                        <div className="title">{el.title}, {el.date}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                     : " "
                        }
                    )}
                </div>
                <div className="column">
                    {imageList.map((el, idx) => {
                        return idx % 3 === 1 ?  
                        (<Link key={el.id} to={`/obra/${el.id}`}>
                            <div className="image-container">
                                <img key={el.id} className="image" src={require(`../assets/${el.url}.jpg`)} alt={`${el.title}`} />
                                    <div className="description">
                                        <div className="price">R$ {el.price}</div>
                                        <div className="details">
                                            <div className="artist">{el.artist}</div>
                                            <div className="title">{el.title}, {el.date}</div>
                                        </div>
                                    </div>
                            </div>
                        </Link>)
                         : " " 
                        }
                    )}
                </div>
                <div className="column">
                    {imageList.map((el, idx) => {
                        return idx % 3 === 2 ?  (
                        <Link to={`/obra/${el.id}`} >

                            <div className="image-container">
                                <img key={el.id} className="image" src={require(`../assets/${el.url}.jpg`)} alt={`${el.title}`} />
                                <div className="description">
                                    <div className="price">R$ {el.price}</div>
                                    <div className="details">
                                        <div className="artist">{el.artist}</div>
                                        <div className="title">{el.title}, {el.date}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )
                     : " "
                        }
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default PictureGrid;
