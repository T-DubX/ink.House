import React from 'react';
import spriteIcon from '../../../../../assets/img/sprite-social_icon.svg'
import s from '../Social.module.css'


export const SocialItems = () => {
    return (
        <div className={s.socialLinkWrapper}>
            <svg width={24} height={24} viewBox={'0 0 24 24'}>
                <use xlinkHref={`${spriteIcon}#facebook`}></use>
            </svg>

            <svg width={24} height={24} viewBox={'0 0 24 24'}>
                <use xlinkHref={`${spriteIcon}#instagram`}></use>
            </svg>
            <svg width={24} height={24} viewBox={'0 0 24 24'}>
                <use xlinkHref={`${spriteIcon}#youtube`}></use>
            </svg>
        </div>
    );
};

