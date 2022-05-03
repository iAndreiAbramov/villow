import React from 'react';

import { PromoTab } from './components/PromoTab';
import { IPromoTabsProps } from './PromoTabs.types';

export const PromoTabs: React.FC<IPromoTabsProps> = ({ tabs, activeTabId, handleTabClick }) => {
    return (
        <>
            {tabs.map((tab) => (
                <PromoTab
                    data={tab}
                    isActive={String(tab.id) === activeTabId}
                    key={tab.id}
                    handleTabClick={handleTabClick}
                />
            ))}
        </>
    );
};
