import React from 'react';
import s from './HeroSection.module.css'
import {HeroDescription} from "./heroDescription/HeroDescription";
import {HeroImg} from "./heroImg/HeroImg";

export const HeroSection = () => {
    return (
        <section>
            <div className={`container ${s.flexContainer}`}>
                <HeroImg/>
                <HeroDescription/>
            </div>
        </section>
    );
};

