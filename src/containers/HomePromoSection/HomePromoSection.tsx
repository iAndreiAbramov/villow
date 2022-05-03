import { promoSlides } from 'constants/promo-slides';

import React from 'react';
import { cn } from '@bem-react/classname';
import { PromoSliderPrimary } from 'containers/PromoSliderPrimary';
import { ReactComponent as AppStoreIcon } from 'icons/app-store.svg';

import './HomePromoSection.scss';

const CnPromo = cn('promo');

const BG_STUB = 'assets/bg/1-widgy.jpg';

export const HomePromoSection: React.FC = () => {
    return (
        <section className={CnPromo()} style={{ backgroundImage: `url(${BG_STUB})` }}>
            <div className={`${CnPromo('contentWrapper')} container`}>
                <div className={CnPromo('row')}>
                    <div className={CnPromo('textGroup')}>
                        <div className={CnPromo('text')}>
                            <h2 className={CnPromo('title')}>Widgy</h2>
                            <span className={CnPromo('subtitle')}>Your desktop - your style</span>
                            <p className={CnPromo('description')}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos d
                            </p>
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
                        <PromoSliderPrimary slides={promoSlides} />
                    </div>
                </div>
                <div className={CnPromo('tabs')}>tabs</div>
            </div>
        </section>
    );
};
