import { SubmitStatus } from 'types/SubmitStatus';

export interface IMessagePopupProps {
    handleClose: () => void;
    submitStatus: SubmitStatus;
}
