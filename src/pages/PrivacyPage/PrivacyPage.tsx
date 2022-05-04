import React from 'react';
import { cn } from '@bem-react/classname';
import { ContentContainer } from 'containers/ContentContainer';

const CnContent = cn('content');

export const PrivacyPage: React.FC = () => {
    return (
        <ContentContainer>
            <div className="container">
                <div className={CnContent()}>
                    <div className={CnContent('textBlock')}>
                        <h1 className={CnContent('title')}>Privacy Policy</h1>
                        <div className={CnContent('text')}>Version effective as of February 15, 2021.</div>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <div className={CnContent('text')}>
                            <span>
                                This document defines the policy the Right holder in relation to the processing of
                                personal data of the users of the website{' '}
                            </span>
                            <a href="https://villow.studio/"> https://villow.studio/ </a>
                            <span>
                                (hereinafter - the Site), mobile applications of the Right holder (hereinafter - the
                                Policy).
                            </span>
                        </div>
                        <div className={CnContent('text')}>
                            The User agrees to the terms of this Policy when using the Service or submitting their
                            Personal Data to the Right Holder.
                        </div>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <div className={CnContent('subtitle')}>Terms shall mean:</div>
                        <p className={CnContent('text')}>
                            <b>Personal Data</b> - A set of private data and/or non-personally identifiable information
                            about a User.
                        </p>
                        <p className={CnContent('text')}>
                            <b>User</b> - a natural person who uses the Site, has downloaded the Mobile Application on a
                            smartphone, tablet or other device.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Service </b> - Site and Mobile Application.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Mobile Application</b> - the Right Holder&apos;s software with all enhancements and
                            additions.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Processing of Personal Data (Processing)</b> - any action (operation) or a set of actions
                            (operations) with Personal Data performed with or without the use of automation tools.
                            Processing includes, but is not limited to: collection, recording, systematization,
                            accumulation, storage, clarification (updating, modification), extraction, use, transfer
                            (distribution, provision, access), depersonalization, blocking, deletion, destruction.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Automated Processing</b> - processing of Personal Data by means of computer technology.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Distribution</b> - actions aimed at disclosure of Personal Data to an indefinite number
                            of persons.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Provision</b> - actions aimed at disclosure of Personal Data to a certain person (circle
                            of persons).
                        </p>
                        <p className={CnContent('text')}>
                            <b>Blocking</b> - temporary termination of processing of Personal Data (unless the
                            processing is necessary for their clarification).
                        </p>
                        <p className={CnContent('text')}>
                            <b>Destruction</b> - actions as a result of which it becomes impossible to restore the
                            content of Personal Data and (or) as a result of which tangible media of Personal Data are
                            destroyed.
                        </p>
                        <p className={CnContent('text')}>
                            <b>Cross-border transfer of Personal Data</b> - transfer of Personal Data to a foreign
                            country, a foreign authority, a foreign individual or a foreign legal entity.
                        </p>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>1. Principles of Processing</h2>
                        <ol className={CnContent('text')}>
                            <li>1.1. Processing of Personal Data is carried out in accordance with the principles:</li>
                            <li>1.1.1. The lawfulness and fairness of the Processing.</li>
                            <li>
                                1.1.2. Processing in accordance with specific, predetermined and legitimate purposes.
                            </li>
                            <li>
                                1.1.3. Avoidance of combining databases containing Personal Data whose Processing is
                                incompatible with each other.
                            </li>
                            <li>
                                1.1.4. Processing only those Personal Data that meet the purposes of their Processing.
                            </li>
                            <li>
                                1.1.5. Compliance of the content and scope of Personal Data with the stated purposes of
                                Processing.
                            </li>
                            <li>1.1.6. Accuracy, sufficiency, relevance and reliability of Personal Data.</li>
                            <li> 1.1.7. Legitimacy of technical measures aimed at Processing.</li>
                            <li> 1.1.8. Reasonableness and expediency of Processing.</li>
                            <li>
                                1.1.9. Storage of Personal Data in a form that identifies the subject for no longer than
                                the purpose of the Processing, or for the duration of the Consent period.
                            </li>
                            <li>
                                1.1.10. Destruction or depersonalization of processed Personal Data in cases specified
                                in this Policy
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>2. Purposes of Processing</h2>
                        <ol className={CnContent('text')}>
                            <li>2.1. The Right Holder shall collect and process Personal Data in order:</li>
                            <li>2.1.1. To improve the operation and technical support of the Service.</li>
                            <li>2.1.2. To comply with legal requirements.</li>
                            <li>2.1.3. To communicate with the User when they send inquiries.</li>
                            <li>2.1.4. To fulfill obligations to the User when they use the Service.</li>
                            <li>2.1.5. To conduct statistical research.</li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>3. List of Personal Data to be collected</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                3.1. The Right Holder processes Personal Data, which the User has indicated in the forms
                                of the Site, sent by e-mail specified in the Policy, in the Service, including:
                            </li>
                            <li>3.1.1. surname, first name, patronymic;</li>
                            <li>3.1.2. telephone;</li>
                            <li>3.1.3. e-mail address.</li>
                            <li>
                                3.2. The Right Holder processes technical information (non-personalized information) if
                                it can be correlated with the User:
                            </li>
                            <li>
                                3.2.1. About the User&apos;s device: type, device model, OS version, Internet service
                                provider.
                            </li>
                            <li>3.2.2. About the user: Country, region, city.</li>
                            <li>
                                3.2.3. About using the Mobile Application: events within the application (date, time and
                                number of visits, information about downloaded or viewed materials, language used),
                                application version, version of libraries used, information about failures within the
                                application.
                            </li>
                            <li>
                                3.2.4. About the events that occurred during the User&apos;s interaction with the Site
                                pages.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>4. Cookies</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                4.1. The Site uses minor files that are placed on the User&apos;s device (cookies) that
                                allow information about the User&apos;s chosen language to be stored.
                            </li>
                            <li>
                                4.2. Cookies are used to collect non-personally identifiable information about the User
                                in order to personalize the User&apos;s display.
                            </li>
                            <li>
                                4.3. The User has the right to disable cookies at any time using the functionality of
                                their device.
                            </li>
                            <li>
                                4.4. If the User disables cookies, certain functionality of the Site may become
                                unavailable, including the language for the User will be English only.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>5. Terms of processing of Personal Data</h2>
                        <ol className={CnContent('text')}>
                            <li>5.1. The legal basis for the Processing shall be:</li>
                            <li>
                                5.1.1. Fulfillment by the Right Holder of its obligations to the User when he/she uses
                                the Service.
                            </li>
                            <li>5.1.2. User&apos;s request.</li>
                            <li>5.1.3. User&apos;s consent.</li>
                            <li>5.2. The Right Holder carries out Automated Processing.</li>
                            <li>5.3. The Right Holder does not verify the User&apos;s legal capacity.</li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>6. Storage of Personal Data and protection measures</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                6.1. The Right Holder processes Personal Data during the term of use of the Service.
                            </li>
                            <li>
                                6.2. The Right Holder takes administrative, technical measures, which are necessary to
                                protect Personal Data.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>7. Update, destruction, blocking of Personal Data.</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                7.1. In case of confirmation of the fact of inaccuracy of Personal Data, the Right
                                Holder shall update it.
                            </li>
                            <li>7.2. The Right Holder destroys Personal Data in the case of:</li>
                            <li>7.2.1. The presence of a threat to the security of the Service.</li>
                            <li>7.2.2. Removal of the Mobile Application from the User&apos;s device.</li>
                            <li>
                                7.2.3. Achievement of the goal of Processing or loss of the need to achieve such goals.
                            </li>
                            <li>7.2.4. Withdrawal of Consent.</li>
                            <li>
                                7.3. The Right Holder has the right to temporarily discontinue Processing (except if the
                                Processing is necessary to clarify Personal Data).
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>8. Transfer of Personal Data</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                8.1. The Right Holder shall not provide Personal Data to third parties without the
                                consent of the User, except for the following case:
                            </li>
                            <li>8.1.1. Provision is necessary to stop illegal actions of the User.</li>
                            <li>8.1.2. To protect the legitimate interests of the Right Holder or third parties.</li>
                            <li>8.1.3. As established by law.</li>
                            <li>
                                8.1.4. Receiving a binding request from a judicial authority, prosecutor&apos;s office,
                                police, investigative body.
                            </li>
                            <li>
                                8.2. The Right Holder has the right to provide Personal Data to third parties for
                                processing in order to fulfill obligations to the User.
                            </li>
                            <li>
                                8.3. The Right Holder uses in the Service the analytical platforms specified in Annex
                                No. 1 to the Policy.
                            </li>
                            <li>
                                8.4. In case of providing Personal Data, the Operator warns the recipients that this
                                data can be used only for the purposes for which it is communicated.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>9. Cross-border transfer of Personal Data</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                9.1. In order to achieve the goals specified in the Policy, the Right Holder may
                                transfer Personal Data to countries other than the country from which it was originally
                                received.
                            </li>
                            <li>
                                9.2. Prior to cross-border transfer of Personal Data, the Right Holder shall ensure that
                                the foreign country to whose territory Personal Data is transferred provides adequate
                                protection of the User&apos;s rights.
                            </li>
                            <li>
                                9.3. In the case of cross-border transfer of Personal Data, the Right Holder shall
                                protect the data in accordance with the Policy and the law.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>10. Rights of the User. Requests to the Right Holder</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                10.1. The User has the right to submit a request for clarification or correction of
                                his/her Personal Data or the processing of his/her Personal Data, including:
                            </li>
                            <li>10.1.1. The legal basis for processing.</li>
                            <li>10.1.2. The purposes and methods of processing used.</li>
                            <li>
                                10.1.3. The Personal Data processed, related to the User concerned, the source of their
                                receipt.
                            </li>
                            <li>10.1.4. The terms of processing, including the terms of storage of Personal Data.</li>
                            <li>10.1.5. The procedure for exercising the rights provided for by the legislation.</li>
                            <li>10.1.6. The performed or expected cross-border transfer of data.</li>
                            <li>
                                10.1.7. Persons to whom Personal Data may be disclosed on the basis of an agreement with
                                the Right Holder, or data of a person performing the processing on behalf of the Right
                                Holder, if the processing is or is intended to be assigned to such a person.
                            </li>
                            <li>
                                10.2. Right Holder&apos;s email
                                <a href="mailto:copyright@villow.studio "> copyright@villow.studio </a> for submitting a
                                request.
                            </li>
                            <li>
                                10.3. The User must specify in the request the information that allows to identify the
                                User.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>11. Obligations of the Right Holder</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                11.1. Within 30 (thirty) days of receipt of the User&apos;s request, the Right Holder is
                                obligated to consider the request and send a reply or reasonable refusal.
                            </li>
                            <li>
                                11.2. At the User&apos;s request, the Right Holder clarifies, blocks or deletes the
                                processed Personal Data if it is incomplete, outdated, inaccurate, illegally obtained or
                                unnecessary for the stated purpose of the Processing.
                            </li>
                            <li>
                                11.3. The Right Holder shall ensure the lawfulness of the Processing. If it is
                                impossible to ensure the legitimacy of Processing, the Right Holder is obliged to
                                destroy or ensure the Destruction of Personal Data within 10 (ten) business days from
                                the date of detection of unlawful Processing.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>12. Closing Provisions</h2>
                        <ol className={CnContent('text')}>
                            <li>
                                12.1. Availability of the text of the Policy for viewing: The Policy is available for
                                viewing at
                                <a href="https://villow.studio/privacy"> https://villow.studio/privacy </a>
                            </li>
                            <li>
                                12.2. Limitations of the Policy: The Service, the Policy may contain links to other
                                resources that are not managed by the Right Holder. If the User follows the link he/she
                                is redirected to a third party resource. The Right Holder recommends to read the terms
                                of processing of personal data of third-party resources. The Right Holder is not
                                responsible for the content of third-party resources and their policies regarding the
                                processing of personal data.
                            </li>
                            <li>
                                12.3. Age restrictions: The Service is intended for a wide audience, if the Mobile
                                application contains age restrictions, the User who does not comply with them shall not
                                use the product. The legal representative of the User whose age did not allow the use of
                                the Mobile Application shall have the right to send a request to the Right Holder to
                                delete the Personal Data of the person being represented.
                            </li>
                            <li>
                                12.4. Amendments: The Right Holder shall be entitled to make amendments to the Policy as
                                necessary. The current edition shall include the date of the last update. The new
                                version of the Policy shall be effective from the moment of its posting in the public
                                domain at:
                                <a href="https://villow.studio/privacy."> https://villow.studio/privacy</a>.
                            </li>
                        </ol>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <p className={CnContent('text')}>
                            E-mail address for matters of the Privacy Policy:{' '}
                            <a href="mailto:privacy@villow.studio"> privacy@villow.studio </a>
                            <br />
                            E-mail address for other matters:{' '}
                            <a href="mailto:support@villow.studio"> support@villow.studio </a>
                        </p>
                    </div>
                    <div className={CnContent('textBlock')}>
                        <h2 className={CnContent('subtitle')}>Annex 1</h2>
                        <p className={CnContent('text')}>to the Privacy Policy as of February 15, 2021.</p>
                        <p className={CnContent('text')}>Version of Annex 1 effective as of February 15, 2021.</p>
                        <p className={CnContent('text')}>
                            Analytical platforms <br />
                            1. <b>Yandex.Metrica</b> counter (Privacy Policy:
                            https://yandex.ru/support/metrica/general/confidential-data.html?lang=ru).
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </ContentContainer>
    );
};
