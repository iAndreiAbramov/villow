import { ApiRoute } from 'constants/ApiRoute';

import { IFormValues } from 'types/form.types';

const DATA_STUB = 'Unknown';

export const postQuestion = async ({
    name,
    email,
    message,
    country,
    application,
    theme,
}: IFormValues): Promise<Response> => {
    const body = new FormData();
    body.append('name', name || DATA_STUB);
    body.append('email', email || DATA_STUB);
    body.append('theme', theme || DATA_STUB);
    body.append('message', message || DATA_STUB);
    body.append('country', country || DATA_STUB);
    body.append('app', application || DATA_STUB);

    return await fetch(ApiRoute.Mail, {
        method: 'POST',
        headers: {
            'Content-type': 'multipart/form-data',
        },
        body: body,
    });
};
