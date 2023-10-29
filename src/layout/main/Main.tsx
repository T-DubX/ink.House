import React from 'react';
import s from './Main.module.css'
import {HeroSection} from "./section/hero/HeroSection";

export const Main = () => {
    return (
        <main className={s.main}>
            <HeroSection/>
        </main>
    );
};

