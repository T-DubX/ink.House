import React from 'react';
import s from './Footer.module.css'
import {FooterLeft} from "./footerLeft/FooterLeft";
import {FooterRight} from "./footerRight/FooterRight";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`container`}>
                <div className={s.flexContainer}>
                    <FooterLeft/>
                    <FooterRight/>
                </div>
            </div>
        </footer>
    );
};

