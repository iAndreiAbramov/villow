import { Dispatch, SetStateAction } from 'react';

export interface IPromoSliderProps {
    slides: string[];
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    handleSlideClick?: () => void;
    isMobile: boolean;
    isExpanded: boolean;
}
