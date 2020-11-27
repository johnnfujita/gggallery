import React, {useState} from 'react'
import { ReactComponent as CasesNext} from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev} from '../assets/arrow-left.svg';
import { Link } from "react-router-dom";
let entriesJson = require("../mockdata/mock_data.json")

const Cases = (props) => {

    let [offset, setOffset] = useState(0);

    const caseWidth = props.widthWin / 3
   
    const addOffset = () => {
       
        if (-offset < caseWidth * (entriesJson.length - 3)) {
            setOffset(offset => offset-caseWidth)
            console.log(-offset)
        }
        
    }

    const decreaseOffset = () => {
        if (-offset >= caseWidth) {
            setOffset(offset => offset+caseWidth)
            console.log(-offset)
        }
        
        
    }

    return (
        
        <section className="cases" >
        
            <div className="container-fluid">
            
                <div className="cases-navigation">
                    <div onClick={() =>decreaseOffset()} className={`cases-arrow prev ${offset === 0 ? "disabled" : ""}`}>
                        <CasesPrev />
                    </div>
                    <div className="cases-arrow next"  onClick={()=>addOffset()}>
                        <CasesNext />
                    </div>
                </div>
                <div className="row" style={{marginLeft: `${offset}px`}}>
                    {entriesJson.map( item => (
                        <Link to={`/artista/${item.artist.id}`}>
                            <div className="case"  key={item.obras[0].id}>
                                <div style={{width: props.widthWin / 3}} className="case-details">
                                    <div className="subtitle">
                                        {item.obras[0].title}
                                    </div>
                                    <h2>
                                        {item.artist.name}
                                    </h2>
                                </div>
                                <div className="case-image">
                                    <img src={require(`../assets/${item.obras[0].image_name}`)} alt={item.obras[0].title} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Cases
