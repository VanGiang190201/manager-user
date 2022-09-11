import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBoxArchive, faCircle, faCube, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './ProfileUserItem.module.scss';
import Image from '~/components/Images';
import LineChart from '~/components/LineChart';

const cx = classNames.bind(styles);
function ProfileUserItem({ id }) {
    const [userInformation, setUserInformation] = useState({});

    // Active tab
    const tabs = document.querySelectorAll(`.${cx('tab-item')}`);

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const activeTab = document.querySelector(`.${cx('tab-item')}.${cx('active')}`);
            if (activeTab) {
                activeTab.classList.remove(`${cx('active')}`);
            }
            tab.classList.add(`${cx('active')}`);
        });
    });

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUserInformation(data));
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-information')}>
                <div className={cx('avatar')}>
                    <Image className={cx('avatar-image')} src={userInformation.avatar} alt="" />
                </div>
                <div className={cx('information')}>
                    <h2 className={cx('name')}>{`My name is ${userInformation.name}`}</h2>
                    <p className={cx('age')}>{`I'm ${userInformation.age} years old`}</p>
                    <p className={cx('address')}>{`My home town is ${userInformation.address} province !!! `}</p>
                    <p className={cx('department')}>{`Now, I'm work as a ${userInformation.department}`}</p>
                    <p className={cx('phone')}>{`Contact me, Please call ${userInformation.phone} ###`}</p>
                </div>
            </div>
            <div className={cx('user-blog')}>
                <header className={cx('header')}>
                    <div
                        className={cx('tab-item', {
                            active: 'active',
                        })}
                    >
                        <FontAwesomeIcon icon={faBookOpen} className={cx('icon-item')} />
                        Overview
                    </div>
                    <div className={cx('tab-item')}>
                        <FontAwesomeIcon icon={faBoxArchive} className={cx('icon-item')} />
                        Repositories
                    </div>
                    <div className={cx('tab-item')}>
                        <FontAwesomeIcon icon={faCube} className={cx('icon-item')} />
                        Packages
                    </div>
                    <div className={cx('tab-item')}>
                        <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                        Star
                    </div>
                </header>
                <section className={cx('section')}>
                    <p className={cx('repositories-title')}>Popular Repositories</p>
                    <div className={cx('popular-repositories')}>
                        {userInformation.repositories
                            ? userInformation.repositories.map((repository, index) => (
                                  <div className={cx('repositories-item')} key={index}>
                                      <p className={cx('repositories-name')}>{repository.repositories_name}</p>
                                      <p className={cx('repositories-type')}>
                                          <FontAwesomeIcon icon={faCircle} className={cx('icon-repositories-type')} />
                                          {repository.repositories_type}
                                      </p>
                                      <p className={cx('repositories-star')}>
                                          <FontAwesomeIcon icon={faStar} />
                                          {repository.repositories_star}
                                      </p>
                                  </div>
                              ))
                            : 'No Repositories'}
                    </div>
                    <p className={cx('repositories-active')}>Actives in the last year</p>
                    <div className={cx('line-chart')}>
                        <LineChart />
                    </div>
                </section>
            </div>
        </div>
    );
}

ProfileUserItem.propTypes = {
    id: PropTypes.number.isRequired,
};
export default ProfileUserItem;
