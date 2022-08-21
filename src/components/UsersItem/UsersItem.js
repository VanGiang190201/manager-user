import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './UsersItem.module.scss';
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
            {renderUsers.map((user, index) => {
                return (
                    <tr key={index} className={cx('user-item')}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        <td>{user.department}</td>
                        <td>{user.phone}</td>
                    </tr>
                );
            })}
        </>
    );
}

export default UsersItem;
