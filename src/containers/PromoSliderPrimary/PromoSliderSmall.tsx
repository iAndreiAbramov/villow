import React, { MouseEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@bem-react/classname';
import { motion } from 'framer-motion';
import { useSliderWidth } from 'hooks/useSliderWidth';
import { ReactComponent as ArrowLeft } from 'icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'icons/arrow-right.svg';
import { Platform } from 'types/promo-slider.types';

import { PaginationItem } from './components/PaginationItem';
import { PromoSlide } from './components/PromoSlide';
import { IPromoSliderSmallProps } from './PromoSliderSmall.types';

import './PromoSliderSmall.scss';

const CnPromoSlider = cn('promoSlider');

export const PromoSliderSmall: React.FC<IPromoSliderSmallProps> = ({
    slides,
    currentSlide = 1,
    setCurrentSlide,
    platform,
}) => {
    const sliderWindowRef: RefObject<HTMLDivElement> = useRef(null);
    const innerWrapperRef: RefObject<HTMLDivElement> = useRef(null);
    const { innerWidth, windowWidth } = useSliderWidth({ sliderWindowRef, innerWrapperRef });
    const [animateValue, setAnimateValue] = useState(0);
    const [isLocked, setIsLocked] = useState(true);

    const handlePrevClick: MouseEventHandler = useCallback(
        (evt) => {
            evt.preventDefault();
            setCurrentSlide((current) => {
                if (current > 1) {
                    return current - 1;
                }
                return current;
            });
        },
        [setCurrentSlide],
    );

    const handleNextClick: MouseEventHandler = useCallback(
        (evt) => {
            evt.preventDefault();
            setCurrentSlide((current) => {
                if (current < slides.length) {
                    return current + 1;
                }
                return current;
            });
        },
        [slides.length, setCurrentSlide],
    );

    const handlePaginationClick = useCallback(
        (order: number) => {
            setCurrentSlide(order);
        },
        [setCurrentSlide],
    );

    useEffect(() => {
        if (!windowWidth || !innerWidth || isLocked) {
            setIsLocked(false);
        }
    }, [innerWidth, windowWidth, isLocked]);

    useEffect(() => {
        if (windowWidth) {
            setAnimateValue((1 - currentSlide) * windowWidth);
        }
    }, [windowWidth, currentSlide]);

    return (
        <div
            className={CnPromoSlider()}
            style={
                platform === Platform.Ios
                    ? { gridTemplateColumns: '1fr minmax(180px, min-content) 1fr' }
                    : { gridTemplateColumns: '1fr minmax(180px, max-content) 1fr' }
            }
        >
            <div className={CnPromoSlider('arrowLeft', { disabled: currentSlide <= 1 })} onClick={handlePrevClick}>
                <ArrowLeft />
            </div>
            <div className={CnPromoSlider('sliderWindow')} ref={sliderWindowRef}>
                <motion.div
                    className={CnPromoSlider('innerWrapper')}
                    ref={innerWrapperRef}
                    animate={{
                        x: animateValue,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                    {slides.map((slideSrc) => (
                        <PromoSlide src={slideSrc} key={slideSrc} />
                    ))}
                </motion.div>
            </div>
            <div
                className={CnPromoSlider('arrowRight', { disabled: currentSlide >= slides.length })}
                onClick={handleNextClick}
            >
                <ArrowRight />
            </div>
            <div className={CnPromoSlider('pagination')}>
                {slides.map((item, index) => (
                    <PaginationItem
                        key={item}
                        isActive={index === currentSlide - 1}
                        order={index + 1}
                        handleClick={handlePaginationClick}
                    />
                ))}
            </div>
        </div>
    );
};
