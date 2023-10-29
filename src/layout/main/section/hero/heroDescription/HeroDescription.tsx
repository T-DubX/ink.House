import React from 'react';
import s from '../HeroSection.module.css'
export const HeroDescription = () => {
    return (
        <div className={s.wrapperDescription}>
            <h1 className={s.headerDescription}>
                Реплики картин от <span className={s.accentColor}>Ink. House</span>
            </h1>
            <p className={s.text}>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>

            <a className={s.btnDescription} href="#">Продукция</a>
        </div>
    );
};
