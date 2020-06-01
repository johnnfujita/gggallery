import React from 'react'
import {NavLink} from "react-router-dom";

import {Cart } from '@styled-icons/evil/Cart'
import styled from "styled-components";
import { Person } from "@styled-icons/material/Person";

const ProfileButtons = () => {
    return (
        <div className="button-container">
            
            <NavLink to="\carrinho" className="circle-one"><CartIcon size="28"/></NavLink>
            <NavLink to="\perfilusuario" className="circle-two"><PersonIcon size="28"/></NavLink>
        </div>
    )
}

export default ProfileButtons

export const CartIcon = styled(Cart)`

`

export const PersonIcon = styled(Person)`

`