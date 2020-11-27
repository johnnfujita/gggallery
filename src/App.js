import React, {useEffect, useState} from 'react';
import gsap from "gsap";
import './styles/App.scss';
import Header from './components/Header';
import Home from './pages/home';

// global state connector to broadcast app component props to the global state

import { useDispatch, useSelector } from 'react-redux';





import About from "./pages/about";
import ArtistList from "./components/ArtistList";
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import DisplayList from "./components/DisplayList";
import PictureGrid from "./components/PictureGrid"
import SingleProduct from "./components/SingleProduct";
import ArtistProfile from "./components/ArtistProfile";

import UserProfile from "./components/UserProfile";
import ShoppingCart from "./components/ShoppingCart";
import  Login  from './pages/Login';
import Register from './pages/Register';
import Activate from './pages/Activate';



const routes = [
  {path: "/", name: "Home", Component: Home },
  {path: "/obras", name: "Acervo", Component: PictureGrid },
  {path: "/about", name: "About", Component: About },
  {path: "/artistas", name: "Artistas", Component: ArtistList },
  {path: "/espacos", name: "Espacos", Component: DisplayList },
  {path: "/artista", name: "Artista", Component: ArtistProfile },
  {path: "/obra/:id", name: "Obra", Component: SingleProduct },
  
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
  
  const isAuthenticated = useSelector(state => state.auth.token)
  
  
  gsap.to("body", 0, {css: { visibility: "visible"}});
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  
  useEffect(()=> {
    console.log(` this is true: ${isAuthenticated}`)
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
          <Route key={path} exact path={path}  render={ (props)=> <Component {...props} dimensions={dimensions}/> } />
        ))}
        <Route key={"/vidas/login"} exact path={"/vidas/login"} render={ props => <Login {...props} />} />
        <Route key={"/vidas/register"} exact path={"/vidas/register"} render={ props => <Register {...props} role="register" />} />
        <Route key={"/activate"} exact path={"/activate/:uid/:token"} render={ props => <Activate {...props}  />} />
      </div>
      <Navigation />
    </>
  );
}

export default App ;
