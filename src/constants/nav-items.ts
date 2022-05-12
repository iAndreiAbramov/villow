import { INavOption } from 'types/nav.types';

import { Anchor } from './Anchor';

export const HeaderNavItems: INavOption[] = [
    {
        name: 'About us',
        id: 1,
        anchor: Anchor.About,
    },
    {
        name: 'Remote work',
        id: 2,
        anchor: Anchor.Remote,
    },
];
