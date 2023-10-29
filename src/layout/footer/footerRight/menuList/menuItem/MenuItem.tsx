import React from 'react';
import s from '../MenuList.module.css'

type PropsType = {
    header: string
    items: string[]
}

export const MenuItem = (props: PropsType) => {
    return (
        <div className={s.menuItem}>
            <h3 className={s.headingItem}>{props.header}</h3>
            <ul className={s.listItems}>
                {props.items.map((el, i) => (
                    <li className={s.item} key={i}>{el}</li>
                ))}
            </ul>
        </div>
    );
};

