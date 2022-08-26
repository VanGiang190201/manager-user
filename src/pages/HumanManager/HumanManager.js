import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

import styles from './HumanManager.module.scss';
import UsersItem from '~/components/UsersItem';
import Buttons from '~/components/Buttons';
import Fitter from '~/components/Fitter';
import Popup from '~/components/Popup';
import { UserGroupIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function HumanManger() {
    const popupRef = useRef();
    const [isAdd, setIsAdd] = useState(false);
    const handleShowPopup = () => {
        const popupElement = popupRef.current;
        const cover = document.querySelector('#cover');
        const popupClass = cx('popup');
        const coverClass = cx('cover');
        popupElement.classList.add(popupClass);
        cover.classList.add(coverClass);
    };
    const handleClosePopup = () => {
        const popupElement = popupRef.current;
        const cover = document.querySelector('#cover');
        const popupClass = cx('popup');
        const coverClass = cx('cover');
        popupElement.classList.remove(popupClass);
        cover.classList.remove(coverClass);
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

    const handleAddUser = () => {
        const information = document.querySelectorAll('input[type="text"]');
        const avatar = document.querySelector('input[type="file').files[0];
        let user = {
            name: information[0].value,
            age: information[1].value,
            avatar: `images/${avatar.name}`,
            address: information[2].value,
            department: information[3].value,
            phone: information[4].value,
        };

        var option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user),
        };
        fetch(`http://localhost:3000/users`, option)
            .then((response) => response.json())
            .then(() => {
                setIsAdd(!isAdd);
                handleClosePopup();
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div id="cover"></div>
            <div className={cx('header')}>
                <Fitter />
                <Buttons primary className={cx('show-btn')} onClick={handleShowPopup}>
                    Add
                    <FontAwesomeIcon icon={faPlus} className={cx('icon-plus')} />
                </Buttons>
                <Popup ref={popupRef}>
                    <p className={cx('popup-title')}>
                        <UserGroupIcon />
                        New User
                    </p>
                    <FontAwesomeIcon icon={faXmark} className={cx('icon-xmark')} onClick={handleClosePopup} />
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
                            <label htmlFor="phone">Number Phone User</label>
                            <input type="text" className={cx('upload-phone')} id="phone" spellCheck={false} />
                        </div>
                    </div>
                    <Buttons primary className={cx('add-btn')} onClick={handleAddUser}>
                        <FontAwesomeIcon icon={faPlus} className={cx('icon-plus')} />
                    </Buttons>
                </Popup>
            </div>
            <div className={cx('body')}>
                <UsersItem isAdd={isAdd} />
            </div>
        </div>
    );
}

export default HumanManger;
