import React from 'react';

import { IPromoSlideProps } from './PromoSlide.types';

export const PromoSlide: React.FC<IPromoSlideProps> = ({ src }) => {
    return (
        <div className="promoSlider-slide">
            <img src={src} alt="slide" draggable={false} />
        </div>
    );
};
