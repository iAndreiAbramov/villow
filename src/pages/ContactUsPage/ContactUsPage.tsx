import React from 'react';
import { ContentContainer } from 'containers/ContentContainer';

import { ContactForm } from 'components/ContactForm';

export const ContactUsPage: React.FC = () => {
    return (
        <ContentContainer>
            <div className="container">
                <ContactForm />
            </div>
        </ContentContainer>
    );
};
