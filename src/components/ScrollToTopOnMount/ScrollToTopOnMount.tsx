import { QueryParam } from 'constants/QueryParam';

import React, { useLayoutEffect } from 'react';
import { useQuery } from 'hooks/useQuery';

export const ScrollToTopOnMount: React.FC = () => {
    const query = useQuery();
    const anchor = query.get(QueryParam.Anchor);

    useLayoutEffect(() => {
        if (!anchor) {
            window.scrollTo(0, 0);
        }
    }, [anchor]);

    return null;
};
