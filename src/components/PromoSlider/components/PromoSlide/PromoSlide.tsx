import React from 'react';
import { cn } from '@bem-react/classname';

import { IPromoSlideProps } from './PromoSlide.types';

const CnSlide = cn('promoSlider-slide');

export const PromoSlide: React.FC<IPromoSlideProps> = ({ src, isExpanded }) => {
    return (
        <div className={CnSlide({ expanded: isExpanded })}>
            <img src={src} alt="slide" draggable={false} />
        </div>
    );
};
