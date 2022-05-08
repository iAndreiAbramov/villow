import { Dispatch, SetStateAction } from 'react';
import { Platform } from 'types/promo-slider.types';

export interface IPromoSliderSmallProps {
    slides: string[];
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    platform: Platform;
}
