import classNames from 'classnames/bind';
import { useState, useEffect, useReducer, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import styles from './UsersItem.module.scss';
import Images from '~/components/Images';
import Buttons from '~/components/Buttons';
import { HomeIcon, UserGroupIcon } from '~/components/Icons';
import Popup from '~/components/Popup';

const cx = classNames.bind(styles);

//Reducer handle change data
//Init State
const initState = false;

//Actions
const ADD_ACTION = 'add';
const DELETE_ACTION = 'delete';
const UPDATE_ACTION = 'update';

//Reducer
const reducer = (state, action) => {
    switch (action) {
        case ADD_ACTION:
            return !state;
        case DELETE_ACTION:
            return !state;
        case UPDATE_ACTION:
            return !state;
        default:
            throw new Error(`Invalid action`);
    }
};

function UsersItem({ isAdd = false }) {
    const popupRef = useRef();
    const userAvatar = useRef();

    const navigate = useNavigate();
    const [renderUsers, setRenderUsers] = useState([]);
    const [userUpdates, setUserUpdates] = useState([]);
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
    const handleDisplayImage = () => {
        const preview = document.querySelector('#display-avatar');
        const image = document.querySelector('input[type="file"]').files[0];

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
    const handleShowPopupUpdate = (id) => {
        const popupElement = popupRef.current;
        const cover = document.querySelector('#cover');
        const popupClass = cx('popup');
        const coverClass = cx('cover');
        const noneEventClass = cx('event-none');
        const wrapper = document.querySelectorAll(`.${cx('wrapper')}`);
        Array.from(wrapper).forEach((item) => {
            item.classList.add(noneEventClass);
        });
        popupElement.classList.add(popupClass);
        cover.classList.add(coverClass);
        //At the same time, handle user with id

        const userSelect = renderUsers.filter((user) => user.id === id);
        setUserUpdates(userSelect);
        userAvatar.current = userSelect[0].avatar;
    };

    const handleUpdateUser = (id) => {
        const information = document.querySelectorAll('input[type="text"]');
        const avatar = document.querySelector('input[type="file"]');
        let user = Array.from(information).reduce((values, input) => {
            values[input.id] = input.value;
            values[avatar.id] = userAvatar.current;
            return values;
        }, {});

        var option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user),
        };

        fetch(`http://localhost:3000/users/${id}`, option)
            .then((response) => response.json())
            .then(() => {
                dispatch(UPDATE_ACTION);
                handleClosePopupUpdate();
            })
            .catch((error) => console.log(error));
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
                    <div className={cx('wrapper')} key={user.id}>
                        <div
                            className={cx('user-item')}
                            onClick={() =>
                                setTimeout(() => {
                                    navigate(`id=${user.id}`);
                                }, 500)
                            }
                        >
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
                        </div>
                        <Popup ref={popupRef}>
                            {userUpdates.map((userUpdate) => {
                                return (
                                    <div key={userUpdate.id}>
                                        <p className={cx('popup-title')}>
                                            <UserGroupIcon />
                                            User Update
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className={cx('icon-xmark')}
                                            onClick={handleClosePopupUpdate}
                                        />
                                        <div className={cx('update-popup')}>
                                            <div className={cx('avatar-user')}>
                                                <div className={cx('update-avatar')}>
                                                    <img
                                                        className={cx('update-image')}
                                                        src={userUpdate.avatar}
                                                        alt=""
                                                        id="display-avatar"
                                                    />
                                                </div>
                                                <input
                                                    type="file"
                                                    id="avatar"
                                                    className={cx('upload-avatars')}
                                                    onChange={handleDisplayImage}
                                                    accept="image/png , image/jpeg"
                                                />
                                            </div>
                                            <div className={cx('upload-infor')}>
                                                <label htmlFor="name">Name User</label>
                                                <input
                                                    type="text"
                                                    className={cx('upload-name')}
                                                    id="name"
                                                    spellCheck={false}
                                                    defaultValue={userUpdate.name}
                                                />
                                                <label htmlFor="age">Age User</label>
                                                <input
                                                    type="text"
                                                    className={cx('upload-age')}
                                                    id="age"
                                                    spellCheck={false}
                                                    defaultValue={userUpdate.age}
                                                />
                                                <label htmlFor="address">Address User</label>
                                                <input
                                                    type="text"
                                                    className={cx('upload-address')}
                                                    id="address"
                                                    spellCheck={false}
                                                    defaultValue={userUpdate.address}
                                                />
                                                <label htmlFor="department">Position User</label>
                                                <input
                                                    type="text"
                                                    className={cx('upload-position')}
                                                    id="department"
                                                    spellCheck={false}
                                                    defaultValue={userUpdate.department}
                                                />
                                                <label htmlFor="phone">Number Phone User</label>
                                                <input
                                                    type="text"
                                                    className={cx('upload-phone')}
                                                    id="phone"
                                                    spellCheck={false}
                                                    defaultValue={userUpdate.phone}
                                                />
                                            </div>
                                        </div>
                                        <Buttons
                                            primary
                                            className={cx('confirm-btn')}
                                            onClick={() => handleUpdateUser(userUpdate.id)}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} className={cx('icon-update')} />
                                        </Buttons>
                                    </div>
                                );
                            })}
                        </Popup>
                    </div>
                );
            })}
        </>
    );
}

export default UsersItem;
