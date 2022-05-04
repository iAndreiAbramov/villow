import React from 'react';
import { ReactComponent as Android } from 'icons/socials/android.svg';
import { ReactComponent as Apple } from 'icons/socials/apple.svg';
import { ReactComponent as Facebook } from 'icons/socials/facebook.svg';
import { ReactComponent as GooglePlay } from 'icons/socials/googleplay.svg';
import { ReactComponent as LinkedIn } from 'icons/socials/linkedin.svg';
import { ReactComponent as Mail } from 'icons/socials/mail.svg';
import { ReactComponent as Windows } from 'icons/socials/windows.svg';
import { ISocial } from 'types/socials.types';

import { COMPANY_EMAIL } from './company-data';

export const socials: ISocial[] = [
    {
        icon: <Mail />,
        href: `mailto:${COMPANY_EMAIL}`,
        title: 'email',
    },
    {
        icon: <Facebook />,
        href: `#`,
        title: 'Facebook',
    },
    {
        icon: <LinkedIn />,
        href: `#`,
        title: 'LinkedIn',
    },
    {
        icon: <Apple />,
        href: `#`,
        title: 'Apple',
    },
    {
        icon: <Android />,
        href: `#`,
        title: 'Android',
    },
    {
        icon: <GooglePlay />,
        href: `#`,
        title: 'GooglePlay',
    },
    {
        icon: <Windows />,
        href: `#`,
        title: 'Windows',
    },
];
