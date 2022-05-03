import React from 'react';
import { cn } from '@bem-react/classname';
import { motion } from 'framer-motion';

import { IPromoTabProps } from './PromoTab.types';

import './PromoTab.scss';

const CnTab = cn('tab');

const variants = {
    active: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 8,
        width: 8,
    },
    regular: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        height: '0',
        width: '0',
    },
};

export const PromoTab: React.FC<IPromoTabProps> = ({ data, isActive, handleTabClick }) => {
    const { icon, id } = data;
    return (
        <div className={CnTab()} onClick={() => handleTabClick(String(id))}>
            <img src={icon} alt="tab-icon" width="82" height="82" />
            <motion.div
                variants={variants}
                animate={isActive ? 'active' : 'regular'}
                className={CnTab('activeElement')}
            />
        </div>
    );
};
