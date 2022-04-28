import { Dispatch, SetStateAction, useEffect } from 'react';

export const useCloseByEsc = (cb: Dispatch<SetStateAction<boolean>>): void => {
    useEffect(() => {
        const closePopupByEsc = (evt: KeyboardEvent) => {
            if (evt.key === 'Escape') {
                cb(false);
            }
        };
        document.addEventListener('keydown', closePopupByEsc);
        return () => {
            document.removeEventListener('keydown', closePopupByEsc);
        };
    }, [cb]);
};
