import React, { MouseEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@bem-react/classname';
import { motion } from 'framer-motion';
import { useSliderWidth } from 'hooks/useSliderWidth';
import { ReactComponent as ArrowLeft } from 'icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'icons/arrow-right.svg';

import { PaginationItem } from './components/PaginationItem';
import { PromoSlide } from './components/PromoSlide';
import { IPromoSliderFramerProps } from './PromoSliderPrimary.types';

import './PromoSliderPrimary.scss';

const CnPromoSlider = cn('promoSlider');

export const PromoSliderPrimary: React.FC<IPromoSliderFramerProps> = ({ slides = [] }) => {
    const sliderWindowRef: RefObject<HTMLDivElement> = useRef(null);
    const innerWrapperRef: RefObject<HTMLDivElement> = useRef(null);
    const { innerWidth, windowWidth } = useSliderWidth({ sliderWindowRef, innerWrapperRef });
    const [currentSlide, setCurrentSlide] = useState(1);
    const [animateValue, setAnimateValue] = useState(0);
    const [isLocked, setIsLocked] = useState(true);

    const handlePrevClick: MouseEventHandler = useCallback((evt) => {
        evt.preventDefault();
        setCurrentSlide((current) => {
            if (current > 1) {
                return current - 1;
            }
            return current;
        });
    }, []);

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
        [slides.length],
    );

    const handlePaginationClick = useCallback((order: number) => {
        setCurrentSlide(order);
    }, []);

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
        <div className={CnPromoSlider()}>
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
                >
                    {slides.map(({ src, id }) => (
                        <PromoSlide src={src} width={windowWidth || 0} key={id} />
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
                        key={item.id}
                        isActive={index === currentSlide - 1}
                        order={index + 1}
                        handleClick={handlePaginationClick}
                    />
                ))}
            </div>
        </div>
    );
};
