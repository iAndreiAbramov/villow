import { QueryParam } from 'constants/QueryParam';

import React from 'react';
import { useQuery } from 'hooks/useQuery';

import { PromoTab } from './components/PromoTab';
import { IPromoTabsProps } from './PromoTabs.types';

export const PromoTabs: React.FC<IPromoTabsProps> = ({ tabs, handleTabClick }) => {
    const query = useQuery();
    const activeTabId = query.get(QueryParam.Tab);

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
