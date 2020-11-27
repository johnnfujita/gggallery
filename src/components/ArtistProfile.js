import React from 'react'


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
           
            <div className="artist-miniatures">
            {item.obras.length > 1 ? (<div>{item.obras.map((obra) => (
                    <div>{obra.title}</div>
                ))}</div>) :  null }
                
            </div>
        </div>
    )
}

export default ArtistProfile
