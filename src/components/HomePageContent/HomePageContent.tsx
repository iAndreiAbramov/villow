import { Anchor } from 'constants/Anchor';
import { QueryParam } from 'constants/QueryParam';

import React, { useContext, useLayoutEffect } from 'react';
import { cn } from '@bem-react/classname';
import { RefContext } from 'App';
import { motion } from 'framer-motion';
import { useQuery } from 'hooks/useQuery';

import './HomePageContent.scss';

const CnContentArticle = cn('contentArticle');

export const HomePageContent: React.FC = () => {
    const query = useQuery();
    const { aboutRef, remoteRef } = useContext(RefContext);

    const anchor = query.get(QueryParam.Anchor);

    useLayoutEffect(() => {
        if (anchor === Anchor.About) {
            aboutRef?.current?.scrollIntoView({ block: 'center' });
        }
        if (anchor === Anchor.Remote) {
            remoteRef?.current?.scrollIntoView({ block: 'center' });
        }
    }, [anchor, aboutRef, remoteRef]);

    return (
        <div className="homeContent">
            <motion.article
                className={`${CnContentArticle()}`}
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.9,
                }}
                viewport={{
                    once: true,
                }}
            >
                <div className="container">
                    <h2 className={CnContentArticle('title')} ref={aboutRef}>
                        About us?
                    </h2>
                    <h3 className={CnContentArticle('subtitle')}>
                        We are an emerging power in the IT industry
                    </h3>
                    <p className={CnContentArticle('textItem')}>
                        We are the team of professionals with over 10 years of experience in
                        technical problem-solving, identifying points of growth, workflow
                        optimization, product analytics and developing high-performing applications.
                        In 2020, we have teamed up to create unique functional and useful products.
                        We are truly passionate about what we do. We appreciate each user and always
                        listen to the views from the feedback we receive as the final product should
                        be really user-friendly.
                    </p>
                    <p className={CnContentArticle('textItem')}>
                        By joining our company, you get the opportunity to work from the beginning,
                        to influence on the product and its performance, create new philosophy and
                        delight users all around the world. We respect every member of our team and
                        we strive to work not for speed or for the sake of quantity, our goals are
                        really good quality and perfect results.
                    </p>
                </div>
            </motion.article>
            <motion.article
                className={CnContentArticle()}
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.9,
                }}
                viewport={{
                    once: true,
                }}
            >
                <div className="container">
                    <h2 className={CnContentArticle('title')} ref={remoteRef}>
                        Remote work
                    </h2>
                    <div className={CnContentArticle('textWrapper')}>
                        <p className={CnContentArticle('textItem')}>
                            Our company provides the opportunity to work remotely.
                        </p>
                        <div className={CnContentArticle('contactsItem')}>
                            <a
                                className={CnContentArticle('link')}
                                href="mailto:jobs@villow.studio"
                            >
                                jobs@villow.studio
                            </a>
                            <span className={CnContentArticle('caption')}>
                                Want to join our team?
                            </span>
                        </div>
                    </div>
                    <div className={CnContentArticle('textWrapper')}>
                        <p className={CnContentArticle('textItem')} />
                        <div className={CnContentArticle('contactsItem')}>
                            <a
                                className={CnContentArticle('link')}
                                href="mailto:partners@villow.studio"
                            >
                                partners@villow.studio
                            </a>
                            <span className={CnContentArticle('caption')}>
                                Collaboration and partnership
                            </span>
                        </div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
};
