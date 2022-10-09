import React from 'react';
import TeamInfoArray from './TeamInfoArray';
// import PropTypes from 'prop-types';

import s from './contactsPage.module.scss';
import Footer from 'components/Footer';

const ContactsPage = () => {
    return (
        <div className={s.contacts}>
            <p className={s.contacts__title}>SHCHEKAVYTSIA TEAM</p>
            <ul className={s.contacts__cardlist}>
                {TeamInfoArray.map(el => (
                    <li className={s.contacts__card} key={el.id}>
                        <img
                            className={s.contacts__img}
                            src={el.avatar}
                            alt=""
                        />
                        <p className={s.contacts__name}>{el.name}</p>
                        <p className={s.contacts__position}>{el.position}</p>
                        <p className={s.contacts__mail}>
                            <a
                                className={s.contacts__link}
                                href={`${el.gitUrl}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {el.gitUrl}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

// ContactsPage.propTypes = {};

export default ContactsPage;
