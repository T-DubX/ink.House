import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import s from './FooterLeft.module.css'

export const FooterLeft = () => {
    return (
        <div className={s.footerLeft}>
            <Logo/>
            <div className={s.phone}>
                <a className={s.phoneLink} href="tel: +7 999 543 54 54">+7 (999) 543-54-54</a>
                <span>Мастерская</span>
            </div>
        </div>
    );
};

