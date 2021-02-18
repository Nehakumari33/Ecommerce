import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../logo2.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/">

                    <img src={logo2} alt="store" className="navbar-brand " />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            PRODUCTS
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">

                    <ButtonContainer>
                        <span className="ms-2">
                            <i className="fa fa-shopping-cart" />
                        </span>
                        my cart

                    </ButtonContainer>

                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-Link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;

}
`