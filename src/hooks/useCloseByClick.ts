import { RefObject, useEffect } from 'react';

export const useCloseByClick = (ref: RefObject<HTMLElement>, cb: () => void): void => {
    useEffect(() => {
        const closeByClick = () => {
            cb();
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        };
        document.addEventListener('click', closeByClick);
        return () => {
            document.removeEventListener('click', closeByClick);
        };
    }, [cb, ref]);
};
