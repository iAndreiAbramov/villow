import React from 'react';

import { IPromoSlideProps } from './PromoSlide.types';

export const PromoSlide: React.FC<IPromoSlideProps> = ({ src, width }) => {
    return (
        <div className="promoSlider-slide">
            <img src={src} alt="slide" width={width} draggable={false} />
        </div>
    );
};
