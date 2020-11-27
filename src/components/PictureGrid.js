import React, {useEffect} from 'react'
import {  Link} from "react-router-dom";


let imagesJson = require("../mockdata/mock_data.json")
let imageList = imagesJson
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
                        <Link key={el.obras[0].id} to={`/obra/${el.obras[0].id}`}>
                            <div className="image-container">
                            <img  className="image" src={require(`../assets/${el.obras[0].image_name}`)} alt={`${el.obras[0].title}`} />
                                <div className="description">
                                    <div className="price">{el.obras[0].title === "" ? (<p>Vendida</p>) : (<p>{`R$ ${el.obras[0].price},00`}</p>)  }</div>
                                    <div className="details">
                                        <div className="artist">{el.artist.name}</div>
                                        <div className="title">{el.obras[0].title}, {el.obras[0].year}</div>
                                        <div className="dimensions">{el.obras[0].width}cm x {el.obras[0].height}cm</div>
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
                        (<Link key={el.obras[0].id} to={`/obra/${el.obras[0].id}`}>
                        <div className="image-container">
                        <img  className="image" src={require(`../assets/${el.obras[0].image_name}`)} alt={`${el.obras[0].title}`} />
                            <div className="description">
                                <div className="price">{el.obras[0].title === "" ? (<p>Vendida</p>) : (<p>{`R$ ${el.obras[0].price},00`}</p>)  }</div>
                                <div className="details">
                                    <div className="artist">{el.artist.name}</div>
                                    <div className="title">{el.obras[0].title}, {el.obras[0].year}</div>
                                    <div className="dimensions">{el.obras[0].width}cm x {el.obras[0].height}cm</div>
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
                            <Link key={el.obras[0].id} to={`/obra/${el.obras[0].id}`}>
                            <div className="image-container">
                            <img  className="image" src={require(`../assets/${el.obras[0].image_name}`)} alt={`${el.obras[0].title}`} />
                                <div className="description">
                                    <div className="price">{el.obras[0].title === "" ? (<p>Vendida</p>) : (<p>{`R$ ${el.obras[0].price},00`}</p>)  }</div>
                                    <div className="details">
                                        <div className="artist">{el.artist.name}</div>
                                        <div className="title">{el.obras[0].title}, {el.obras[0].year}</div>
                                        <div className="dimensions">{el.obras[0].width}cm x {el.obras[0].height}cm</div>
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
