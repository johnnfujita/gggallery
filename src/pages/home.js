import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Cases from '../components/Cases'
import IntroOverlay from '../components/IntroOverlay'
import gsap from 'gsap';
import PictureGrid from "../components/PictureGrid"
const timeline = gsap.timeline();
const homeAnimation =(completeAnimation)=> {
         
  
    
    timeline.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    }).to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "ease.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    }).to(".intro-overlay", 0, { css:{display: "none"}})
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    });
}
const Home = (props) => {
   
    const [animationComplete, setAnimationComplete] = useState(false)

    const completeAnimation = () => {
        setAnimationComplete(true)
    }
    useEffect(()=> {
       homeAnimation(completeAnimation);
    
      }, []);

    return (
        <>
        {animationComplete === false ? <IntroOverlay /> : " "}
    
            <Banner />
            <Cases widthWin={props.dimensions.width}/>
        </>
    )
}

export default Home
