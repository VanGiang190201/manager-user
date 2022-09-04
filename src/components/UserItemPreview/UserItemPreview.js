import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './UserItemPreview.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);
function UserItemPreview({ data = {} }) {
    return (
        <Link to={`@${data.name}`} className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Images className={cx('avatar-image')} src={data.avatar} alt={data.name} />
            </div>
            <div className={cx('information')}>
                <p className={cx('name')}>{data.name}</p>
                <p className={cx('department')}>{data.department}</p>
            </div>
        </Link>
    );
}
UserItemPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default UserItemPreview;
