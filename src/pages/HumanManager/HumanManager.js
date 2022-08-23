import classNames from 'classnames/bind';

import styles from './HumanManager.module.scss';
import UsersItem from '~/components/UsersItem';

const cx = classNames.bind(styles);
function HumanManger() {
    return (
        <div className={cx('wrapper')}>
            <UsersItem />
        </div>
    );
}

export default HumanManger;
