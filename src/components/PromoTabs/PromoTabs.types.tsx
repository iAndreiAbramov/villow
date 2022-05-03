import { IPromoTab } from 'types/promo-tabs.types';

export interface IPromoTabsProps {
    tabs: IPromoTab[];
    activeTabId: string | null;
    handleTabClick: (tabId: string) => void;
}
