import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
function Modal({ isOpen = false, children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')} />
            <div className={cx('body')}>{children}</div>
        </div>
    );
}

export default Modal;
