import classNames from 'classnames/bind';

import styles from './DepartmentItems.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);
function DepartmentItems() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('department-item')}>
                <div className={cx('department-name')}>Development Team</div>
                <div className={cx('department-thunk')}>
                    <Images src="./images/dev_department.jpg" alt="dev_department" className={cx('image')} />
                </div>

                <div className={cx('quantity-employee')}>
                    <p className={cx('quantity')}>100</p>
                    <p className={cx('description')}>Employees Of Department</p>
                </div>
            </div>
        </div>
    );
}

export default DepartmentItems;
