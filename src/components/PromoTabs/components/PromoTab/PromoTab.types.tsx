import { IPromoTab } from 'types/promo-tabs.types';

export interface IPromoTabProps {
    data: IPromoTab;
    isActive: boolean;
    handleTabClick: (tabId: string) => void;
}
