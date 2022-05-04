import React from 'react';
import { motion } from 'framer-motion';

import { IHeaderContainerProps } from './HeaderContainer.types';

export const HeaderContainer: React.FC<IHeaderContainerProps> = ({ customClassName, children }) => {
    return (
        <motion.div
            className={`header-container ${customClassName || ''}`}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.div>
    );
};
