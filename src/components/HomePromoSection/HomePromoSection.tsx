import { promoApps } from 'constants/promo-apps';
import { QueryParam } from 'constants/QueryParam';

import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { motion } from 'framer-motion';
import { useCloseByEsc } from 'hooks/useCloseByEsc';
import { useOverflow } from 'hooks/useOverflow';
import { useQuery } from 'hooks/useQuery';
import { useTabData } from 'hooks/useTabData';
import { ReactComponent as AppStoreIos } from 'icons/app-store-ios.svg';
import { ReactComponent as AppStoreMac } from 'icons/app-store-mac.svg';
import { Platform } from 'types/promo-slider.types';

import { PromoSlider } from 'components/PromoSlider';
import { PromoTabs } from 'components/PromoTabs';

import './HomePromoSection.scss';

const CnPromo = cn('promo');

export const HomePromoSection: React.FC = () => {
    const query = useQuery();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);

    const { title, subtitle, description, bgImage, smallSlides, platform, storeLink, bigSlides } =
        useTabData(promoApps);

    const handleCloseByEsc = useCallback(() => {
        setIsExpanded(false);
        setCurrentSlide(1);
    }, []);

    const handleSlideClick = useCallback(() => {
        setIsExpanded(true);
        setCurrentSlide(1);
    }, []);

    const handleTabClick = useCallback(
        (tabId: string) => {
            query.set(QueryParam.Tab, tabId);
            navigate({
                pathname,
                search: query.toString(),
            });
            setCurrentSlide(1);
            window.scrollTo(0, 0);
        },
        [navigate, query, pathname],
    );

    useCloseByEsc(handleCloseByEsc);
    useOverflow(isExpanded);

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
            <div className={`${CnPromo('contentWrapper')} container`}>
                <div className={CnPromo('row')}>
                    <div className={CnPromo('textGroup')}>
                        <div className={CnPromo('text')}>
                            <h2 className={CnPromo('title')}>{title}</h2>
                            <span className={CnPromo('subtitle')}>{subtitle}</span>
                            <p className={CnPromo('description')}>{description}</p>
                        </div>
                        <div className={CnPromo('links')}>
                            <a href={storeLink}>
                                {platform === Platform.Ios ? <AppStoreIos /> : <AppStoreMac />}
                            </a>
                        </div>
                    </div>
                    {!isExpanded && (
                        <div className={CnPromo('sliderOverlay')}>
                            <div className={CnPromo('sliderWrapper')}>
                                <PromoSlider
                                    slides={smallSlides}
                                    currentSlide={currentSlide}
                                    setCurrentSlide={setCurrentSlide}
                                    isMobile={platform === Platform.Ios}
                                    handleSlideClick={handleSlideClick}
                                    isExpanded={false}
                                />
                            </div>
                        </div>
                    )}
                    {isExpanded && (
                        <div className={CnPromo('sliderOverlay', { expanded: isExpanded })}>
                            <div className={CnPromo('sliderWrapper', { expanded: isExpanded })}>
                                <PromoSlider
                                    slides={bigSlides}
                                    currentSlide={currentSlide}
                                    setCurrentSlide={setCurrentSlide}
                                    isMobile={platform === Platform.Ios}
                                    isExpanded
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className={CnPromo('tabs')}>
                    <PromoTabs tabs={promoApps} handleTabClick={handleTabClick} />
                </div>
            </div>
        </motion.section>
    );
};
