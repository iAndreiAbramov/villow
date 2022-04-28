import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

export const useCloseByClick = (ref: RefObject<HTMLElement>, cb: Dispatch<SetStateAction<boolean>>): void => {
    useEffect(() => {
        const closeByClick = (evt: MouseEvent) => {
            if (ref.current && !ref.current.contains(evt.target as Node)) {
                cb(false);
            }
        };
        document.addEventListener('click', closeByClick);
        return () => {
            document.removeEventListener('click', closeByClick);
        };
    }, [cb, ref]);
};
