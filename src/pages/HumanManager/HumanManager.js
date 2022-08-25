import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

import styles from './HumanManager.module.scss';
import UsersItem from '~/components/UsersItem';
import Buttons from '~/components/Buttons';
import Fitter from '~/components/Fitter';
import Popup from '~/components/Popup';
import { UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function HumanManger() {
    const popupRef = useRef();

    const handleShowPopup = () => {
        const popupElement = popupRef.current;
        const popupClass = cx('popup');
        popupElement.classList.add(popupClass);
    };

    const handleDisplayImage = () => {
        const preview = document.querySelector('#avatar');
        const image = document.querySelector('input[type="file').files[0];
        const reader = new FileReader();
        reader.addEventListener(
            'load',
            () => {
                // convert image file to base64 string
                preview.src = reader.result;
            },
            false,
        );
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Fitter />
                <Buttons primary className={cx('add-btn')} onClick={handleShowPopup}>
                    Add
                    <FontAwesomeIcon icon={faPlus} className={cx('icon-plus')} />
                </Buttons>
                <Popup ref={popupRef}>
                    <p className={cx('popup-title')}>
                        <UserGroupIcon />
                        New User
                    </p>
                    <div className={cx('add-popup')}>
                        <div className={cx('avatar-user')}>
                            <div className={cx('avatar')}>
                                <img className={cx('image')} src="" alt="" id="avatar" />
                            </div>
                            <input
                                type="file"
                                className={cx('upload-avatars')}
                                accept="image/png , image/jpeg"
                                onChange={handleDisplayImage}
                            />
                        </div>
                        <div className={cx('upload-infor')}>
                            <label htmlFor="name">Name User</label>
                            <input type="text" className={cx('upload-name')} id="name" spellCheck={false} />
                            <label htmlFor="age">Age User</label>
                            <input type="text" className={cx('upload-age')} id="age" spellCheck={false} />
                            <label htmlFor="address">Address User</label>
                            <input type="text" className={cx('upload-address')} id="address" spellCheck={false} />
                            <label htmlFor="position">Position User</label>
                            <input type="text" className={cx('upload-position')} id="position" spellCheck={false} />
                        </div>
                    </div>
                </Popup>
            </div>
            <div className={cx('body')}>
                <UsersItem />
            </div>
        </div>
    );
}

export default HumanManger;
