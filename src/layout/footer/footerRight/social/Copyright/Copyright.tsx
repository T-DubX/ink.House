import React from 'react';
import s from '../Social.module.css'

export const Copyright = () => {
    return (
        <div className={s.copyright}>
            <span className={s.author}>Ink. House ®</span>
            <span className={s.copyrightText}>All rights reserved</span>
        </div>
    );
};

