import React from 'react';
import { motion } from 'framer-motion';

import { IPaginationItemProps } from './PaginationItem.types';

const variants = {
    regular: {
        width: 8,
        height: 8,
        backgroundColor: '#979797',
    },
    active: {
        width: 12,
        height: 12,
        backgroundColor: '#ffffff',
    },
};

export const PaginationItem: React.FC<IPaginationItemProps> = ({ order, isActive, handleClick }) => {
    return (
        <motion.div
            variants={variants}
            animate={isActive ? 'active' : 'regular'}
            className="promoSlider-paginationItem"
            onClick={() => handleClick(order)}
            transition={{
                duration: 0.3,
            }}
        />
    );
};
