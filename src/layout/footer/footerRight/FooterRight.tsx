import React from 'react';
import {MenuList} from "./menuList/MenuList";
import {Social} from "./social/Social";
import s from './FooterRight.module.css'

export const FooterRight = () => {
    return (
        <div className={s.footerRight}>
            <MenuList/>
            <Social/>
        </div>
    );
};

