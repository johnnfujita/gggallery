import React from 'react'
import { ReactComponent as CasesNext} from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev} from '../assets/arrow-left.svg';

const caseStudies = [
    {
        id: 1,
        subtitle: "Bacon", 
        title: "Tragédia da Carne",
        img: "innocent-cropped"
},
{
        id: 2,
        subtitle: "Juca Maximo", 
        title: "Serie Especial ",
        img: "juca3"
},
{
        id: 3,
        subtitle: "Formas do pensamento", 
        title: "Uma viagem pelo abstrato corporal",
        img: "artistunknown"
}
]
const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesPrev />
                    </div>
                    <div className="cases-arrow next">
                        <CasesNext />
                    </div>
                </div>
                <div className="row">
                    {caseStudies.map( item => (
                        <div className="case" key={item.id}>
                            <div className="case-details">
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
