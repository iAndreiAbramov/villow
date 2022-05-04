import React from 'react';
import { motion } from 'framer-motion';

import { IFooterContainerProps } from './FooterContainer.types';

export const FooterContainer: React.FC<IFooterContainerProps> = ({ customClassName, children }) => {
    return (
        <motion.footer
            className={`footer-container ${customClassName || ''}`}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
            }}
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.footer>
    );
};
