import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {Cart } from '@styled-icons/evil/Cart'
import styled from "styled-components";
import { Person } from "@styled-icons/material/Person";

const ProfileButtons = ({isAuthenticated}) => {
    

    return (
        <div className="button-container">
            
            <NavLink to="/carrinho" className="circle-one"><CartIcon size="28"/></NavLink>
            
            <NavLink to={isAuthenticated ? "/vidas/perfilusuario" : "/vidas/login"} className="circle-two"><PersonIcon size="28"/></NavLink>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(ProfileButtons);

export const CartIcon = styled(Cart)`

`

export const PersonIcon = styled(Person)`

`