import React from 'react';
import s from './Logo.module.css'
import logoImg from '../../assets/img/logo.svg'

export const Logo = () => {
    return (
        <div className={s.wrapperLogo}>
            <img className={s.logoImg} src={logoImg} alt="logo"/>
            <span className={s.logoText}>Ink. House</span>
        </div>
    );
};

