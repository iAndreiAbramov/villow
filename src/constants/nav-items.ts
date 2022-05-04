import { INavOption } from 'types/nav.types';

import { ABOUT_ANCHOR, REMOTE_ANCHOR } from './common';

export const HeaderNavItems: INavOption[] = [
    {
        name: 'About us',
        href: `${ABOUT_ANCHOR}`,
        id: 1,
    },
    {
        name: 'Remote work',
        href: `${REMOTE_ANCHOR}`,
        id: 2,
    },
];
