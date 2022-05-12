import React from 'react';
import { motion } from 'framer-motion';

import { IContentContainerProps } from './ContentContainer.types';

export const ContentContainer: React.FC<IContentContainerProps> = ({
    customClassName,
    children,
}) => {
    return (
        <motion.section
            className={`content-container ${customClassName ? customClassName : ''}`}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.9,
            }}
        >
            {children}
        </motion.section>
    );
};
