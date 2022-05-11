import { IPromoApp } from 'types/promo-tabs.types';

export interface IPromoTabsProps {
    tabs: IPromoApp[];
    handleTabClick: (tabId: string) => void;
}
