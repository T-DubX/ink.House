import React from 'react';
import {MenuItem} from "./menuItem/MenuItem";
import s from './MenuList.module.css'

export const MenuList = () => {
    const items1 = ['Франция', 'Германия', 'Англия']
    const items2 = ['2021', '2020']
    const items3 = ['Художники', 'Менеджеры']

    return (
        <div className={s.menuList}>
            <MenuItem header={'Репродукции'} items={items1}/>
            <MenuItem header={'Новинки'} items={items2}/>
            <MenuItem header={'О нас'} items={items3}/>
        </div>
    );
};

