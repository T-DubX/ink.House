import React from 'react';
import {SocialItems} from "./socialItem/SocialItem";
import {Copyright} from "./Copyright/Copyright";
import s from './Social.module.css'


export const Social = () => {
    return (
        <div className={s.socialWrapper}>
            <SocialItems/>
            <Copyright/>
        </div>
    );
};

