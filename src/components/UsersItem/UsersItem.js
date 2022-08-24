import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './UsersItem.module.scss';
import Images from '~/components/Images';
import Buttons from '~/components/Buttons';
import { HomeIcon, UserGroupIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function UsersItem() {
    const [renderUsers, setRenderUsers] = useState([]);
    const [dataChange, setDataChange] = useState(false);
    const handleDelete = (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        fetch(`http://localhost:3000/users/${id}`, options)
            .then((response) => response.json())
            .then((data) => {
                setDataChange(!dataChange);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((data) => {
                setRenderUsers(data);
            });
    }, [dataChange]);

    return (
        <>
            {renderUsers.map((user) => {
                return (
                    <div key={user.id} className={cx('user-item')}>
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
                            <Buttons outline className={cx('delete-btn')} onClick={() => handleDelete(user.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Buttons>
                            <Buttons outline className={cx('update-btn')}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Buttons>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default UsersItem;
