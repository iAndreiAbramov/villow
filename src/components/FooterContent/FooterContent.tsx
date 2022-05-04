import { AppRoute } from 'constants/AppRoute';
import { languages } from 'constants/languages';

import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { useListItems } from 'hooks/useListItems';

import { Dropdown } from 'components/Dropdown';
import { DropdownDirection } from 'components/Dropdown/Dropdown.types';

import { FooterSocials } from './components/FooterSocials';

import './FooterContent.scss';

const CnFooter = cn('footer');

export const FooterContent: React.FC = () => {
    const dropdownOptions = useListItems(languages);

    return (
        <div className={CnFooter()}>
            <div className={CnFooter('left')}>
                <div className={CnFooter('copyright')}>© 2020-2022 Villow LLC. All rights reserved.</div>
                <div className={CnFooter('text')}>ООО «Рога и копыта» ОГРН: 123456789</div>
                <div className={CnFooter('text')}>ИНН: 123456789</div>
            </div>
            <div className={CnFooter('right')}>
                <FooterSocials />
                <div className={CnFooter('row')}>
                    <Dropdown options={dropdownOptions} direction={DropdownDirection.Up} />
                    <div className={CnFooter('links')}>
                        <Link className={CnFooter('link')} to={AppRoute.Policy()}>
                            Privacy policy
                        </Link>
                        <Link className={CnFooter('link')} to={AppRoute.Eula()}>
                            EULA
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
