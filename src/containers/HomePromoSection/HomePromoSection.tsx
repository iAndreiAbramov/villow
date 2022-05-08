import { promoApps } from 'constants/promo-apps';
import { QueryParams } from 'constants/QueryParams';

import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { PromoSliderSmall } from 'containers/PromoSliderPrimary';
import { motion } from 'framer-motion';
import { useQuery } from 'hooks/useQuery';
import { useTabData } from 'hooks/useTabData';
import { ReactComponent as AppStoreIcon } from 'icons/app-store.svg';

import { PromoTabs } from 'components/PromoTabs';

import './HomePromoSection.scss';

const CnPromo = cn('promo');

export const HomePromoSection: React.FC = () => {
    const query = useQuery();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeTabId, setActiveTabId] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const { title, subtitle, description, bgImage, smallSlides, platform } = useTabData({
        tabData: promoApps,
        activeTabId: activeTabId,
    });

    const handleTabClick = useCallback((tabId: string) => {
        setActiveTabId(tabId);
        setCurrentSlide(1);
    }, []);

    useEffect(() => {
        if (!activeTabId) {
            setActiveTabId(query.get(QueryParams.Tab));
        }
        if (activeTabId) {
            query.set(QueryParams.Tab, activeTabId);
            navigate({
                pathname,
                search: query.toString(),
            });
        }
    }, [query, navigate, pathname, activeTabId]);

    return (
        <motion.section
            className={CnPromo()}
            style={{ backgroundImage: `url(${bgImage})` }}
            initial={{
                backgroundColor: '#090909',
                opacity: 0.4,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <div className={`${CnPromo('contentWrapper')} container`} onDoubleClick={(evt) => evt.preventDefault()}>
                <div className={CnPromo('row')}>
                    <div className={CnPromo('textGroup')}>
                        <div className={CnPromo('text')}>
                            <h2 className={CnPromo('title')}>{title}</h2>
                            <span className={CnPromo('subtitle')}>{subtitle}</span>
                            <p className={CnPromo('description')}>{description}</p>
                        </div>
                        <div className={CnPromo('links')}>
                            <a href="https://www.apple.com/ru/app-store/">
                                <AppStoreIcon />
                            </a>
                            <a href="https://www.apple.com/ru/app-store/">
                                <AppStoreIcon />
                            </a>
                        </div>
                    </div>
                    <div className={CnPromo('sliderWrapper')}>
                        <PromoSliderSmall
                            slides={smallSlides}
                            currentSlide={currentSlide}
                            setCurrentSlide={setCurrentSlide}
                            platform={platform}
                        />
                    </div>
                </div>
                <div className={CnPromo('tabs')}>
                    <PromoTabs tabs={promoApps} activeTabId={activeTabId} handleTabClick={handleTabClick} />
                </div>
            </div>
        </motion.section>
    );
};
