import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './UsersItem.module.scss';
import Images from '~/components/Images';
import { HomeIcon, UserGroupIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
function UsersItem() {
    const [renderUsers, setRenderUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((data) => {
                setRenderUsers(data);
            });
    }, []);
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
                    </div>
                );
            })}
        </>
    );
}

export default UsersItem;
