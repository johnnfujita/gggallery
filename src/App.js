import React, {useEffect} from 'react';
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
function App() {

  useEffect(()=> {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to("body", 0, {css: { visibility: "visible"}});
  });
  return (
    <>
      
      <Header />
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
