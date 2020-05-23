import React from 'react'
import {Cart } from '@styled-icons/evil/Cart'
import styled from "styled-components";
import { Person } from "@styled-icons/material/Person";

const ProfileButtons = () => {
    return (
        <div className="button-container">
            <div className="circle-one"><CartIcon size="28"/></div>
            <div className="circle-two"><PersonIcon size="28"/></div>
        </div>
    )
}

export default ProfileButtons

export const CartIcon = styled(Cart)`

`

export const PersonIcon = styled(Person)`

`