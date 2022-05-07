import { RefObject, useEffect } from 'react';

export const useCloseByOuterClick = (ref: RefObject<HTMLElement>, cb: () => void): void => {
    useEffect(() => {
        const closeByClick = (evt: MouseEvent) => {
            if (ref.current && !ref.current.contains(evt.target as Node)) {
                cb();
            }
        };
        document.addEventListener('click', closeByClick);
        return () => {
            document.removeEventListener('click', closeByClick);
        };
    }, [cb, ref]);
};
