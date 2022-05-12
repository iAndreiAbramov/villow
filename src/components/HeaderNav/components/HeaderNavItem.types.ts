import { Anchor } from 'constants/Anchor';

import { INavOption } from 'types/nav.types';

export interface IHeaderNavItemProps {
    item: INavOption;
    handleClick: (anchor: Anchor) => void;
}
