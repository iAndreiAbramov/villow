import { socials } from 'constants/socials';

import React from 'react';

export const FooterSocials: React.FC = () => {
    return (
        <div className="footer-socials">
            {socials.map(({ href, icon, title }) => (
                <a key={title} className="footer-socialLink" href={href} title={title}>
                    {icon}
                </a>
            ))}
        </div>
    );
};
