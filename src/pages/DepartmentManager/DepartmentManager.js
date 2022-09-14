import classNames from 'classnames/bind';

import styles from './DepartmentManager.module.scss';
import DepartmentItems from '~/components/DepartmentItems';
import Fitter from '~/components/Fitter';

const cx = classNames.bind(styles);
function DepartmentManger() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Fitter />
            </div>
            <div className={cx('body')}>
                <DepartmentItems />
            </div>
        </div>
    );
}

export default DepartmentManger;
