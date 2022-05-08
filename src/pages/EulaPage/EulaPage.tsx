import { AppRoute } from 'constants/AppRoute';
import { HeaderNavItems } from 'constants/nav-items';

import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { ContentContainer } from 'containers/ContentContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { MainContainer } from 'containers/MainContainer';
import { ReactComponent as Logo } from 'icons/logo.svg';

import { HeaderNav } from 'components/HeaderNav';

const CnContent = cn('content');

export const EulaPage: React.FC = () => {
    return (
        <>
            <HeaderContainer customClassName="header-container_black">
                <header className="header container">
                    <Link to={AppRoute.Home()}>
                        <Logo className="header-logo" />
                    </Link>
                    <HeaderNav items={HeaderNavItems} />
                </header>
            </HeaderContainer>
            <MainContainer>
                <ContentContainer>
                    <div className="container">
                        <div className={CnContent()}>
                            <div className={CnContent('textBlock')}>
                                <h1 className={CnContent('title')}>End User License Agreement</h1>
                                <div className={CnContent('text')}>Version No. 1 dated 30.04.2021</div>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <div className={CnContent('text')}>
                                    In this license agreement (the &ldquo;Agreement&ldquo;), capitalized terms mean:
                                </div>
                                <p className={CnContent('text')}>
                                    <b>Application</b> - any application that belongs to the Right Holder. The list of
                                    Applications is available on the Right Holder&apos;s website
                                    <a href="https://villow.studio/"> https://villow.studio/ </a>
                                </p>
                                <p className={CnContent('text')}>
                                    <b>User</b> - he person who uses the Application.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>App Store</b> - Apple Platform (owned by Apple, Inc.), through which the User may
                                    access or install the Application on his or her Device.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Device</b> - authorized smartphone, tablet, personal computer or other device
                                    that the User uses legally.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Subscription</b> - the amount of rights granted to the User for a fee.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Fee</b> - the price of the Subscription for a certain period.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Card</b> - a bank card, the details of which are specified by the User in the
                                    Account for purchases in the App Store.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Account</b> - User&apos;s App Store account, which is required to access the
                                    functionality of the Application.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Content</b> - text, links, software, audio, graphic or video images, tags, or
                                    other materials or information.
                                </p>
                                <p className={CnContent('text')}>
                                    <b>Policy</b> - The rules governing the collection, processing and protection of the
                                    User&apos;s personal data during the use of the Application. Available at:
                                    <a href="https://villow.studio/privacy"> https://villow.studio/privacy </a>
                                </p>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>1. General provisions</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        1.1. The Right Holder grants the User a non-exclusive, personal
                                        (non-transferable) license to download the Application onto the Device and use
                                        it in accordance with the terms of the Agreement.
                                    </li>
                                    <li>
                                        1.2. By downloading, accessing or using the Application, the User agrees to the
                                        terms of the Agreement and the Policy.
                                    </li>
                                    <li>
                                        1.3. If the User does not agree with any of the terms of the Agreement or the
                                        Policy, he shall not download or use the Application.
                                    </li>
                                    <li>
                                        1.4. By downloading the Application, the User confirms that in accordance with
                                        the laws of the country of his/her location the age of the User allows him/her
                                        to use the Application under the terms of the Agreement and the Policy. If the
                                        User&apos;s age does not allow him/her to accept the terms of the Agreement and
                                        the Policy, he/she guarantees that the legal representative has read and agrees
                                        with the Agreement and the Policy and allows to use the Application.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>2. Subscription</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        2.1. The Right Holder has the right to provide access to the Application or its
                                        individual functionality via Subscription.
                                    </li>
                                    <li>
                                        2.2. The Right Holder is entitled to provide a trial period of the functionality
                                        available under the Subscription for the period specified in the Application.
                                    </li>
                                    <li>2.3. Subscription period depends on the Subscription Fee paid by the User.</li>
                                    <li>
                                        2.4. The Fee is listed in the Application. The Fee does not include possible
                                        commissions of payment providers.
                                    </li>
                                    <li>
                                        2.5. The Right Holder has the right at its own discretion and unilaterally to
                                        set discounts on the Fee, to change it, and the fee paid for the Subscription is
                                        not subject to change. The Right Holder notifies about changes in the Fee by
                                        posting information in the Application.
                                    </li>
                                    <li>
                                        2.6. If the App Store has returned the payment for the Subscription to the User,
                                        the Right Holder shall block access to the functionality under the Subscription.
                                    </li>
                                    <li>
                                        2.7. Information about the activated Fee and the number of remaining days of use
                                        is contained in the Account.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>3. Payments</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        3.1. The Fee selected by the User is debited from the Card when the User
                                        confirms the purchase, and then automatically.
                                    </li>
                                    <li>
                                        3.2. Subscription renewal Fees shall be charged from the Card until the end of
                                        the current Subscription period or at the end of the Subscription period,
                                        depending on the App Store approach regarding the original Subscription Fee.
                                    </li>
                                    <li>
                                        3.3. User may manage Subscriptions and disable their automatic renewal by means
                                        of the Account.
                                    </li>
                                    <li>
                                        3.3.1. The User has the right to cancel Subscriptions during the trial period.
                                        If the User fails to cancel the Subscription before the end of the trial period
                                        within the period set by the App Store, the payment for the Subscription will be
                                        charged from the Card.
                                    </li>
                                    <li>
                                        3.3.2. If the User cancels a Subscription, the cancellation shall be effective
                                        after the end of the last day of the Subscription period. If the User has not
                                        canceled the Subscription for the next period, the Fee will be charged from the
                                        Card.
                                    </li>
                                    <li>
                                        3.4. User&apos;s payment for the Fee shall be processed through the App Store
                                        interface.
                                    </li>
                                    <li>
                                        3.5. If the Card is not attached to the Account, its details are invalid or
                                        there are not enough funds to pay for the Subscription, the Right Holder does
                                        not provide access to the Subscription.
                                    </li>
                                    <li>3.6. No refunds shall be made for the paid but unused Subscription period.</li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>4. Restrictions</h2>
                                <ol className={CnContent('text')}>
                                    <li>4.1. The User shall not:</li>
                                    <li>
                                        4.1.1. sell, distribute, sublicense, assign, or provide simultaneous access on
                                        multiple Devices, unless expressly permitted in a particular Application by the
                                        Right Holder and specified in the App Store.
                                    </li>
                                    <li>4.1.2. use the Application in ways not stipulated by the Agreement;</li>
                                    <li>4.1.3. try to evade the technical limitations set by the Application;</li>
                                    <li>
                                        4.1.4. use third-party programs or other means to improve/automate the features
                                        of the Application;
                                    </li>
                                    <li>4.1.5. use the Application for illegal activities;</li>
                                    <li>
                                        4.1.6. decompile, disassemble, reverse engineer, or create derivative works from
                                        the Application or parts thereof.
                                    </li>
                                    <li>
                                        4.2. The User can access the Application from Devices with certain
                                        characteristics specified in the description of the Application.
                                    </li>
                                    <li>
                                        4.3. The Application may contain restrictions on the number of available
                                        languages.
                                    </li>
                                    <li>
                                        4.4. The Right Holder may restrict the use of certain features of the
                                        Application for all or certain Users.
                                    </li>
                                    <li>
                                        4.5. The Application or certain functionality may not be available to the User
                                        at certain times or in certain territories, including for technical reasons.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>5. Liability</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        5.1. The Application is provided &ldquo;as is&ldquo;. Right Holder does not
                                        guarantee that the Application meets the User&apos;s expectations, and is be
                                        provided continuously, quickly, reliably and error-free.
                                    </li>
                                    <li>5.2. The User carries the responsibility for:</li>
                                    <li>
                                        5.2.1. relevance, reliability, absence of third-party claims in relation to the
                                        provided Content;
                                    </li>
                                    <li>
                                        5.2.2. compliance with the laws of the country of location when using the
                                        Application. The User shall comply with the restrictions on the use of the
                                        Application, which are imposed on it by the law of the country of its location.
                                    </li>
                                    <li>5.3. Right holder shall not be liable for:</li>
                                    <li>
                                        5.3.1. specialized resources and quality of channels of public communication
                                        networks, through which the access to the Application is provided, as well as
                                        caused by interruptions in the provision of services by contractors;
                                    </li>
                                    <li>
                                        5.3.2. breakdowns or other malfunctions of the Device, which occurred during the
                                        use of the Application;
                                    </li>
                                    <li>
                                        5.3.3. consequences caused by the loss or disclosure by the User of his data
                                        required to access the Application;
                                    </li>
                                    <li>
                                        5.3.4. errors and/or violations related to the use of the Application and
                                        arising because of unlawful actions of third parties;
                                    </li>
                                    <li>
                                        5.3.5. failures and interruptions in the operation of the Application caused by
                                        force majeure. Such circumstances must be confirmed by certificates from the
                                        competent authorities not later than ten (10) working days after their
                                        commencement;
                                    </li>
                                    <li>
                                        5.3.6. failures and interruptions in the operation of the Application caused by
                                        actions of government authorities, including law enforcement authorities,
                                        relating to seizure and/or confiscation, or otherwise preventing access to the
                                        servers of contractors hosting the Application;
                                    </li>
                                    <li>5.3.7. actions and payment terms set forth in the App Store.</li>
                                    <li>
                                        5.4. The liability of the Right Holder shall not exceed the amount of payment
                                        transferred by the User.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>5. Liability</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        5.1. The Application is provided &ldquo;as is&ldquo;. Right Holder does not
                                        guarantee that the Application meets the User&apos;s expectations, and is be
                                        provided continuously, quickly, reliably and error-free.
                                    </li>
                                    <li>5.2. The User carries the responsibility for:</li>
                                    <li>
                                        5.2.1. relevance, reliability, absence of third-party claims in relation to the
                                        provided Content;
                                    </li>
                                    <li>
                                        5.2.2. compliance with the laws of the country of location when using the
                                        Application. The User shall comply with the restrictions on the use of the
                                        Application, which are imposed on it by the law of the country of its location.
                                    </li>
                                    <li>5.3. Right holder shall not be liable for:</li>
                                    <li>
                                        5.3.1. specialized resources and quality of channels of public communication
                                        networks, through which the access to the Application is provided, as well as
                                        caused by interruptions in the provision of services by contractors;
                                    </li>
                                    <li>
                                        5.3.2. breakdowns or other malfunctions of the Device, which occurred during the
                                        use of the Application;
                                    </li>
                                    <li>
                                        5.3.3. consequences caused by the loss or disclosure by the User of his data
                                        required to access the Application;
                                    </li>
                                    <li>
                                        5.3.4. errors and/or violations related to the use of the Application and
                                        arising because of unlawful actions of third parties;
                                    </li>
                                    <li>
                                        5.3.5. failures and interruptions in the operation of the Application caused by
                                        force majeure. Such circumstances must be confirmed by certificates from the
                                        competent authorities not later than ten (10) working days after their
                                        commencement;
                                    </li>
                                    <li>
                                        5.3.6. failures and interruptions in the operation of the Application caused by
                                        actions of government authorities, including law enforcement authorities,
                                        relating to seizure and/or confiscation, or otherwise preventing access to the
                                        servers of contractors hosting the Application;
                                    </li>
                                    <li>5.3.7. actions and payment terms set forth in the App Store.</li>
                                    <li>
                                        5.4. The liability of the Right Holder shall not exceed the amount of payment
                                        transferred by the User.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>6. Disputes</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        6.1. The Parties shall comply with the pre-trial (claim) procedure for dispute
                                        resolution.
                                    </li>
                                    <li>
                                        6.2. The deadline for replying to the claim is 10 (ten) business days from the
                                        date of its receipt by the recipient Party.
                                    </li>
                                    <li>
                                        6.3. If the dispute cannot be resolved through the claim procedure, the dispute
                                        shall be referred to court.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>7. Updates</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        7.1. The Right Holder shall not be obliged to provide the User with new versions
                                        of the Application.
                                    </li>
                                    <li>
                                        7.2. The Right Holder shall be entitled to add or remove any features of the
                                        Application at its sole discretion with or without prior notice.
                                    </li>
                                    <li>
                                        7.3. The Right Holder is entitled to send a notice to the User about the need to
                                        update the Application due to the availability of a new version or to update the
                                        Application automatically.
                                    </li>
                                    <li>
                                        7.4. The Right Holder is entitled not to support previous versions of the
                                        Application when updates or subsequent versions of the Application appear.
                                    </li>
                                    <li>
                                        7.5. The Right Holder is entitled to update the Agreement at any time. The new
                                        version of the Agreement comes into force from the moment of its posting at:
                                        <a href="https://villow.studio/terms">https://villow.studio/terms</a>.
                                    </li>
                                    <li>7.6. The User shall check the Agreement for changes on his/her own.</li>
                                    <li>
                                        7.7. The User agrees to the changes in the Agreement if he/she continues to use
                                        the Application.
                                    </li>
                                </ol>
                            </div>
                            <div className={CnContent('textBlock')}>
                                <h2 className={CnContent('subtitle')}>8. Final provisions</h2>
                                <ol className={CnContent('text')}>
                                    <li>
                                        8.1. The Right Holder shall process the User&apos;s personal data in order to
                                        perform the Agreement on the basis of the Policy.
                                    </li>
                                    <li>
                                        8.2. The Right Holder has the right to send notices to the User under the
                                        Agreement using the contact information specified by the User or to place them
                                        in the Application.
                                    </li>
                                    <li>
                                        8.3. The invalidity or unenforceability of one or more provisions of the
                                        Agreement, for whatever reasons, shall not affect the validity or enforceability
                                        of the remaining provisions of the Agreement.
                                    </li>
                                    <li>
                                        8.4. The current version of this Agreement is available to the User at:
                                        <a href="https://villow.studio/terms">https://villow.studio/terms</a>.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </MainContainer>
        </>
    );
};
