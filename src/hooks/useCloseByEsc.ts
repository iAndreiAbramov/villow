import { useEffect } from 'react';

export const useCloseByEsc = (cb: () => void): void => {
    useEffect(() => {
        const closePopupByEsc = (evt: KeyboardEvent) => {
            if (evt.key === 'Escape') {
                cb();
                document.body.style.overflow = '';
                document.body.style.marginRight = '';
            }
        };
        document.addEventListener('keydown', closePopupByEsc);
        return () => {
            document.removeEventListener('keydown', closePopupByEsc);
        };
    }, [cb]);
};
