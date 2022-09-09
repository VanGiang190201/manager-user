import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBoxArchive, faCircle, faCube, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './ProfileUserItem.module.scss';
import Image from '~/components/Images';

const cx = classNames.bind(styles);
function ProfileUserItem({ id }) {
    const [userInformation, setUserInformation] = useState([]);
    console.log(userInformation);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUserInformation(data));
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-information')}>
                <div className={cx('avatar')}>
                    <Image
                        className={cx('avatar-image')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663152791024641.jpeg?x-expires=1662908400&x-signature=1j5WbW3UoDHB8Zps%2FOGK10jsvUs%3D"
                        alt=""
                    />
                </div>
                <div className={cx('information')}>
                    <h2 className={cx('name')}>My name is Ngô Văn Giang</h2>
                    <p className={cx('age')}> I'm 21 years old</p>
                    <p className={cx('address')}>My home town is Thanh Hóa province !!! </p>
                    <p className={cx('department')}>Now, I'm work as a Front-End Developer</p>
                    <p className={cx('phone')}>Contact me, Please call 0868351902 ###</p>
                </div>
            </div>
            <div className={cx('user-blog')}>
                <header className={cx('header')}>
                    <div className={cx('tab-item')}>
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
                        <div className={cx('repositories-item')}>
                            <p className={cx('repositories-name')}>Manager User</p>
                            <p className={cx('repositories-type')}>
                                <FontAwesomeIcon icon={faCircle} className={cx('icon-repositories-type')} />
                                JavaScript
                            </p>
                            <p className={cx('repositories-star')}>
                                <FontAwesomeIcon icon={faStar} />
                                20,0k
                            </p>
                        </div>
                        <div className={cx('repositories-item')}>
                            <p className={cx('repositories-name')}>Manager User</p>
                            <p className={cx('repositories-type')}>
                                <FontAwesomeIcon icon={faCircle} className={cx('icon-repositories-type')} />
                                JavaScript
                            </p>
                            <p className={cx('repositories-star')}>
                                <FontAwesomeIcon icon={faStar} />
                                20,0k
                            </p>
                        </div>
                        <div className={cx('repositories-item')}>
                            <p className={cx('repositories-name')}>Manager User</p>
                            <p className={cx('repositories-type')}>
                                <FontAwesomeIcon icon={faCircle} className={cx('icon-repositories-type')} />
                                JavaScript
                            </p>
                            <p className={cx('repositories-star')}>
                                <FontAwesomeIcon icon={faStar} />
                                20,0k
                            </p>
                        </div>
                        <div className={cx('repositories-item')}>
                            <p className={cx('repositories-name')}>Manager User</p>
                            <p className={cx('repositories-type')}>
                                <FontAwesomeIcon icon={faCircle} className={cx('icon-repositories-type')} />
                                JavaScript
                            </p>
                            <p className={cx('repositories-star')}>
                                <FontAwesomeIcon icon={faStar} />
                                20,0k
                            </p>
                        </div>
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
