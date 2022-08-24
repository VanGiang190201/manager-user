import classNames from 'classnames/bind';

import styles from './Fitter.module.scss';

const cx = classNames.bind(styles);
function Fitter() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Sort</p>
            <select className={cx('name')}>
                <option>Name Alphabet</option>
                <option>A to Z</option>
                <option>Z to A</option>
            </select>
            <select className={cx('age')}>
                <option>Age User</option>
                <option>Young to Old</option>
                <option>Old to Young</option>
            </select>
            <select className={cx('select')}>
                <option>Range Salary</option>
                <option>Low to Up</option>
                <option>ZUp to Low</option>
            </select>
        </div>
    );
}

export default Fitter;
