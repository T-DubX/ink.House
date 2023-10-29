import React from 'react';
import s from "../HeroSection.module.css";
import heroImg from "../../../../../assets/img/hero-img.jpg";

export const HeroImg = () => {
    return (
        <div className={s.imgWrapper}>
            <img src={heroImg} alt="bird"/>
        </div>
    );
};

