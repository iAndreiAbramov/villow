import { SubmitMessage } from 'constants/SubmitMessage';

import React, { RefObject, useRef } from 'react';
import { cn } from '@bem-react/classname';
import { useCloseByClick } from 'hooks/useCloseByClick';
import { ReactComponent as MessageFailed } from 'icons/message-failed.svg';
import { ReactComponent as MessageSuccess } from 'icons/message-success.svg';
import { SubmitStatus } from 'types/SubmitStatus';

import { IMessagePopupProps } from './MessagePopup.types';

import './MessagePopup.scss';

const CnMessagePopup = cn('messagePopup');

export const MessagePopup: React.FC<IMessagePopupProps> = ({ handleClose, submitStatus }) => {
    const popupRef: RefObject<HTMLDivElement> = useRef(null);

    const title = submitStatus === SubmitStatus.Success ? 'Sent successfully' : 'Not sent';
    const icon = submitStatus === SubmitStatus.Success ? <MessageSuccess /> : <MessageFailed />;
    const message =
        submitStatus === SubmitStatus.Success ? SubmitMessage.Success : SubmitMessage.Error;

    useCloseByClick(popupRef, handleClose);

    return (
        <div className={CnMessagePopup()}>
            <div className={CnMessagePopup('wrapper')} ref={popupRef}>
                <h3 className={CnMessagePopup('title')}>{title}</h3>
                <div className={CnMessagePopup('imageWrapper')}>{icon}</div>
                <div className={CnMessagePopup('message')}>{message}</div>
            </div>
        </div>
    );
};
