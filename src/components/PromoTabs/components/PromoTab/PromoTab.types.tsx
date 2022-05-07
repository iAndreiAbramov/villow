import { IPromoApp } from 'types/promo-tabs.types';

export interface IPromoTabProps {
    data: IPromoApp;
    isActive: boolean;
    handleTabClick: (tabId: string) => void;
}
