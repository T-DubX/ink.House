import React from 'react';
import s from './Menu.module.css'
export const Menu = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menuList}>
                <li className={s.menuItem}>
                    <a className={s.menuLink} href="#">Репродукции</a>
                </li>
                <li className={s.menuItem}>
                    <a className={s.menuLink} href="#">Новинки</a>
                </li>
                <li className={s.menuItem}>
                    <a className={s.menuLink} href="#">О нас</a>
                </li>
            </ul>
        </nav>
    );
};

