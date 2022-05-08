import { Platform } from './promo-slider.types';

export interface IPromoApp {
    id: number;
    platform: Platform;
    appName: string;
    title: string;
    subtitle: string;
    description: string;
    bgImage: string;
    icon: string;
    storeIcon: string;
    bigSlides: string[];
    smallSlides: string[];
}
