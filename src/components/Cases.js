import React, {useState} from 'react'
import { ReactComponent as CasesNext} from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev} from '../assets/arrow-left.svg';

const caseStudies = [
    {
        id: 1,
        subtitle: "Ohama", 
        title: "O cyberpunk",
        img: "Dystopia n 1"
},
{
        id: 2,
        subtitle: "Juca", 
        title: "Serie Especial ",
        img: "Gravity IX"
},
{
        id: 3,
        subtitle: "Totonho", 
        title: "As Dunas",
        img: "Morro Branco"
}
]
const Cases = (props) => {

    let [offset, setOffset] = useState(0);

    const caseWidth = props.widthWin / 3
   
    const addOffset = () => {
       
        if (-offset < caseWidth * (caseStudies.length - 3)) {
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
                    {caseStudies.map( item => (
                        <div className="case"  key={item.id}>
                            <div style={{width: props.widthWin / 3}} className="case-details">
                                <div className="subtitle">
                                    {item.subtitle}
                                </div>
                                <h2>
                                    {item.title}
                                </h2>
                            </div>
                            <div className="case-image">
                                <img src={require(`../assets/${item.img}.jpg`)} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Cases
