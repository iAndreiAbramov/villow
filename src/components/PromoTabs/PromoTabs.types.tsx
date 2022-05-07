import { IPromoApp } from 'types/promo-tabs.types';

export interface IPromoTabsProps {
    tabs: IPromoApp[];
    activeTabId: string | null;
    handleTabClick: (tabId: string) => void;
}
