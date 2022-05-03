import { RefObject } from 'react';

export const useSliderWidth = ({
    innerWrapperRef,
    sliderWindowRef,
}: {
    innerWrapperRef: RefObject<HTMLDivElement>;
    sliderWindowRef: RefObject<HTMLDivElement>;
}): { innerWidth: number | undefined; windowWidth: number | undefined } => {
    const innerWidth = innerWrapperRef.current?.scrollWidth;
    const windowWidth = sliderWindowRef.current?.getBoundingClientRect().width;

    return { innerWidth, windowWidth };
};
