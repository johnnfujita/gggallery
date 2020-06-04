import React, {useEffect, useState} from 'react';
import gsap from "gsap";
import './styles/App.scss';
import Header from './components/Header';
import Home from './pages/home';




import About from "./pages/about";
import ArtistList from "./components/ArtistList";
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import DisplayList from "./components/DisplayList";
import PictureGrid from "./components/PictureGrid"
import SingleProduct from "./components/SingleProduct";
import ArtistProfile from "./components/ArtistProfile";
import RegisterOrLogin from "./components/RegisterOrLogin";
import UserProfile from "./components/UserProfile";
import ShoppingCart from "./components/ShoppingCart";


const routes = [
  {path: "/", name: "Home", Component: Home },
  {path: "/obras", name: "Acervo", Component: PictureGrid },
  {path: "/about", name: "About", Component: About },
  {path: "/artistas", name: "Artistas", Component: ArtistList },
  {path: "/espacos", name: "Espacos", Component: DisplayList },
  {path: "/artista", name: "Artista", Component: ArtistProfile },
  {path: "/obra/:id", name: "Obra", Component: SingleProduct },
  {path: "/login", name: "Login", Component: RegisterOrLogin },
  {path: "/perfilusuario", name: "Perfil Usuario", Component: UserProfile },
  {path: "/carrinho", name: " Carrinho", Component: ShoppingCart}

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
          <Route key={path} exact path={path} component={Component} />
        ))}
        
      </div>
      <Navigation />
    </>
  );
}

export default App;
