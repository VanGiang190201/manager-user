import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Search from '~/lauouts/components/Search';
import styles from './Header.module.scss';
import Image from '~/components/Images';

const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[200, 0]} content="Email" placement="bottom" offset={[0, 10]}>
                                <button className={cx('email-icon')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <></>
                    )}

                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/bde0d542ad0c559ff67015e13369e03c.jpeg?x-expires=1660993200&x-signature=9R0UzJu%2F1mvnvIOvI2esH5hrKK0%3D"
                            alt="Giang"
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
