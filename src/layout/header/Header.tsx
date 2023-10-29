import React from 'react';
import s from './Header.module.css'
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./menu/Menu";
import cart from '../../assets/img/cart.svg'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={`container ${s.flexContainer}`}>
                <Logo/>
                <Menu/>
                <img className={s.cart} src={cart} alt="cart"/>
            </div>
        </header>
    );
};

