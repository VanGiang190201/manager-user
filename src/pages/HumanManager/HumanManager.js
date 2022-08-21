import classNames from 'classnames/bind';

import styles from './HumanManager.module.scss';
import UsersItem from '~/components/UsersItem';

const cx = classNames.bind(styles);
function HumanManger() {
    return (
        <table className={cx('user-list')}>
            <thead>
                <tr className={cx('header')}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <UsersItem />
            </tbody>
        </table>
    );
}

export default HumanManger;
