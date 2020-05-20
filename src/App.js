import React, {useEffect, useState} from 'react';
import gsap from "gsap";
import './styles/App.scss';
import Header from './components/Header';
import Home from './pages/home';


import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import About from "./pages/about";
import Services from "./pages/services";
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

const routes = [
  {path: "/", name: "Home", Component: Home },
  {path: "/case-studied", name: "Case Studies", Component: CaseStudies },
  {path: "/about", name: "About", Component: About },
  {path: "/services", name: "Services", Component: Services },
  {path: "/approach", name: "Approach", Component: Approach },
]

// function to limit the rerenderings to happen only after a few seconds after the last one
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms)
  }
}

function App() {

  gsap.to("body", 0, {css: { visibility: "visible"}});
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  
  useEffect(()=> {
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

   
    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)
    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    }
  });
  return (
    <>
      
      <Header dimensions={dimensions} />
      {console.log(dimensions.width)}
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path} >
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
