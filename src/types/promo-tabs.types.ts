export interface IPromoApp {
    id: number;
    platform: 'mac' | 'ios';
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
