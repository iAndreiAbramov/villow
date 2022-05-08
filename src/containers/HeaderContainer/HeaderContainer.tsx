import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import { IHeaderContainerProps } from './HeaderContainer.types';

export const HeaderContainer: React.FC<IHeaderContainerProps> = ({
    customClassName,
    isDynamicBg = false,
    children,
}) => {
    const { scrollY } = useViewportScroll();
    const headerBackground = useTransform(scrollY, [0, 100], ['rgba(9, 9, 9, 0)', 'rgba(9, 9, 9, 1)']);

    return (
        <motion.div
            className={`header-container ${customClassName || ''}`}
            style={{ backgroundColor: isDynamicBg ? headerBackground : 'rgba(9, 9, 9, 1)' }}
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
