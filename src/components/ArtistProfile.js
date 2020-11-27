import React from 'react'
import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck"
import { SecurePayment } from '@styled-icons/remix-fill/SecurePayment'
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"
import styled from "styled-components"

let entriesJson = require("../mockdata/mock_data.json")
const item = entriesJson[0]
const ArtistProfile = (props) => {
    let item = entriesJson.filter((item) => Number(item.artist.id) === Number(props.match.params.id))
    item = item[0]
    return (
        <div className="artist-art-outer-container">
             <div className="artist-section" style={{height: `${props.dimensions.height}`}}  key={item.obras[0].id}>
                            <div style={{width: props.widthWin / 3, height: `${props.dimensions.height}`}} className="case-details">
                                
                                <h2>
                                    {item.artist.name}
                                </h2>
                            </div>
                            <div className="artist-image-container">
                                <img  className="artist-image" src={require(`../assets/${item.artist.image_name}`)} alt={item.obras[0].title} />
                            </div>
            </div>
            <div className="description-section">
                <h3 className="brief-artist">
                    História
                </h3>
                                    {item.artist.description}
            </div>
           
            {/* <div className="artist-miniatures">
            {item.obras.length > 1 ? (<div>{item.obras.map((obra) => (
                    <div>{obra.title}</div>
                ))}</div>) :  null }
                
            </div> */}

            <div className="artist-obra-container">
                
                <div className="artist-image-container">
                <div className="artist-obra-title">
                <h2>Obra exposta</h2>   
                </div>
                
                    <img  className="artist-image" src={require(`../assets/${item.obras[0].image_name}`)} alt={`${item.obras[0].title}`} />
                </div>
                <div className="artist-menu">
                    <div className="artist-description">
                        <div className="artist-details">
                            <div className="artist-title">{item.obras[0].title}, {item.obras[0].year}</div>
                            <div className="artist-artist"> {item.artist.name}</div>
                            
                            <div className="artist-size">{item.obras[0].width}cm x {item.obras[0].height}cm</div>
                            <div className="artist-size">{item.obras[0].technique}</div>
                            {/* <div className="size">{item.style}</div> */}
                        </div>
                         {/* <div className="buttons-container-bottom">
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
                        </div>  */}
                        
                    </div>
                    <div className="artist-add-to-cart-container">
                    <div className="artist-price">{item.obras[0].price === "" ? (null) : (<p>{`R$ ${item.obras[0].price},00`}</p>)  }</div>
    
                        <div className="artist-certificates-warnings">
                            <div className="artist-certificate">
                                <AuthenticityCheck size={18} />
                                <div className="artist-label-certificate">Certificado de Autenticidade</div>
                                </div>
                            <div className="artist-certificate">
                                <PaymentBagde size={18} />
                               <div className="artist-label-certificate">Pagamento Seguro</div> 
                            </div>
                        </div>
                        <div className="artist-final-buttons">
                            {/* <div onClick={()=> handleClickAddItem(item.artwork_id) }className="add-button">Adicionar</div>
                            <div className="or-label">ou</div> */}
                            <a href={`https://wa.me/5585986719677?text=Ju, Eu gostaria de mais info sobre a obra ${item.obras[0].title}`} className="artist-direct-whats"> <WhatsappContact size={24}/> { props.dimensions.width <= 650 ? "" : "Whatsapp"}</a>
                            
                        </div>
                        
                    </div>
                       
    
                </div>
            </div>

        </div>
    )
}

export default ArtistProfile
const PaymentBagde = styled(SecurePayment)`
    color: #ccc;
`
const AuthenticityCheck = styled(BadgeCheck)`
    color: #ccc;
`

const WhatsappContact = styled(Whatsapp)`
    color: $black;
`
