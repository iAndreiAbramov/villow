import { Theme } from 'constants/themesList';

import { IFormValues } from 'types/form.types';

export const EMAIL_PATTERN = new RegExp(
    "(?!(^[.-].*|[^@]*[.-]@|.*\\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~.-]+@)(?!-.*|.*-\\.)([a-zA-Z0-9-]{1,63}\\.)+[a-zA-Z]{2,15}",
);

type FormErrors = Record<keyof Omit<IFormValues, 'country' | 'application'>, boolean | undefined>;

export const validateForm = ({
    name,
    email,
    theme,
    message,
}: Omit<IFormValues, 'country' | 'application'>): FormErrors => {
    const errors: FormErrors = {
        email: undefined,
        name: undefined,
        theme: undefined,
        message: undefined,
    };

    if (!name || !name.trim()) {
        errors.name = true;
    }

    if (!email || EMAIL_PATTERN.exec(email) === null) {
        errors.email = true;
    }

    if (!theme || theme === Theme.Select) {
        errors.theme = true;
    }

    if (!message) {
        errors.message = true;
    }

    return errors;
};
