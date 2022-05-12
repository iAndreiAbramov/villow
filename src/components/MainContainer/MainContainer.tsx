import React from 'react';
import { motion } from 'framer-motion';

import { IMainContainerProps } from './MainContainer.types';

export const MainContainer: React.FC<IMainContainerProps> = ({ customClassName, children }) => {
    return (
        <motion.main
            className={`main-container ${customClassName ? customClassName : ''}`}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 0.9,
            }}
        >
            {children}
        </motion.main>
    );
};
