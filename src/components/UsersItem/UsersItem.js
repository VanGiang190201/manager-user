import classNames from 'classnames/bind';
import { useState, useEffect, useReducer, useRef } from 'react';

import styles from './UsersItem.module.scss';
import Images from '~/components/Images';
import Buttons from '~/components/Buttons';
import { HomeIcon, UserGroupIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Popup from '~/components/Popup';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

//Reducer handle change data
//Init State
const initState = false;

//Actions
const ADD_ACTION = 'add';
const DELETE_ACTION = 'delete';

//Reducer
const reducer = (state, action) => {
    console.log('reducer running...');
    switch (action) {
        case ADD_ACTION:
            return !state;
        case DELETE_ACTION:
            return !state;
        default:
            throw new Error(`Invalid action`);
    }
};

function UsersItem({ isAdd = false }) {
    const popupRef = useRef();
    const [renderUsers, setRenderUsers] = useState([]);
    const [dataChange, dispatch] = useReducer(reducer, initState);

    //render list user
    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((data) => {
                setRenderUsers(data);
            });
    }, [dataChange]);

    //delete user in list user
    const handleDeleteUser = (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        fetch(`http://localhost:3000/users/${id}`, options)
            .then((response) => response.json())
            .then(() => {
                // call dispatch to handle change data when user was deleted
                dispatch(DELETE_ACTION);
            });
    };
    //Update user in the list user
    const handleShowPopupUpdate = (id) => {
        console.log(popupRef);
        const popupElement = popupRef.current;
        const cover = document.querySelector('#cover');
        const popupClass = cx('popup');
        const coverClass = cx('cover');
        popupElement.classList.add(popupClass);
        cover.classList.add(coverClass);
    };
    const handleClosePopupUpdate = () => {
        const popupElement = popupRef.current;
        const cover = document.querySelector('#cover');
        const popupClass = cx('popup');
        const coverClass = cx('cover');
        popupElement.classList.remove(popupClass);
        cover.classList.remove(coverClass);
    };

    // call dispatch to handle change data when new user was added
    useEffect(() => {
        dispatch(ADD_ACTION);
    }, [isAdd]);
    return (
        <>
            {renderUsers.map((user) => {
                return (
                    <div key={user.id} className={cx('user-item')}>
                        <div id="cover"></div>
                        <p className={cx('position')}>
                            <UserGroupIcon />
                            <strong>{user.department}</strong>
                        </p>
                        <div className={cx('avatar')}>
                            <Images className={cx('avatar-image')} src={user.avatar} alt={user.name} />
                        </div>
                        <div className={cx('information')}>
                            <h3 className={cx('name')}>{user.name}</h3>

                            <p className={cx('phone')}>{user.phone}</p>
                            <p className={cx('address')}>
                                <HomeIcon />
                                <span>{user.address}</span>
                            </p>
                        </div>
                        <div className={cx('button')}>
                            <Buttons outline className={cx('delete-btn')} onClick={() => handleDeleteUser(user.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Buttons>
                            <Buttons
                                outline
                                className={cx('update-btn')}
                                onClick={() => handleShowPopupUpdate(user.id)}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Buttons>
                        </div>
                        <Popup ref={popupRef}>
                            <p className={cx('popup-title')}>
                                <UserGroupIcon />
                                Update User
                            </p>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className={cx('icon-xmark')}
                                onClick={handleClosePopupUpdate}
                            />
                            <div className={cx('update-popup')}>
                                <div className={cx('avatar-user')}>
                                    <div className={cx('update-avatar')}>
                                        <img className={cx('update-image')} src="" alt="" id="avatar" />
                                    </div>
                                    <input
                                        type="file"
                                        className={cx('upload-avatars')}
                                        accept="image/png , image/jpeg"
                                    />
                                </div>
                                <div className={cx('upload-infor')}>
                                    <label htmlFor="name">Name User</label>
                                    <input type="text" className={cx('upload-name')} id="name" spellCheck={false} />
                                    <label htmlFor="age">Age User</label>
                                    <input type="text" className={cx('upload-age')} id="age" spellCheck={false} />
                                    <label htmlFor="address">Address User</label>
                                    <input
                                        type="text"
                                        className={cx('upload-address')}
                                        id="address"
                                        spellCheck={false}
                                    />
                                    <label htmlFor="position">Position User</label>
                                    <input
                                        type="text"
                                        className={cx('upload-position')}
                                        id="position"
                                        spellCheck={false}
                                    />
                                    <label htmlFor="phone">Number Phone User</label>
                                    <input type="text" className={cx('upload-phone')} id="phone" spellCheck={false} />
                                </div>
                            </div>
                            <Buttons primary className={cx('confirm-btn')}>
                                <FontAwesomeIcon icon={faPenToSquare} className={cx('icon-update')} />
                            </Buttons>
                        </Popup>
                    </div>
                );
            })}
        </>
    );
}

export default UsersItem;
