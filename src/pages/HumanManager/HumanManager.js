import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

import styles from './HumanManager.module.scss';
import UsersItem from '~/components/UsersItem';
import Buttons from '~/components/Buttons';
import Fitter from '~/components/Fitter';
import Popup from '~/components/Popup';

const cx = classNames.bind(styles);
function HumanManger() {
    const popupRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Fitter />
                <Buttons primary className={cx('add-btn')}>
                    Add
                    <FontAwesomeIcon icon={faPlus} className={cx('icon-plus')} />
                </Buttons>
                <Popup className={cx('popup')} ref={popupRef}>
                    Hidden
                </Popup>
            </div>
            <div className={cx('body')}>
                <UsersItem />
            </div>
        </div>
    );
}

export default HumanManger;
