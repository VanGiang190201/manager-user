import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './ProfileUserItem.module.scss';

const cx = classNames.bind(styles);
function ProfileUserItem({ id }) {
    const [userInformation, setUserInformation] = useState([]);
    console.log(userInformation);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUserInformation(data));
    }, [id]);

    return <div className={cx('wrapper')}></div>;
}

ProfileUserItem.propTypes = {
    id: PropTypes.number.isRequired,
};
export default ProfileUserItem;
